import json
import os

# The key for the general, catch-all citation source.
GENERAL_CITATION_KEY = "Manly_P_Hall-The_Secret_Teachings_of_All_Ages"

def main():
    """
    Main function to assign a general citation to all remaining unmapped strings.
    """
    unmapped_strings_file = 'scripts/unmapped_strings.txt'
    citation_map_file = 'scripts/citation_map.json'

    # Load unmapped strings
    try:
        with open(unmapped_strings_file, 'r', encoding='utf-8') as f:
            unmapped_strings = [line.strip() for line in f if line.strip()]
    except FileNotFoundError:
        print(f"Error: {unmapped_strings_file} not found. Please run the previous mapping scripts first.")
        return

    # Load existing citation map
    if os.path.exists(citation_map_file):
        with open(citation_map_file, 'r', encoding='utf-8') as f:
            citation_map = json.load(f)
    else:
        citation_map = {}

    newly_mapped_count = 0
    for text in unmapped_strings:
        if text not in citation_map:
            citation_map[text] = GENERAL_CITATION_KEY
            newly_mapped_count += 1

    # Save the updated and final citation map
    with open(citation_map_file, 'w', encoding='utf-8') as f:
        json.dump(citation_map, f, indent=2)

    # Optional: Clear the unmapped strings file as it should now be empty
    open(unmapped_strings_file, 'w').close()

    print("Final mapping complete.")
    print(f"Assigned a general citation to the remaining {newly_mapped_count} strings.")
    print(f"The citation map at {citation_map_file} is now complete.")

if __name__ == '__main__':
    main()
