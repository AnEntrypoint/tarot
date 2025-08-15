import json
import os
import re

# List of keys whose string values should always be ignored
EXCLUDED_KEYS = {
    "author", "source", "symbol", "element", "rulership", "exaltation",
    "quality", "ruler", "degrees", "season", "chakra", "metal", "day",
    "color", "tarot_suit", "card", "planet", "zodiac", "title", "url", "name"
}

# Regex to identify strings that are likely data points, not citable text.
# Each pattern is anchored with ^ and $ to ensure it matches the whole string.
DATA_LIKE_PATTERN = re.compile(
    r"(^[♈♉♊♋♌♍♎♏♐♑♒♓]$)|"          # Zodiac symbols
    r"(^[☉☽☿♀♂♃♄♅♆⇹♇△▽]$)|"        # Planet/element symbols (added North/South Node)
    r"(^[A-Z][a-z]+(\s[A-Z][a-z]+)*$)|"  # Proper names / Title Case strings
    r"(^\d{1,2}:\d{2}\s*(?:AM|PM)?$)|"    # Time format
    r"(^\d+-\d+.*)|"                    # Number ranges like "1-3 months"
    r"(^[\d\s\W,./()-]+$)|"              # Strings with only numbers and symbols
    r"(^\d+\s+to\s+\d+.*)|"              # "X to Y" phrases
    r"(^\d+\s*-\s*.*)|"                  # "X - ..." phrases
    r"(^\d+[/.]\d+.*)"                   # "1/4..." or "1.5..."
)

def is_citable(text, key=None):
    """
    Determines if a string is a piece of content that needs a citation based on a set of heuristics.
    """
    if not isinstance(text, str):
        return False

    text = text.strip()
    if not text:
        return False

    # Exclude if the key is in our exclusion list
    if key and key.lower() in EXCLUDED_KEYS:
        return False

    # Exclude if the string is too short or doesn't seem like a sentence
    if len(text.split()) < 3:
        return False

    # Exclude if it matches data-like patterns
    if DATA_LIKE_PATTERN.search(text):
        return False

    # Exclude if it doesn't contain at least one letter
    if not any(c.isalpha() for c in text):
        return False

    # Exclude if it looks like a filename
    if text.endswith('.json'):
        return False

    return True

def extract_strings_recursive(data, unique_strings, current_key=None):
    """
    Recursively traverses a JSON structure to extract all string values
    that are likely to be content needing citation.
    """
    if isinstance(data, dict):
        # Skip objects that are already in the citation format
        if "citation_key" in data and "text" in data:
            return

        for key, value in data.items():
            extract_strings_recursive(value, unique_strings, key)

    elif isinstance(data, list):
        for item in data:
            # Pass the parent key down to the list items for context
            extract_strings_recursive(item, unique_strings, current_key)

    elif isinstance(data, str):
        if is_citable(data, current_key):
            unique_strings.add(data)


def main():
    """
    Main function to read all data files, extract unique strings using improved
    heuristics, and write them to an output file.
    """
    data_dir = 'data'
    output_file = 'scripts/unique_strings.txt'
    unique_strings = set()

    # Get all JSON files in the data directory, excluding book_index.json
    files_to_process = [f for f in os.listdir(data_dir) if f.endswith('.json') and f != 'book_index.json']

    print("Note: Running script on current state of data files.")

    for filename in files_to_process:
        filepath = os.path.join(data_dir, filename)
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = json.load(f)
            extract_strings_recursive(content, unique_strings)
        except json.JSONDecodeError as e:
            print(f"Error decoding JSON from {filename}: {e}")
        except Exception as e:
            print(f"An error occurred while processing {filename}: {e}")

    # Write the unique strings to the output file
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            for s in sorted(list(unique_strings)):
                f.write(s + '\n')
        print(f"Successfully extracted {len(unique_strings)} unique strings to {output_file}")
    except Exception as e:
        print(f"An error occurred while writing to {output_file}: {e}")

if __name__ == '__main__':
    main()
