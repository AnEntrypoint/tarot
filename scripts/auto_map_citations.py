import json
import os
import re

def generate_citation_key(author, source):
    """Generates a citation key from author and source."""
    # Sanitize author and source to create a valid key
    author_part = re.sub(r'[^a-zA-Z0-9]', '_', author)
    source_part = re.sub(r'[^a-zA-Z0-9]', '_', source)
    return f"{author_part}-{source_part}"

def find_source_recursive(data, text_to_find):
    """
    Recursively searches a dictionary for a 'quote' field matching the text
    and returns the sibling 'author' and 'source' if found.
    """
    if isinstance(data, dict):
        # Check if the current dictionary contains the quote and its source
        if data.get('quote') == text_to_find:
            author = data.get('author')
            source = data.get('source')
            if author and source:
                return author, source

        # Recurse into nested dictionaries
        for key, value in data.items():
            result = find_source_recursive(value, text_to_find)
            if result:
                return result

    elif isinstance(data, list):
        # Recurse into list items
        for item in data:
            result = find_source_recursive(item, text_to_find)
            if result:
                return result

    return None

def main():
    """
    Main function to automatically map strings with existing author/source info
    and separate the ones that need manual mapping.
    """
    unique_strings_file = 'scripts/unique_strings.txt'
    citation_map_file = 'scripts/citation_map.json'
    unmapped_strings_file = 'scripts/unmapped_strings.txt'
    data_dir = 'data'

    # Load unique strings
    try:
        with open(unique_strings_file, 'r', encoding='utf-8') as f:
            unique_strings = [line.strip() for line in f if line.strip()]
    except FileNotFoundError:
        print(f"Error: {unique_strings_file} not found. Please run create_citation_map.py first.")
        return

    # Load all original data to search for sources
    all_data = {}
    files_to_process = [f for f in os.listdir(data_dir) if f.endswith('.json') and f != 'book_index.json']
    for filename in files_to_process:
        filepath = os.path.join(data_dir, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            all_data[filename] = json.load(f)

    citation_map = {}
    unmapped_strings = []

    for text in unique_strings:
        found_source = False
        for filename, data in all_data.items():
            result = find_source_recursive(data, text)
            if result:
                author, source = result
                citation_key = generate_citation_key(author, source)
                citation_map[text] = citation_key
                found_source = True
                break

        if not found_source:
            unmapped_strings.append(text)

    # Save the automatically generated map
    with open(citation_map_file, 'w', encoding='utf-8') as f:
        json.dump(citation_map, f, indent=2)

    # Save the strings that need manual mapping
    with open(unmapped_strings_file, 'w', encoding='utf-8') as f:
        for s in sorted(unmapped_strings):
            f.write(s + '\n')

    print(f"Automatic mapping complete.")
    print(f"Mapped {len(citation_map)} strings to {citation_map_file}")
    print(f"{len(unmapped_strings)} strings need manual mapping and are listed in {unmapped_strings_file}")

if __name__ == '__main__':
    main()
