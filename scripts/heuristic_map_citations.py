import json
import os

# A map of keywords to citation keys. This can be expanded.
HEURISTIC_MAP = {
    # Broad Topics
    "tarot": "Rachel_Pollack-Seventy-Eight_Degrees_of_Wisdom",
    "astrology": "Liz_Greene-The_Astrology_of_Fate",
    "alchemy": "Dennis_William_Hauck-The_Emerald_Tablet_Alchemy_for_Personal_Transformation",
    "alchemical": "Dennis_William_Hauck-The_Emerald_Tablet_Alchemy_for_Personal_Transformation",
    "kabbalah": "Dion_Fortune-The_Mystical_Qabalah",
    "numerology": "Corinne_Heline-Sacred_Science_of_Numbers",
    "myth": "Joseph_Campbell-The_Hero_with_a_Thousand_Faces",
    "psychology": "Carl_Jung-Psychology_and_Alchemy",
    "dream": "Carl_Jung-Man_and_His_Symbols",

    # Specific Concepts
    "chakra": "Anodea_Judith-Wheels_of_Life",
    "kundalini": "Swami_Muktananda-Kundalini_The_Secret_of_Life",
    "hermetic": "The_Three_Initiates-The_Kybalion",
    "planet": "Robert_Hand-Planets_in_Transit_Life_Cycles_for_Living",
    "zodiac": "Dane_Rudhyar-The_Astrology_of_Personality",
    "color": "Faber_Birren-Color_Psychology_and_Color_Therapy",
    "gemstone": "Melody-Love_Is_In_The_Earth",
    "crystal": "Melody-Love_Is_In_The_Earth",
    "herb": "Scott_Cunningham-Cunninghams_Encyclopedia_of_Magical_Herbs",
    "plant": "Scott_Cunningham-Cunninghams_Encyclopedia_of_Magical_Herbs",
    "animal": "Ted_Andrews-Animal-Speak",

    # Actions / States
    "healing": "Barbara_Brennan-Hands_of_Light",
    "meditation": "Shakti_Gawain-Chakra_Meditation",
    "divination": "Mary_K_Greer-Tarot_for_Your_Self",
    "ritual": "Starhawk-The_Spiral_Dance",
    "symbol": "Carl_Jung-Man_and_His_Symbols"
}

def main():
    """
    Main function to automatically map strings based on keyword heuristics.
    """
    unmapped_strings_file = 'scripts/unmapped_strings.txt'
    citation_map_file = 'scripts/citation_map.json'

    # Load unmapped strings
    try:
        with open(unmapped_strings_file, 'r', encoding='utf-8') as f:
            unmapped_strings = [line.strip() for line in f if line.strip()]
    except FileNotFoundError:
        print(f"Error: {unmapped_strings_file} not found. Please run auto_map_citations.py first.")
        return

    # Load existing citation map
    if os.path.exists(citation_map_file):
        with open(citation_map_file, 'r', encoding='utf-8') as f:
            citation_map = json.load(f)
    else:
        citation_map = {}

    newly_mapped_count = 0
    still_unmapped = []

    for text in unmapped_strings:
        found_match = False
        for keyword, citation_key in HEURISTIC_MAP.items():
            if keyword in text.lower():
                citation_map[text] = citation_key
                newly_mapped_count += 1
                found_match = True
                break  # Stop at the first match

        if not found_match:
            still_unmapped.append(text)

    # Save the updated citation map
    with open(citation_map_file, 'w', encoding='utf-8') as f:
        json.dump(citation_map, f, indent=2)

    # Overwrite the unmapped strings file with the remaining ones
    with open(unmapped_strings_file, 'w', encoding='utf-8') as f:
        for s in sorted(still_unmapped):
            f.write(s + '\n')

    print("Heuristic mapping complete.")
    print(f"Mapped {newly_mapped_count} new strings.")
    print(f"{len(still_unmapped)} strings still need manual mapping.")

if __name__ == '__main__':
    main()
