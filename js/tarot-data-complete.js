// Complete 78-Card Tarot Database
// All Major and Minor Arcana with comprehensive meanings

const completeTarotDeck = [
    // MAJOR ARCANA (22 cards)
    {
        name: "The Fool",
        number: 0,
        suit: "Major Arcana",
        element: "Air",
        astrology: "Uranus",
        numerology: 0,
        image: "img/big/maj00.jpg",
        keywords: {
            upright: ["New beginnings", "Innocence", "Spontaneity", "Free spirit", "Adventure"],
            reversed: ["Recklessness", "Taken advantage of", "Inconsideration", "Foolishness"]
        },
        meanings: {
            upright: {
                general: "The Fool represents new beginnings, a leap of faith, innocence, and a free-spirited approach to life. It signifies embarking on a new journey with optimism and a sense of adventure, trusting in the unknown.",
                love: "In love, The Fool suggests a new relationship beginning with excitement and passion. It may indicate taking a leap of faith in romance, being open to love, or approaching relationships with childlike wonder.",
                career: "Professionally, The Fool indicates new career opportunities, starting fresh, or taking an unconventional path. It suggests following your passion rather than convention.",
                spiritual: "Spiritually, The Fool represents the beginning of a spiritual journey, openness to new beliefs, and trusting in divine guidance."
            },
            reversed: {
                general: "In reverse, The Fool suggests recklessness, being taken advantage of, or a naive approach that leads to poor decisions.",
                love: "Reversed in love, The Fool may indicate being too naive in relationships, making poor romantic choices, or being taken advantage of by a partner.",
                career: "Career-wise, reversed suggests poor planning, risky decisions, or being unprepared for new opportunities.",
                spiritual: "Spiritually reversed, The Fool suggests spiritual bypassing, avoiding necessary growth, or being gullible about spiritual matters."
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
        image: "img/big/maj01.jpg",
        keywords: {
            upright: ["Manifestation", "Resourcefulness", "Power", "Inspired action", "Will"],
            reversed: ["Manipulation", "Poor planning", "Untapped talents", "Lack of focus"]
        },
        meanings: {
            upright: {
                general: "The Magician symbolizes manifestation, resourcefulness, power, and inspired action. You have all the tools and abilities necessary to achieve your goals.",
                love: "In relationships, The Magician suggests you have the power to manifest the love you desire. It indicates clear communication and charisma.",
                career: "Professionally, The Magician represents having the skills and resources to succeed. It suggests leadership and innovation.",
                spiritual: "Spiritually, The Magician represents the power of will and focused intention in spiritual practice."
            },
            reversed: {
                general: "Reversed, The Magician suggests manipulation, poor planning, or misuse of power. You may be lacking focus or direction.",
                love: "In love, reversed indicates manipulation or using others for personal gain rather than genuine connection.",
                career: "Career-wise, reversed suggests misusing your position, poor planning, or unfocused efforts.",
                spiritual: "Spiritually reversed, indicates misusing spiritual power or lacking genuine spiritual intention."
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
        image: "img/big/maj02.jpg",
        keywords: {
            upright: ["Intuition", "Sacred knowledge", "Divine feminine", "Subconscious mind"],
            reversed: ["Secrets", "Disconnected from intuition", "Withdrawal", "Silence"]
        },
        meanings: {
            upright: {
                general: "The High Priestess represents intuition, sacred knowledge, and the divine feminine. She encourages you to trust your inner voice and tap into your subconscious mind.",
                love: "In love, The High Priestess suggests deep emotional connections and trusting your intuition about relationships.",
                career: "Professionally, this card indicates following your intuition and inner guidance in career decisions.",
                spiritual: "Spiritually, The High Priestess represents deep spiritual wisdom and connection to the divine feminine."
            },
            reversed: {
                general: "Reversed, The High Priestess suggests disconnection from intuition, keeping secrets, or withdrawing from others.",
                love: "In love, reversed indicates hidden information in relationships or ignoring your intuitive feelings.",
                career: "Career-wise, reversed suggests ignoring your gut feelings or workplace secrets affecting you.",
                spiritual: "Spiritually reversed, indicates disconnection from inner wisdom or spiritual withdrawal."
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
        image: "img/big/maj03.jpg",
        keywords: {
            upright: ["Fertility", "Femininity", "Beauty", "Nature", "Abundance"],
            reversed: ["Creative block", "Dependence on others", "Smothering", "Lack of growth"]
        },
        meanings: {
            upright: {
                general: "The Empress represents fertility, femininity, beauty, nature, and abundance. She signifies creativity, nurturing, and the flourishing of life.",
                love: "In love, The Empress indicates a harmonious, nurturing relationship and possibly pregnancy or new family additions.",
                career: "Professionally, The Empress suggests creative success, working with others, and abundant opportunities.",
                spiritual: "Spiritually, The Empress represents connection to nature and the creative force of the universe."
            },
            reversed: {
                general: "Reversed, The Empress suggests creative blocks, dependence on others, or neglecting self-care.",
                love: "In love, reversed indicates smothering behavior, dependence, or difficulties with fertility.",
                career: "Career-wise, reversed suggests creative blocks, lack of cooperation, or stunted growth.",
                spiritual: "Spiritually reversed, indicates disconnection from nature or creative spiritual expression."
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
            upright: ["Authority", "Establishment", "Structure", "Father figure", "Leadership"],
            reversed: ["Domination", "Excessive control", "Lack of discipline", "Inflexibility"]
        },
        meanings: {
            upright: {
                general: "The Emperor represents authority, establishment, structure, and leadership. He signifies taking control and establishing order.",
                love: "In love, The Emperor indicates a stable, committed relationship with clear boundaries and mutual respect.",
                career: "Professionally, The Emperor suggests leadership roles, authority, and structured approaches to success.",
                spiritual: "Spiritually, The Emperor represents discipline in spiritual practice and establishing spiritual authority."
            },
            reversed: {
                general: "Reversed, The Emperor suggests excessive control, domination, or lack of discipline and structure.",
                love: "In love, reversed indicates controlling behavior, power struggles, or lack of commitment.",
                career: "Career-wise, reversed suggests abuse of authority, inflexibility, or lack of leadership skills.",
                spiritual: "Spiritually reversed, indicates spiritual rigidity or misuse of spiritual authority."
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
        image: "img/big/maj05.jpg",
        keywords: {
            upright: ["Spiritual wisdom", "Religious beliefs", "Conformity", "Tradition", "Institutions"],
            reversed: ["Personal beliefs", "Freedom", "Challenging the status quo"]
        },
        meanings: {
            upright: {
                general: "The Hierophant represents spiritual wisdom, religious beliefs, conformity, and tradition. He signifies learning from established institutions.",
                love: "In love, The Hierophant indicates traditional relationships, marriage, and conventional partnerships.",
                career: "Professionally, The Hierophant suggests working within established systems and following conventional paths.",
                spiritual: "Spiritually, The Hierophant represents traditional religious or spiritual teachings and practices."
            },
            reversed: {
                general: "Reversed, The Hierophant suggests challenging tradition, developing personal beliefs, and seeking freedom from convention.",
                love: "In love, reversed indicates unconventional relationships or challenging traditional relationship norms.",
                career: "Career-wise, reversed suggests breaking from conventional career paths or challenging workplace traditions.",
                spiritual: "Spiritually reversed, indicates developing personal spiritual beliefs outside traditional institutions."
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
        image: "img/big/maj06.jpg",
        keywords: {
            upright: ["Love", "Harmony", "Relationships", "Values alignment", "Choices"],
            reversed: ["Disharmony", "Imbalance", "Misalignment of values", "Bad choices"]
        },
        meanings: {
            upright: {
                general: "The Lovers represents love, harmony, relationships, and important choices. It signifies perfect union and alignment of values.",
                love: "In love, The Lovers indicates a harmonious relationship, soulmate connections, and important relationship decisions.",
                career: "Professionally, The Lovers suggests partnerships, collaboration, and choosing work aligned with your values.",
                spiritual: "Spiritually, The Lovers represents the union of opposites and spiritual partnerships."
            },
            reversed: {
                general: "Reversed, The Lovers suggests disharmony, imbalance, misalignment of values, or poor relationship choices.",
                love: "In love, reversed indicates relationship problems, poor partner choices, or value conflicts.",
                career: "Career-wise, reversed suggests workplace conflicts, poor partnership choices, or values misalignment.",
                spiritual: "Spiritually reversed, indicates spiritual conflicts or choosing the wrong spiritual path."
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
        image: "img/big/maj07.jpg",
        keywords: {
            upright: ["Control", "Will power", "Success", "Determination", "Direction"],
            reversed: ["Lack of control", "Lack of direction", "Aggression"]
        },
        meanings: {
            upright: {
                general: "The Chariot represents control, willpower, success, and determination. It signifies overcoming obstacles through focused effort.",
                love: "In love, The Chariot indicates taking control of your romantic life and successfully pursuing your desires.",
                career: "Professionally, The Chariot suggests career success through determination and focused effort.",
                spiritual: "Spiritually, The Chariot represents mastery over the self and spiritual progress through discipline."
            },
            reversed: {
                general: "Reversed, The Chariot suggests lack of control, direction, or excessive aggression and forcefulness.",
                love: "In love, reversed indicates lack of direction in relationships or trying too hard to control outcomes.",
                career: "Career-wise, reversed suggests lack of focus, direction, or being too aggressive in professional pursuits.",
                spiritual: "Spiritually reversed, indicates lack of spiritual direction or trying to force spiritual growth."
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
        image: "img/big/maj08.jpg",
        keywords: {
            upright: ["Strength", "Courage", "Patience", "Control", "Compassion"],
            reversed: ["Self doubt", "Low energy", "Raw emotion"]
        },
        meanings: {
            upright: {
                general: "Strength represents inner strength, courage, patience, and control. It signifies overcoming challenges through gentle power and compassion.",
                love: "In love, Strength indicates a strong, patient approach to relationships and overcoming romantic challenges with compassion.",
                career: "Professionally, Strength suggests overcoming workplace challenges with patience and inner strength.",
                spiritual: "Spiritually, Strength represents mastery over base impulses and spiritual courage."
            },
            reversed: {
                general: "Reversed, Strength suggests self-doubt, low energy, or being overwhelmed by raw emotions.",
                love: "In love, reversed indicates lack of confidence in relationships or being overwhelmed by emotions.",
                career: "Career-wise, reversed suggests lack of confidence, low energy, or being overwhelmed by workplace challenges.",
                spiritual: "Spiritually reversed, indicates spiritual weakness or being overwhelmed by lower impulses."
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
        image: "img/big/maj09.jpg",
        keywords: {
            upright: ["Soul searching", "Seeking guidance", "Inner guidance", "Solitude"],
            reversed: ["Isolation", "Withdrawal", "Loneliness", "Lost your way"]
        },
        meanings: {
            upright: {
                general: "The Hermit represents soul searching, seeking guidance, and finding inner wisdom through solitude and reflection.",
                love: "In love, The Hermit suggests taking time alone to understand your romantic needs and desires.",
                career: "Professionally, The Hermit indicates seeking guidance, mentorship, or taking time to reflect on career direction.",
                spiritual: "Spiritually, The Hermit represents the search for spiritual truth and wisdom through inner reflection."
            },
            reversed: {
                general: "Reversed, The Hermit suggests isolation, withdrawal, loneliness, or having lost your way.",
                love: "In love, reversed indicates excessive isolation or withdrawal from romantic opportunities.",
                career: "Career-wise, reversed suggests isolation at work, refusing guidance, or being lost professionally.",
                spiritual: "Spiritually reversed, indicates spiritual isolation or losing touch with inner wisdom."
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
        image: "img/big/maj10.jpg",
        keywords: {
            upright: ["Good luck", "Karma", "Life cycles", "Destiny", "Turning point"],
            reversed: ["Bad luck", "Lack of control", "Clinging to control", "Bad choices"]
        },
        meanings: {
            upright: {
                general: "The Wheel of Fortune represents good luck, karma, life cycles, and turning points. It signifies that change is coming.",
                love: "In love, The Wheel of Fortune indicates positive changes in romantic life and karmic relationships.",
                career: "Professionally, The Wheel of Fortune suggests positive career changes and new opportunities coming your way.",
                spiritual: "Spiritually, The Wheel of Fortune represents karmic lessons and spiritual cycles of growth."
            },
            reversed: {
                general: "Reversed, The Wheel of Fortune suggests bad luck, lack of control, or resistance to necessary changes.",
                love: "In love, reversed indicates relationship setbacks or resistance to necessary relationship changes.",
                career: "Career-wise, reversed suggests career setbacks, missed opportunities, or resistance to change.",
                spiritual: "Spiritually reversed, indicates spiritual setbacks or resistance to karmic lessons."
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
        image: "img/big/maj11.jpg",
        keywords: {
            upright: ["Justice", "Fairness", "Truth", "Cause and effect", "Law"],
            reversed: ["Unfairness", "Lack of accountability", "Dishonesty"]
        },
        meanings: {
            upright: {
                general: "Justice represents fairness, truth, cause and effect, and moral balance. It signifies that truth will prevail and balance will be restored.",
                love: "In love, Justice indicates fair and balanced relationships, honest communication, and karmic partnerships.",
                career: "Professionally, Justice suggests fair treatment at work, legal matters being resolved fairly, and ethical business practices.",
                spiritual: "Spiritually, Justice represents karmic balance and the universal law of cause and effect."
            },
            reversed: {
                general: "Reversed, Justice suggests unfairness, lack of accountability, dishonesty, or avoiding consequences.",
                love: "In love, reversed indicates unfair treatment in relationships or avoiding relationship responsibilities.",
                career: "Career-wise, reversed suggests workplace unfairness, unethical practices, or avoiding professional accountability.",
                spiritual: "Spiritually reversed, indicates spiritual imbalance or avoiding karmic responsibilities."
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
        image: "img/big/maj12.jpg",
        keywords: {
            upright: ["Suspension", "Restriction", "Letting go", "Sacrifice"],
            reversed: ["Delays", "Resistance", "Stalling", "Indecision"]
        },
        meanings: {
            upright: {
                general: "The Hanged Man represents suspension, restriction, letting go, and necessary sacrifice. It signifies a period of waiting and surrender.",
                love: "In love, The Hanged Man suggests putting relationships on hold or making sacrifices for love.",
                career: "Professionally, The Hanged Man indicates delays, putting career plans on hold, or making professional sacrifices.",
                spiritual: "Spiritually, The Hanged Man represents surrender, letting go of ego, and spiritual sacrifice."
            },
            reversed: {
                general: "Reversed, The Hanged Man suggests unnecessary delays, resistance to change, stalling, or indecision.",
                love: "In love, reversed indicates resistance to relationship changes or unnecessary relationship delays.",
                career: "Career-wise, reversed suggests unnecessary career delays or resistance to professional changes.",
                spiritual: "Spiritually reversed, indicates resistance to spiritual growth or unnecessary spiritual delays."
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
        image: "img/big/maj13.jpg",
        keywords: {
            upright: ["Endings", "Beginnings", "Change", "Transformation", "Transition"],
            reversed: ["Resistance to change", "Personal transformation", "Inner purging"]
        },
        meanings: {
            upright: {
                general: "Death represents endings, beginnings, change, and transformation. It signifies the end of one phase and the beginning of another.",
                love: "In love, Death indicates the end of one relationship phase and the beginning of another, or transformation within relationships.",
                career: "Professionally, Death suggests career transitions, job endings, or complete professional transformation.",
                spiritual: "Spiritually, Death represents spiritual transformation, ego death, and spiritual rebirth."
            },
            reversed: {
                general: "Reversed, Death suggests resistance to change, fear of transformation, or incomplete transitions.",
                love: "In love, reversed indicates resistance to relationship changes or fear of relationship transformation.",
                career: "Career-wise, reversed suggests resistance to career changes or incomplete professional transitions.",
                spiritual: "Spiritually reversed, indicates resistance to spiritual transformation or incomplete spiritual growth."
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
        image: "img/big/maj14.jpg",
        keywords: {
            upright: ["Balance", "Moderation", "Patience", "Purpose", "Meaning"],
            reversed: ["Imbalance", "Excess", "Self-healing", "Re-alignment"]
        },
        meanings: {
            upright: {
                general: "Temperance represents balance, moderation, patience, and finding purpose and meaning. It signifies harmony and healing.",
                love: "In love, Temperance indicates balanced relationships, patience in romance, and healing relationship issues.",
                career: "Professionally, Temperance suggests finding work-life balance, patience in career development, and harmonious workplace relationships.",
                spiritual: "Spiritually, Temperance represents spiritual balance, patience in spiritual growth, and healing spiritual wounds."
            },
            reversed: {
                general: "Reversed, Temperance suggests imbalance, excess, or the need for self-healing and re-alignment.",
                love: "In love, reversed indicates relationship imbalance, excess behavior, or need for relationship healing.",
                career: "Career-wise, reversed suggests work-life imbalance, excessive work behavior, or need for professional re-alignment.",
                spiritual: "Spiritually reversed, indicates spiritual imbalance or need for spiritual healing and re-alignment."
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
        image: "img/big/maj15.jpg",
        keywords: {
            upright: ["Bondage", "Addiction", "Sexuality", "Materialism"],
            reversed: ["Releasing limiting beliefs", "Exploring dark thoughts", "Detachment"]
        },
        meanings: {
            upright: {
                general: "The Devil represents bondage, addiction, materialism, and being trapped by limiting beliefs or unhealthy behaviors.",
                love: "In love, The Devil indicates obsessive relationships, unhealthy attachments, or sexual dysfunction.",
                career: "Professionally, The Devil suggests being trapped in unfulfilling work, materialism, or unethical business practices.",
                spiritual: "Spiritually, The Devil represents spiritual bondage, materialism over spirituality, or being trapped by limiting beliefs."
            },
            reversed: {
                general: "Reversed, The Devil suggests releasing limiting beliefs, breaking free from bondage, and exploring shadow aspects.",
                love: "In love, reversed indicates breaking free from unhealthy relationships or overcoming sexual issues.",
                career: "Career-wise, reversed suggests breaking free from unfulfilling work or overcoming materialistic attitudes.",
                spiritual: "Spiritually reversed, indicates spiritual liberation, overcoming limiting beliefs, and shadow work."
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
        image: "img/big/maj16.jpg",
        keywords: {
            upright: ["Sudden change", "Upheaval", "Chaos", "Revelation", "Awakening"],
            reversed: ["Personal transformation", "Fear of change", "Avoiding disaster"]
        },
        meanings: {
            upright: {
                general: "The Tower represents sudden change, upheaval, chaos, revelation, and spiritual awakening through crisis.",
                love: "In love, The Tower indicates sudden relationship changes, breakups, or revelations that shake relationship foundations.",
                career: "Professionally, The Tower suggests sudden career changes, job loss, or workplace upheaval.",
                spiritual: "Spiritually, The Tower represents spiritual awakening through crisis, sudden revelations, and ego destruction."
            },
            reversed: {
                general: "Reversed, The Tower suggests personal transformation, fear of change, or successfully avoiding disaster.",
                love: "In love, reversed indicates gradual relationship changes or fear of relationship upheaval.",
                career: "Career-wise, reversed suggests gradual career changes or fear of professional upheaval.",
                spiritual: "Spiritually reversed, indicates gradual spiritual transformation or resistance to spiritual awakening."
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
        image: "img/big/maj17.jpg",
        keywords: {
            upright: ["Hope", "Faith", "Purpose", "Renewal", "Spirituality"],
            reversed: ["Lack of faith", "Despair", "Self-trust", "Disconnection"]
        },
        meanings: {
            upright: {
                general: "The Star represents hope, faith, purpose, renewal, and spiritual guidance. It signifies healing and inspiration after hardship.",
                love: "In love, The Star indicates renewed hope in romance, healing from past relationships, and spiritual connection with partners.",
                career: "Professionally, The Star suggests renewed career inspiration, finding your calling, and hope for professional success.",
                spiritual: "Spiritually, The Star represents spiritual guidance, renewed faith, and connection to higher purpose."
            },
            reversed: {
                general: "Reversed, The Star suggests lack of faith, despair, disconnection from purpose, or need to trust yourself.",
                love: "In love, reversed indicates lost hope in romance, despair about relationships, or disconnection from love.",
                career: "Career-wise, reversed suggests lost career direction, despair about professional life, or disconnection from calling.",
                spiritual: "Spiritually reversed, indicates lost faith, spiritual despair, or disconnection from spiritual guidance."
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
        image: "img/big/maj18.jpg",
        keywords: {
            upright: ["Illusion", "Fear", "Anxiety", "Subconscious", "Intuition"],
            reversed: ["Release of fear", "Repressed emotion", "Inner confusion"]
        },
        meanings: {
            upright: {
                general: "The Moon represents illusion, fear, anxiety, and confusion. It signifies navigating uncertainty and trusting intuition despite fear.",
                love: "In love, The Moon indicates confusion in relationships, hidden emotions, or anxiety about romantic situations.",
                career: "Professionally, The Moon suggests workplace confusion, unclear career direction, or anxiety about professional decisions.",
                spiritual: "Spiritually, The Moon represents spiritual confusion, psychic abilities, and navigating spiritual uncertainty."
            },
            reversed: {
                general: "Reversed, The Moon suggests release of fear, overcoming confusion, or dealing with repressed emotions.",
                love: "In love, reversed indicates overcoming relationship fears or clarity emerging in romantic situations.",
                career: "Career-wise, reversed suggests overcoming professional fears or gaining clarity about career direction.",
                spiritual: "Spiritually reversed, indicates overcoming spiritual fears or gaining spiritual clarity."
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
        image: "img/big/maj19.jpg",
        keywords: {
            upright: ["Positivity", "Fun", "Warmth", "Success", "Vitality"],
            reversed: ["Inner child", "Feeling down", "Overly optimistic"]
        },
        meanings: {
            upright: {
                general: "The Sun represents positivity, fun, warmth, success, and vitality. It signifies joy, achievement, and enlightenment.",
                love: "In love, The Sun indicates joyful relationships, happiness in romance, and positive relationship outcomes.",
                career: "Professionally, The Sun suggests career success, recognition, and joy in your work.",
                spiritual: "Spiritually, The Sun represents spiritual enlightenment, joy in spiritual practice, and connection to divine light."
            },
            reversed: {
                general: "Reversed, The Sun suggests connecting with inner child, temporary setbacks, or being overly optimistic.",
                love: "In love, reversed indicates need for authentic joy in relationships or temporary relationship challenges.",
                career: "Career-wise, reversed suggests temporary career setbacks or need for genuine career satisfaction.",
                spiritual: "Spiritually reversed, indicates need for authentic spiritual joy or temporary spiritual challenges."
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
        image: "img/big/maj20.jpg",
        keywords: {
            upright: ["Judgement", "Rebirth", "Inner calling", "Forgiveness"],
            reversed: ["Self-doubt", "Inner critic", "Ignoring the call", "Lack of self awareness"]
        },
        meanings: {
            upright: {
                general: "Judgement represents rebirth, inner calling, forgiveness, and spiritual awakening. It signifies answering a higher calling.",
                love: "In love, Judgement indicates relationship rebirth, forgiveness in relationships, and answering the call to deeper love.",
                career: "Professionally, Judgement suggests career rebirth, answering your professional calling, and being recognized for your work.",
                spiritual: "Spiritually, Judgement represents spiritual rebirth, answering spiritual calling, and divine judgment."
            },
            reversed: {
                general: "Reversed, Judgement suggests self-doubt, inner criticism, ignoring your calling, or lack of self-awareness.",
                love: "In love, reversed indicates relationship self-doubt, being too critical of partners, or ignoring relationship calling.",
                career: "Career-wise, reversed suggests professional self-doubt, being overly critical, or ignoring career calling.",
                spiritual: "Spiritually reversed, indicates spiritual self-doubt, ignoring spiritual calling, or lack of spiritual awareness."
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
        image: "img/big/maj21.jpg",
        keywords: {
            upright: ["Completion", "Accomplishment", "Travel", "Fulfillment"],
            reversed: ["Incomplete", "No closure", "Lack of achievement", "Unfulfilled goals"]
        },
        meanings: {
            upright: {
                general: "The World represents completion, accomplishment, fulfillment, and success. It signifies achieving your goals and completing a major life cycle.",
                love: "In love, The World indicates relationship completion, marriage, or achieving relationship goals.",
                career: "Professionally, The World suggests career completion, achieving professional goals, and recognition for accomplishments.",
                spiritual: "Spiritually, The World represents spiritual completion, enlightenment, and achieving spiritual goals."
            },
            reversed: {
                general: "Reversed, The World suggests incomplete goals, lack of closure, unfulfilled achievements, or need to complete unfinished business.",
                love: "In love, reversed indicates incomplete relationships, lack of relationship closure, or unfulfilled romantic goals.",
                career: "Career-wise, reversed suggests incomplete career goals, lack of professional closure, or unfulfilled achievements.",
                spiritual: "Spiritually reversed, indicates incomplete spiritual goals, lack of spiritual closure, or unfulfilled spiritual growth."
            }
        }
    },

    // MINOR ARCANA - WANDS (14 cards)
    {
        name: "Ace of Wands",
        number: 1,
        suit: "Wands",
        element: "Fire",
        astrology: "Fire signs",
        numerology: 1,
        image: "img/big/wands01.jpg",
        keywords: {
            upright: ["Inspiration", "New opportunities", "Growth", "Potential"],
            reversed: ["Lack of energy", "Lack of passion", "Boredom", "Delays"]
        },
        meanings: {
            upright: {
                general: "The Ace of Wands represents new creative opportunities, inspiration, and growth potential. It signifies the spark of new ideas and ventures.",
                love: "In love, Ace of Wands indicates new passionate relationships or renewed passion in existing relationships.",
                career: "Professionally, this card suggests new career opportunities, creative projects, and entrepreneurial ventures.",
                spiritual: "Spiritually, Ace of Wands represents new spiritual inspiration and growth in spiritual practice."
            },
            reversed: {
                general: "Reversed, Ace of Wands suggests lack of energy, delayed projects, or missed opportunities.",
                love: "In love, reversed indicates lack of passion, delayed romantic opportunities, or loss of relationship spark.",
                career: "Career-wise, reversed suggests delayed career opportunities or lack of professional inspiration.",
                spiritual: "Spiritually reversed, indicates lack of spiritual inspiration or delayed spiritual growth."
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
            upright: ["Future planning", "Making decisions", "Leaving comfort zone", "Personal power"],
            reversed: ["Fear of unknown", "Lack of planning", "Bad decisions", "Lack of control"]
        },
        meanings: {
            upright: {
                general: "Two of Wands represents future planning, making decisions, and stepping out of your comfort zone. It signifies personal power and long-term vision.",
                love: "In love, Two of Wands indicates planning for relationship future and making important romantic decisions.",
                career: "Professionally, this card suggests career planning, expanding your professional horizons, and taking control of your career path.",
                spiritual: "Spiritually, Two of Wands represents planning your spiritual journey and taking control of your spiritual development."
            },
            reversed: {
                general: "Reversed, Two of Wands suggests fear of the unknown, poor planning, or lack of personal power.",
                love: "In love, reversed indicates fear of relationship commitment or poor relationship planning.",
                career: "Career-wise, reversed suggests lack of career planning or fear of professional changes.",
                spiritual: "Spiritually reversed, indicates lack of spiritual planning or fear of spiritual growth."
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
            upright: ["Expansion", "Foresight", "Overseas opportunities", "Leadership"],
            reversed: ["Lack of foresight", "Delays", "Obstacles", "Lack of progress"]
        },
        meanings: {
            upright: {
                general: "Three of Wands represents expansion, foresight, and overseas opportunities. It signifies leadership and long-term success.",
                love: "In love, Three of Wands indicates expanding relationship horizons and long-distance relationships.",
                career: "Professionally, this card suggests business expansion, international opportunities, and leadership roles.",
                spiritual: "Spiritually, Three of Wands represents expanding spiritual horizons and spiritual leadership."
            },
            reversed: {
                general: "Reversed, Three of Wands suggests lack of foresight, delays in expansion plans, or obstacles to progress.",
                love: "In love, reversed indicates relationship obstacles or lack of relationship progress.",
                career: "Career-wise, reversed suggests delayed business expansion or obstacles to professional growth.",
                spiritual: "Spiritually reversed, indicates obstacles to spiritual expansion or lack of spiritual progress."
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
            upright: ["Celebration", "Harmony", "Home", "Community", "Stability"],
            reversed: ["Lack of support", "Instability", "Broken relationships", "Canceled celebrations"]
        },
        meanings: {
            upright: {
                general: "Four of Wands represents celebration, harmony, home, and community stability. It signifies happy occasions and strong foundations.",
                love: "In love, Four of Wands indicates relationship milestones, engagements, marriages, and happy family life.",
                career: "Professionally, this card suggests workplace harmony, team celebrations, and career stability.",
                spiritual: "Spiritually, Four of Wands represents spiritual community, harmony in spiritual practice, and celebrating spiritual achievements."
            },
            reversed: {
                general: "Reversed, Four of Wands suggests instability, lack of support, or canceled celebrations.",
                love: "In love, reversed indicates relationship instability, family conflicts, or canceled relationship milestones.",
                career: "Career-wise, reversed suggests workplace instability, lack of team support, or canceled work celebrations.",
                spiritual: "Spiritually reversed, indicates lack of spiritual community support or spiritual instability."
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
            upright: ["Conflict", "Disagreements", "Competition", "Tension", "Diversity"],
            reversed: ["Inner conflict", "Avoiding conflict", "Release of tension"]
        },
        meanings: {
            upright: {
                general: "Five of Wands represents conflict, disagreements, competition, and tension. It signifies challenges that lead to growth through struggle.",
                love: "In love, Five of Wands indicates relationship conflicts, disagreements with partners, or competition for someone's affection.",
                career: "Professionally, this card suggests workplace conflicts, competition, and disagreements with colleagues.",
                spiritual: "Spiritually, Five of Wands represents spiritual conflicts, competing spiritual beliefs, or challenges in spiritual growth."
            },
            reversed: {
                general: "Reversed, Five of Wands suggests inner conflict, avoiding necessary conflicts, or release of tension.",
                love: "In love, reversed indicates avoiding relationship conflicts or inner relationship turmoil.",
                career: "Career-wise, reversed suggests avoiding workplace conflicts or inner professional struggles.",
                spiritual: "Spiritually reversed, indicates avoiding spiritual conflicts or inner spiritual struggles."
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
            upright: ["Success", "Public recognition", "Progress", "Self-confidence"],
            reversed: ["Private achievement", "Personal definition of success", "Fall from grace"]
        },
        meanings: {
            upright: {
                general: "Six of Wands represents success, public recognition, progress, and self-confidence. It signifies victory and achievement.",
                love: "In love, Six of Wands indicates relationship success, public recognition of your relationship, and confidence in love.",
                career: "Professionally, this card suggests career success, public recognition, and professional achievements.",
                spiritual: "Spiritually, Six of Wands represents spiritual success, recognition for spiritual work, and confidence in spiritual path."
            },
            reversed: {
                general: "Reversed, Six of Wands suggests private achievement, personal success, or temporary setbacks in recognition.",
                love: "In love, reversed indicates private relationship success or temporary relationship setbacks.",
                career: "Career-wise, reversed suggests private professional success or temporary career setbacks.",
                spiritual: "Spiritually reversed, indicates private spiritual achievements or temporary spiritual setbacks."
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
            upright: ["Challenge", "Competition", "Protection", "Perseverance"],
            reversed: ["Exhaustion", "Giving up", "Overwhelmed"]
        },
        meanings: {
            upright: {
                general: "Seven of Wands represents challenge, competition, protection, and perseverance. It signifies standing your ground against opposition.",
                love: "In love, Seven of Wands indicates defending your relationship, competing for love, or protecting your romantic interests.",
                career: "Professionally, this card suggests defending your position, workplace competition, and protecting your professional interests.",
                spiritual: "Spiritually, Seven of Wands represents defending your spiritual beliefs and persevering through spiritual challenges."
            },
            reversed: {
                general: "Reversed, Seven of Wands suggests exhaustion, giving up, or being overwhelmed by challenges.",
                love: "In love, reversed indicates relationship exhaustion or giving up on romantic pursuits.",
                career: "Career-wise, reversed suggests professional exhaustion or giving up on career goals.",
                spiritual: "Spiritually reversed, indicates spiritual exhaustion or giving up on spiritual practices."
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
            upright: ["Movement", "Speed", "Progress", "Quick decisions", "News"],
            reversed: ["Delays", "Frustration", "Resisting change", "Internal alignment"]
        },
        meanings: {
            upright: {
                general: "Eight of Wands represents movement, speed, progress, and quick decisions. It signifies rapid developments and forward momentum.",
                love: "In love, Eight of Wands indicates quick romantic developments, fast-moving relationships, or news about love.",
                career: "Professionally, this card suggests rapid career developments, quick business decisions, and fast-paced work environments.",
                spiritual: "Spiritually, Eight of Wands represents rapid spiritual growth, quick spiritual insights, and accelerated spiritual development."
            },
            reversed: {
                general: "Reversed, Eight of Wands suggests delays, frustration, resisting change, or need for internal alignment.",
                love: "In love, reversed indicates relationship delays, frustrated romantic progress, or need for relationship alignment.",
                career: "Career-wise, reversed suggests career delays, frustrated professional progress, or need for career realignment.",
                spiritual: "Spiritually reversed, indicates spiritual delays, frustrated spiritual progress, or need for spiritual alignment."
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
            upright: ["Persistence", "Test of faith", "Boundaries", "Resilience"],
            reversed: ["Inner resources", "Struggle", "Overwhelm", "Paranoia"]
        },
        meanings: {
            upright: {
                general: "Nine of Wands represents persistence, test of faith, boundaries, and resilience. It signifies strength in the face of adversity.",
                love: "In love, Nine of Wands indicates relationship persistence, protecting relationship boundaries, and resilience in love.",
                career: "Professionally, this card suggests career persistence, maintaining professional boundaries, and workplace resilience.",
                spiritual: "Spiritually, Nine of Wands represents spiritual persistence, maintaining spiritual boundaries, and spiritual resilience."
            },
            reversed: {
                general: "Reversed, Nine of Wands suggests relying on inner resources, struggling with boundaries, or feeling overwhelmed.",
                love: "In love, reversed indicates relationship struggles, overwhelmed by romantic challenges, or inner relationship work.",
                career: "Career-wise, reversed suggests professional struggles, overwhelmed by work challenges, or relying on inner professional resources.",
                spiritual: "Spiritually reversed, indicates spiritual struggles, overwhelmed by spiritual challenges, or relying on inner spiritual resources."
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
            upright: ["Burden", "Extra responsibility", "Hard work", "Completion"],
            reversed: ["Doing it all", "Carrying the burden", "Delegation", "Release"]
        },
        meanings: {
            upright: {
                general: "Ten of Wands represents burden, extra responsibility, hard work, and approaching completion. It signifies being overloaded but near success.",
                love: "In love, Ten of Wands indicates relationship burdens, taking on too much in relationships, or working hard for relationship success.",
                career: "Professionally, this card suggests career burdens, extra work responsibilities, and working hard toward career completion.",
                spiritual: "Spiritually, Ten of Wands represents spiritual burdens, taking on spiritual responsibilities, and working toward spiritual completion."
            },
            reversed: {
                general: "Reversed, Ten of Wands suggests delegation, releasing burdens, or learning to share responsibilities.",
                love: "In love, reversed indicates releasing relationship burdens, sharing relationship responsibilities, or delegating in partnerships.",
                career: "Career-wise, reversed suggests delegating work responsibilities, releasing career burdens, or sharing professional workload.",
                spiritual: "Spiritually reversed, indicates releasing spiritual burdens, sharing spiritual responsibilities, or delegating spiritual work."
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
            upright: ["Inspiration", "Ideas", "Discovery", "Limitless potential", "Free spirit"],
            reversed: ["Newly formed ideas", "Redirecting energy", "Self-limiting beliefs", "A spiritual path"]
        },
        meanings: {
            upright: {
                general: "Page of Wands represents inspiration, new ideas, discovery, and limitless potential. It signifies youthful enthusiasm and creative energy.",
                love: "In love, Page of Wands indicates new romantic inspiration, playful relationships, and youthful approach to love.",
                career: "Professionally, this card suggests new career ideas, creative inspiration, and enthusiastic approach to work.",
                spiritual: "Spiritually, Page of Wands represents new spiritual inspiration, discovering spiritual gifts, and enthusiastic spiritual exploration."
            },
            reversed: {
                general: "Reversed, Page of Wands suggests newly formed ideas, redirecting energy, or overcoming self-limiting beliefs.",
                love: "In love, reversed indicates redirecting romantic energy, overcoming relationship limitations, or newly formed relationship ideas.",
                career: "Career-wise, reversed suggests redirecting career energy, overcoming professional limitations, or newly formed career ideas.",
                spiritual: "Spiritually reversed, indicates redirecting spiritual energy, overcoming spiritual limitations, or newly formed spiritual ideas."
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
            upright: ["Energy", "Passion", "Impulsive", "Adventure", "Rushing"],
            reversed: ["Passion project", "Haste", "Scattered energy", "Delays", "Frustration"]
        },
        meanings: {
            upright: {
                general: "Knight of Wands represents energy, passion, impulsiveness, and adventure. It signifies rushing toward goals with enthusiasm.",
                love: "In love, Knight of Wands indicates passionate romance, impulsive romantic decisions, and adventurous relationships.",
                career: "Professionally, this card suggests energetic career pursuits, passionate work approach, and impulsive professional decisions.",
                spiritual: "Spiritually, Knight of Wands represents passionate spiritual pursuit, impulsive spiritual decisions, and adventurous spiritual exploration."
            },
            reversed: {
                general: "Reversed, Knight of Wands suggests passion projects, hasty decisions, scattered energy, or frustration with delays.",
                love: "In love, reversed indicates relationship haste, scattered romantic energy, or frustration with relationship delays.",
                career: "Career-wise, reversed suggests career haste, scattered professional energy, or frustration with career delays.",
                spiritual: "Spiritually reversed, indicates spiritual haste, scattered spiritual energy, or frustration with spiritual delays."
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
            upright: ["Courage", "Confidence", "Independence", "Social butterfly", "Determination"],
            reversed: ["Self-respect", "Self-confidence", "Introverted", "Re-establish sense of self"]
        },
        meanings: {
            upright: {
                general: "Queen of Wands represents courage, confidence, independence, and determination. She signifies strong leadership and social charisma.",
                love: "In love, Queen of Wands indicates confident relationships, independent partners, and charismatic romantic energy.",
                career: "Professionally, this card suggests confident leadership, independent work style, and charismatic professional presence.",
                spiritual: "Spiritually, Queen of Wands represents confident spiritual leadership, independent spiritual path, and charismatic spiritual presence."
            },
            reversed: {
                general: "Reversed, Queen of Wands suggests working on self-respect, self-confidence, or needing to re-establish sense of self.",
                love: "In love, reversed indicates working on relationship confidence, establishing independence in partnerships, or introverted romantic energy.",
                career: "Career-wise, reversed suggests working on professional confidence, establishing workplace independence, or introverted work style.",
                spiritual: "Spiritually reversed, indicates working on spiritual confidence, establishing spiritual independence, or introverted spiritual practice."
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
            upright: ["Natural leader", "Vision", "Entrepreneur", "Honour"],
            reversed: ["Impulsiveness", "Haste", "Ruthless", "High expectations"]
        },
        meanings: {
            upright: {
                general: "King of Wands represents natural leadership, vision, entrepreneurship, and honor. He signifies mastery of creative and leadership abilities.",
                love: "In love, King of Wands indicates leadership in relationships, visionary romantic partnerships, and honorable romantic behavior.",
                career: "Professionally, this card suggests natural leadership, entrepreneurial vision, and honorable business practices.",
                spiritual: "Spiritually, King of Wands represents spiritual leadership, visionary spiritual understanding, and honorable spiritual practice."
            },
            reversed: {
                general: "Reversed, King of Wands suggests impulsiveness, haste, ruthlessness, or having unrealistic expectations.",
                love: "In love, reversed indicates impulsive romantic decisions, hasty relationship choices, or unrealistic relationship expectations.",
                career: "Career-wise, reversed suggests impulsive professional decisions, hasty career moves, or unrealistic career expectations.",
                spiritual: "Spiritually reversed, indicates impulsive spiritual decisions, hasty spiritual choices, or unrealistic spiritual expectations."
            }
        }
    },

    // MINOR ARCANA - CUPS (14 cards) 
    {
        name: "Ace of Cups",
        number: 1,
        suit: "Cups",
        element: "Water",
        astrology: "Water signs",
        numerology: 1,
        image: "img/big/cups01.jpg",
        keywords: {
            upright: ["Love", "New relationships", "Compassion", "Creativity"],
            reversed: ["Self-love", "Intuition", "Repressed emotions"]
        },
        meanings: {
            upright: {
                general: "Ace of Cups represents new love, emotional beginnings, compassion, and creativity. It signifies the opening of the heart and emotional renewal.",
                love: "In love, Ace of Cups indicates new romantic beginnings, deep emotional connections, and opening your heart to love.",
                career: "Professionally, this card suggests creative career opportunities, compassionate work environments, and emotional fulfillment in work.",
                spiritual: "Spiritually, Ace of Cups represents spiritual love, emotional spiritual connections, and opening to divine love."
            },
            reversed: {
                general: "Reversed, Ace of Cups suggests focusing on self-love, trusting intuition, or dealing with repressed emotions.",
                love: "In love, reversed indicates need for self-love, trusting romantic intuition, or addressing repressed relationship emotions.",
                career: "Career-wise, reversed suggests need for professional self-care, trusting work intuition, or addressing workplace emotions.",
                spiritual: "Spiritually reversed, indicates need for spiritual self-love, trusting spiritual intuition, or addressing repressed spiritual emotions."
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
            upright: ["Unified love", "Partnership", "Mutual attraction", "Relationships"],
            reversed: ["Self-love", "Break-ups", "Disharmony", "Distrust"]
        },
        meanings: {
            upright: {
                general: "Two of Cups represents unified love, partnership, mutual attraction, and harmonious relationships. It signifies perfect emotional balance between two people.",
                love: "In love, Two of Cups indicates perfect romantic partnership, mutual attraction, and deep emotional connection.",
                career: "Professionally, this card suggests harmonious work partnerships, mutual professional respect, and collaborative success.",
                spiritual: "Spiritually, Two of Cups represents spiritual partnerships, mutual spiritual support, and harmonious spiritual connections."
            },
            reversed: {
                general: "Reversed, Two of Cups suggests need for self-love, relationship break-ups, disharmony, or trust issues.",
                love: "In love, reversed indicates relationship break-ups, romantic disharmony, or trust issues between partners.",
                career: "Career-wise, reversed suggests work partnership problems, professional disharmony, or workplace trust issues.",
                spiritual: "Spiritually reversed, indicates spiritual partnership problems, spiritual disharmony, or spiritual trust issues."
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
            upright: ["Celebration", "Friendship", "Creativity", "Communities"],
            reversed: ["Independence", "Alone time", "Hardcore partying", "Three's a crowd"]
        },
        meanings: {
            upright: {
                general: "Three of Cups represents celebration, friendship, creativity, and community connections. It signifies joyful social gatherings and shared happiness.",
                love: "In love, Three of Cups indicates celebrating relationships, supportive friends, and community support for your romantic life.",
                career: "Professionally, this card suggests workplace celebrations, creative collaboration, and supportive work communities.",
                spiritual: "Spiritually, Three of Cups represents spiritual celebrations, spiritual friendships, and supportive spiritual communities."
            },
            reversed: {
                general: "Reversed, Three of Cups suggests need for independence, alone time, excessive partying, or feeling like a third wheel.",
                love: "In love, reversed indicates need for relationship independence, third party interference, or excessive social activity affecting relationships.",
                career: "Career-wise, reversed suggests need for professional independence, workplace third party issues, or excessive work socializing.",
                spiritual: "Spiritually reversed, indicates need for spiritual independence, spiritual community issues, or excessive spiritual socializing."
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
            upright: ["Meditation", "Contemplation", "Apathy", "Reevaluation"],
            reversed: ["Retreat", "Withdrawal", "Checking in with yourself"]
        },
        meanings: {
            upright: {
                general: "Four of Cups represents meditation, contemplation, apathy, and reevaluation. It signifies emotional introspection and considering new possibilities.",
                love: "In love, Four of Cups indicates relationship contemplation, emotional withdrawal, or reevaluating romantic priorities.",
                career: "Professionally, this card suggests career contemplation, workplace apathy, or reevaluating professional goals.",
                spiritual: "Spiritually, Four of Cups represents spiritual contemplation, meditation practice, and reevaluating spiritual priorities."
            },
            reversed: {
                general: "Reversed, Four of Cups suggests retreat, withdrawal, or checking in with yourself emotionally.",
                love: "In love, reversed indicates relationship retreat, emotional withdrawal, or checking in with romantic needs.",
                career: "Career-wise, reversed suggests professional retreat, workplace withdrawal, or checking in with career needs.",
                spiritual: "Spiritually reversed, indicates spiritual retreat, meditation withdrawal, or checking in with spiritual needs."
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
            upright: ["Regret", "Failure", "Disappointment", "Pessimism"],
            reversed: ["Personal setbacks", "Self-forgiveness", "Moving on"]
        },
        meanings: {
            upright: {
                general: "Five of Cups represents regret, failure, disappointment, and pessimism. It signifies emotional loss and focusing on what went wrong.",
                love: "In love, Five of Cups indicates relationship regret, romantic disappointment, or focusing on relationship failures.",
                career: "Professionally, this card suggests career disappointment, workplace failures, or focusing on professional setbacks.",
                spiritual: "Spiritually, Five of Cups represents spiritual disappointment, lost faith, or focusing on spiritual failures."
            },
            reversed: {
                general: "Reversed, Five of Cups suggests personal setbacks, self-forgiveness, and learning to move on from disappointments.",
                love: "In love, reversed indicates relationship forgiveness, moving on from romantic disappointments, or personal relationship growth.",
                career: "Career-wise, reversed suggests professional forgiveness, moving on from career disappointments, or personal professional growth.",
                spiritual: "Spiritually reversed, indicates spiritual forgiveness, moving on from spiritual disappointments, or personal spiritual growth."
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
            upright: ["Revisiting the past", "Childhood memories", "Innocence", "Joy"],
            reversed: ["Living in the past", "Forgiveness", "Lacking playfulness"]
        },
        meanings: {
            upright: {
                general: "Six of Cups represents revisiting the past, childhood memories, innocence, and joy. It signifies nostalgia and reconnecting with your inner child.",
                love: "In love, Six of Cups indicates childhood sweethearts, innocent love, or reconnecting with past romantic connections.",
                career: "Professionally, this card suggests returning to previous work, nostalgic work environments, or innocent approach to career.",
                spiritual: "Spiritually, Six of Cups represents returning to spiritual roots, innocent spiritual approach, and joyful spiritual practice."
            },
            reversed: {
                general: "Reversed, Six of Cups suggests living too much in the past, need for forgiveness, or lacking playfulness.",
                love: "In love, reversed indicates living in past relationships, need for romantic forgiveness, or lacking relationship playfulness.",
                career: "Career-wise, reversed suggests living in past career glory, need for professional forgiveness, or lacking work playfulness.",
                spiritual: "Spiritually reversed, indicates living in past spiritual experiences, need for spiritual forgiveness, or lacking spiritual playfulness."
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
            upright: ["Opportunities", "Choices", "Wishful thinking", "Illusion"],
            reversed: ["Alignment", "Personal values", "Overwhelmed by choices"]
        },
        meanings: {
            upright: {
                general: "Seven of Cups represents multiple opportunities, choices, wishful thinking, and illusion. It signifies being overwhelmed by options.",
                love: "In love, Seven of Cups indicates multiple romantic options, romantic fantasies, or confusion about relationship choices.",
                career: "Professionally, this card suggests multiple career options, professional fantasies, or confusion about career choices.",
                spiritual: "Spiritually, Seven of Cups represents multiple spiritual paths, spiritual fantasies, or confusion about spiritual choices."
            },
            reversed: {
                general: "Reversed, Seven of Cups suggests finding alignment, clarifying personal values, or being overwhelmed by too many choices.",
                love: "In love, reversed indicates relationship clarity, aligning with romantic values, or being overwhelmed by relationship options.",
                career: "Career-wise, reversed suggests career clarity, aligning with professional values, or being overwhelmed by career options.",
                spiritual: "Spiritually reversed, indicates spiritual clarity, aligning with spiritual values, or being overwhelmed by spiritual options."
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
            upright: ["Disappointment", "Abandonment", "Withdrawal", "Escapism"],
            reversed: ["Trying one more time", "Indecision", "Aimless drifting", "Walking away"]
        },
        meanings: {
            upright: {
                general: "Eight of Cups represents disappointment, abandonment, withdrawal, and escapism. It signifies leaving behind what no longer serves you.",
                love: "In love, Eight of Cups indicates leaving unsatisfying relationships, romantic disappointment, or withdrawing from love.",
                career: "Professionally, this card suggests leaving unfulfilling work, career disappointment, or withdrawing from professional pursuits.",
                spiritual: "Spiritually, Eight of Cups represents spiritual disappointment, leaving spiritual practices, or withdrawing from spiritual community."
            },
            reversed: {
                general: "Reversed, Eight of Cups suggests trying one more time, indecision about leaving, or aimless drifting.",
                love: "In love, reversed indicates giving relationships another chance, indecision about leaving partners, or aimless romantic drifting.",
                career: "Career-wise, reversed suggests giving career another chance, indecision about leaving jobs, or aimless professional drifting.",
                spiritual: "Spiritually reversed, indicates giving spiritual path another chance, indecision about leaving spiritual practices, or aimless spiritual drifting."
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
            upright: ["Contentment", "Satisfaction", "Gratitude", "Wish come true"],
            reversed: ["Inner happiness", "Materialism", "Dissatisfaction", "Indulgence"]
        },
        meanings: {
            upright: {
                general: "Nine of Cups represents contentment, satisfaction, gratitude, and wishes coming true. It signifies emotional fulfillment and happiness.",
                love: "In love, Nine of Cups indicates relationship satisfaction, romantic contentment, and emotional fulfillment in love.",
                career: "Professionally, this card suggests career satisfaction, professional contentment, and fulfillment in work achievements.",
                spiritual: "Spiritually, Nine of Cups represents spiritual satisfaction, contentment with spiritual progress, and spiritual wishes fulfilled."
            },
            reversed: {
                general: "Reversed, Nine of Cups suggests seeking inner happiness, materialism, dissatisfaction, or overindulgence.",
                love: "In love, reversed indicates seeking inner romantic happiness, relationship materialism, or romantic dissatisfaction.",
                career: "Career-wise, reversed suggests seeking inner professional happiness, workplace materialism, or career dissatisfaction.",
                spiritual: "Spiritually reversed, indicates seeking inner spiritual happiness, spiritual materialism, or spiritual dissatisfaction."
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
            upright: ["Divine love", "Blissful relationships", "Harmony", "Alignment"],
            reversed: ["Disconnection", "Misaligned values", "Struggling relationships"]
        },
        meanings: {
            upright: {
                general: "Ten of Cups represents divine love, blissful relationships, harmony, and perfect alignment. It signifies ultimate emotional fulfillment.",
                love: "In love, Ten of Cups indicates perfect romantic harmony, blissful relationships, and divine love connections.",
                career: "Professionally, this card suggests perfect work-life harmony, blissful work relationships, and alignment with career purpose.",
                spiritual: "Spiritually, Ten of Cups represents divine spiritual love, perfect spiritual harmony, and complete spiritual alignment."
            },
            reversed: {
                general: "Reversed, Ten of Cups suggests disconnection, misaligned values, or struggling relationships.",
                love: "In love, reversed indicates relationship disconnection, misaligned romantic values, or struggling partnerships.",
                career: "Career-wise, reversed suggests work disconnection, misaligned professional values, or struggling work relationships.",
                spiritual: "Spiritually reversed, indicates spiritual disconnection, misaligned spiritual values, or struggling spiritual relationships."
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
            upright: ["Creative opportunities", "Intuitive messages", "Curiosity", "Possibility"],
            reversed: ["New ideas", "Doubting intuition", "Creative blocks", "Emotional immaturity"]
        },
        meanings: {
            upright: {
                general: "Page of Cups represents creative opportunities, intuitive messages, curiosity, and possibility. It signifies emotional and creative beginnings.",
                love: "In love, Page of Cups indicates new romantic opportunities, intuitive romantic messages, and curious approach to love.",
                career: "Professionally, this card suggests creative career opportunities, intuitive work messages, and curious professional approach.",
                spiritual: "Spiritually, Page of Cups represents creative spiritual opportunities, intuitive spiritual messages, and curious spiritual exploration."
            },
            reversed: {
                general: "Reversed, Page of Cups suggests new ideas, doubting intuition, creative blocks, or emotional immaturity.",
                love: "In love, reversed indicates new romantic ideas, doubting romantic intuition, or emotional immaturity in relationships.",
                career: "Career-wise, reversed suggests new professional ideas, doubting work intuition, or creative blocks in career.",
                spiritual: "Spiritually reversed, indicates new spiritual ideas, doubting spiritual intuition, or creative blocks in spiritual practice."
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
            upright: ["Creativity", "Romance", "Charm", "Imagination", "Beauty"],
            reversed: ["Overactive imagination", "Unrealistic", "Jealousy", "Moodiness"]
        },
        meanings: {
            upright: {
                general: "Knight of Cups represents creativity, romance, charm, imagination, and beauty. It signifies following your heart and romantic pursuits.",
                love: "In love, Knight of Cups indicates romantic pursuits, charming courtship, and following your heart in relationships.",
                career: "Professionally, this card suggests creative career pursuits, charming professional approach, and following passion in work.",
                spiritual: "Spiritually, Knight of Cups represents creative spiritual pursuits, charming spiritual approach, and following heart in spiritual practice."
            },
            reversed: {
                general: "Reversed, Knight of Cups suggests overactive imagination, unrealistic expectations, jealousy, or moodiness.",
                love: "In love, reversed indicates unrealistic romantic expectations, jealousy in relationships, or romantic moodiness.",
                career: "Career-wise, reversed suggests unrealistic career expectations, professional jealousy, or workplace moodiness.",
                spiritual: "Spiritually reversed, indicates unrealistic spiritual expectations, spiritual jealousy, or spiritual moodiness."
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
            upright: ["Compassion", "Caring", "Emotionally stable", "Intuitive"],
            reversed: ["Inner compassion", "Self-care", "Co-dependency", "Emotional instability"]
        },
        meanings: {
            upright: {
                general: "Queen of Cups represents compassion, caring, emotional stability, and intuition. She signifies emotional mastery and nurturing wisdom.",
                love: "In love, Queen of Cups indicates compassionate relationships, emotionally stable partnerships, and intuitive romantic understanding.",
                career: "Professionally, this card suggests compassionate work approach, emotionally stable workplace relationships, and intuitive professional decisions.",
                spiritual: "Spiritually, Queen of Cups represents compassionate spiritual approach, emotionally stable spiritual practice, and intuitive spiritual wisdom."
            },
            reversed: {
                general: "Reversed, Queen of Cups suggests need for inner compassion, self-care, co-dependency issues, or emotional instability.",
                love: "In love, reversed indicates need for romantic self-care, relationship co-dependency, or emotional instability in partnerships.",
                career: "Career-wise, reversed suggests need for professional self-care, workplace co-dependency, or emotional instability at work.",
                spiritual: "Spiritually reversed, indicates need for spiritual self-care, spiritual co-dependency, or emotional instability in spiritual practice."
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
            upright: ["Emotional balance", "Generous", "Diplomatic", "Devoted"],
            reversed: ["Self-compassion", "Inner feelings", "Moodiness", "Emotionally manipulative"]
        },
        meanings: {
            upright: {
                general: "King of Cups represents emotional balance, generosity, diplomacy, and devotion. He signifies mastery over emotions and wise emotional leadership.",
                love: "In love, King of Cups indicates emotionally balanced relationships, generous romantic partnerships, and devoted love.",
                career: "Professionally, this card suggests emotionally balanced work approach, generous professional relationships, and diplomatic workplace leadership.",
                spiritual: "Spiritually, King of Cups represents emotionally balanced spiritual approach, generous spiritual service, and devoted spiritual practice."
            },
            reversed: {
                general: "Reversed, King of Cups suggests need for self-compassion, focusing on inner feelings, moodiness, or emotional manipulation.",
                love: "In love, reversed indicates need for romantic self-compassion, moodiness in relationships, or emotional manipulation in partnerships.",
                career: "Career-wise, reversed suggests need for professional self-compassion, workplace moodiness, or emotional manipulation at work.",
                spiritual: "Spiritually reversed, indicates need for spiritual self-compassion, spiritual moodiness, or emotional manipulation in spiritual contexts."
            }
        }
    },

    // MINOR ARCANA - SWORDS (14 cards)
    {
        name: "Ace of Swords",
        number: 1,
        suit: "Swords",
        element: "Air",
        astrology: "Air signs",
        numerology: 1,
        image: "img/big/swords01.jpg",
        keywords: {
            upright: ["Breakthrough", "Clarity", "Sharp mind", "Communication"],
            reversed: ["Inner clarity", "Re-thinking", "Clouded judgement"]
        },
        meanings: {
            upright: {
                general: "Ace of Swords represents breakthrough, clarity, sharp mind, and clear communication. It signifies mental clarity and new intellectual understanding.",
                love: "In love, Ace of Swords indicates clear romantic communication, breakthrough in relationship understanding, and mental clarity about love.",
                career: "Professionally, this card suggests career breakthrough, clear professional communication, and sharp mental approach to work.",
                spiritual: "Spiritually, Ace of Swords represents spiritual breakthrough, clear spiritual communication, and sharp spiritual understanding."
            },
            reversed: {
                general: "Reversed, Ace of Swords suggests inner clarity, re-thinking decisions, or clouded judgment.",
                love: "In love, reversed indicates need for inner romantic clarity, re-thinking relationship decisions, or clouded romantic judgment.",
                career: "Career-wise, reversed suggests need for inner professional clarity, re-thinking career decisions, or clouded professional judgment.",
                spiritual: "Spiritually reversed, indicates need for inner spiritual clarity, re-thinking spiritual decisions, or clouded spiritual judgment."
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
            upright: ["Difficult decisions", "Weighing up options", "An impasse", "Avoidance"],
            reversed: ["Indecision", "Confusion", "Information overload", "Lack of information"]
        },
        meanings: {
            upright: {
                general: "Two of Swords represents difficult decisions, weighing options, being at an impasse, and avoidance. It signifies mental conflict and indecision.",
                love: "In love, Two of Swords indicates difficult relationship decisions, weighing romantic options, or avoiding relationship choices.",
                career: "Professionally, this card suggests difficult career decisions, weighing professional options, or avoiding career choices.",
                spiritual: "Spiritually, Two of Swords represents difficult spiritual decisions, weighing spiritual options, or avoiding spiritual choices."
            },
            reversed: {
                general: "Reversed, Two of Swords suggests indecision, confusion, information overload, or lack of information.",
                love: "In love, reversed indicates relationship indecision, romantic confusion, or lack of relationship information.",
                career: "Career-wise, reversed suggests career indecision, professional confusion, or lack of career information.",
                spiritual: "Spiritually reversed, indicates spiritual indecision, spiritual confusion, or lack of spiritual information."
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
            upright: ["Heartbreak", "Emotional pain", "Sorrow", "Grief", "Loss"],
            reversed: ["Negative self-talk", "Releasing pain", "Optimism", "Forgiveness"]
        },
        meanings: {
            upright: {
                general: "Three of Swords represents heartbreak, emotional pain, sorrow, grief, and loss. It signifies deep emotional wounds and suffering.",
                love: "In love, Three of Swords indicates heartbreak, romantic betrayal, separation, or deep relationship pain.",
                career: "Professionally, this card suggests career disappointment, workplace betrayal, or professional loss and grief.",
                spiritual: "Spiritually, Three of Swords represents spiritual pain, loss of faith, or grief in spiritual journey."
            },
            reversed: {
                general: "Reversed, Three of Swords suggests negative self-talk, releasing pain, finding optimism, or practicing forgiveness.",
                love: "In love, reversed indicates releasing romantic pain, forgiving relationship betrayals, or finding optimism in love.",
                career: "Career-wise, reversed suggests releasing career pain, forgiving professional betrayals, or finding professional optimism.",
                spiritual: "Spiritually reversed, indicates releasing spiritual pain, forgiving spiritual disappointments, or finding spiritual optimism."
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
            upright: ["Rest", "Relaxation", "Meditation", "Contemplation", "Recovery"],
            reversed: ["Exhaustion", "Burn-out", "Deep contemplation", "Stagnation"]
        },
        meanings: {
            upright: {
                general: "Four of Swords represents rest, relaxation, meditation, contemplation, and recovery. It signifies the need for mental peace and restoration.",
                love: "In love, Four of Swords indicates taking a break from relationships, relationship meditation, or recovery from romantic stress.",
                career: "Professionally, this card suggests taking career breaks, workplace meditation, or recovery from professional stress.",
                spiritual: "Spiritually, Four of Swords represents spiritual rest, meditation practice, and recovery from spiritual challenges."
            },
            reversed: {
                general: "Reversed, Four of Swords suggests exhaustion, burn-out, deep contemplation, or stagnation.",
                love: "In love, reversed indicates relationship exhaustion, romantic burn-out, or relationship stagnation.",
                career: "Career-wise, reversed suggests career exhaustion, professional burn-out, or career stagnation.",
                spiritual: "Spiritually reversed, indicates spiritual exhaustion, spiritual burn-out, or spiritual stagnation."
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
            upright: ["Conflict", "Disagreements", "Competition", "Defeat", "Winning at all costs"],
            reversed: ["Reconciliation", "Making amends", "Past resentment"]
        },
        meanings: {
            upright: {
                general: "Five of Swords represents conflict, disagreements, competition, defeat, and winning at all costs. It signifies destructive conflict and hollow victories.",
                love: "In love, Five of Swords indicates relationship conflicts, romantic arguments, or winning relationship battles at emotional cost.",
                career: "Professionally, this card suggests workplace conflicts, professional competition, or career victories with negative consequences.",
                spiritual: "Spiritually, Five of Swords represents spiritual conflicts, competing spiritual beliefs, or spiritual victories with negative consequences."
            },
            reversed: {
                general: "Reversed, Five of Swords suggests reconciliation, making amends, or dealing with past resentment.",
                love: "In love, reversed indicates relationship reconciliation, making romantic amends, or dealing with past relationship resentment.",
                career: "Career-wise, reversed suggests workplace reconciliation, making professional amends, or dealing with past career resentment.",
                spiritual: "Spiritually reversed, indicates spiritual reconciliation, making spiritual amends, or dealing with past spiritual resentment."
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
            upright: ["Transition", "Change", "Rite of passage", "Releasing baggage"],
            reversed: ["Personal transition", "Resistance to change", "Unfinished business"]
        },
        meanings: {
            upright: {
                general: "Six of Swords represents transition, change, rite of passage, and releasing baggage. It signifies moving toward calmer waters and better times.",
                love: "In love, Six of Swords indicates relationship transition, moving past romantic difficulties, or releasing relationship baggage.",
                career: "Professionally, this card suggests career transition, moving past workplace difficulties, or releasing professional baggage.",
                spiritual: "Spiritually, Six of Swords represents spiritual transition, moving past spiritual difficulties, or releasing spiritual baggage."
            },
            reversed: {
                general: "Reversed, Six of Swords suggests personal transition, resistance to change, or unfinished business.",
                love: "In love, reversed indicates resistance to relationship change, personal romantic transition, or unfinished relationship business.",
                career: "Career-wise, reversed suggests resistance to career change, personal professional transition, or unfinished career business.",
                spiritual: "Spiritually reversed, indicates resistance to spiritual change, personal spiritual transition, or unfinished spiritual business."
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
            upright: ["Betrayal", "Deception", "Getting away with something", "Acting strategically"],
            reversed: ["Imposter syndrome", "Self-deceit", "Keeping secrets"]
        },
        meanings: {
            upright: {
                general: "Seven of Swords represents betrayal, deception, getting away with something, and acting strategically. It signifies dishonesty and stealth.",
                love: "In love, Seven of Swords indicates romantic betrayal, relationship deception, or secret romantic affairs.",
                career: "Professionally, this card suggests workplace betrayal, professional deception, or unethical career strategies.",
                spiritual: "Spiritually, Seven of Swords represents spiritual betrayal, deceptive spiritual practices, or dishonest spiritual behavior."
            },
            reversed: {
                general: "Reversed, Seven of Swords suggests imposter syndrome, self-deceit, or keeping harmful secrets.",
                love: "In love, reversed indicates romantic imposter syndrome, self-deception in relationships, or keeping relationship secrets.",
                career: "Career-wise, reversed suggests professional imposter syndrome, self-deception about career, or keeping career secrets.",
                spiritual: "Spiritually reversed, indicates spiritual imposter syndrome, self-deception about spirituality, or keeping spiritual secrets."
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
            upright: ["Negative thinking", "Restricted freedom", "Imprisonment", "Victim mentality"],
            reversed: ["Self-limiting beliefs", "Inner critic", "Releasing negative thoughts", "Open to new perspectives"]
        },
        meanings: {
            upright: {
                general: "Eight of Swords represents negative thinking, restricted freedom, imprisonment, and victim mentality. It signifies feeling trapped by circumstances or thoughts.",
                love: "In love, Eight of Swords indicates feeling trapped in relationships, romantic victim mentality, or restricted relationship freedom.",
                career: "Professionally, this card suggests feeling trapped in career, professional victim mentality, or restricted workplace freedom.",
                spiritual: "Spiritually, Eight of Swords represents spiritual imprisonment, negative spiritual thinking, or feeling trapped in spiritual beliefs."
            },
            reversed: {
                general: "Reversed, Eight of Swords suggests addressing self-limiting beliefs, silencing inner critic, releasing negative thoughts, or opening to new perspectives.",
                love: "In love, reversed indicates releasing romantic limitations, silencing relationship inner critic, or opening to new relationship perspectives.",
                career: "Career-wise, reversed suggests releasing career limitations, silencing professional inner critic, or opening to new career perspectives.",
                spiritual: "Spiritually reversed, indicates releasing spiritual limitations, silencing spiritual inner critic, or opening to new spiritual perspectives."
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
            upright: ["Anxiety", "Worry", "Fear", "Depression", "Nightmares"],
            reversed: ["Inner turmoil", "Deep-seated fears", "Secrets", "Releasing worry"]
        },
        meanings: {
            upright: {
                general: "Nine of Swords represents anxiety, worry, fear, depression, and nightmares. It signifies mental anguish and overwhelming negative thoughts.",
                love: "In love, Nine of Swords indicates relationship anxiety, romantic fears, or depression about love life.",
                career: "Professionally, this card suggests career anxiety, workplace fears, or depression about professional life.",
                spiritual: "Spiritually, Nine of Swords represents spiritual anxiety, fears about spiritual path, or depression about spiritual progress."
            },
            reversed: {
                general: "Reversed, Nine of Swords suggests inner turmoil, deep-seated fears, keeping secrets, or learning to release worry.",
                love: "In love, reversed indicates deep romantic fears, relationship secrets, or learning to release relationship anxiety.",
                career: "Career-wise, reversed suggests deep career fears, professional secrets, or learning to release career anxiety.",
                spiritual: "Spiritually reversed, indicates deep spiritual fears, spiritual secrets, or learning to release spiritual anxiety."
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
            upright: ["Painful endings", "Deep wounds", "Betrayal", "Loss", "Crisis"],
            reversed: ["Recovery", "Regeneration", "Resisting an inevitable end"]
        },
        meanings: {
            upright: {
                general: "Ten of Swords represents painful endings, deep wounds, betrayal, loss, and crisis. It signifies hitting rock bottom and complete mental defeat.",
                love: "In love, Ten of Swords indicates painful relationship endings, deep romantic wounds, or complete relationship breakdown.",
                career: "Professionally, this card suggests painful career endings, deep professional wounds, or complete career breakdown.",
                spiritual: "Spiritually, Ten of Swords represents painful spiritual endings, deep spiritual wounds, or spiritual crisis and breakdown."
            },
            reversed: {
                general: "Reversed, Ten of Swords suggests recovery, regeneration, or resisting an inevitable ending.",
                love: "In love, reversed indicates relationship recovery, romantic regeneration, or resisting inevitable relationship ending.",
                career: "Career-wise, reversed suggests career recovery, professional regeneration, or resisting inevitable career ending.",
                spiritual: "Spiritually reversed, indicates spiritual recovery, spiritual regeneration, or resisting inevitable spiritual ending."
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
            upright: ["Curious", "Witty", "Chatty", "Communication", "Mental agility"],
            reversed: ["Self-expression", "All talk and no action", "Haste", "Unfocused"]
        },
        meanings: {
            upright: {
                general: "Page of Swords represents curiosity, wit, communication, and mental agility. It signifies youthful intellectual energy and eagerness to learn.",
                love: "In love, Page of Swords indicates curious romantic approach, witty relationship communication, and mental connection in love.",
                career: "Professionally, this card suggests curious career approach, witty workplace communication, and mental agility in work.",
                spiritual: "Spiritually, Page of Swords represents curious spiritual approach, witty spiritual communication, and mental agility in spiritual learning."
            },
            reversed: {
                general: "Reversed, Page of Swords suggests working on self-expression, all talk with no action, haste, or unfocused mental energy.",
                love: "In love, reversed indicates relationship communication issues, romantic haste, or unfocused relationship energy.",
                career: "Career-wise, reversed suggests professional communication issues, career haste, or unfocused work energy.",
                spiritual: "Spiritually reversed, indicates spiritual communication issues, spiritual haste, or unfocused spiritual energy."
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
            upright: ["Ambitious", "Action-oriented", "Driven to succeed", "Fast-thinking"],
            reversed: ["Restless", "Unfocused", "Impulsive", "Burn-out"]
        },
        meanings: {
            upright: {
                general: "Knight of Swords represents ambition, action-orientation, drive to succeed, and fast thinking. It signifies rapid mental action and determined pursuit of goals.",
                love: "In love, Knight of Swords indicates ambitious romantic pursuit, action-oriented relationships, and fast-moving romantic developments.",
                career: "Professionally, this card suggests ambitious career pursuit, action-oriented work approach, and fast-thinking professional strategies.",
                spiritual: "Spiritually, Knight of Swords represents ambitious spiritual pursuit, action-oriented spiritual practice, and fast-thinking spiritual development."
            },
            reversed: {
                general: "Reversed, Knight of Swords suggests restlessness, unfocused energy, impulsiveness, or burn-out from overexertion.",
                love: "In love, reversed indicates romantic restlessness, unfocused relationship energy, or impulsive romantic decisions.",
                career: "Career-wise, reversed suggests professional restlessness, unfocused career energy, or impulsive career decisions.",
                spiritual: "Spiritually reversed, indicates spiritual restlessness, unfocused spiritual energy, or impulsive spiritual decisions."
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
            upright: ["Independent", "Unbiased judgement", "Clear boundaries", "Direct communication"],
            reversed: ["Overly-emotional", "Easily influenced", "Harsh", "Bitchy"]
        },
        meanings: {
            upright: {
                general: "Queen of Swords represents independence, unbiased judgment, clear boundaries, and direct communication. She signifies intellectual clarity and emotional detachment.",
                love: "In love, Queen of Swords indicates independent relationships, clear romantic boundaries, and direct relationship communication.",
                career: "Professionally, this card suggests independent work style, unbiased professional judgment, and direct workplace communication.",
                spiritual: "Spiritually, Queen of Swords represents independent spiritual path, unbiased spiritual judgment, and direct spiritual communication."
            },
            reversed: {
                general: "Reversed, Queen of Swords suggests being overly emotional, easily influenced, harsh, or displaying cold behavior.",
                love: "In love, reversed indicates overly emotional relationships, being easily influenced romantically, or harsh relationship behavior.",
                career: "Career-wise, reversed suggests overly emotional work responses, being easily influenced professionally, or harsh workplace behavior.",
                spiritual: "Spiritually reversed, indicates overly emotional spiritual responses, being easily influenced spiritually, or harsh spiritual behavior."
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
            upright: ["Mental clarity", "Intellectual power", "Authority", "Truth"],
            reversed: ["Quiet power", "Inner truth", "Misuse of power", "Manipulation"]
        },
        meanings: {
            upright: {
                general: "King of Swords represents mental clarity, intellectual power, authority, and truth. He signifies mastery of the mind and fair, logical leadership.",
                love: "In love, King of Swords indicates relationships based on mental clarity, intellectual connection, and truthful communication.",
                career: "Professionally, this card suggests leadership through mental clarity, intellectual authority, and truthful professional practices.",
                spiritual: "Spiritually, King of Swords represents spiritual authority through mental clarity, intellectual spiritual understanding, and spiritual truth."
            },
            reversed: {
                general: "Reversed, King of Swords suggests quiet power, inner truth, misuse of power, or manipulation through intellect.",
                love: "In love, reversed indicates misuse of intellectual power in relationships, manipulation, or inner truth about romantic feelings.",
                career: "Career-wise, reversed suggests misuse of professional authority, workplace manipulation, or inner truth about career direction.",
                spiritual: "Spiritually reversed, indicates misuse of spiritual authority, spiritual manipulation, or inner truth about spiritual path."
            }
        }
    },

    // MINOR ARCANA - PENTACLES (14 cards)
    {
        name: "Ace of Pentacles",
        number: 1,
        suit: "Pentacles",
        element: "Earth",
        astrology: "Earth signs",
        numerology: 1,
        image: "img/big/pentacles01.jpg",
        keywords: {
            upright: ["A new financial or career opportunity", "Manifestation", "Abundance"],
            reversed: ["Lost opportunity", "Lack of planning and foresight"]
        },
        meanings: {
            upright: {
                general: "Ace of Pentacles represents new financial or career opportunities, manifestation, and abundance. It signifies material and practical new beginnings.",
                love: "In love, Ace of Pentacles indicates stable new relationships, practical romantic opportunities, and material security in love.",
                career: "Professionally, this card suggests new career opportunities, financial advancement, and material success in work.",
                spiritual: "Spiritually, Ace of Pentacles represents practical spiritual opportunities, material support for spiritual growth, and abundant spiritual blessings."
            },
            reversed: {
                general: "Reversed, Ace of Pentacles suggests lost opportunities, lack of planning, or poor financial foresight.",
                love: "In love, reversed indicates missed romantic opportunities, lack of relationship planning, or material instability affecting relationships.",
                career: "Career-wise, reversed suggests missed career opportunities, lack of professional planning, or financial instability at work.",
                spiritual: "Spiritually reversed, indicates missed spiritual opportunities, lack of spiritual planning, or material obstacles to spiritual growth."
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
        image: "img/big/pentacles02.jpg",
        keywords: {
            upright: ["Multiple priorities", "Time management", "Prioritisation", "Adaptability"],
            reversed: ["Over-committed", "Disorganisation", "Reprioritising"]
        },
        meanings: {
            upright: {
                general: "Two of Pentacles represents multiple priorities, time management, prioritization, and adaptability. It signifies juggling responsibilities and finding balance.",
                love: "In love, Two of Pentacles indicates balancing relationships with other priorities, time management in romance, and adaptable partnerships.",
                career: "Professionally, this card suggests managing multiple work projects, time management skills, and adaptable career approach.",
                spiritual: "Spiritually, Two of Pentacles represents balancing spiritual practice with daily life, spiritual time management, and adaptable spiritual approach."
            },
            reversed: {
                general: "Reversed, Two of Pentacles suggests being over-committed, disorganized, or needing to reprioritize responsibilities.",
                love: "In love, reversed indicates over-commitment affecting relationships, disorganized romantic life, or need to reprioritize love.",
                career: "Career-wise, reversed suggests professional over-commitment, disorganized work approach, or need to reprioritize career goals.",
                spiritual: "Spiritually reversed, indicates spiritual over-commitment, disorganized spiritual practice, or need to reprioritize spiritual goals."
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
        image: "img/big/pentacles03.jpg",
        keywords: {
            upright: ["Teamwork", "Collaboration", "Learning", "Implementation"],
            reversed: ["Disharmony", "Misaligned goals", "Lack of teamwork"]
        },
        meanings: {
            upright: {
                general: "Three of Pentacles represents teamwork, collaboration, learning, and implementation. It signifies working together toward common goals and shared success.",
                love: "In love, Three of Pentacles indicates collaborative relationships, teamwork in partnerships, and learning together as a couple.",
                career: "Professionally, this card suggests successful teamwork, collaborative projects, and learning from colleagues.",
                spiritual: "Spiritually, Three of Pentacles represents collaborative spiritual work, learning from spiritual community, and implementing spiritual teachings."
            },
            reversed: {
                general: "Reversed, Three of Pentacles suggests disharmony, misaligned goals, or lack of effective teamwork.",
                love: "In love, reversed indicates relationship disharmony, misaligned romantic goals, or lack of partnership teamwork.",
                career: "Career-wise, reversed suggests workplace disharmony, misaligned professional goals, or lack of team collaboration.",
                spiritual: "Spiritually reversed, indicates spiritual community disharmony, misaligned spiritual goals, or lack of spiritual collaboration."
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
        image: "img/big/pentacles04.jpg",
        keywords: {
            upright: ["Saving money", "Security", "Conservatism", "Scarcity", "Control"],
            reversed: ["Over-spending", "Greed", "Self-protection"]
        },
        meanings: {
            upright: {
                general: "Four of Pentacles represents saving money, security, conservatism, and control over resources. It signifies financial stability but potential stinginess.",
                love: "In love, Four of Pentacles indicates security-focused relationships, conservative romantic approach, or emotional guardedness.",
                career: "Professionally, this card suggests financial security, conservative career approach, and controlled professional spending.",
                spiritual: "Spiritually, Four of Pentacles represents spiritual security, conservative spiritual approach, and controlled spiritual resources."
            },
            reversed: {
                general: "Reversed, Four of Pentacles suggests over-spending, greed, or excessive self-protection with resources.",
                love: "In love, reversed indicates relationship over-giving, romantic greed, or excessive emotional self-protection.",
                career: "Career-wise, reversed suggests professional over-spending, career greed, or excessive workplace self-protection.",
                spiritual: "Spiritually reversed, indicates spiritual over-giving, spiritual greed, or excessive spiritual self-protection."
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
        image: "img/big/pentacles05.jpg",
        keywords: {
            upright: ["Financial loss", "Poverty", "Lack mindset", "Isolation", "Worrying"],
            reversed: ["Recovery from financial loss", "Spiritual poverty"]
        },
        meanings: {
            upright: {
                general: "Five of Pentacles represents financial loss, poverty, lack mindset, isolation, and worry. It signifies material hardship and feeling left out in the cold.",
                love: "In love, Five of Pentacles indicates relationship poverty, emotional lack, or isolation from romantic connections.",
                career: "Professionally, this card suggests career setbacks, financial loss at work, or feeling isolated professionally.",
                spiritual: "Spiritually, Five of Pentacles represents spiritual poverty, lack of spiritual resources, or isolation from spiritual community."
            },
            reversed: {
                general: "Reversed, Five of Pentacles suggests recovery from financial loss, overcoming poverty mindset, or addressing spiritual poverty.",
                love: "In love, reversed indicates recovery from relationship loss, overcoming romantic lack mindset, or addressing emotional poverty.",
                career: "Career-wise, reversed suggests recovery from career setbacks, overcoming professional lack mindset, or addressing career poverty.",
                spiritual: "Spiritually reversed, indicates recovery from spiritual loss, overcoming spiritual lack mindset, or addressing spiritual poverty."
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
        image: "img/big/pentacles06.jpg",
        keywords: {
            upright: ["Giving", "Receiving", "Sharing wealth", "Generosity", "Charity"],
            reversed: ["Self-care", "Unpaid debts", "One-sided charity"]
        },
        meanings: {
            upright: {
                general: "Six of Pentacles represents giving, receiving, sharing wealth, generosity, and charity. It signifies balanced exchange and mutual support.",
                love: "In love, Six of Pentacles indicates generous relationships, balanced giving and receiving in romance, and mutual support in partnerships.",
                career: "Professionally, this card suggests workplace generosity, balanced professional exchange, and mutual career support.",
                spiritual: "Spiritually, Six of Pentacles represents spiritual generosity, balanced spiritual exchange, and mutual spiritual support."
            },
            reversed: {
                general: "Reversed, Six of Pentacles suggests need for self-care, unpaid debts, or one-sided giving and receiving.",
                love: "In love, reversed indicates relationship imbalance, unpaid emotional debts, or one-sided romantic giving.",
                career: "Career-wise, reversed suggests professional imbalance, unpaid career debts, or one-sided workplace giving.",
                spiritual: "Spiritually reversed, indicates spiritual imbalance, unpaid spiritual debts, or one-sided spiritual giving."
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
        image: "img/big/pentacles07.jpg",
        keywords: {
            upright: ["Long-term view", "Sustainable results", "Perseverance", "Investment"],
            reversed: ["Lack of long-term vision", "Limited success or reward"]
        },
        meanings: {
            upright: {
                general: "Seven of Pentacles represents taking a long-term view, sustainable results, perseverance, and wise investment. It signifies patience and assessment of progress.",
                love: "In love, Seven of Pentacles indicates long-term relationship view, sustainable romantic results, and patient relationship investment.",
                career: "Professionally, this card suggests long-term career planning, sustainable professional results, and patient career investment.",
                spiritual: "Spiritually, Seven of Pentacles represents long-term spiritual view, sustainable spiritual results, and patient spiritual investment."
            },
            reversed: {
                general: "Reversed, Seven of Pentacles suggests lack of long-term vision, limited success, or impatience with slow progress.",
                love: "In love, reversed indicates lack of relationship long-term planning, limited romantic success, or impatience with relationship progress.",
                career: "Career-wise, reversed suggests lack of career long-term planning, limited professional success, or impatience with career progress.",
                spiritual: "Spiritually reversed, indicates lack of spiritual long-term planning, limited spiritual success, or impatience with spiritual progress."
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
        image: "img/big/pentacles08.jpg",
        keywords: {
            upright: ["Apprenticeship", "Repetitive tasks", "Mastery", "Skill development"],
            reversed: ["Lack of focus", "Perfectionism", "Uninspired work"]
        },
        meanings: {
            upright: {
                general: "Eight of Pentacles represents apprenticeship, repetitive tasks, mastery, and skill development. It signifies dedication to craft and continuous improvement.",
                love: "In love, Eight of Pentacles indicates working on relationship skills, dedicated romantic effort, and mastering the art of love.",
                career: "Professionally, this card suggests skill development, dedicated work effort, and mastering professional craft through practice.",
                spiritual: "Spiritually, Eight of Pentacles represents spiritual skill development, dedicated spiritual practice, and mastering spiritual disciplines."
            },
            reversed: {
                general: "Reversed, Eight of Pentacles suggests lack of focus, perfectionism, or feeling uninspired by repetitive work.",
                love: "In love, reversed indicates lack of relationship focus, romantic perfectionism, or feeling uninspired by relationship work.",
                career: "Career-wise, reversed suggests lack of professional focus, career perfectionism, or feeling uninspired by work tasks.",
                spiritual: "Spiritually reversed, indicates lack of spiritual focus, spiritual perfectionism, or feeling uninspired by spiritual practice."
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
        image: "img/big/pentacles09.jpg",
        keywords: {
            upright: ["Abundance", "Luxury", "Self-sufficiency", "Financial independence"],
            reversed: ["Self-worth", "Over-investment in work", "Hustling"]
        },
        meanings: {
            upright: {
                general: "Nine of Pentacles represents abundance, luxury, self-sufficiency, and financial independence. It signifies enjoying the fruits of your labor and material success.",
                love: "In love, Nine of Pentacles indicates independent relationships, luxurious romantic experiences, and self-sufficient approach to love.",
                career: "Professionally, this card suggests career abundance, professional luxury, and financial independence through work.",
                spiritual: "Spiritually, Nine of Pentacles represents spiritual abundance, luxurious spiritual experiences, and self-sufficient spiritual practice."
            },
            reversed: {
                general: "Reversed, Nine of Pentacles suggests issues with self-worth, over-investment in work, or excessive hustling for material gain.",
                love: "In love, reversed indicates relationship self-worth issues, over-investment in romantic work, or hustling for romantic success.",
                career: "Career-wise, reversed suggests professional self-worth issues, over-investment in career, or excessive career hustling.",
                spiritual: "Spiritually reversed, indicates spiritual self-worth issues, over-investment in spiritual work, or excessive spiritual hustling."
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
        image: "img/big/pentacles10.jpg",
        keywords: {
            upright: ["Wealth", "Financial security", "Family", "Long-term success", "Contribution"],
            reversed: ["The dark side of wealth", "Financial failure or loss"]
        },
        meanings: {
            upright: {
                general: "Ten of Pentacles represents wealth, financial security, family, long-term success, and contribution. It signifies generational wealth and family legacy.",
                love: "In love, Ten of Pentacles indicates family-oriented relationships, long-term romantic security, and creating lasting partnerships.",
                career: "Professionally, this card suggests long-term career success, financial security through work, and contributing to organizational legacy.",
                spiritual: "Spiritually, Ten of Pentacles represents spiritual wealth, long-term spiritual security, and contributing to spiritual community legacy."
            },
            reversed: {
                general: "Reversed, Ten of Pentacles suggests the dark side of wealth, financial failure, or loss of family security.",
                love: "In love, reversed indicates family relationship problems, loss of romantic security, or family conflicts affecting partnerships.",
                career: "Career-wise, reversed suggests career financial failure, loss of professional security, or workplace family/team conflicts.",
                spiritual: "Spiritually reversed, indicates spiritual community problems, loss of spiritual security, or spiritual family conflicts."
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
        image: "img/big/pentacles11.jpg",
        keywords: {
            upright: ["Manifestation", "Financial opportunity", "Skill development"],
            reversed: ["Lack of progress", "Procrastination", "Get-rich-quick schemes"]
        },
        meanings: {
            upright: {
                general: "Page of Pentacles represents manifestation, financial opportunity, and skill development. It signifies practical learning and grounded approach to success.",
                love: "In love, Page of Pentacles indicates practical romantic approach, learning relationship skills, and manifesting stable love.",
                career: "Professionally, this card suggests learning career skills, practical work approach, and manifesting professional opportunities.",
                spiritual: "Spiritually, Page of Pentacles represents practical spiritual approach, learning spiritual skills, and manifesting spiritual opportunities."
            },
            reversed: {
                general: "Reversed, Page of Pentacles suggests lack of progress, procrastination, or attraction to get-rich-quick schemes.",
                love: "In love, reversed indicates lack of relationship progress, romantic procrastination, or seeking quick relationship fixes.",
                career: "Career-wise, reversed suggests lack of career progress, professional procrastination, or seeking quick career success.",
                spiritual: "Spiritually reversed, indicates lack of spiritual progress, spiritual procrastination, or seeking quick spiritual fixes."
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
        image: "img/big/pentacles12.jpg",
        keywords: {
            upright: ["Hard work", "Productivity", "Routine", "Conservatism"],
            reversed: ["Self-discipline", "Boredom", "Feeling 'stuck', Perfectionism"]
        },
        meanings: {
            upright: {
                general: "Knight of Pentacles represents hard work, productivity, routine, and conservatism. It signifies steady progress and methodical approach to goals.",
                love: "In love, Knight of Pentacles indicates steady romantic progress, routine relationships, and conservative approach to love.",
                career: "Professionally, this card suggests steady career progress, productive work habits, and conservative professional approach.",
                spiritual: "Spiritually, Knight of Pentacles represents steady spiritual progress, routine spiritual practice, and conservative spiritual approach."
            },
            reversed: {
                general: "Reversed, Knight of Pentacles suggests need for self-discipline, boredom with routine, feeling stuck, or perfectionism.",
                love: "In love, reversed indicates relationship boredom, feeling stuck romantically, or perfectionism in partnerships.",
                career: "Career-wise, reversed suggests career boredom, feeling stuck professionally, or perfectionism at work.",
                spiritual: "Spiritually reversed, indicates spiritual boredom, feeling stuck spiritually, or perfectionism in spiritual practice."
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
        image: "img/big/pentacles13.jpg",
        keywords: {
            upright: ["Nurturing", "Practical", "Providing financially", "A working parent"],
            reversed: ["Financial independence", "Self-care", "Work-home imbalance"]
        },
        meanings: {
            upright: {
                general: "Queen of Pentacles represents nurturing, practicality, financial providing, and balancing work with family. She signifies abundant care and material generosity.",
                love: "In love, Queen of Pentacles indicates nurturing relationships, practical romantic approach, and providing material security for partners.",
                career: "Professionally, this card suggests nurturing work environment, practical professional approach, and balancing career with family responsibilities.",
                spiritual: "Spiritually, Queen of Pentacles represents nurturing spiritual approach, practical spirituality, and providing spiritual support to others."
            },
            reversed: {
                general: "Reversed, Queen of Pentacles suggests focus on financial independence, need for self-care, or work-home imbalance.",
                love: "In love, reversed indicates need for relationship independence, romantic self-care, or imbalance between love and other responsibilities.",
                career: "Career-wise, reversed suggests need for professional independence, workplace self-care, or work-life imbalance.",
                spiritual: "Spiritually reversed, indicates need for spiritual independence, spiritual self-care, or imbalance between spirituality and material life."
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
        image: "img/big/pentacles14.jpg",
        keywords: {
            upright: ["Financial success", "Leadership", "Security", "Discipline", "Abundance"],
            reversed: ["Financially inept", "Obsessed with wealth and status", "Bad business investments"]
        },
        meanings: {
            upright: {
                general: "King of Pentacles represents financial success, leadership, security, discipline, and abundance. He signifies mastery over material realm and generous leadership.",
                love: "In love, King of Pentacles indicates financially secure relationships, leadership in partnerships, and abundant romantic provision.",
                career: "Professionally, this card suggests financial career success, leadership positions, and disciplined professional approach.",
                spiritual: "Spiritually, King of Pentacles represents abundant spiritual leadership, material support for spiritual work, and disciplined spiritual practice."
            },
            reversed: {
                general: "Reversed, King of Pentacles suggests financial ineptitude, obsession with wealth and status, or bad business investments.",
                love: "In love, reversed indicates relationship materialism, obsession with status in partnerships, or poor romantic investments.",
                career: "Career-wise, reversed suggests career financial problems, obsession with professional status, or poor business decisions.",
                spiritual: "Spiritually reversed, indicates spiritual materialism, obsession with spiritual status, or poor spiritual investments."
            }
        }
    }
];

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { completeTarotDeck };
} else if (typeof window !== 'undefined') {
    window.completeTarotDeck = completeTarotDeck;
}