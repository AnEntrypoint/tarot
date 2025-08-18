// Enhanced Tarot Card Database with Academic References
// This comprehensive database includes correlations and book references for deep tarot study

// Import the complete 78-card deck
const completeTarotDeck = [
    // Major Arcana - 22 cards
    {
        name: "The Fool",
        number: 0,
        suit: "Major Arcana",
        element: "Air",
        astrology: "Uranus",
        numerology: 0,
        image: "img/big/major_00_Fool.jpg",
        keywords: {
            upright: ["New beginnings", "Innocence", "Spontaneity", "Free spirit", "Adventure"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Recklessness", "Taken advantage of", "Inconsideration", "Foolishness"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "The Fool represents new beginnings, a leap of faith, innocence, and a free-spirited approach to life. It signifies embarking on a new journey with optimism and a sense of adventure.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "New romantic beginnings, taking a leap of faith in love, approaching relationships with childlike wonder.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "New career opportunities, starting fresh, following passion rather than convention.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Beginning of spiritual journey, openness to new beliefs, trusting divine guidance.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Recklessness, being taken advantage of, naive approach leading to poor decisions.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Being too naive in relationships, making poor romantic choices, ignoring red flags.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Poor planning, risky decisions, being unprepared for opportunities.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual bypassing, avoiding necessary growth, being gullible about spiritual matters.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "The Magician",
        number: 1,
        suit: "Major Arcana",
        element: "Air",
        astrology: "Mercury",
        numerology: 1,
        image: "img/big/major_01_Magician.jpg",
        keywords: {
            upright: ["Manifestation", "Resourcefulness", "Power", "Inspired action", "Will"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Manipulation", "Poor planning", "Untapped talents", "Lack of focus"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "The Magician symbolizes manifestation, resourcefulness, power, and inspired action. Having all tools necessary to achieve goals.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Power to manifest desired love life, clear communication, charisma in relationships.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Leadership, innovation, having skills and resources to succeed professionally.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Power of will and focused intention in spiritual practice, manifesting spiritual goals.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Manipulation, poor planning, untapped talents, misuse of power or feeling powerless.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Manipulation in relationships, using charm for selfish purposes, inauthentic behavior.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Misusing skills, lacking direction, failing to apply talents effectively.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Using spiritual knowledge for ego or manipulation rather than genuine growth.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "The High Priestess",
        number: 2,
        suit: "Major Arcana",
        element: "Water",
        astrology: "Moon",
        numerology: 2,
        image: "img/big/major_02_High_Priestess.jpg",
        keywords: {
            upright: ["Intuition", "Sacred knowledge", "Divine feminine", "Subconscious", "Mystery"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Secrets revealed", "Hidden agendas", "Lack of intuition", "Disconnection"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Intuition, sacred knowledge, the subconscious, and mystery. Trusting inner voice and hidden truths.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Trusting intuition about relationships, deep spiritual connection, listening to inner wisdom.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Using intuition alongside logic, trusting gut feelings, careers in spirituality or healing.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Deep inner knowing, psychic abilities, connection to divine feminine.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Secrets being revealed, hidden agendas, disconnection from intuition.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Hidden relationship aspects, lack of emotional connection, ignoring intuitive warnings.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Office secrets, hidden information, disconnection from intuitive guidance.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Being disconnected from intuition, ignoring inner wisdom, spiritual confusion.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "The Empress",
        number: 3,
        suit: "Major Arcana",
        element: "Earth",
        astrology: "Venus",
        numerology: 3,
        image: "img/big/major_03_Empress.jpg",
        keywords: {
            upright: ["Femininity", "Beauty", "Nature", "Nurturing", "Abundance", "Fertility"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Creative block", "Dependence", "Smothering", "Lack of growth"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Femininity, beauty, nature, nurturing, and abundance. Fertility, creativity, and blossoming of new ideas.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Deep love, sensuality, possibly pregnancy or starting a family, nurturing relationships.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Creative success, abundance, growth, careers in creative fields or healthcare.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Connection with Mother Earth energy, natural cycles, divine feminine creation.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Creative block, dependence on others, issues with nurturing, smothering behavior.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Codependency, smothering behavior, fertility issues, imbalance in giving and receiving.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Creative blocks, lack of growth, problems with colleagues, financial struggles.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Disconnection from nature, blocked creativity, issues with feminine divinity.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "The Emperor",
        number: 4,
        suit: "Major Arcana",
        element: "Fire",
        astrology: "Aries",
        numerology: 4,
        image: "img/big/maj04.jpg",
        keywords: {
            upright: ["Authority", "Structure", "Control", "Father figure", "Leadership"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Domination", "Excessive control", "Lack of discipline", "Tyranny"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Authority, structure, control, and father figure. Leadership, stability, and establishment of order.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Stable, committed partnership with clear boundaries, protective provider-type partner.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Leadership roles, structure, authority, success through discipline and organization.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Divine masculine energy, spiritual authority, need for structure in spiritual practice.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Domination, excessive control, rigidity, abuse of power, lack of discipline.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Controlling behavior, power struggles, lack of commitment, authority issues.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Abuse of power, poor leadership, resistance to authority, workplace tyranny.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual authoritarianism, rigid thinking, misuse of spiritual authority.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "The Hierophant",
        number: 5,
        suit: "Major Arcana",
        element: "Earth",
        astrology: "Taurus",
        numerology: 5,
        image: "img/big/major_05_Hierophant.jpg",
        keywords: {
            upright: ["Spiritual wisdom", "Religious beliefs", "Conformity", "Tradition", "Institutions"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Personal beliefs", "Freedom", "Challenging tradition", "New approaches"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Spiritual wisdom, tradition, conformity, and institutions. Learning from established systems.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Traditional commitment like marriage, relationship counseling, conventional relationship paths.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Working within established systems, traditional career paths, roles in education or religion.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Organized religion, traditional spiritual practices, learning from established teachers.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Rebellion, unconventionality, need for new approaches, challenging traditions.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Unconventional relationships, challenging relationship norms, spiritual incompatibility.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Breaking from traditional paths, challenging workplace norms, innovative fields.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Personal spiritual beliefs, questioning doctrine, exploring alternative paths.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "The Lovers",
        number: 6,
        suit: "Major Arcana",
        element: "Air",
        astrology: "Gemini",
        numerology: 6,
        image: "img/big/major_06_Lovers.jpg",
        keywords: {
            upright: ["Love", "Harmony", "Relationships", "Choice", "Values alignment"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Disharmony", "Imbalance", "Misaligned values", "Difficult choices"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Love, harmony, relationships, choices, and values alignment. Significant romantic partnership or important decisions.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Deep romantic connection, soul mates, significant relationship choice, harmony and attraction.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Partnership in business, working with compatible people, career choices based on values.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Union of opposites, divine love, making choices aligned with higher self.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Disharmony, imbalance, misalignment of values, difficult choice or conflict.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Relationship problems, incompatibility, infidelity, difficult choice between lovers.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Workplace conflicts, poor partnerships, career choices conflicting with values.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Internal conflict, misaligned choices, difficulty integrating different aspects.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "The Chariot",
        number: 7,
        suit: "Major Arcana",
        element: "Water",
        astrology: "Cancer",
        numerology: 7,
        image: "img/big/major_07_Chariot.jpg",
        keywords: {
            upright: ["Control", "Willpower", "Victory", "Determination", "Direction"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Lack of control", "Opposition", "Lack of direction", "Aggression"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Control, willpower, victory, determination, and clear direction. Overcoming obstacles through focused effort.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Taking control of love life, pursuing someone with determination, overcoming relationship obstacles.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Success through determination, taking control of career path, achieving victory in competition.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Mastering desires, spiritual willpower, achieving spiritual goals through discipline.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Lack of control, opposition, lack of direction, feeling overwhelmed or pulled in directions.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Relationship conflicts, power struggles, lack of direction in romantic matters.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Setbacks, lack of progress, feeling stuck despite efforts to move forward.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Lack of spiritual direction, internal conflicts, difficulty maintaining discipline.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Strength",
        number: 8,
        suit: "Major Arcana",
        element: "Fire",
        astrology: "Leo",
        numerology: 8,
        image: "img/big/major_08_Strength.jpg",
        keywords: {
            upright: ["Courage", "Compassion", "Inner strength", "Patience", "Control"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Weakness", "Self-doubt", "Lack of confidence", "Giving up"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Courage, compassion, inner strength, and influence. Power of gentle persuasion over brute force.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Patience and compassion in relationships, strength to work through challenges with love.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Leadership through inspiration, dealing with difficult people patiently, inner confidence.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Mastering lower nature, spiritual courage, power of love over fear.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Weakness, self-doubt, lack of self-discipline, feeling overwhelmed by challenges.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Lack of confidence in relationships, being too aggressive or passive, unable to handle challenges.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Lack of confidence, being overwhelmed by work challenges, misusing personal power.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Lack of spiritual courage, overwhelmed by negative emotions, giving up on growth.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "The Hermit",
        number: 9,
        suit: "Major Arcana",
        element: "Earth",
        astrology: "Virgo",
        numerology: 9,
        image: "img/big/major_09_Hermit.jpg",
        keywords: {
            upright: ["Introspection", "Solitude", "Guidance", "Inner wisdom", "Soul searching"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Isolation", "Loneliness", "Withdrawal", "Avoiding introspection"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Introspection, solitude, guidance, and soul-searching. Period of withdrawal to seek inner wisdom.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Taking time alone to understand love desires, finding spiritual guide in romantic matters.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Seeking mentorship, reflecting on career goals, working independently.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Search for spiritual truth, meditation, role of wise teacher or guide.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Isolation, loneliness, excessive withdrawal, feeling disconnected or avoiding introspection.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Loneliness, fear of intimacy, avoiding relationship issues through withdrawal.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Isolation at work, avoiding career development, refusing helpful guidance.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Avoiding inner work, spiritual bypassing, feeling disconnected from guidance.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Wheel of Fortune",
        number: 10,
        suit: "Major Arcana",
        element: "Fire",
        astrology: "Jupiter",
        numerology: 10,
        image: "img/big/major_10_Wheel_of_Fortune.jpg",
        keywords: {
            upright: ["Good luck", "Destiny", "Change", "Cycles", "Turning point"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Bad luck", "Resistance to change", "Breaking cycles", "Setbacks"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Good luck, destiny, change, cycles, and turning points. Fated event or shift beyond control.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Destined meeting, positive changes in relationships, natural cycles of love.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Lucky breaks, positive career changes, beneficial cycles in work life.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Karmic cycles, spiritual evolution, trusting divine timing and destiny.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Bad luck, resistance to change, breaking cycles, unexpected setbacks or struggling against flow.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Relationship cycles ending, resistance to changes in love, unlucky timing in romance.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Setbacks, missed opportunities, resistance to necessary professional changes.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Struggling against karmic lessons, resisting spiritual growth, feeling spiritually unlucky.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Justice",
        number: 11,
        suit: "Major Arcana",
        element: "Air",
        astrology: "Libra",
        numerology: 11,
        image: "img/big/major_11_Justice.jpg",
        keywords: {
            upright: ["Fairness", "Truth", "Balance", "Law", "Accountability"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Unfairness", "Lack of accountability", "Dishonesty", "Bias"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Fairness, truth, balance, law, and accountability. Justice being served and truth revealed.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Fair treatment in relationships, honest communication, balanced give and take.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Legal matters resolving favorably, fair treatment at work, ethical business practices.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Karmic justice, moral accountability, seeking truth and balance in spiritual practice.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Unfairness, lack of accountability, dishonesty, bias, or corruption.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Unfair treatment in relationships, dishonesty, imbalanced relationship dynamics.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Workplace unfairness, legal troubles, unethical behavior affecting career.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Avoiding moral responsibility, spiritual dishonesty, karmic imbalance.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "The Hanged Man",
        number: 12,
        suit: "Major Arcana",
        element: "Water",
        astrology: "Neptune",
        numerology: 12,
        image: "img/big/major_12_Hanged_Man.jpg",
        keywords: {
            upright: ["Surrender", "Letting go", "New perspective", "Sacrifice", "Patience"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Resistance", "Stalling", "Needless sacrifice", "Fear of sacrifice"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Surrender, letting go, new perspective, and sacrifice. Period of suspension leading to enlightenment.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Letting go of control in relationships, sacrificing for love, seeing relationships from new angle.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Career pause for reflection, sacrificing short-term gain for long-term benefit.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual surrender, letting go of ego, gaining new spiritual perspective through sacrifice.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Resistance to change, stalling, needless sacrifice, or fear of letting go.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Resistance to relationship changes, fear of commitment, making unnecessary sacrifices.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Stalling career progress, resistance to necessary changes, fear of career sacrifice.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual resistance, fear of surrender, avoiding necessary spiritual sacrifice.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Death",
        number: 13,
        suit: "Major Arcana",
        element: "Water",
        astrology: "Scorpio",
        numerology: 13,
        image: "img/big/major_13_Death.jpg",
        keywords: {
            upright: ["Transformation", "Endings", "Rebirth", "Change", "Release"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Resistance to change", "Fear of endings", "Stagnation", "Incomplete transformation"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Transformation, endings, rebirth, and change. Death of old to make way for new.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Relationship transformation, ending of old patterns, rebirth of love in new form.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Career transformation, ending of old job/role, professional rebirth and new opportunities.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual transformation, death of ego, rebirth into higher consciousness.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Resistance to change, fear of endings, stagnation, or incomplete transformation.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Fear of relationship change, clinging to dead relationships, resisting growth.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Resistance to career change, fear of letting go of old job, stagnation.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual stagnation, fear of ego death, resisting necessary transformation.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Temperance",
        number: 14,
        suit: "Major Arcana",
        element: "Fire",
        astrology: "Sagittarius",
        numerology: 14,
        image: "img/big/major_14_Temperance.jpg",
        keywords: {
            upright: ["Balance", "Moderation", "Patience", "Harmony", "Healing"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Imbalance", "Excess", "Impatience", "Lack of harmony"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Balance, moderation, patience, harmony, and healing. Finding middle ground and integration.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Balanced relationship, patience in love, healing relationship wounds through moderation.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Work-life balance, patience with career progress, harmonious workplace relationships.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual balance, integrating different aspects of self, patient spiritual progress.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Imbalance, excess, impatience, lack of harmony, or inability to find middle ground.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Imbalanced relationships, lack of patience, excess or extremes in love.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Work-life imbalance, impatience with progress, workplace disharmony.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual imbalance, impatience with growth, inability to integrate aspects.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "The Devil",
        number: 15,
        suit: "Major Arcana",
        element: "Earth",
        astrology: "Capricorn",
        numerology: 15,
        image: "img/big/major_15_Devil.jpg",
        keywords: {
            upright: ["Bondage", "Materialism", "Temptation", "Addiction", "Restriction"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Freedom", "Breaking chains", "Overcoming addiction", "Enlightenment"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Bondage, materialism, temptation, addiction, and restriction. Being trapped by material desires.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Unhealthy relationship patterns, codependency, sexual obsession, feeling trapped in love.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Golden handcuffs, being trapped in unsatisfying job, materialistic career focus.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual materialism, being trapped by ego, temptation away from spiritual path.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Freedom, breaking chains, overcoming addiction, enlightenment, and liberation.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Breaking free from unhealthy relationships, overcoming codependency, sexual liberation.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Breaking free from unsatisfying work, overcoming materialistic focus, career liberation.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual liberation, breaking free from ego, overcoming spiritual materialism.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "The Tower",
        number: 16,
        suit: "Major Arcana",
        element: "Fire",
        astrology: "Mars",
        numerology: 16,
        image: "img/big/major_16_Tower.jpg",
        keywords: {
            upright: ["Sudden change", "Upheaval", "Revelation", "Destruction", "Awakening"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Avoiding disaster", "Delaying inevitable", "Fear of change", "Internal upheaval"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Sudden change, upheaval, revelation, and destruction. Tower moment bringing awakening.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Sudden relationship revelation, breakup, upheaval in love life, awakening about partner.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Sudden job loss, career upheaval, revelation about work situation, professional awakening.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual awakening through crisis, destruction of false beliefs, sudden enlightenment.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Avoiding disaster, delaying inevitable, fear of change, or internal upheaval.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Avoiding relationship truth, delaying breakup, fear of relationship change.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Avoiding career change, delaying inevitable professional shift, fear of job loss.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Avoiding spiritual awakening, fear of spiritual change, internal spiritual crisis.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "The Star",
        number: 17,
        suit: "Major Arcana",
        element: "Air",
        astrology: "Aquarius",
        numerology: 17,
        image: "img/big/major_17_Star.jpg",
        keywords: {
            upright: ["Hope", "Inspiration", "Healing", "Renewal", "Spirituality"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Despair", "Lack of faith", "Discouragement", "Disconnection"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Hope, inspiration, healing, renewal, and spirituality. Light after darkness, renewed faith.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Renewed hope in love, healing from past hurts, spiritual connection with partner.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Career inspiration, renewed hope for professional future, healing work environment.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual renewal, renewed faith, healing spiritual wounds, connection to higher purpose.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Despair, lack of faith, discouragement, disconnection from hope and spirituality.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Loss of hope in love, discouragement about relationships, disconnection from partner.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Career despair, lack of professional inspiration, discouragement about future.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual despair, loss of faith, disconnection from higher purpose.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "The Moon",
        number: 18,
        suit: "Major Arcana",
        element: "Water",
        astrology: "Pisces",
        numerology: 18,
        image: "img/big/major_18_Moon.jpg",
        keywords: {
            upright: ["Illusion", "Intuition", "Dreams", "Subconscious", "Fear"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Truth revealed", "Clarity", "Overcoming fear", "Releasing illusions"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Illusion, intuition, dreams, subconscious, and fear. Things not being as they seem.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Romantic illusions, confusion in love, hidden aspects of relationships, emotional fears.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Workplace confusion, hidden agendas, unclear professional direction, career fears.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual confusion, illusions on path, deep subconscious work, confronting fears.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Truth revealed, clarity, overcoming fear, releasing illusions, seeing clearly.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Relationship clarity, overcoming romantic fears, seeing partner truly, releasing illusions.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Professional clarity, overcoming career fears, seeing workplace truth, clear direction.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual clarity, overcoming spiritual fears, releasing spiritual illusions.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "The Sun",
        number: 19,
        suit: "Major Arcana",
        element: "Fire",
        astrology: "Sun",
        numerology: 19,
        image: "img/big/major_19_Sun.jpg",
        keywords: {
            upright: ["Joy", "Success", "Vitality", "Enlightenment", "Positivity"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Temporary setbacks", "Lack of enthusiasm", "Delayed success", "Inner child wounds"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Joy, success, vitality, enlightenment, and positivity. Pure happiness and achievement.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Joyful relationships, successful love life, vitality in romance, enlightened love.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Career success, professional joy, vitality in work, achievement and recognition.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual joy, enlightenment, vitality in practice, successful spiritual development.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Temporary setbacks, lack of enthusiasm, delayed success, inner child wounds.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Temporary relationship setbacks, lack of romantic enthusiasm, delayed love success.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Temporary career setbacks, lack of work enthusiasm, delayed professional success.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Temporary spiritual setbacks, lack of spiritual enthusiasm, delayed enlightenment.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Judgement",
        number: 20,
        suit: "Major Arcana",
        element: "Fire",
        astrology: "Pluto",
        numerology: 20,
        image: "img/big/major_20_Judgement.jpg",
        keywords: {
            upright: ["Rebirth", "Awakening", "Calling", "Forgiveness", "Evaluation"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Self-doubt", "Avoiding calling", "Harsh judgment", "Lack of forgiveness"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Rebirth, awakening, calling, forgiveness, and evaluation. Spiritual awakening and new purpose.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Relationship rebirth, awakening to true love, forgiving past hurts, evaluating relationships.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Career calling, professional awakening, rebirth of career purpose, evaluating work life.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual rebirth, awakening to higher calling, forgiving self and others.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Self-doubt, avoiding calling, harsh judgment, lack of forgiveness, fear of awakening.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Self-doubt in relationships, avoiding relationship calling, harsh judgment of partner.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Self-doubt about career, avoiding professional calling, harsh judgment of work.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual self-doubt, avoiding spiritual calling, harsh spiritual judgment.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "The World",
        number: 21,
        suit: "Major Arcana",
        element: "Earth",
        astrology: "Saturn",
        numerology: 21,
        image: "img/big/major_21_World.jpg",
        keywords: {
            upright: ["Completion", "Achievement", "Fulfillment", "Success", "Integration"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Incomplete", "Lack of closure", "Seeking shortcuts", "Unfulfilled potential"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Completion, achievement, fulfillment, success, and integration. End of major cycle.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Relationship fulfillment, complete love, successful partnership, integrated relationship.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Career completion, professional achievement, work fulfillment, successful integration.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual completion, fulfillment of purpose, successful integration of all aspects.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Incomplete projects, lack of closure, seeking shortcuts, unfulfilled potential.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Incomplete relationships, lack of closure in love, unfulfilled romantic potential.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Incomplete career goals, lack of professional closure, unfulfilled work potential.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Incomplete spiritual development, lack of spiritual closure, unfulfilled potential.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },

    // Minor Arcana - Wands (Fire) - 14 cards
    {
        name: "Ace of Wands",
        number: 1,
        suit: "Wands",
        element: "Fire",
        astrology: "Fire signs",
        numerology: 1,
        image: "img/big/wands01.jpg",
        keywords: {
            upright: ["Inspiration", "New opportunities", "Growth", "Potential", "Creative energy"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Lack of energy", "Delays", "Creative blocks", "Wasted opportunities"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Burst of inspiration, new opportunities, creative potential, and spark of creation.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "New romantic beginnings, passion, burst of sexual energy in relationships.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "New projects, creative opportunities, spark of brilliant new idea for success.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual awakening, new spiritual practices, renewed passion for growth.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Lack of inspiration, missed opportunities, delays in creative projects.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Lack of passion, delayed romantic opportunities, creative blocks in expressing love.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Missed opportunities, lack of motivation, creative blocks preventing growth.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual apathy, delayed spiritual growth, lack of inspiration in practice.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Two of Wands",
        number: 2,
        suit: "Wands",
        element: "Fire",
        astrology: "Mars in Aries",
        numerology: 2,
        image: "img/big/wands02.jpg",
        keywords: {
            upright: ["Planning", "Future vision", "Personal power", "Discovery", "Control"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Fear of unknown", "Lack of planning", "Playing it safe", "Disorganized thinking"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Planning, future vision, progress, and discovery. Standing at crossroads making strategic plans.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Planning future with partner, long-distance relationships, considering relationship expansion.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Strategic planning, expanding business or career, considering new opportunities abroad.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Planning spiritual journey, exploring new spiritual territories, expanding awareness.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Fear of unknown, lack of planning, indecision about future directions.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Fear of commitment, unwillingness to plan future together, relationship stagnation.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Poor planning, fear of taking risks, playing it too safe professionally.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Lack of spiritual direction, fear of spiritual exploration, stagnation in growth.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Three of Wands",
        number: 3,
        suit: "Wands",
        element: "Fire",
        astrology: "Sun in Aries",
        numerology: 3,
        image: "img/big/wands03.jpg",
        keywords: {
            upright: ["Progress", "Expansion", "Foresight", "Overseas opportunities", "Leadership"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Delays", "Lack of foresight", "Obstacles", "Unexpected problems"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Progress, expansion, foresight, and leadership. Plans coming to fruition with forward momentum.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Long-distance relationships progressing, expansion of relationship, foresight in love.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Career expansion, overseas opportunities, leadership roles, progress in business ventures.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual expansion, sharing spiritual knowledge, leadership in spiritual community.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Delays in progress, lack of foresight, obstacles preventing expansion.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Relationship delays, obstacles in long-distance love, lack of relationship foresight.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Career delays, obstacles to expansion, lack of business foresight, missed opportunities.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual delays, obstacles to expansion, lack of spiritual foresight.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Four of Wands",
        number: 4,
        suit: "Wands",
        element: "Fire",
        astrology: "Venus in Aries",
        numerology: 4,
        image: "img/big/wands04.jpg",
        keywords: {
            upright: ["Celebration", "Harmony", "Home", "Community", "Achievements"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Lack of support", "Instability", "Broken relationships", "Cancelled celebrations"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Celebration, harmony, home, community, and achievements. Milestone celebrations and stability.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Relationship milestones, engagement, moving in together, harmonious partnership, family support.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Work achievements, team harmony, stable work environment, career milestones worth celebrating.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual community, celebrating spiritual achievements, harmony in spiritual practice.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Lack of support, instability, broken relationships, cancelled celebrations.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Relationship instability, lack of family support, broken engagements, cancelled wedding plans.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Workplace instability, lack of team support, cancelled work celebrations, career setbacks.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Lack of spiritual community support, spiritual instability, cancelled spiritual events.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Five of Wands",
        number: 5,
        suit: "Wands",
        element: "Fire",
        astrology: "Saturn in Leo",
        numerology: 5,
        image: "img/big/wands05.jpg",
        keywords: {
            upright: ["Competition", "Conflict", "Disagreements", "Challenges", "Rivalry"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Resolution", "Compromise", "End of conflict", "Avoiding competition"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Competition, conflict, disagreements, and challenges. Competitive environment with multiple opposing forces.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Relationship conflicts, competition for partner's attention, disagreements, rivalry in love.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Workplace competition, conflicts with colleagues, competitive business environment.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual conflicts, disagreements about beliefs, competition in spiritual community.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Resolution of conflicts, compromise, end of competition, avoiding confrontation.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Resolving relationship conflicts, compromise in love, end of romantic rivalry.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Workplace conflict resolution, compromise with colleagues, avoiding office politics.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Resolving spiritual conflicts, compromise in beliefs, avoiding spiritual confrontation.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Six of Wands",
        number: 6,
        suit: "Wands",
        element: "Fire",
        astrology: "Jupiter in Leo",
        numerology: 6,
        image: "img/big/wands06.jpg",
        keywords: {
            upright: ["Victory", "Success", "Recognition", "Achievement", "Leadership"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Defeat", "Lack of recognition", "Private achievement", "Self-doubt"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Victory, success, recognition, and achievement. Public acclaim and triumphant leadership.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Successful relationships, recognition of love, victory over relationship obstacles.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Career success, public recognition, leadership achievement, professional victory.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual success, recognition of spiritual achievements, leadership in spiritual matters.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Defeat, lack of recognition, private achievement, self-doubt about success.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Relationship defeats, lack of recognition in love, private romantic achievements.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Career defeats, lack of professional recognition, private work achievements, self-doubt.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual defeats, lack of recognition for spiritual work, private spiritual achievements.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Seven of Wands",
        number: 7,
        suit: "Wands",
        element: "Fire",
        astrology: "Mars in Leo",
        numerology: 7,
        image: "img/big/wands07.jpg",
        keywords: {
            upright: ["Defense", "Perseverance", "Standing ground", "Competition", "Courage"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Giving up", "Overwhelmed", "Lack of courage", "Retreat"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Defense, perseverance, standing your ground, and courage. Fighting for your position against opposition.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Defending relationship, standing up for partner, persevering through love challenges.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Defending work position, standing up to workplace challenges, persevering through competition.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Defending spiritual beliefs, standing ground in spiritual matters, persevering through tests.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Giving up, feeling overwhelmed, lack of courage, retreating from challenges.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Giving up on relationship, overwhelmed by love challenges, retreating from romantic defense.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Giving up on career goals, overwhelmed by work challenges, retreating from competition.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Giving up on spiritual path, overwhelmed by spiritual challenges, retreating from beliefs.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Eight of Wands",
        number: 8,
        suit: "Wands",
        element: "Fire",
        astrology: "Mercury in Sagittarius",
        numerology: 8,
        image: "img/big/wands08.jpg",
        keywords: {
            upright: ["Speed", "Progress", "Quick action", "Communication", "Movement"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Delays", "Slow progress", "Miscommunication", "Impatience"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Speed, progress, quick action, and movement. Rapid developments and swift communication.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Fast-moving romance, quick relationship progress, communication flowing, love letters.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Rapid career progress, quick business decisions, fast communication, swift opportunities.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Rapid spiritual progress, quick spiritual insights, swift spiritual communication.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Delays, slow progress, miscommunication, impatience with pace of change.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Relationship delays, slow romantic progress, miscommunication with partner, impatience in love.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Career delays, slow business progress, workplace miscommunication, impatience with advancement.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual delays, slow spiritual progress, miscommunication in spiritual matters.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Nine of Wands",
        number: 9,
        suit: "Wands",
        element: "Fire",
        astrology: "Moon in Sagittarius",
        numerology: 9,
        image: "img/big/wands09.jpg",
        keywords: {
            upright: ["Resilience", "Persistence", "Last stand", "Strength", "Determination"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Exhaustion", "Giving up", "Lack of resources", "Paranoia"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Resilience, persistence, last stand, and determination. Standing strong despite challenges.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Relationship resilience, persistence in love, standing strong through romantic challenges.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Career persistence, professional resilience, standing strong through work challenges.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual resilience, persistence in practice, standing strong through spiritual tests.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Exhaustion, giving up, lack of resources, paranoia about further challenges.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Relationship exhaustion, giving up on love, paranoia about partner's intentions.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Career exhaustion, giving up on professional goals, workplace paranoia.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual exhaustion, giving up on spiritual path, paranoia about spiritual challenges.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Ten of Wands",
        number: 10,
        suit: "Wands",
        element: "Fire",
        astrology: "Saturn in Sagittarius",
        numerology: 10,
        image: "img/big/wands10.jpg",
        keywords: {
            upright: ["Burden", "Responsibility", "Hard work", "Stress", "Achievement"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Release", "Delegation", "Avoiding responsibility", "Shortcuts"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Burden, responsibility, hard work, and stress. Carrying heavy load but approaching success.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Relationship burdens, taking on too much responsibility in love, stress from partnership.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Work burdens, heavy professional responsibilities, career stress, approaching major achievement.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual burdens, taking on spiritual responsibility for others, stress in spiritual practice.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Release of burdens, delegation, avoiding responsibility, taking shortcuts.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Releasing relationship burdens, delegating responsibilities in partnership, avoiding commitment.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Releasing work burdens, delegating professional responsibilities, avoiding career commitment.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Releasing spiritual burdens, delegating spiritual responsibilities, avoiding spiritual commitment.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Page of Wands",
        number: 11,
        suit: "Wands",
        element: "Fire",
        astrology: "Earth of Fire",
        numerology: 11,
        image: "img/big/wands11.jpg",
        keywords: {
            upright: ["Enthusiasm", "Exploration", "Discovery", "Learning", "Adventure"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Lack of direction", "Impatience", "Procrastination", "Pessimism"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Enthusiasm, exploration, discovery, and adventure. Young energy ready to learn and explore.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Enthusiastic approach to love, exploring romantic possibilities, discovering love interests.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Career exploration, enthusiastic learning, discovering professional passions, adventurous work approach.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual exploration, enthusiastic learning, discovering spiritual interests, adventurous practice.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Lack of direction, impatience, procrastination, pessimism about new ventures.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Lack of romantic direction, impatience in love, procrastinating on relationship decisions.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Lack of career direction, impatience with learning, procrastinating on professional development.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Lack of spiritual direction, impatience with spiritual learning, procrastinating on practice.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Knight of Wands",
        number: 12,
        suit: "Wands",
        element: "Fire",
        astrology: "Air of Fire",
        numerology: 12,
        image: "img/big/wands12.jpg",
        keywords: {
            upright: ["Action", "Adventure", "Impulsiveness", "Energy", "Passion"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Recklessness", "Impatience", "Lack of self-control", "Anger"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Action, adventure, impulsiveness, and passion. Quick to act with fiery energy.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Passionate romance, adventurous love, impulsive romantic actions, energetic courtship.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Taking action in career, adventurous professional moves, passionate about work, energetic approach.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Taking spiritual action, adventurous spiritual practice, passionate about beliefs, energetic growth.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Recklessness, impatience, lack of self-control, anger affecting judgment.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Reckless romantic behavior, impatience in relationships, anger issues affecting love.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Reckless career moves, impatience with progress, anger issues at work, lack of professional control.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Reckless spiritual behavior, impatience with spiritual progress, spiritual anger.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Queen of Wands",
        number: 13,
        suit: "Wands",
        element: "Fire",
        astrology: "Water of Fire",
        numerology: 13,
        image: "img/big/wands13.jpg",
        keywords: {
            upright: ["Confidence", "Independence", "Determination", "Leadership", "Warmth"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Jealousy", "Selfishness", "Insecurity", "Demanding", "Bitchy"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Confidence, independence, determination, and leadership. Warm, charismatic leader with creative vision.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Confident in love, independent partner, determined about relationships, warm romantic leadership.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Professional confidence, independent work style, determined career goals, warm leadership.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual confidence, independent spiritual path, determined about beliefs, warm spiritual leadership.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Jealousy, selfishness, insecurity, being demanding or difficult.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Jealous in relationships, selfish romantic behavior, insecurity affecting love, demanding partner.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Workplace jealousy, selfish professional behavior, insecurity affecting work, demanding leadership.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual jealousy, selfish spiritual behavior, insecurity about beliefs, demanding spiritual attitude.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "King of Wands",
        number: 14,
        suit: "Wands",
        element: "Fire",
        astrology: "Fire of Fire",
        numerology: 14,
        image: "img/big/wands14.jpg",
        keywords: {
            upright: ["Leadership", "Vision", "Entrepreneurship", "Charisma", "Success"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Domineering", "Arrogance", "Impulsiveness", "Lack of vision", "Tyranny"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Leadership, vision, entrepreneurship, and charisma. Successful leader with clear vision and natural authority.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Leadership in relationships, visionary about love, charismatic romantic partner, successful partnerships.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Professional leadership, entrepreneurial success, charismatic business approach, visionary career goals.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual leadership, visionary spiritual approach, charismatic spiritual presence, successful spiritual development.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Domineering behavior, arrogance, impulsiveness, lack of vision, tyrannical leadership.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Domineering in relationships, arrogant romantic behavior, impulsive love decisions, controlling partner.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Domineering leadership, professional arrogance, impulsive business decisions, tyrannical management.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Domineering spiritual behavior, spiritual arrogance, impulsive spiritual decisions, spiritual tyranny.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },

    // Minor Arcana - Cups (Water) - 14 cards
    {
        name: "Ace of Cups",
        number: 1,
        suit: "Cups",
        element: "Water",
        astrology: "Water signs",
        numerology: 1,
        image: "img/big/cups01.jpg",
        keywords: {
            upright: ["New emotions", "Intuition", "Love", "Compassion", "Creativity"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Blocked emotions", "Emptiness", "Lack of love", "Creative block"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "New emotions, intuition, love, compassion, and creative beginnings. Fresh outpouring of emotional energy.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "New love, emotional fulfillment, deepening emotional connection in relationships.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Creative inspiration, working with compassion, new opportunities in caring professions.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Emotional awakening, divine love, new intuitive abilities opening up.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Blocked emotions, emptiness, creative block affecting emotional expression.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Emotional numbness, unrequited love, difficulty expressing feelings.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Creative blocks, lack of inspiration, difficulty connecting emotionally with work.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Emotional blockages preventing spiritual growth, disconnection from divine love.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Two of Cups",
        number: 2,
        suit: "Cups",
        element: "Water",
        astrology: "Venus in Cancer",
        numerology: 2,
        image: "img/big/cups02.jpg",
        keywords: {
            upright: ["Unity", "Partnership", "Connection", "Mutual attraction", "Cooperation"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Disharmony", "Imbalance", "Broken partnership", "Self-love issues"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Unity, partnership, connection, and mutual attraction. Harmonious bond built on mutual respect.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Soul mate connections, engagement, deep mutual love and respect, perfect romantic partnership.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Successful partnerships, teamwork, finding perfect business partner or collaborator.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual partnerships, finding spiritual community, balance between giving and receiving spiritually.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Discord, imbalance, broken partnership affecting harmony.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Relationship problems, breakups, incompatibility, unrequited love, relationship imbalance.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Partnership problems, workplace conflicts, difficulties with teamwork and collaboration.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual isolation, difficulty finding spiritual community, imbalance in spiritual relationships.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Three of Cups",
        number: 3,
        suit: "Cups",
        element: "Water",
        astrology: "Mercury in Cancer",
        numerology: 3,
        image: "img/big/cups03.jpg",
        keywords: {
            upright: ["Friendship", "Community", "Celebration", "Support", "Social gatherings"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Isolation", "Loneliness", "Cancelled plans", "Lack of support"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Friendship, community, celebration, and support. Joy shared with others and social connections.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Celebrating love with friends, community support for relationship, social romantic events.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Team celebrations, workplace friendships, community support for career, networking success.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual community, celebrating spiritual achievements with others, supported spiritual practice.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Isolation, loneliness, cancelled plans, lack of support from community.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Isolation in relationships, lack of friend support for romance, cancelled romantic social events.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Workplace isolation, lack of team support, cancelled work celebrations, networking difficulties.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual isolation, lack of spiritual community support, cancelled spiritual gatherings.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Four of Cups",
        number: 4,
        suit: "Cups",
        element: "Water",
        astrology: "Moon in Cancer",
        numerology: 4,
        image: "img/big/cups04.jpg",
        keywords: {
            upright: ["Apathy", "Contemplation", "Boredom", "Missed opportunities", "Introspection"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Renewed interest", "Motivation", "New opportunities", "Awareness"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Apathy, contemplation, boredom, and missed opportunities. Discontentment with current situation.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Relationship apathy, boredom in love, missing romantic opportunities, taking partner for granted.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Career apathy, boredom at work, missing professional opportunities, job dissatisfaction.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual apathy, boredom with practice, missing spiritual opportunities, spiritual dissatisfaction.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Renewed interest, motivation, new opportunities, awareness of possibilities.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Renewed romantic interest, motivation in relationships, awareness of love opportunities.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Renewed career interest, professional motivation, awareness of work opportunities.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Renewed spiritual interest, motivation in practice, awareness of spiritual opportunities.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Five of Cups",
        number: 5,
        suit: "Cups",
        element: "Water",
        astrology: "Mars in Scorpio",
        numerology: 5,
        image: "img/big/cups05.jpg",
        keywords: {
            upright: ["Loss", "Grief", "Disappointment", "Regret", "Emotional pain"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Recovery", "Forgiveness", "Moving on", "Acceptance", "Learning"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Loss, grief, disappointment, and regret. Emotional pain from loss but hope remains.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Romantic loss, breakup grief, disappointment in love, regret over relationship decisions.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Career loss, professional disappointment, workplace grief, regret over work decisions.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual loss, disappointment in spiritual path, grief over spiritual setbacks.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Recovery from loss, forgiveness, moving on, acceptance, learning from experience.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Recovery from romantic loss, forgiving ex-partner, moving on from breakup, accepting love endings.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Recovery from career loss, forgiving workplace issues, moving on from job disappointment.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Recovery from spiritual loss, forgiving spiritual disappointments, moving on from setbacks.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Six of Cups",
        number: 6,
        suit: "Cups",
        element: "Water",
        astrology: "Sun in Scorpio",
        numerology: 6,
        image: "img/big/cups06.jpg",
        keywords: {
            upright: ["Nostalgia", "Childhood", "Innocence", "Reunion", "Happy memories"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Living in past", "Stuck in childhood", "Unrealistic expectations", "Naivety"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Nostalgia, childhood memories, innocence, and reunion. Pleasant memories bringing joy.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Childhood sweethearts, nostalgic romance, innocent love, reunion with past love.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Nostalgic about past work, reunion with former colleagues, innocent approach to career.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Nostalgic about spiritual beginnings, innocent spiritual approach, reunion with spiritual past.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Living in past, stuck in childhood patterns, unrealistic expectations, excessive naivety.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Stuck in past relationships, unrealistic romantic expectations, immature love approach.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Stuck in past career patterns, unrealistic professional expectations, immature work approach.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Stuck in past spiritual patterns, unrealistic spiritual expectations, immature spiritual approach.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Seven of Cups",
        number: 7,
        suit: "Cups",
        element: "Water",
        astrology: "Venus in Scorpio",
        numerology: 7,
        image: "img/big/cups07.jpg",
        keywords: {
            upright: ["Illusion", "Choices", "Wishful thinking", "Fantasy", "Options"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Clarity", "Decision made", "Reality check", "Focus", "Commitment"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Illusion, choices, wishful thinking, and fantasy. Many options but confusion about reality.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Romantic illusions, too many love choices, fantasy about relationships, wishful romantic thinking.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Career illusions, too many professional options, fantasy about work, wishful career thinking.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual illusions, too many spiritual choices, fantasy about spiritual path, wishful thinking.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Clarity emerging, decision made, reality check, focus, commitment to path.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Romantic clarity, choosing one love interest, reality check about relationships, commitment to partner.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Career clarity, choosing professional path, reality check about work, commitment to career goals.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual clarity, choosing spiritual path, reality check about beliefs, commitment to practice.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Eight of Cups",
        number: 8,
        suit: "Cups",
        element: "Water",
        astrology: "Saturn in Pisces",
        numerology: 8,
        image: "img/big/cups08.jpg",
        keywords: {
            upright: ["Abandonment", "Walking away", "Seeking truth", "Spiritual quest", "Disappointment"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Fear of change", "Stagnation", "Avoidance", "Returning to past"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Abandonment, walking away, seeking truth, and spiritual quest. Leaving behind what no longer serves.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Walking away from unfulfilling relationship, seeking deeper romantic truth, abandoning false love.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Leaving unsatisfying job, seeking meaningful work, abandoning unfulfilling career path.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Abandoning false spiritual path, seeking deeper spiritual truth, spiritual quest for meaning.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Fear of change, stagnation, avoidance, returning to past situations.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Fear of leaving relationship, avoiding romantic change, returning to ex-partner.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Fear of leaving job, avoiding career change, returning to old workplace.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Fear of spiritual change, avoiding spiritual growth, returning to old spiritual beliefs.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Nine of Cups",
        number: 9,
        suit: "Cups",
        element: "Water",
        astrology: "Jupiter in Pisces",
        numerology: 9,
        image: "img/big/cups09.jpg",
        keywords: {
            upright: ["Satisfaction", "Contentment", "Gratitude", "Emotional fulfillment", "Wishes fulfilled"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Dissatisfaction", "Greed", "Materialism", "Unfulfilled desires", "Lack of gratitude"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Satisfaction, contentment, gratitude, and emotional fulfillment. Wishes coming true and deep satisfaction.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Romantic satisfaction, contentment in love, grateful for partner, emotional fulfillment in relationships.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Career satisfaction, contentment with work, grateful for professional success, fulfilled ambitions.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual satisfaction, contentment with practice, grateful for spiritual growth, fulfilled spiritual wishes.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Dissatisfaction, greed, materialism, unfulfilled desires, lack of gratitude.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Romantic dissatisfaction, greed in relationships, materalistic approach to love, ungrateful for partner.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Career dissatisfaction, greed for more success, materialistic work approach, ungrateful for achievements.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual dissatisfaction, greed for spiritual advancement, materialistic spiritual approach.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Ten of Cups",
        number: 10,
        suit: "Cups",
        element: "Water",
        astrology: "Mars in Pisces",
        numerology: 10,
        image: "img/big/cups10.jpg",
        keywords: {
            upright: ["Happiness", "Family", "Harmony", "Emotional fulfillment", "Domestic bliss"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Family problems", "Disharmony", "Broken home", "Unfulfilled relationships"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Happiness, family harmony, emotional fulfillment, and domestic bliss. Perfect emotional contentment.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Happy family life, harmonious relationships, emotional fulfillment in love, domestic happiness.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Work-family balance, harmonious workplace, career supporting family happiness.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual family, harmonious spiritual community, emotional fulfillment through spiritual practice.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Family problems, disharmony, broken home, unfulfilled relationships.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Family relationship problems, romantic disharmony, broken home, unfulfilled romantic relationships.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Work-family conflicts, workplace disharmony, career problems affecting family.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual family problems, disharmony in spiritual community, unfulfilled spiritual relationships.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Page of Cups",
        number: 11,
        suit: "Cups",
        element: "Water",
        astrology: "Earth of Water",
        numerology: 11,
        image: "img/big/cups11.jpg",
        keywords: {
            upright: ["Emotional messages", "Intuition", "Creativity", "Sensitivity", "Spiritual messages"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Emotional immaturity", "Moodiness", "Blocked intuition", "Creative blocks"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Emotional messages, intuition, creativity, and sensitivity. Young emotional energy bringing new insights.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Romantic messages, intuitive approach to love, creative romance, sensitive to partner's needs.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Creative work opportunities, intuitive career approach, sensitive to workplace emotions.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual messages, intuitive spiritual approach, creative spiritual expression, sensitive to spiritual energy.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Emotional immaturity, moodiness, blocked intuition, creative blocks.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Immature romantic behavior, moody in relationships, blocked romantic intuition.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Immature work behavior, moody at workplace, blocked creative intuition.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Immature spiritual behavior, moody about spiritual practice, blocked spiritual intuition.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Knight of Cups",
        number: 12,
        suit: "Cups",
        element: "Water",
        astrology: "Air of Water",
        numerology: 12,
        image: "img/big/cups12.jpg",
        keywords: {
            upright: ["Romance", "Charm", "Idealism", "Following heart", "Emotional pursuit"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Moodiness", "Unrealistic", "Jealousy", "Brooding", "Emotional manipulation"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Romance, charm, idealism, and following heart. Emotional pursuit with romantic idealism.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Romantic pursuit, charming courtship, idealistic about love, following heart in romance.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Following heart in career, romantic approach to work, charming professional demeanor.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Following heart in spiritual practice, romantic approach to spirituality, charming spiritual presence.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Moodiness, unrealistic expectations, jealousy, brooding, emotional manipulation.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Moody romantic behavior, unrealistic love expectations, jealousy in relationships, emotional manipulation.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Moody work behavior, unrealistic career expectations, workplace jealousy, emotional work manipulation.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Moody spiritual behavior, unrealistic spiritual expectations, spiritual jealousy, emotional spiritual manipulation.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Queen of Cups",
        number: 13,
        suit: "Cups",
        element: "Water",
        astrology: "Water of Water",
        numerology: 13,
        image: "img/big/cups13.jpg",
        keywords: {
            upright: ["Intuition", "Compassion", "Emotional security", "Nurturing", "Psychic abilities"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Emotional insecurity", "Martyrdom", "Moodiness", "Lack of boundaries"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Intuition, compassion, emotional security, and nurturing. Emotionally mature with strong psychic abilities.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Nurturing romantic partner, emotionally secure in love, intuitive about relationships, compassionate lover.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Nurturing leadership, emotionally secure at work, intuitive business decisions, compassionate management.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Nurturing spiritual presence, emotionally secure in beliefs, intuitive spiritual guidance, compassionate practice.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Emotional insecurity, martyrdom, moodiness, lack of emotional boundaries.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Emotionally insecure in relationships, martyr complex in love, moody romantic behavior, poor boundaries.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Emotionally insecure at work, martyr complex professionally, moody workplace behavior, poor work boundaries.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Emotionally insecure spiritually, spiritual martyrdom, moody about practice, poor spiritual boundaries.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "King of Cups",
        number: 14,
        suit: "Cups",
        element: "Water",
        astrology: "Fire of Water",
        numerology: 14,
        image: "img/big/cups14.jpg",
        keywords: {
            upright: ["Emotional balance", "Compassion", "Diplomacy", "Calm", "Wisdom"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Emotional manipulation", "Moodiness", "Lack of emotional control", "Suppressed emotions"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Emotional balance, compassion, diplomacy, and wisdom. Emotionally mature leader with calm presence.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Emotionally balanced partner, compassionate in love, diplomatic in relationships, wise romantic counsel.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Emotionally balanced leadership, compassionate management, diplomatic business approach, wise professional decisions.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Emotionally balanced spiritual leadership, compassionate spiritual guidance, diplomatic spiritual approach, wise spiritual counsel.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Emotional manipulation, moodiness, lack of emotional control, suppressed emotions.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Emotional manipulation in relationships, moody romantic behavior, lack of emotional control in love.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Emotional manipulation at work, moody leadership, lack of emotional control professionally.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Emotional manipulation spiritually, moody spiritual behavior, lack of emotional control in practice.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },

    // Minor Arcana - Swords (Air) - 14 cards
    {
        name: "Ace of Swords",
        number: 1,
        suit: "Swords",
        element: "Air",
        astrology: "Air signs",
        numerology: 1,
        image: "img/big/swords01.jpg",
        keywords: {
            upright: ["New ideas", "Mental clarity", "Breakthrough", "Communication", "Truth"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Confusion", "Chaos", "Lack of clarity", "Misinformation"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "New ideas, clarity, breakthrough, and truth. Moment of mental clarity or decisive insight.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Clear communication in relationships, breakthrough understanding, new intellectual connections with partners.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "New ideas, breakthrough innovations, clear thinking, success through mental acuity and communication.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Mental clarity about spiritual matters, breakthrough insights, truth revelation.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Confusion, chaos, misused mental power leading to poor decisions.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Miscommunication in relationships, mental games, unclear thinking affecting relationship decisions.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Confusion, poor communication, mental fog affecting professional judgment.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Mental confusion about spiritual matters, false insights, overthinking spiritual concepts.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Two of Swords",
        number: 2,
        suit: "Swords",
        element: "Air",
        astrology: "Moon in Libra",
        numerology: 2,
        image: "img/big/swords02.jpg",
        keywords: {
            upright: ["Indecision", "Stalemate", "Blocked emotions", "Difficult choice"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Decision made", "Confusion cleared", "Information revealed", "Emotional release"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Indecision, stalemate, being at crossroads where difficult choice needs to be made.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Indecision about relationship, avoiding difficult conversations, being torn between two people.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Difficult career choices, workplace dilemmas, avoiding necessary business decisions.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Being torn between different spiritual paths, avoiding difficult spiritual truths.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Finally making decision, confusion clearing, information being revealed.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Making relationship decision, ending indecision, communication opening up.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Breaking through indecision, new information helping career choices, resolving workplace dilemmas.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual clarity emerging, making spiritual decisions, releasing spiritual confusion.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Three of Swords",
        number: 3,
        suit: "Swords",
        element: "Air",
        astrology: "Saturn in Libra",
        numerology: 3,
        image: "img/big/swords03.jpg",
        keywords: {
            upright: ["Heartbreak", "Sorrow", "Grief", "Betrayal", "Emotional pain"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Recovery", "Forgiveness", "Healing", "Moving on", "Optimism"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Heartbreak, sorrow, grief, and betrayal. Deep emotional pain from loss or betrayal.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Romantic heartbreak, betrayal by partner, painful breakup, love triangle causing sorrow.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Professional betrayal, workplace heartbreak, career disappointment, betrayal by colleagues.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual heartbreak, betrayal of spiritual trust, sorrow over spiritual loss.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Recovery from heartbreak, forgiveness, healing, moving on, returning optimism.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Recovering from romantic heartbreak, forgiving partner's betrayal, healing from love pain.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Recovering from professional betrayal, healing workplace relationships, moving on from career disappointment.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Recovering from spiritual heartbreak, forgiving spiritual betrayal, healing spiritual wounds.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Four of Swords",
        number: 4,
        suit: "Swords",
        element: "Air",
        astrology: "Jupiter in Libra",
        numerology: 4,
        image: "img/big/swords04.jpg",
        keywords: {
            upright: ["Rest", "Meditation", "Recovery", "Passive", "Contemplation"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Restlessness", "Burnout", "Lack of progress", "Stagnation"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Rest, meditation, recovery, and contemplation. Period of mental rest and passive reflection.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Taking break from relationships, contemplating love life, resting from romantic drama.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Taking career break, contemplating professional future, recovering from work stress.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual rest, meditation retreat, contemplating spiritual path, recovering from spiritual intensity.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Restlessness, burnout, lack of progress, stagnation from too much inactivity.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Restlessness in relationships, burnout from romantic drama, lack of relationship progress.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Professional restlessness, burnout from overwork, lack of career progress, workplace stagnation.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual restlessness, burnout from spiritual practice, lack of spiritual progress.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Five of Swords",
        number: 5,
        suit: "Swords",
        element: "Air",
        astrology: "Venus in Aquarius",
        numerology: 5,
        image: "img/big/swords05.jpg",
        keywords: {
            upright: ["Conflict", "Defeat", "Betrayal", "Win at all costs", "Dishonor"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Reconciliation", "Making amends", "Learning from defeat", "Moving on"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Conflict, defeat, betrayal, and dishonor. Victory achieved through questionable means.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Relationship conflicts, betrayal in love, winning arguments but losing love, dishonor in romance.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Workplace conflicts, professional betrayal, winning at expense of others, dishonor at work.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual conflicts, betrayal of spiritual principles, winning arguments but losing spiritual ground.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Reconciliation, making amends, learning from defeat, moving on from conflict.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Reconciling after relationship conflict, making amends to partner, learning from romantic mistakes.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Workplace reconciliation, making amends for professional mistakes, learning from career defeats.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual reconciliation, making amends for spiritual mistakes, learning from spiritual defeats.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Six of Swords",
        number: 6,
        suit: "Swords",
        element: "Air",
        astrology: "Mercury in Aquarius",
        numerology: 6,
        image: "img/big/swords06.jpg",
        keywords: {
            upright: ["Transition", "Moving on", "Travel", "Mental shift", "Leaving behind"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Stuck in past", "Resistance to change", "Unfinished business", "Rough transition"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Transition, moving on, travel, and mental shift. Moving away from difficulties toward calmer waters.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Transitioning in relationships, moving on from past love, traveling with partner, mental shift about romance.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Career transition, moving to new job, business travel, mental shift about professional goals.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual transition, moving on from old beliefs, spiritual journey, mental shift about practice.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Stuck in past, resistance to change, unfinished business, rough transition.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Stuck in past relationships, resistance to romantic change, unfinished romantic business.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Stuck in old career patterns, resistance to professional change, unfinished work business.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Stuck in old spiritual patterns, resistance to spiritual change, unfinished spiritual business.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Seven of Swords",
        number: 7,
        suit: "Swords",
        element: "Air",
        astrology: "Moon in Aquarius",
        numerology: 7,
        image: "img/big/swords07.jpg",
        keywords: {
            upright: ["Deception", "Theft", "Stealth", "Strategy", "Acting alone"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Getting caught", "Confession", "Returning stolen goods", "Coming clean"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Deception, theft, stealth, and strategy. Acting alone with questionable methods.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Deception in relationships, emotional theft, stealth romantic behavior, secret love affairs.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Workplace deception, theft of ideas, stealth professional behavior, going it alone at work.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual deception, theft of spiritual concepts, stealth spiritual behavior, going alone spiritually.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Getting caught in deception, confession, returning what was taken, coming clean.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Getting caught in romantic deception, confessing to partner, coming clean about love affairs.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Getting caught in workplace deception, confessing professional mistakes, returning stolen ideas.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Getting caught in spiritual deception, confessing spiritual mistakes, coming clean about beliefs.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Eight of Swords",
        number: 8,
        suit: "Swords",
        element: "Air",
        astrology: "Jupiter in Gemini",
        numerology: 8,
        image: "img/big/swords08.jpg",
        keywords: {
            upright: ["Restriction", "Trapped", "Powerless", "Victim mentality", "Mental prison"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Freedom", "Breaking free", "New perspective", "Self-empowerment"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Restriction, feeling trapped, powerlessness, and victim mentality. Mental prison of own making.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Feeling trapped in relationships, powerless in love, victim mentality about romance.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Feeling trapped at work, powerless professionally, victim mentality about career.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Feeling trapped spiritually, powerless in spiritual practice, victim mentality about beliefs.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Breaking free from restrictions, gaining new perspective, self-empowerment, finding freedom.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Breaking free from relationship restrictions, gaining new romantic perspective, empowering love choices.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Breaking free from career restrictions, gaining new professional perspective, empowering work choices.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Breaking free from spiritual restrictions, gaining new spiritual perspective, empowering spiritual choices.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Nine of Swords",
        number: 9,
        suit: "Swords",
        element: "Air",
        astrology: "Mars in Gemini",
        numerology: 9,
        image: "img/big/swords09.jpg",
        keywords: {
            upright: ["Anxiety", "Worry", "Nightmares", "Mental anguish", "Despair"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Recovery", "Hope", "Healing", "Seeking help", "Inner turmoil resolving"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Anxiety, worry, nightmares, and mental anguish. Overwhelmed by negative thoughts and despair.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Anxiety about relationships, worry about partner, romantic nightmares, despair about love.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Work anxiety, worry about professional future, career nightmares, despair about work situation.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual anxiety, worry about spiritual path, spiritual nightmares, despair about beliefs.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Recovery from anxiety, hope returning, healing mental anguish, seeking help.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Recovery from relationship anxiety, hope returning to love life, healing romantic despair.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Recovery from work anxiety, hope returning to career, healing professional despair.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Recovery from spiritual anxiety, hope returning to spiritual practice, healing spiritual despair.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Ten of Swords",
        number: 10,
        suit: "Swords",
        element: "Air",
        astrology: "Sun in Gemini",
        numerology: 10,
        image: "img/big/swords10.jpg",
        keywords: {
            upright: ["Rock bottom", "Betrayal", "Painful ending", "Backstabbing", "Defeat"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Recovery", "Regeneration", "Healing", "Learning from pain", "New dawn"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Rock bottom, betrayal, painful ending, and defeat. Complete mental/emotional breakdown.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Rock bottom in relationships, romantic betrayal, painful relationship ending, love defeat.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Career rock bottom, professional betrayal, painful job ending, workplace defeat.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual rock bottom, betrayal of spiritual trust, painful spiritual ending, spiritual defeat.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Recovery from rock bottom, regeneration, healing, learning from pain, new dawn approaching.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Recovery from romantic rock bottom, healing from love betrayal, learning from relationship pain.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Recovery from career rock bottom, healing from professional betrayal, learning from work pain.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Recovery from spiritual rock bottom, healing from spiritual betrayal, learning from spiritual pain.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Page of Swords",
        number: 11,
        suit: "Swords",
        element: "Air",
        astrology: "Earth of Air",
        numerology: 11,
        image: "img/big/swords11.jpg",
        keywords: {
            upright: ["Curiosity", "Mental energy", "New ideas", "Communication", "Vigilance"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Gossip", "Mental confusion", "Lack of focus", "All talk no action"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Curiosity, mental energy, new ideas, and communication. Eager to learn and share information.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Curious about love, mental connection with partner, communicating new romantic ideas.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Professional curiosity, mental energy at work, communicating new ideas, vigilant about opportunities.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual curiosity, mental approach to spiritual practice, communicating spiritual ideas.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Gossip, mental confusion, lack of focus, all talk with no action.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Romantic gossip, confusion about love, lack of focus in relationships, talking without acting.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Workplace gossip, professional confusion, lack of career focus, talking without professional action.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual gossip, confusion about beliefs, lack of spiritual focus, talking without spiritual action.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Knight of Swords",
        number: 12,
        suit: "Swords",
        element: "Air",
        astrology: "Air of Air",
        numerology: 12,
        image: "img/big/swords12.jpg",
        keywords: {
            upright: ["Ambition", "Action", "Fast thinking", "Impatience", "Determination"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Reckless", "Unfocused", "Impulsive", "Lack of planning", "Aggression"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Ambition, action, fast thinking, and determination. Quick mental action with strong drive.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Ambitious in love, quick romantic decisions, determined pursuit of partner, fast-moving romance.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Professional ambition, quick business decisions, determined career action, fast-paced work approach.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual ambition, quick spiritual decisions, determined spiritual action, fast spiritual progress.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Reckless behavior, unfocused energy, impulsiveness, lack of planning, aggression.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Reckless romantic behavior, unfocused love energy, impulsive relationship decisions, romantic aggression.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Reckless professional behavior, unfocused work energy, impulsive career decisions, workplace aggression.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Reckless spiritual behavior, unfocused spiritual energy, impulsive spiritual decisions, spiritual aggression.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Queen of Swords",
        number: 13,
        suit: "Swords",
        element: "Air",
        astrology: "Water of Air",
        numerology: 13,
        image: "img/big/swords13.jpg",
        keywords: {
            upright: ["Independence", "Clear thinking", "Direct communication", "Honesty", "Perception"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Harsh", "Bitter", "Cold", "Cruel", "Vindictive"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Independence, clear thinking, direct communication, and honesty. Perceptive with sharp intellect.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Independent in relationships, clear thinking about love, direct romantic communication, honest with partner.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Professional independence, clear business thinking, direct work communication, honest leadership.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual independence, clear thinking about beliefs, direct spiritual communication, honest practice.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Harsh behavior, bitterness, coldness, cruelty, vindictive actions.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Harsh in relationships, bitter about love, cold romantic behavior, cruel to partner.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Harsh professional behavior, bitter about work, cold workplace demeanor, cruel leadership.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Harsh spiritual behavior, bitter about beliefs, cold spiritual demeanor, cruel spiritual judgment.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "King of Swords",
        number: 14,
        suit: "Swords",
        element: "Air",
        astrology: "Fire of Air",
        numerology: 14,
        image: "img/big/swords14.jpg",
        keywords: {
            upright: ["Authority", "Intellectual power", "Truth", "Justice", "Clear communication"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Abuse of power", "Manipulation", "Tyranny", "Harsh judgment", "Lack of compassion"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Authority, intellectual power, truth, and justice. Clear communication with fair judgment.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Authoritative in relationships, intellectual approach to love, truthful with partner, just romantic decisions.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Professional authority, intellectual leadership, truthful business practices, just workplace decisions.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual authority, intellectual approach to beliefs, truthful spiritual practice, just spiritual judgment.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Abuse of power, manipulation, tyranny, harsh judgment, lack of compassion.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Abusive relationship behavior, romantic manipulation, tyrannical with partner, harsh romantic judgment.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Abusive professional behavior, workplace manipulation, tyrannical leadership, harsh business judgment.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Abusive spiritual behavior, spiritual manipulation, tyrannical spiritual leadership, harsh spiritual judgment.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },

    // Minor Arcana - Pentacles (Earth) - 14 cards  
    {
        name: "Ace of Pentacles",
        number: 1,
        suit: "Pentacles",
        element: "Earth",
        astrology: "Earth signs",
        numerology: 1,
        image: "img/big/pents01.jpg",
        keywords: {
            upright: ["New opportunities", "Manifestation", "Financial opportunity", "Material gain", "Prosperity"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Missed opportunity", "Financial loss", "Poor planning", "Greed"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "New financial opportunities, security, and manifestation of material goals. Fresh start in material matters.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Relationship offering security and stability, manifestation of desired romantic situation.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "New job opportunities, financial gains, business ventures, manifestation of career goals.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Grounding spiritual energy into material reality, finding abundance through spiritual practice.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Missed opportunities, financial insecurity, poor material planning.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Financial stress affecting love, relationships lacking stability and security.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Missed opportunities, financial setbacks, poor planning affecting professional success.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Difficulty manifesting spiritual goals in material reality, spiritual materialism.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Two of Pentacles",
        number: 2,
        suit: "Pentacles",
        element: "Earth",
        astrology: "Jupiter in Capricorn",
        numerology: 2,
        image: "img/big/pents02.jpg",
        keywords: {
            upright: ["Balance", "Adaptability", "Time management", "Flexibility", "Juggling priorities"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Imbalance", "Overwhelmed", "Financial stress", "Poor time management"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Balance, adaptability, juggling responsibilities, and maintaining equilibrium amidst life's demands.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Balancing relationship needs with other responsibilities, adapting to changes in romantic situations.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Managing multiple projects, work-life balance, adapting to changing workplace demands.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Balancing spiritual practice with material responsibilities, adapting spiritual beliefs to life changes.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Imbalance, being overwhelmed, struggling to manage multiple responsibilities.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Relationship imbalance, neglecting romantic needs due to other priorities, relationship instability.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Being overwhelmed at work, poor work-life balance, inability to manage professional responsibilities.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Imbalance between spiritual and material life, being overwhelmed by spiritual responsibilities.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Three of Pentacles",
        number: 3,
        suit: "Pentacles",
        element: "Earth",
        astrology: "Mars in Capricorn",
        numerology: 3,
        image: "img/big/pents03.jpg",
        keywords: {
            upright: ["Teamwork", "Collaboration", "Building", "Learning", "Craftsmanship"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Lack of teamwork", "Poor collaboration", "Lack of skill", "Working alone"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Teamwork, collaboration, building something lasting, and learning craftsmanship from others.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Building relationship together, collaborating with partner, learning from each other in love.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Professional teamwork, collaborating on projects, building career skills, learning from colleagues.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual collaboration, building spiritual community, learning from spiritual teachers and peers.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Lack of teamwork, poor collaboration, working alone when teamwork needed.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Lack of collaboration in relationships, not building together, poor romantic teamwork.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Poor workplace collaboration, lack of teamwork, not learning from colleagues, working in isolation.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Lack of spiritual collaboration, not building spiritual community, poor spiritual teamwork.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Four of Pentacles",
        number: 4,
        suit: "Pentacles",
        element: "Earth",
        astrology: "Sun in Capricorn",
        numerology: 4,
        image: "img/big/pents04.jpg",
        keywords: {
            upright: ["Security", "Control", "Conserving", "Materialism", "Hoarding"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Generosity", "Sharing", "Letting go", "Financial freedom", "Spending"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Security, control, conserving resources, but also materialism and hoarding.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Controlling in relationships, holding onto security, fear of emotional investment, materialism affecting love.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Financial security, controlling work situation, conservative business approach, hoarding professional resources.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual materialism, hoarding spiritual knowledge, controlling spiritual security, fear of spiritual investment.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Generosity, sharing resources, letting go of control, financial freedom.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Generous in relationships, sharing with partner, letting go of relationship control, emotional freedom.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Professional generosity, sharing work resources, letting go of career control, financial work freedom.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual generosity, sharing spiritual knowledge, letting go of spiritual control, spiritual freedom.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Five of Pentacles",
        number: 5,
        suit: "Pentacles",
        element: "Earth",
        astrology: "Mercury in Taurus",
        numerology: 5,
        image: "img/big/pents05.jpg",
        keywords: {
            upright: ["Financial loss", "Poverty", "Hardship", "Isolation", "Spiritual poverty"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Recovery", "Improvement", "Spiritual richness", "Help received", "End of hardship"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Financial loss, poverty, hardship, and isolation. Material and spiritual poverty.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Financial stress affecting relationships, feeling isolated in love, poverty of emotional connection.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Career hardship, financial loss at work, professional isolation, poverty of career satisfaction.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual poverty, isolation from spiritual community, hardship in spiritual practice.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Recovery from hardship, improvement in situation, spiritual richness, help received.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Recovery from relationship hardship, improvement in love situation, receiving help in romance.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Recovery from career hardship, improvement in work situation, receiving professional help.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Recovery from spiritual hardship, improvement in spiritual situation, receiving spiritual help.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Six of Pentacles",
        number: 6,
        suit: "Pentacles",
        element: "Earth",
        astrology: "Moon in Taurus",
        numerology: 6,
        image: "img/big/pents06.jpg",
        keywords: {
            upright: ["Generosity", "Charity", "Sharing", "Fairness", "Giving and receiving"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Inequality", "Taking advantage", "Debt", "One-sided generosity", "Strings attached"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Generosity, charity, sharing, and fairness. Balanced giving and receiving.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Generous in relationships, sharing with partner, fair romantic exchange, balanced give and take.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Professional generosity, charitable work approach, sharing workplace resources, fair business practices.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual generosity, sharing spiritual gifts, charitable spiritual practice, balanced spiritual exchange.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Inequality, being taken advantage of, debt, one-sided generosity, strings attached to gifts.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Inequality in relationships, being taken advantage of romantically, one-sided romantic giving.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Workplace inequality, being taken advantage of professionally, one-sided professional giving.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual inequality, being taken advantage of spiritually, one-sided spiritual giving.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Seven of Pentacles",
        number: 7,
        suit: "Pentacles",
        element: "Earth",
        astrology: "Saturn in Taurus",
        numerology: 7,
        image: "img/big/pents07.jpg",
        keywords: {
            upright: ["Assessment", "Long-term view", "Investment", "Patience", "Evaluation"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Impatience", "Lack of progress", "Poor investment", "Short-term thinking"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Assessment, long-term view, investment, and patience. Evaluating progress and future potential.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Assessing relationship progress, long-term romantic view, patience with love development, evaluating partner.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Assessing career progress, long-term professional view, patience with career development, evaluating work investments.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Assessing spiritual progress, long-term spiritual view, patience with spiritual development, evaluating spiritual investments.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Impatience with progress, lack of long-term view, poor investments, short-term thinking.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Impatience with relationship progress, short-term romantic thinking, poor emotional investments.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Impatience with career progress, short-term professional thinking, poor career investments.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Impatience with spiritual progress, short-term spiritual thinking, poor spiritual investments.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Eight of Pentacles",
        number: 8,
        suit: "Pentacles",
        element: "Earth",
        astrology: "Sun in Virgo",
        numerology: 8,
        image: "img/big/pents08.jpg",
        keywords: {
            upright: ["Mastery", "Skill development", "Hard work", "Dedication", "Craftsmanship"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Lack of focus", "Poor quality", "Rushed work", "Lack of skill development"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Mastery, skill development, hard work, and dedication. Focused effort on craftsmanship.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Working on relationship skills, dedicating effort to love, mastering romantic communication.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Professional skill development, dedicated work effort, mastering career crafts, focused professional improvement.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Developing spiritual skills, dedicated spiritual practice, mastering spiritual crafts, focused spiritual improvement.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Lack of focus, poor quality work, rushing without skill development.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Lack of focus on relationship skills, poor quality romantic effort, rushing relationship development.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Lack of professional focus, poor quality work, rushing career development without skill building.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Lack of spiritual focus, poor quality spiritual practice, rushing spiritual development.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Nine of Pentacles",
        number: 9,
        suit: "Pentacles",
        element: "Earth",
        astrology: "Venus in Virgo",
        numerology: 9,
        image: "img/big/pents09.jpg",
        keywords: {
            upright: ["Independence", "Self-sufficiency", "Luxury", "Material success", "Discipline"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Dependence", "Financial setbacks", "Lack of self-discipline", "Overspending"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Independence, self-sufficiency, luxury, and material success. Enjoying fruits of disciplined effort.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Independent in relationships, self-sufficient romantically, enjoying luxurious love, successful romantic independence.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Professional independence, self-sufficient career, enjoying work success, disciplined professional achievement.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual independence, self-sufficient practice, enjoying spiritual luxury, disciplined spiritual achievement.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Dependence on others, financial setbacks, lack of self-discipline, overspending.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Dependence in relationships, romantic financial issues, lack of relationship discipline, overspending on love.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Professional dependence, career financial setbacks, lack of work discipline, overspending professionally.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual dependence, spiritual financial issues, lack of spiritual discipline, overspending spiritually.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Ten of Pentacles",
        number: 10,
        suit: "Pentacles",
        element: "Earth",
        astrology: "Mercury in Virgo",
        numerology: 10,
        image: "img/big/pents10.jpg",
        keywords: {
            upright: ["Legacy", "Inheritance", "Family wealth", "Long-term success", "Tradition"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Financial failure", "Family disputes", "Lack of legacy", "Short-term thinking"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Legacy, inheritance, family wealth, and long-term success. Building lasting material foundation.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Family legacy in relationships, inherited romantic traditions, long-term love success, traditional partnerships.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Professional legacy, inherited career advantages, long-term work success, traditional business approaches.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual legacy, inherited spiritual traditions, long-term spiritual success, traditional spiritual practices.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Financial failure, family disputes over money, lack of legacy, short-term thinking.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Family disputes affecting relationships, lack of romantic legacy, short-term relationship thinking.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Career financial failure, family disputes affecting work, lack of professional legacy, short-term career thinking.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual financial failure, family disputes over beliefs, lack of spiritual legacy, short-term spiritual thinking.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Page of Pentacles",
        number: 11,
        suit: "Pentacles",
        element: "Earth",
        astrology: "Earth of Earth",
        numerology: 11,
        image: "img/big/pents11.jpg",
        keywords: {
            upright: ["Study", "Learning", "New financial opportunity", "Manifestation", "Planning"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Lack of progress", "Poor planning", "Procrastination", "Lack of goals"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Study, learning, new financial opportunity, and manifestation. Planning for material success.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Learning about relationships, new romantic opportunities, planning romantic future, manifesting love goals.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Professional learning, new career opportunities, planning career future, manifesting work goals.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual learning, new spiritual opportunities, planning spiritual future, manifesting spiritual goals.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Lack of progress, poor planning, procrastination, lack of clear goals.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Lack of relationship progress, poor romantic planning, procrastinating on love goals.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Lack of career progress, poor professional planning, procrastinating on career goals.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Lack of spiritual progress, poor spiritual planning, procrastinating on spiritual goals.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Knight of Pentacles",
        number: 12,
        suit: "Pentacles",
        element: "Earth",
        astrology: "Air of Earth",
        numerology: 12,
        image: "img/big/pents12.jpg",
        keywords: {
            upright: ["Reliability", "Hard work", "Routine", "Conservatism", "Efficiency"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Laziness", "Obsessiveness", "Inefficiency", "Perfectionism", "Frustration"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Reliability, hard work, routine, and conservatism. Steady, efficient approach to goals.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Reliable romantic partner, hard work in relationships, conservative romantic approach, efficient love efforts.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Professional reliability, hard work at job, conservative career approach, efficient work methods.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Reliable spiritual practice, hard spiritual work, conservative spiritual approach, efficient spiritual methods.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Laziness, obsessiveness, inefficiency, perfectionism causing frustration.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Lazy in relationships, obsessive romantic behavior, inefficient love efforts, perfectionist romantic expectations.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Professional laziness, obsessive work behavior, inefficient work methods, perfectionist career expectations.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual laziness, obsessive spiritual behavior, inefficient spiritual methods, perfectionist spiritual expectations.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "Queen of Pentacles",
        number: 13,
        suit: "Pentacles",
        element: "Earth",
        astrology: "Water of Earth",
        numerology: 13,
        image: "img/big/pents13.jpg",
        keywords: {
            upright: ["Nurturing", "Practical", "Providing", "Down-to-earth", "Resourceful"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Smothering", "Self-care neglect", "Financial dependence", "Jealousy", "Materialism"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Nurturing, practical, providing, and down-to-earth. Resourceful care for others and material security.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Nurturing romantic partner, practical approach to love, providing for partner, down-to-earth romance.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Nurturing leadership, practical work approach, providing workplace security, resourceful professional methods.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Nurturing spiritual presence, practical spiritual approach, providing spiritual security, resourceful spiritual methods.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Smothering behavior, neglecting self-care, financial dependence, jealousy, excessive materialism.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Smothering romantic behavior, neglecting romantic self-care, financial dependence in love, romantic jealousy.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Smothering leadership, neglecting professional self-care, financial work dependence, workplace jealousy.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Smothering spiritual behavior, neglecting spiritual self-care, spiritual financial dependence, spiritual jealousy.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    },
    {
        name: "King of Pentacles",
        number: 14,
        suit: "Pentacles",
        element: "Earth",
        astrology: "Fire of Earth",
        numerology: 14,
        image: "img/big/pents14.jpg",
        keywords: {
            upright: ["Financial success", "Leadership", "Security", "Discipline", "Abundance"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" })),
            reversed: ["Financial failure", "Corruption", "Materialism", "Stubbornness", "Greed"].map(keyword => ({ text: keyword, citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }))
        },
        meanings: {
            upright: {
                general: { "text": "Financial success, leadership, security, and discipline. Abundant material achievement through wise leadership.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Financially successful partner, leadership in relationships, providing romantic security, disciplined love approach.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Professional financial success, strong leadership, providing workplace security, disciplined career approach.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual financial success, spiritual leadership, providing spiritual security, disciplined spiritual approach.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            },
            reversed: {
                general: { "text": "Financial failure, corruption, excessive materialism, stubbornness, greed.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                love: { "text": "Financial problems affecting love, corrupt romantic behavior, materialistic love approach, stubborn romantic behavior.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                career: { "text": "Career financial failure, professional corruption, materialistic work approach, stubborn leadership.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
                spiritual: { "text": "Spiritual financial failure, spiritual corruption, materialistic spiritual approach, stubborn spiritual behavior.", "citation_key": "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
            }
        }
    }
];

// Use the complete deck as the main tarot cards export
const tarotCards = completeTarotDeck;

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