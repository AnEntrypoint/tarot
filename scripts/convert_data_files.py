import json
import os

def convert_data_recursive(data, citation_map):
    """
    Recursively traverses a data structure and replaces strings
    with the new citation format, based on the citation_map.
    """
    if isinstance(data, dict):
        # Handle dictionaries that are already in the citation format
        if "citation_key" in data and "text" in data:
            return data

        new_dict = {}
        for key, value in data.items():
            new_dict[key] = convert_data_recursive(value, citation_map)
        return new_dict

    elif isinstance(data, list):
        new_list = []
        for item in data:
            new_list.append(convert_data_recursive(item, citation_map))
        return new_list

    elif isinstance(data, str):
        # If the string is in our map, convert it
        if data in citation_map:
            citation_key = citation_map[data]
            # If we marked a string to be skipped, leave it as is
            if citation_key == "SKIPPED":
                return data
            else:
                return {
                    "citation_key": citation_key,
                    "text": data
                }
        else:
            # If not in the map, leave it as is
            return data

    else:
        # For non-string, non-collection types (int, bool, etc.), return as is
        return data

def main():
    """
    Main function to load the citation map and convert all data files.
    """
    citation_map_file = 'scripts/citation_map.json'
    data_dir = 'data'

    # Load the complete citation map
    try:
        with open(citation_map_file, 'r', encoding='utf-8') as f:
            citation_map = json.load(f)
    except FileNotFoundError:
        print(f"Error: {citation_map_file} not found. Please build the map first.")
        return

    # Get all JSON files in the data directory, excluding book_index.json
    files_to_process = [f for f in os.listdir(data_dir) if f.endswith('.json') and f != 'book_index.json']

    # It's safer to restore original files before running this script
    # to ensure idempotency. For now, we proceed on the current state.
    print(f"Starting conversion for {len(files_to_process)} data files...")

    for filename in files_to_process:
        filepath = os.path.join(data_dir, filename)
        try:
            # Read original content
            with open(filepath, 'r', encoding='utf-8') as f:
                original_content = json.load(f)

            # Convert the content
            converted_content = convert_data_recursive(original_content, citation_map)

            # Overwrite the file with the new content
            with open(filepath, 'w', encoding='utf-8') as f:
                json.dump(converted_content, f, indent=2)

            print(f"Successfully converted {filename}")

        except Exception as e:
            print(f"An error occurred while processing {filename}: {e}")

    print("\nAll data files have been converted.")

if __name__ == '__main__':
    main()
