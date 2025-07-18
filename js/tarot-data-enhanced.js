// Enhanced Tarot Card Database with Academic References
// This comprehensive database includes correlations and book references for deep tarot study

const tarotCards = [
    // Major Arcana with extensive correlations and references
    {
        name: "The Fool",
        number: 0,
        suit: "Major Arcana",
        element: "Air",
        astrology: "Uranus",
        numerology: 0,
        hebrewLetter: "Aleph",
        kabbalisticPath: 11,
        treeOfLife: ["Kether", "Chokmah"],
        chakra: "Crown",
        jungianArchetype: "The Innocent",
        image: "img/big/major_00_Fool.jpg",
        
        keywords: {
            upright: ["New beginnings", "Innocence", "Spontaneity", "Free spirit", "Adventure", "Leap of faith", "Potential", "Originality"],
            reversed: ["Recklessness", "Taken advantage of", "Inconsideration", "Foolishness", "Lack of direction", "Naivety", "Poor judgment"]
        },
        
        meanings: {
            upright: {
                general: "The Fool represents pure potential and new beginnings. This card signifies the start of a journey, both literally and metaphorically. It embodies the courage to step into the unknown, trusting in the universe's guidance. The Fool carries the energy of infinite possibility, untainted by past experiences or societal expectations. This is the card of the divine child within us all, ready to explore the world with wonder and enthusiasm.",
                
                love: "In matters of the heart, The Fool suggests a fresh start in love. This could manifest as a new relationship filled with excitement and possibility, or a renewal of passion in an existing partnership. The Fool encourages you to approach love with an open heart, free from the baggage of past relationships. Trust your instincts and be willing to take emotional risks.",
                
                career: "Professionally, The Fool indicates new opportunities and career changes. This card suggests that unconventional paths may lead to success. It's time to follow your passion rather than societal expectations. The Fool encourages entrepreneurial ventures and creative endeavors. Trust in your unique vision and don't be afraid to stand out from the crowd.",
                
                spiritual: "Spiritually, The Fool represents the beginning of a spiritual journey. This card suggests openness to new spiritual practices and beliefs. It encourages you to approach spirituality with beginner's mind, free from preconceived notions. The Fool reminds us that wisdom often comes through direct experience rather than book learning."
            },
            
            reversed: {
                general: "When reversed, The Fool warns against reckless behavior and poor judgment. This card suggests that you may be acting without thinking through the consequences. There's a need to be more careful and considerate in your decisions. The reversed Fool can also indicate being taken advantage of due to naivety or excessive trust.",
                
                love: "In love, the reversed Fool suggests being too trusting or naive in relationships. You may be ignoring red flags or allowing yourself to be taken advantage of. This card warns against jumping into relationships too quickly without proper consideration. Take time to get to know potential partners before making commitments.",
                
                career: "Career-wise, the reversed Fool indicates poor planning or impulsive decisions that could harm your professional reputation. You may be unprepared for new opportunities or taking unnecessary risks. It's important to do your research and seek advice before making major career moves.",
                
                spiritual: "Spiritually, the reversed Fool suggests spiritual bypassing or avoiding necessary inner work. You may be seeking quick fixes or following spiritual trends without true understanding. This card encourages you to ground your spiritual practice in genuine self-reflection and growth."
            }
        },
        
        correlations: {
            mythology: "The Fool is connected to the Greek god Dionysus, representing divine madness and ecstasy. In Norse mythology, this energy is reflected in Odin's willingness to sacrifice himself for wisdom.",
            psychology: "Corresponds to Jung's concept of the puer aeternus (eternal child) and the archetype of the Innocent. Represents the unconscious mind's unlimited potential before being shaped by experience.",
            alchemy: "Represents the prima materia, the raw material from which all transformation begins. The Fool embodies the alchemical principle of solve et coagula (dissolve and coagulate).",
            iching: "Correlates with Hexagram 25 (Wu Wang) - Innocence/The Unexpected, representing spontaneous action and natural flow.",
            bodySystem: "Associated with the nervous system and brain, particularly the frontal lobe responsible for decision-making and impulse control."
        },
        
        bookReferences: [
            "Waite, A.E. 'The Pictorial Key to the Tarot' (1910) - Original RWS interpretation",
            "Crowley, Aleister 'The Book of Thoth' (1944) - Thelemic perspective on The Fool",
            "Case, Paul Foster 'The Tarot: A Key to the Wisdom of the Ages' (1947) - Hermetic Qabalah connections",
            "Nichols, Sallie 'Jung and Tarot: An Archetypal Journey' (1980) - Jungian psychological analysis",
            "Pollack, Rachel 'Seventy-Eight Degrees of Wisdom' (1980) - Modern interpretive approach",
            "Greer, Mary K. 'Tarot for Your Self' (1984) - Psychological and spiritual development",
            "Bunning, Joan 'Learning the Tarot' (1998) - Beginner-friendly interpretation",
            "Place, Robert 'The Tarot: History, Symbolism, and Divination' (2005) - Historical context"
        ],
        
        deeperMeaning: {
            esoteric: "The Fool represents the divine spark before incarnation, the soul's journey from unity to multiplicity. In Kabbalistic terms, it's the path from Kether (Crown) to Chokmah (Wisdom), representing the first emanation of divine consciousness into form.",
            
            philosophical: "Embodies the existentialist concept of radical freedom and the courage to create meaning in an absurd universe. The Fool represents authentic being before societal conditioning.",
            
            archetypal: "The Fool is the Hero at the beginning of the Hero's Journey, representing the call to adventure and the willingness to leave the familiar for the unknown. This archetype appears in stories worldwide as the unlikely hero who succeeds through innocence and pure intention."
        }
    },
    
    {
        name: "The Magician",
        number: 1,
        suit: "Major Arcana",
        element: "Air",
        astrology: "Mercury",
        numerology: 1,
        hebrewLetter: "Beth",
        kabbalisticPath: 12,
        treeOfLife: ["Kether", "Binah"],
        chakra: "Throat",
        jungianArchetype: "The Magician",
        image: "img/big/major_01_Magician.jpg",
        
        keywords: {
            upright: ["Manifestation", "Resourcefulness", "Power", "Inspired action", "Will", "Concentration", "Skill", "Mastery"],
            reversed: ["Manipulation", "Poor planning", "Untapped talents", "Lack of focus", "Trickery", "Misuse of power"]
        },
        
        meanings: {
            upright: {
                general: "The Magician symbolizes the power of will and the ability to manifest desires into reality. This card represents having all the tools and skills necessary to achieve your goals. The Magician channels divine energy through focused intention and skilled action. This is the card of the skilled craftsperson, the visionary leader, and the person who can turn ideas into tangible results through dedication and expertise.",
                
                love: "In relationships, The Magician suggests you have the power to create the love life you desire. This card indicates strong communication skills, charisma, and the ability to attract what you seek. For those in relationships, it suggests the power to transform and improve the partnership through conscious effort and clear intention.",
                
                career: "Professionally, The Magician represents leadership, innovation, and the ability to manifest career success. This card suggests you have the skills and resources needed to advance your professional goals. It's an excellent time for launching new projects, starting businesses, or taking on leadership roles. The Magician encourages you to use your unique talents and vision.",
                
                spiritual: "Spiritually, The Magician represents the power of focused intention in spiritual practice. This card suggests mastery over the elements and the ability to manifest spiritual goals through disciplined practice. It represents the conscious use of will in spiritual development and the integration of spiritual principles into daily life."
            },
            
            reversed: {
                general: "When reversed, The Magician warns against manipulation, trickery, or the misuse of power. This card can indicate that you're not using your full potential or that you lack the focus needed to achieve your goals. There may be a tendency to use shortcuts or unethical means to get what you want. The reversed Magician can also suggest feeling powerless or lacking confidence in your abilities.",
                
                love: "In love, the reversed Magician may indicate manipulation or deception in relationships. Someone may be using their charm or influence for selfish purposes. This card warns against trying to control or manipulate partners. It can also suggest that you're not being authentic in your relationships or that you're trying too hard to impress others.",
                
                career: "Career-wise, the reversed Magician suggests poor planning, lack of focus, or the misuse of professional skills. You may be taking shortcuts that could damage your reputation or using your position for personal gain at others' expense. This card encourages you to examine your motivations and ensure your actions align with your values.",
                
                spiritual: "Spiritually, the reversed Magician warns against spiritual materialism or using spiritual practices for ego gratification. You may be seeking power over others rather than true spiritual development. This card encourages humility and the ethical use of any spiritual gifts or abilities you may have."
            }
        },
        
        correlations: {
            mythology: "Connected to Hermes/Mercury, the messenger god and guide between worlds. Also relates to Thoth, the Egyptian god of wisdom and magic, and to Odin's shamanic abilities.",
            psychology: "Represents the ego at its most functional - the ability to focus will and manifest desires. Corresponds to Jung's concept of the individuated self that has integrated all aspects of the psyche.",
            alchemy: "Represents the alchemist who transforms base metals into gold, symbolizing the transformation of consciousness. The four tools on the altar represent the four elements under the magician's control.",
            iching: "Correlates with Hexagram 1 (Qian) - The Creative, representing pure yang energy and the power of focused intention.",
            bodySystem: "Associated with the hands and nervous system, representing the ability to channel energy and intention into physical manifestation."
        },
        
        bookReferences: [
            "Waite, A.E. 'The Pictorial Key to the Tarot' (1910) - Classical interpretation of The Magician",
            "Crowley, Aleister 'The Book of Thoth' (1944) - The Magus in Thelemic philosophy",
            "Case, Paul Foster 'The Tarot: A Key to the Wisdom of the Ages' (1947) - Hermetic symbolism",
            "Fortune, Dion 'The Mystical Qabalah' (1935) - Kabbalistic associations",
            "Regardie, Israel 'The Golden Dawn' (1937) - Ceremonial magic connections",
            "Nichols, Sallie 'Jung and Tarot: An Archetypal Journey' (1980) - Psychological depth",
            "Pollack, Rachel 'Seventy-Eight Degrees of Wisdom' (1980) - Modern interpretation",
            "Greer, Mary K. 'The Complete Guide to Tarot Spreads' (1987) - Practical applications"
        ],
        
        deeperMeaning: {
            esoteric: "The Magician represents the divine will manifesting through human consciousness. In Kabbalistic terms, it's the path from Kether (pure consciousness) to Binah (form), representing the first act of creation through divine will.",
            
            philosophical: "Embodies the Hermetic principle 'As above, so below' - the ability to bring spiritual truths into material reality. Represents the philosopher's stone of consciousness - the ability to transform any situation through focused will.",
            
            archetypal: "The Magician is the Wise Old Man/Woman archetype, the master teacher who has learned to work with natural and spiritual laws. This figure appears in myths as the wizard, shaman, or sage who helps the hero develop their powers."
        }
    },
    
    {
        name: "The High Priestess",
        number: 2,
        suit: "Major Arcana",
        element: "Water",
        astrology: "Moon",
        numerology: 2,
        hebrewLetter: "Gimel",
        kabbalisticPath: 13,
        treeOfLife: ["Kether", "Tiphereth"],
        chakra: "Third Eye",
        jungianArchetype: "The Wise Woman",
        image: "img/big/major_02_High_Priestess.jpg",
        
        keywords: {
            upright: ["Intuition", "Sacred knowledge", "Divine feminine", "Subconscious mind", "Mystery", "Wisdom", "Spirituality", "Inner guidance"],
            reversed: ["Secrets", "Disconnected from intuition", "Lack of center", "Repressed feminine", "Superficial knowledge"]
        },
        
        meanings: {
            upright: {
                general: "The High Priestess represents the divine feminine principle, intuition, and access to sacred knowledge. This card suggests a time for introspection and listening to your inner voice. The High Priestess is the guardian of the subconscious mind and the keeper of hidden wisdom. She represents the part of ourselves that knows without being taught, that understands through feeling rather than thinking.",
                
                love: "In love, The High Priestess suggests a deep, intuitive connection with a partner or the need to trust your instincts about relationships. This card often appears when there are hidden aspects to a relationship that need to be uncovered. It encourages you to look beyond the surface and trust your emotional intelligence in matters of the heart.",
                
                career: "Professionally, The High Priestess suggests careers involving intuition, counseling, healing, or spiritual guidance. This card encourages you to trust your instincts in business decisions and to value wisdom over mere facts. It can indicate success in fields that require understanding of human nature or working with the subconscious mind.",
                
                spiritual: "Spiritually, The High Priestess represents deep spiritual wisdom and the ability to access higher consciousness. This card suggests that you have natural psychic abilities or strong intuitive gifts. It encourages meditation, dreamwork, and other practices that connect you with your inner wisdom and the collective unconscious."
            },
            
            reversed: {
                general: "When reversed, The High Priestess suggests disconnection from intuition and inner wisdom. You may be ignoring your inner voice or being overly influenced by external opinions. This card can indicate secrets being kept or hidden knowledge that needs to be revealed. There may be a tendency to intellectualize everything rather than trusting your gut feelings.",
                
                love: "In love, the reversed High Priestess may indicate being out of touch with your emotional needs or ignoring red flags in relationships. You may be keeping secrets from your partner or not trusting your instincts about someone's character. This card encourages you to reconnect with your intuitive understanding of love and relationships.",
                
                career: "Career-wise, the reversed High Priestess suggests that you may be ignoring your instincts about workplace situations or colleagues. You might be relying too heavily on data and facts while ignoring the human element in business decisions. This card encourages you to balance logic with intuition in professional matters.",
                
                spiritual: "Spiritually, the reversed High Priestess indicates a disconnect from your spiritual practice or inner wisdom. You may be seeking spiritual truth outside yourself rather than trusting your own spiritual experiences. This card encourages you to return to practices that connect you with your inner knowing."
            }
        },
        
        correlations: {
            mythology: "Connected to Isis, Artemis, Diana, and other lunar goddesses. Represents the Oracle at Delphi and the priestesses who served at ancient temples as intermediaries between the divine and human realms.",
            psychology: "Represents Jung's anima archetype and the collective unconscious. Corresponds to the right brain's intuitive and holistic processing capabilities.",
            alchemy: "Represents the divine sophia (wisdom) and the alchemical principle of receptivity. The High Priestess embodies the lunar, receptive principle that balances the solar, active principle.",
            iching: "Correlates with Hexagram 2 (Kun) - The Receptive, representing the pure yin principle and the power of yielding wisdom.",
            bodySystem: "Associated with the pineal gland, often called the 'third eye,' and the limbic system, which processes emotions and intuition."
        },
        
        bookReferences: [
            "Waite, A.E. 'The Pictorial Key to the Tarot' (1910) - Traditional interpretation",
            "Crowley, Aleister 'The Book of Thoth' (1944) - The Priestess in Thelemic tradition",
            "Case, Paul Foster 'The Tarot: A Key to the Wisdom of the Ages' (1947) - Hermetic symbolism",
            "Hall, Manly P. 'The Secret Teachings of All Ages' (1928) - Esoteric symbolism",
            "Nichols, Sallie 'Jung and Tarot: An Archetypal Journey' (1980) - Jungian analysis",
            "Noble, Vicki 'Motherpeace: A Way to the Goddess' (1983) - Feminist interpretation",
            "Pollack, Rachel 'The Body of the Goddess' (1997) - Divine feminine perspective",
            "Greer, Mary K. 'Women of the Golden Dawn' (1995) - Historical feminine wisdom traditions"
        ],
        
        deeperMeaning: {
            esoteric: "The High Priestess represents the divine feminine aspect of consciousness, the receptive principle that receives divine inspiration. She guards the veil between the conscious and unconscious minds, between the known and unknown.",
            
            philosophical: "Embodies the Platonic concept of intuitive knowledge and the Gnostic tradition of direct spiritual experience. Represents the wisdom that comes through being rather than doing.",
            
            archetypal: "The High Priestess is the Great Mother archetype in her aspect as the Wise Woman. She appears in myths as the Oracle, the Sibyl, the Goddess of Wisdom who grants knowledge to those who approach her with reverence and humility."
        }
    }
    
    // Additional cards would continue with the same depth and academic rigor...
    // For the complete deck, each card would include:
    // - Extensive correlations across multiple systems
    // - 8-10 book references minimum
    // - Deep esoteric, philosophical, and archetypal meanings
    // - Connections to mythology, psychology, alchemy, I-Ching, and body systems
];

// Minor Arcana structure with similar depth
const minorArcana = {
    wands: {
        element: "Fire",
        astrology: ["Aries", "Leo", "Sagittarius"],
        chakra: "Solar Plexus",
        bodySystem: "Digestive and circulatory systems",
        keywords: ["Passion", "Creativity", "Career", "Ambition", "Energy", "Inspiration"],
        mythology: "Connected to the Fire gods: Prometheus, Agni, Brigid, and Hephaestus",
        cards: [
            // Each card would have the same comprehensive structure as the Major Arcana
        ]
    },
    
    cups: {
        element: "Water",
        astrology: ["Cancer", "Scorpio", "Pisces"],
        chakra: "Heart",
        bodySystem: "Lymphatic and reproductive systems",
        keywords: ["Emotions", "Relationships", "Intuition", "Spirituality", "Love", "Healing"],
        mythology: "Connected to Water deities: Aphrodite, Yemoja, Neptune, and Quan Yin",
        cards: []
    },
    
    swords: {
        element: "Air",
        astrology: ["Gemini", "Libra", "Aquarius"],
        chakra: "Throat",
        bodySystem: "Respiratory and nervous systems",
        keywords: ["Thoughts", "Communication", "Conflict", "Justice", "Truth", "Intellect"],
        mythology: "Connected to Air deities: Hermes, Thoth, Athena, and Saraswati",
        cards: []
    },
    
    pentacles: {
        element: "Earth",
        astrology: ["Taurus", "Virgo", "Capricorn"],
        chakra: "Root",
        bodySystem: "Skeletal and muscular systems",
        keywords: ["Material", "Health", "Money", "Career", "Manifestation", "Stability"],
        mythology: "Connected to Earth deities: Gaia, Ceres, Demeter, and Pachamama",
        cards: []
    }
};

// Comprehensive cross-referencing system
const tarotCorrelations = {
    astrology: {
        "Aries": ["The Emperor", "King of Wands", "Two of Wands", "Three of Wands", "Four of Wands"],
        "Taurus": ["The Hierophant", "King of Pentacles", "Five of Pentacles", "Six of Pentacles", "Seven of Pentacles"],
        "Gemini": ["The Lovers", "King of Swords", "Eight of Swords", "Nine of Swords", "Ten of Swords"],
        "Cancer": ["The Chariot", "King of Cups", "Two of Cups", "Three of Cups", "Four of Cups"],
        "Leo": ["Strength", "Queen of Wands", "Five of Wands", "Six of Wands", "Seven of Wands"],
        "Virgo": ["The Hermit", "Queen of Pentacles", "Eight of Pentacles", "Nine of Pentacles", "Ten of Pentacles"],
        "Libra": ["Justice", "Queen of Swords", "Two of Swords", "Three of Swords", "Four of Swords"],
        "Scorpio": ["Death", "Queen of Cups", "Five of Cups", "Six of Cups", "Seven of Cups"],
        "Sagittarius": ["Temperance", "Knight of Wands", "Eight of Wands", "Nine of Wands", "Ten of Wands"],
        "Capricorn": ["The Devil", "Knight of Pentacles", "Two of Pentacles", "Three of Pentacles", "Four of Pentacles"],
        "Aquarius": ["The Star", "Knight of Swords", "Five of Swords", "Six of Swords", "Seven of Swords"],
        "Pisces": ["The Moon", "Knight of Cups", "Eight of Cups", "Nine of Cups", "Ten of Cups"]
    },
    
    kabbalah: {
        "Kether": ["The Fool", "The Magician", "The High Priestess"],
        "Chokmah": ["The Fool", "The Empress", "The Emperor", "The Hierophant"],
        "Binah": ["The Magician", "The Empress", "The Lovers", "The Chariot"],
        "Chesed": ["The Hierophant", "Strength", "The Hermit", "Wheel of Fortune"],
        "Geburah": ["The Chariot", "Strength", "Justice", "The Hanged Man"],
        "Tiphereth": ["The High Priestess", "The Lovers", "The Hermit", "Justice", "Death", "Temperance", "The Devil"],
        "Netzach": ["Wheel of Fortune", "Death", "The Tower", "The Star", "The Moon"],
        "Hod": ["The Hanged Man", "The Devil", "The Tower", "The Sun", "Judgement"],
        "Yesod": ["Temperance", "The Star", "The Sun", "The World"],
        "Malkuth": ["The Moon", "Judgement", "The World"]
    },
    
    numerology: {
        0: ["The Fool"],
        1: ["The Magician", "All Aces"],
        2: ["The High Priestess", "All Twos"],
        3: ["The Empress", "All Threes"],
        4: ["The Emperor", "All Fours"],
        5: ["The Hierophant", "All Fives"],
        6: ["The Lovers", "All Sixes"],
        7: ["The Chariot", "All Sevens"],
        8: ["Strength", "All Eights"],
        9: ["The Hermit", "All Nines"],
        10: ["Wheel of Fortune", "All Tens"],
        11: ["Justice"],
        12: ["The Hanged Man"],
        13: ["Death"],
        14: ["Temperance"],
        15: ["The Devil"],
        16: ["The Tower"],
        17: ["The Star"],
        18: ["The Moon"],
        19: ["The Sun"],
        20: ["Judgement"],
        21: ["The World"]
    }
};

// Academic bibliography for comprehensive tarot study
const tarotBibliography = {
    foundational: [
        "Waite, Arthur Edward. 'The Pictorial Key to the Tarot' (1910)",
        "Crowley, Aleister. 'The Book of Thoth' (1944)",
        "Case, Paul Foster. 'The Tarot: A Key to the Wisdom of the Ages' (1947)",
        "Gray, Eden. 'The Complete Guide to the Tarot' (1970)",
        "Pollack, Rachel. 'Seventy-Eight Degrees of Wisdom' (1980)"
    ],
    
    psychological: [
        "Nichols, Sallie. 'Jung and Tarot: An Archetypal Journey' (1980)",
        "Rosengarten, Arthur. 'Tarot and Psychology' (2000)",
        "Greer, Mary K. 'Tarot for Your Self' (1984)",
        "Garen, Nancy. 'Tarot Made Easy' (1989)",
        "Bunning, Joan. 'Learning the Tarot' (1998)"
    ],
    
    historical: [
        "Dummett, Michael. 'The Game of Tarot' (1980)",
        "Farley, Helen. 'A Cultural History of Tarot' (2009)",
        "Place, Robert. 'The Tarot: History, Symbolism, and Divination' (2005)",
        "Kaplan, Stuart. 'The Encyclopedia of Tarot' (1978-2005, 4 volumes)",
        "Moakley, Gertrude. 'The Tarot Cards Painted by Bonifacio Bembo' (1966)"
    ],
    
    esoteric: [
        "Fortune, Dion. 'The Mystical Qabalah' (1935)",
        "Regardie, Israel. 'The Golden Dawn' (1937)",
        "Butler, Bill. 'Dictionary of the Tarot' (1975)",
        "Wang, Robert. 'The Qabalistic Tarot' (1983)",
        "Hulse, David Allen. 'The Key of It All' (1993)"
    ],
    
    modern: [
        "Greer, Mary K. 'The Complete Guide to Tarot Spreads' (1987)",
        "Arrien, Angeles. 'The Tarot Handbook' (1987)",
        "Connolly, Eileen. 'Tarot: A New Handbook for the Apprentice' (1979)",
        "Michelsen, Teresa. 'The Complete Tarot Reader' (2005)",
        "Reed, Theresa. 'Tarot: No Questions Asked' (2020)"
    ]
};

// Export all data for modular usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        tarotCards,
        minorArcana,
        tarotCorrelations,
        tarotBibliography
    };
}