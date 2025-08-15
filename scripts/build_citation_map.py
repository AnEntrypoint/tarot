import json
import os

def generate_citation_key(author, source):
    """Generates a citation key from author and source."""
    author_part = author.replace(' ', '_').replace('.', '')
    source_part = source.replace(' ', '_').replace('.', '')
    return f"{author_part}-{source_part}"

def find_source_for_string(text, all_data):
    """
    Searches through all the original data to find an author/source
    associated with a given text string (likely a quote).
    """
    for data in all_data.values():
        for section in data.values():
            if isinstance(section, dict):
                for item in section.values():
                    if isinstance(item, dict) and item.get('quote') == text:
                        author = item.get('author')
                        source = item.get('source')
                        if author and source:
                            return author, source
    return None, None

def main():
    """
    Main function to interactively build the citation map.
    """
    unique_strings_file = 'scripts/unique_strings.txt'
    citation_map_file = 'scripts/citation_map.json'
    data_dir = 'data'

    # Load unique strings
    try:
        with open(unique_strings_file, 'r', encoding='utf-8') as f:
            unique_strings = [line.strip() for line in f if line.strip()]
    except FileNotFoundError:
        print(f"Error: {unique_strings_file} not found. Please run create_citation_map.py first.")
        return

    # Load existing citation map or create a new one
    if os.path.exists(citation_map_file):
        with open(citation_map_file, 'r', encoding='utf-8') as f:
            citation_map = json.load(f)
    else:
        citation_map = {}

    # Load all original data to search for sources
    all_data = {}
    files_to_process = [f for f in os.listdir(data_dir) if f.endswith('.json') and f != 'book_index.json']
    for filename in files_to_process:
        filepath = os.path.join(data_dir, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            all_data[filename] = json.load(f)

    # Process strings
    try:
        for i, text in enumerate(unique_strings):
            if text in citation_map:
                continue

            print(f"\n--- String {i+1}/{len(unique_strings)} ---")
            print(f"Text: {text}")

            author, source = find_source_for_string(text, all_data)
            suggestion = None
            if author and source:
                suggestion = generate_citation_key(author, source)
                print(f"Suggested Key: {suggestion}")

            action = input("Enter citation key, (s)kip, (q)uit: ").strip()

            if action.lower() == 'q':
                break
            elif action.lower() == 's' or not action:
                citation_map[text] = "SKIPPED"
                print("Skipped.")
            else:
                citation_map[text] = action
                print(f"Mapped to: {action}")

    finally:
        # Save progress
        with open(citation_map_file, 'w', encoding='utf-8') as f:
            json.dump(citation_map, f, indent=2)
        print(f"\nProgress saved to {citation_map_file}")

if __name__ == '__main__':
    main()
