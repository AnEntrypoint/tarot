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
            upright: ["New beginnings", "Innocence", "Spontaneity", "Free spirit", "Adventure"],
            reversed: ["Recklessness", "Taken advantage of", "Inconsideration", "Foolishness"]
        },
        meanings: {
            upright: {
                general: "The Fool represents new beginnings, a leap of faith, innocence, and a free-spirited approach to life. It signifies embarking on a new journey with optimism and a sense of adventure.",
                love: "New romantic beginnings, taking a leap of faith in love, approaching relationships with childlike wonder.",
                career: "New career opportunities, starting fresh, following passion rather than convention.",
                spiritual: "Beginning of spiritual journey, openness to new beliefs, trusting divine guidance."
            },
            reversed: {
                general: "Recklessness, being taken advantage of, naive approach leading to poor decisions.",
                love: "Being too naive in relationships, making poor romantic choices, ignoring red flags.",
                career: "Poor planning, risky decisions, being unprepared for opportunities.",
                spiritual: "Spiritual bypassing, avoiding necessary growth, being gullible about spiritual matters."
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
            upright: ["Manifestation", "Resourcefulness", "Power", "Inspired action", "Will"],
            reversed: ["Manipulation", "Poor planning", "Untapped talents", "Lack of focus"]
        },
        meanings: {
            upright: {
                general: "The Magician symbolizes manifestation, resourcefulness, power, and inspired action. Having all tools necessary to achieve goals.",
                love: "Power to manifest desired love life, clear communication, charisma in relationships.",
                career: "Leadership, innovation, having skills and resources to succeed professionally.",
                spiritual: "Power of will and focused intention in spiritual practice, manifesting spiritual goals."
            },
            reversed: {
                general: "Manipulation, poor planning, untapped talents, misuse of power or feeling powerless.",
                love: "Manipulation in relationships, using charm for selfish purposes, inauthentic behavior.",
                career: "Misusing skills, lacking direction, failing to apply talents effectively.",
                spiritual: "Using spiritual knowledge for ego or manipulation rather than genuine growth."
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
            upright: ["Intuition", "Sacred knowledge", "Divine feminine", "Subconscious", "Mystery"],
            reversed: ["Secrets revealed", "Hidden agendas", "Lack of intuition", "Disconnection"]
        },
        meanings: {
            upright: {
                general: "Intuition, sacred knowledge, the subconscious, and mystery. Trusting inner voice and hidden truths.",
                love: "Trusting intuition about relationships, deep spiritual connection, listening to inner wisdom.",
                career: "Using intuition alongside logic, trusting gut feelings, careers in spirituality or healing.",
                spiritual: "Deep inner knowing, psychic abilities, connection to divine feminine."
            },
            reversed: {
                general: "Secrets being revealed, hidden agendas, disconnection from intuition.",
                love: "Hidden relationship aspects, lack of emotional connection, ignoring intuitive warnings.",
                career: "Office secrets, hidden information, disconnection from intuitive guidance.",
                spiritual: "Being disconnected from intuition, ignoring inner wisdom, spiritual confusion."
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
            upright: ["Femininity", "Beauty", "Nature", "Nurturing", "Abundance", "Fertility"],
            reversed: ["Creative block", "Dependence", "Smothering", "Lack of growth"]
        },
        meanings: {
            upright: {
                general: "Femininity, beauty, nature, nurturing, and abundance. Fertility, creativity, and blossoming of new ideas.",
                love: "Deep love, sensuality, possibly pregnancy or starting a family, nurturing relationships.",
                career: "Creative success, abundance, growth, careers in creative fields or healthcare.",
                spiritual: "Connection with Mother Earth energy, natural cycles, divine feminine creation."
            },
            reversed: {
                general: "Creative block, dependence on others, issues with nurturing, smothering behavior.",
                love: "Codependency, smothering behavior, fertility issues, imbalance in giving and receiving.",
                career: "Creative blocks, lack of growth, problems with colleagues, financial struggles.",
                spiritual: "Disconnection from nature, blocked creativity, issues with feminine divinity."
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
            upright: ["Authority", "Structure", "Control", "Father figure", "Leadership"],
            reversed: ["Domination", "Excessive control", "Lack of discipline", "Tyranny"]
        },
        meanings: {
            upright: {
                general: "Authority, structure, control, and father figure. Leadership, stability, and establishment of order.",
                love: "Stable, committed partnership with clear boundaries, protective provider-type partner.",
                career: "Leadership roles, structure, authority, success through discipline and organization.",
                spiritual: "Divine masculine energy, spiritual authority, need for structure in spiritual practice."
            },
            reversed: {
                general: "Domination, excessive control, rigidity, abuse of power, lack of discipline.",
                love: "Controlling behavior, power struggles, lack of commitment, authority issues.",
                career: "Abuse of power, poor leadership, resistance to authority, workplace tyranny.",
                spiritual: "Spiritual authoritarianism, rigid thinking, misuse of spiritual authority."
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
            upright: ["Spiritual wisdom", "Religious beliefs", "Conformity", "Tradition", "Institutions"],
            reversed: ["Personal beliefs", "Freedom", "Challenging tradition", "New approaches"]
        },
        meanings: {
            upright: {
                general: "Spiritual wisdom, tradition, conformity, and institutions. Learning from established systems.",
                love: "Traditional commitment like marriage, relationship counseling, conventional relationship paths.",
                career: "Working within established systems, traditional career paths, roles in education or religion.",
                spiritual: "Organized religion, traditional spiritual practices, learning from established teachers."
            },
            reversed: {
                general: "Rebellion, unconventionality, need for new approaches, challenging traditions.",
                love: "Unconventional relationships, challenging relationship norms, spiritual incompatibility.",
                career: "Breaking from traditional paths, challenging workplace norms, innovative fields.",
                spiritual: "Personal spiritual beliefs, questioning doctrine, exploring alternative paths."
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
            upright: ["Love", "Harmony", "Relationships", "Choice", "Values alignment"],
            reversed: ["Disharmony", "Imbalance", "Misaligned values", "Difficult choices"]
        },
        meanings: {
            upright: {
                general: "Love, harmony, relationships, choices, and values alignment. Significant romantic partnership or important decisions.",
                love: "Deep romantic connection, soul mates, significant relationship choice, harmony and attraction.",
                career: "Partnership in business, working with compatible people, career choices based on values.",
                spiritual: "Union of opposites, divine love, making choices aligned with higher self."
            },
            reversed: {
                general: "Disharmony, imbalance, misalignment of values, difficult choice or conflict.",
                love: "Relationship problems, incompatibility, infidelity, difficult choice between lovers.",
                career: "Workplace conflicts, poor partnerships, career choices conflicting with values.",
                spiritual: "Internal conflict, misaligned choices, difficulty integrating different aspects."
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
            upright: ["Control", "Willpower", "Victory", "Determination", "Direction"],
            reversed: ["Lack of control", "Opposition", "Lack of direction", "Aggression"]
        },
        meanings: {
            upright: {
                general: "Control, willpower, victory, determination, and clear direction. Overcoming obstacles through focused effort.",
                love: "Taking control of love life, pursuing someone with determination, overcoming relationship obstacles.",
                career: "Success through determination, taking control of career path, achieving victory in competition.",
                spiritual: "Mastering desires, spiritual willpower, achieving spiritual goals through discipline."
            },
            reversed: {
                general: "Lack of control, opposition, lack of direction, feeling overwhelmed or pulled in directions.",
                love: "Relationship conflicts, power struggles, lack of direction in romantic matters.",
                career: "Setbacks, lack of progress, feeling stuck despite efforts to move forward.",
                spiritual: "Lack of spiritual direction, internal conflicts, difficulty maintaining discipline."
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
            upright: ["Courage", "Compassion", "Inner strength", "Patience", "Control"],
            reversed: ["Weakness", "Self-doubt", "Lack of confidence", "Giving up"]
        },
        meanings: {
            upright: {
                general: "Courage, compassion, inner strength, and influence. Power of gentle persuasion over brute force.",
                love: "Patience and compassion in relationships, strength to work through challenges with love.",
                career: "Leadership through inspiration, dealing with difficult people patiently, inner confidence.",
                spiritual: "Mastering lower nature, spiritual courage, power of love over fear."
            },
            reversed: {
                general: "Weakness, self-doubt, lack of self-discipline, feeling overwhelmed by challenges.",
                love: "Lack of confidence in relationships, being too aggressive or passive, unable to handle challenges.",
                career: "Lack of confidence, being overwhelmed by work challenges, misusing personal power.",
                spiritual: "Lack of spiritual courage, overwhelmed by negative emotions, giving up on growth."
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
            upright: ["Introspection", "Solitude", "Guidance", "Inner wisdom", "Soul searching"],
            reversed: ["Isolation", "Loneliness", "Withdrawal", "Avoiding introspection"]
        },
        meanings: {
            upright: {
                general: "Introspection, solitude, guidance, and soul-searching. Period of withdrawal to seek inner wisdom.",
                love: "Taking time alone to understand love desires, finding spiritual guide in romantic matters.",
                career: "Seeking mentorship, reflecting on career goals, working independently.",
                spiritual: "Search for spiritual truth, meditation, role of wise teacher or guide."
            },
            reversed: {
                general: "Isolation, loneliness, excessive withdrawal, feeling disconnected or avoiding introspection.",
                love: "Loneliness, fear of intimacy, avoiding relationship issues through withdrawal.",
                career: "Isolation at work, avoiding career development, refusing helpful guidance.",
                spiritual: "Avoiding inner work, spiritual bypassing, feeling disconnected from guidance."
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
            upright: ["Good luck", "Destiny", "Change", "Cycles", "Turning point"],
            reversed: ["Bad luck", "Resistance to change", "Breaking cycles", "Setbacks"]
        },
        meanings: {
            upright: {
                general: "Good luck, destiny, change, cycles, and turning points. Fated event or shift beyond control.",
                love: "Destined meeting, positive changes in relationships, natural cycles of love.",
                career: "Lucky breaks, positive career changes, beneficial cycles in work life.",
                spiritual: "Karmic cycles, spiritual evolution, trusting divine timing and destiny."
            },
            reversed: {
                general: "Bad luck, resistance to change, breaking cycles, unexpected setbacks or struggling against flow.",
                love: "Relationship cycles ending, resistance to changes in love, unlucky timing in romance.",
                career: "Setbacks, missed opportunities, resistance to necessary professional changes.",
                spiritual: "Struggling against karmic lessons, resisting spiritual growth, feeling spiritually unlucky."
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
            upright: ["Fairness", "Truth", "Balance", "Law", "Accountability"],
            reversed: ["Unfairness", "Lack of accountability", "Dishonesty", "Bias"]
        },
        meanings: {
            upright: {
                general: "Fairness, truth, balance, law, and accountability. Justice being served and truth revealed.",
                love: "Fair treatment in relationships, honest communication, balanced give and take.",
                career: "Legal matters resolving favorably, fair treatment at work, ethical business practices.",
                spiritual: "Karmic justice, moral accountability, seeking truth and balance in spiritual practice."
            },
            reversed: {
                general: "Unfairness, lack of accountability, dishonesty, bias, or corruption.",
                love: "Unfair treatment in relationships, dishonesty, imbalanced relationship dynamics.",
                career: "Workplace unfairness, legal troubles, unethical behavior affecting career.",
                spiritual: "Avoiding moral responsibility, spiritual dishonesty, karmic imbalance."
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
            upright: ["Surrender", "Letting go", "New perspective", "Sacrifice", "Patience"],
            reversed: ["Resistance", "Stalling", "Needless sacrifice", "Fear of sacrifice"]
        },
        meanings: {
            upright: {
                general: "Surrender, letting go, new perspective, and sacrifice. Period of suspension leading to enlightenment.",
                love: "Letting go of control in relationships, sacrificing for love, seeing relationships from new angle.",
                career: "Career pause for reflection, sacrificing short-term gain for long-term benefit.",
                spiritual: "Spiritual surrender, letting go of ego, gaining new spiritual perspective through sacrifice."
            },
            reversed: {
                general: "Resistance to change, stalling, needless sacrifice, or fear of letting go.",
                love: "Resistance to relationship changes, fear of commitment, making unnecessary sacrifices.",
                career: "Stalling career progress, resistance to necessary changes, fear of career sacrifice.",
                spiritual: "Spiritual resistance, fear of surrender, avoiding necessary spiritual sacrifice."
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
            upright: ["Transformation", "Endings", "Rebirth", "Change", "Release"],
            reversed: ["Resistance to change", "Fear of endings", "Stagnation", "Incomplete transformation"]
        },
        meanings: {
            upright: {
                general: "Transformation, endings, rebirth, and change. Death of old to make way for new.",
                love: "Relationship transformation, ending of old patterns, rebirth of love in new form.",
                career: "Career transformation, ending of old job/role, professional rebirth and new opportunities.",
                spiritual: "Spiritual transformation, death of ego, rebirth into higher consciousness."
            },
            reversed: {
                general: "Resistance to change, fear of endings, stagnation, or incomplete transformation.",
                love: "Fear of relationship change, clinging to dead relationships, resisting growth.",
                career: "Resistance to career change, fear of letting go of old job, stagnation.",
                spiritual: "Spiritual stagnation, fear of ego death, resisting necessary transformation."
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
            upright: ["Balance", "Moderation", "Patience", "Harmony", "Healing"],
            reversed: ["Imbalance", "Excess", "Impatience", "Lack of harmony"]
        },
        meanings: {
            upright: {
                general: "Balance, moderation, patience, harmony, and healing. Finding middle ground and integration.",
                love: "Balanced relationship, patience in love, healing relationship wounds through moderation.",
                career: "Work-life balance, patience with career progress, harmonious workplace relationships.",
                spiritual: "Spiritual balance, integrating different aspects of self, patient spiritual progress."
            },
            reversed: {
                general: "Imbalance, excess, impatience, lack of harmony, or inability to find middle ground.",
                love: "Imbalanced relationships, lack of patience, excess or extremes in love.",
                career: "Work-life imbalance, impatience with progress, workplace disharmony.",
                spiritual: "Spiritual imbalance, impatience with growth, inability to integrate aspects."
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
            upright: ["Bondage", "Materialism", "Temptation", "Addiction", "Restriction"],
            reversed: ["Freedom", "Breaking chains", "Overcoming addiction", "Enlightenment"]
        },
        meanings: {
            upright: {
                general: "Bondage, materialism, temptation, addiction, and restriction. Being trapped by material desires.",
                love: "Unhealthy relationship patterns, codependency, sexual obsession, feeling trapped in love.",
                career: "Golden handcuffs, being trapped in unsatisfying job, materialistic career focus.",
                spiritual: "Spiritual materialism, being trapped by ego, temptation away from spiritual path."
            },
            reversed: {
                general: "Freedom, breaking chains, overcoming addiction, enlightenment, and liberation.",
                love: "Breaking free from unhealthy relationships, overcoming codependency, sexual liberation.",
                career: "Breaking free from unsatisfying work, overcoming materialistic focus, career liberation.",
                spiritual: "Spiritual liberation, breaking free from ego, overcoming spiritual materialism."
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
            upright: ["Sudden change", "Upheaval", "Revelation", "Destruction", "Awakening"],
            reversed: ["Avoiding disaster", "Delaying inevitable", "Fear of change", "Internal upheaval"]
        },
        meanings: {
            upright: {
                general: "Sudden change, upheaval, revelation, and destruction. Tower moment bringing awakening.",
                love: "Sudden relationship revelation, breakup, upheaval in love life, awakening about partner.",
                career: "Sudden job loss, career upheaval, revelation about work situation, professional awakening.",
                spiritual: "Spiritual awakening through crisis, destruction of false beliefs, sudden enlightenment."
            },
            reversed: {
                general: "Avoiding disaster, delaying inevitable, fear of change, or internal upheaval.",
                love: "Avoiding relationship truth, delaying breakup, fear of relationship change.",
                career: "Avoiding career change, delaying inevitable professional shift, fear of job loss.",
                spiritual: "Avoiding spiritual awakening, fear of spiritual change, internal spiritual crisis."
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
            upright: ["Hope", "Inspiration", "Healing", "Renewal", "Spirituality"],
            reversed: ["Despair", "Lack of faith", "Discouragement", "Disconnection"]
        },
        meanings: {
            upright: {
                general: "Hope, inspiration, healing, renewal, and spirituality. Light after darkness, renewed faith.",
                love: "Renewed hope in love, healing from past hurts, spiritual connection with partner.",
                career: "Career inspiration, renewed hope for professional future, healing work environment.",
                spiritual: "Spiritual renewal, renewed faith, healing spiritual wounds, connection to higher purpose."
            },
            reversed: {
                general: "Despair, lack of faith, discouragement, disconnection from hope and spirituality.",
                love: "Loss of hope in love, discouragement about relationships, disconnection from partner.",
                career: "Career despair, lack of professional inspiration, discouragement about future.",
                spiritual: "Spiritual despair, loss of faith, disconnection from higher purpose."
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
            upright: ["Illusion", "Intuition", "Dreams", "Subconscious", "Fear"],
            reversed: ["Truth revealed", "Clarity", "Overcoming fear", "Releasing illusions"]
        },
        meanings: {
            upright: {
                general: "Illusion, intuition, dreams, subconscious, and fear. Things not being as they seem.",
                love: "Romantic illusions, confusion in love, hidden aspects of relationships, emotional fears.",
                career: "Workplace confusion, hidden agendas, unclear professional direction, career fears.",
                spiritual: "Spiritual confusion, illusions on path, deep subconscious work, confronting fears."
            },
            reversed: {
                general: "Truth revealed, clarity, overcoming fear, releasing illusions, seeing clearly.",
                love: "Relationship clarity, overcoming romantic fears, seeing partner truly, releasing illusions.",
                career: "Professional clarity, overcoming career fears, seeing workplace truth, clear direction.",
                spiritual: "Spiritual clarity, overcoming spiritual fears, releasing spiritual illusions."
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
            upright: ["Joy", "Success", "Vitality", "Enlightenment", "Positivity"],
            reversed: ["Temporary setbacks", "Lack of enthusiasm", "Delayed success", "Inner child wounds"]
        },
        meanings: {
            upright: {
                general: "Joy, success, vitality, enlightenment, and positivity. Pure happiness and achievement.",
                love: "Joyful relationships, successful love life, vitality in romance, enlightened love.",
                career: "Career success, professional joy, vitality in work, achievement and recognition.",
                spiritual: "Spiritual joy, enlightenment, vitality in practice, successful spiritual development."
            },
            reversed: {
                general: "Temporary setbacks, lack of enthusiasm, delayed success, inner child wounds.",
                love: "Temporary relationship setbacks, lack of romantic enthusiasm, delayed love success.",
                career: "Temporary career setbacks, lack of work enthusiasm, delayed professional success.",
                spiritual: "Temporary spiritual setbacks, lack of spiritual enthusiasm, delayed enlightenment."
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
            upright: ["Rebirth", "Awakening", "Calling", "Forgiveness", "Evaluation"],
            reversed: ["Self-doubt", "Avoiding calling", "Harsh judgment", "Lack of forgiveness"]
        },
        meanings: {
            upright: {
                general: "Rebirth, awakening, calling, forgiveness, and evaluation. Spiritual awakening and new purpose.",
                love: "Relationship rebirth, awakening to true love, forgiving past hurts, evaluating relationships.",
                career: "Career calling, professional awakening, rebirth of career purpose, evaluating work life.",
                spiritual: "Spiritual rebirth, awakening to higher calling, forgiving self and others."
            },
            reversed: {
                general: "Self-doubt, avoiding calling, harsh judgment, lack of forgiveness, fear of awakening.",
                love: "Self-doubt in relationships, avoiding relationship calling, harsh judgment of partner.",
                career: "Self-doubt about career, avoiding professional calling, harsh judgment of work.",
                spiritual: "Spiritual self-doubt, avoiding spiritual calling, harsh spiritual judgment."
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
            upright: ["Completion", "Achievement", "Fulfillment", "Success", "Integration"],
            reversed: ["Incomplete", "Lack of closure", "Seeking shortcuts", "Unfulfilled potential"]
        },
        meanings: {
            upright: {
                general: "Completion, achievement, fulfillment, success, and integration. End of major cycle.",
                love: "Relationship fulfillment, complete love, successful partnership, integrated relationship.",
                career: "Career completion, professional achievement, work fulfillment, successful integration.",
                spiritual: "Spiritual completion, fulfillment of purpose, successful integration of all aspects."
            },
            reversed: {
                general: "Incomplete projects, lack of closure, seeking shortcuts, unfulfilled potential.",
                love: "Incomplete relationships, lack of closure in love, unfulfilled romantic potential.",
                career: "Incomplete career goals, lack of professional closure, unfulfilled work potential.",
                spiritual: "Incomplete spiritual development, lack of spiritual closure, unfulfilled potential."
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
            upright: ["Inspiration", "New opportunities", "Growth", "Potential", "Creative energy"],
            reversed: ["Lack of energy", "Delays", "Creative blocks", "Wasted opportunities"]
        },
        meanings: {
            upright: {
                general: "Burst of inspiration, new opportunities, creative potential, and spark of creation.",
                love: "New romantic beginnings, passion, burst of sexual energy in relationships.",
                career: "New projects, creative opportunities, spark of brilliant new idea for success.",
                spiritual: "Spiritual awakening, new spiritual practices, renewed passion for growth."
            },
            reversed: {
                general: "Lack of inspiration, missed opportunities, delays in creative projects.",
                love: "Lack of passion, delayed romantic opportunities, creative blocks in expressing love.",
                career: "Missed opportunities, lack of motivation, creative blocks preventing growth.",
                spiritual: "Spiritual apathy, delayed spiritual growth, lack of inspiration in practice."
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
            upright: ["Planning", "Future vision", "Personal power", "Discovery", "Control"],
            reversed: ["Fear of unknown", "Lack of planning", "Playing it safe", "Disorganized thinking"]
        },
        meanings: {
            upright: {
                general: "Planning, future vision, progress, and discovery. Standing at crossroads making strategic plans.",
                love: "Planning future with partner, long-distance relationships, considering relationship expansion.",
                career: "Strategic planning, expanding business or career, considering new opportunities abroad.",
                spiritual: "Planning spiritual journey, exploring new spiritual territories, expanding awareness."
            },
            reversed: {
                general: "Fear of unknown, lack of planning, indecision about future directions.",
                love: "Fear of commitment, unwillingness to plan future together, relationship stagnation.",
                career: "Poor planning, fear of taking risks, playing it too safe professionally.",
                spiritual: "Lack of spiritual direction, fear of spiritual exploration, stagnation in growth."
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
            upright: ["Progress", "Expansion", "Foresight", "Overseas opportunities", "Leadership"],
            reversed: ["Delays", "Lack of foresight", "Obstacles", "Unexpected problems"]
        },
        meanings: {
            upright: {
                general: "Progress, expansion, foresight, and leadership. Plans coming to fruition with forward momentum.",
                love: "Long-distance relationships progressing, expansion of relationship, foresight in love.",
                career: "Career expansion, overseas opportunities, leadership roles, progress in business ventures.",
                spiritual: "Spiritual expansion, sharing spiritual knowledge, leadership in spiritual community."
            },
            reversed: {
                general: "Delays in progress, lack of foresight, obstacles preventing expansion.",
                love: "Relationship delays, obstacles in long-distance love, lack of relationship foresight.",
                career: "Career delays, obstacles to expansion, lack of business foresight, missed opportunities.",
                spiritual: "Spiritual delays, obstacles to expansion, lack of spiritual foresight."
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
            upright: ["Celebration", "Harmony", "Home", "Community", "Achievements"],
            reversed: ["Lack of support", "Instability", "Broken relationships", "Cancelled celebrations"]
        },
        meanings: {
            upright: {
                general: "Celebration, harmony, home, community, and achievements. Milestone celebrations and stability.",
                love: "Relationship milestones, engagement, moving in together, harmonious partnership, family support.",
                career: "Work achievements, team harmony, stable work environment, career milestones worth celebrating.",
                spiritual: "Spiritual community, celebrating spiritual achievements, harmony in spiritual practice."
            },
            reversed: {
                general: "Lack of support, instability, broken relationships, cancelled celebrations.",
                love: "Relationship instability, lack of family support, broken engagements, cancelled wedding plans.",
                career: "Workplace instability, lack of team support, cancelled work celebrations, career setbacks.",
                spiritual: "Lack of spiritual community support, spiritual instability, cancelled spiritual events."
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
            upright: ["Competition", "Conflict", "Disagreements", "Challenges", "Rivalry"],
            reversed: ["Resolution", "Compromise", "End of conflict", "Avoiding competition"]
        },
        meanings: {
            upright: {
                general: "Competition, conflict, disagreements, and challenges. Competitive environment with multiple opposing forces.",
                love: "Relationship conflicts, competition for partner's attention, disagreements, rivalry in love.",
                career: "Workplace competition, conflicts with colleagues, competitive business environment.",
                spiritual: "Spiritual conflicts, disagreements about beliefs, competition in spiritual community."
            },
            reversed: {
                general: "Resolution of conflicts, compromise, end of competition, avoiding confrontation.",
                love: "Resolving relationship conflicts, compromise in love, end of romantic rivalry.",
                career: "Workplace conflict resolution, compromise with colleagues, avoiding office politics.",
                spiritual: "Resolving spiritual conflicts, compromise in beliefs, avoiding spiritual confrontation."
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
            upright: ["Victory", "Success", "Recognition", "Achievement", "Leadership"],
            reversed: ["Defeat", "Lack of recognition", "Private achievement", "Self-doubt"]
        },
        meanings: {
            upright: {
                general: "Victory, success, recognition, and achievement. Public acclaim and triumphant leadership.",
                love: "Successful relationships, recognition of love, victory over relationship obstacles.",
                career: "Career success, public recognition, leadership achievement, professional victory.",
                spiritual: "Spiritual success, recognition of spiritual achievements, leadership in spiritual matters."
            },
            reversed: {
                general: "Defeat, lack of recognition, private achievement, self-doubt about success.",
                love: "Relationship defeats, lack of recognition in love, private romantic achievements.",
                career: "Career defeats, lack of professional recognition, private work achievements, self-doubt.",
                spiritual: "Spiritual defeats, lack of recognition for spiritual work, private spiritual achievements."
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
            upright: ["Defense", "Perseverance", "Standing ground", "Competition", "Courage"],
            reversed: ["Giving up", "Overwhelmed", "Lack of courage", "Retreat"]
        },
        meanings: {
            upright: {
                general: "Defense, perseverance, standing your ground, and courage. Fighting for your position against opposition.",
                love: "Defending relationship, standing up for partner, persevering through love challenges.",
                career: "Defending work position, standing up to workplace challenges, persevering through competition.",
                spiritual: "Defending spiritual beliefs, standing ground in spiritual matters, persevering through tests."
            },
            reversed: {
                general: "Giving up, feeling overwhelmed, lack of courage, retreating from challenges.",
                love: "Giving up on relationship, overwhelmed by love challenges, retreating from romantic defense.",
                career: "Giving up on career goals, overwhelmed by work challenges, retreating from competition.",
                spiritual: "Giving up on spiritual path, overwhelmed by spiritual challenges, retreating from beliefs."
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
            upright: ["Speed", "Progress", "Quick action", "Communication", "Movement"],
            reversed: ["Delays", "Slow progress", "Miscommunication", "Impatience"]
        },
        meanings: {
            upright: {
                general: "Speed, progress, quick action, and movement. Rapid developments and swift communication.",
                love: "Fast-moving romance, quick relationship progress, communication flowing, love letters.",
                career: "Rapid career progress, quick business decisions, fast communication, swift opportunities.",
                spiritual: "Rapid spiritual progress, quick spiritual insights, swift spiritual communication."
            },
            reversed: {
                general: "Delays, slow progress, miscommunication, impatience with pace of change.",
                love: "Relationship delays, slow romantic progress, miscommunication with partner, impatience in love.",
                career: "Career delays, slow business progress, workplace miscommunication, impatience with advancement.",
                spiritual: "Spiritual delays, slow spiritual progress, miscommunication in spiritual matters."
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
            upright: ["Resilience", "Persistence", "Last stand", "Strength", "Determination"],
            reversed: ["Exhaustion", "Giving up", "Lack of resources", "Paranoia"]
        },
        meanings: {
            upright: {
                general: "Resilience, persistence, last stand, and determination. Standing strong despite challenges.",
                love: "Relationship resilience, persistence in love, standing strong through romantic challenges.",
                career: "Career persistence, professional resilience, standing strong through work challenges.",
                spiritual: "Spiritual resilience, persistence in practice, standing strong through spiritual tests."
            },
            reversed: {
                general: "Exhaustion, giving up, lack of resources, paranoia about further challenges.",
                love: "Relationship exhaustion, giving up on love, paranoia about partner's intentions.",
                career: "Career exhaustion, giving up on professional goals, workplace paranoia.",
                spiritual: "Spiritual exhaustion, giving up on spiritual path, paranoia about spiritual challenges."
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
            upright: ["Burden", "Responsibility", "Hard work", "Stress", "Achievement"],
            reversed: ["Release", "Delegation", "Avoiding responsibility", "Shortcuts"]
        },
        meanings: {
            upright: {
                general: "Burden, responsibility, hard work, and stress. Carrying heavy load but approaching success.",
                love: "Relationship burdens, taking on too much responsibility in love, stress from partnership.",
                career: "Work burdens, heavy professional responsibilities, career stress, approaching major achievement.",
                spiritual: "Spiritual burdens, taking on spiritual responsibility for others, stress in spiritual practice."
            },
            reversed: {
                general: "Release of burdens, delegation, avoiding responsibility, taking shortcuts.",
                love: "Releasing relationship burdens, delegating responsibilities in partnership, avoiding commitment.",
                career: "Releasing work burdens, delegating professional responsibilities, avoiding career commitment.",
                spiritual: "Releasing spiritual burdens, delegating spiritual responsibilities, avoiding spiritual commitment."
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
            upright: ["Enthusiasm", "Exploration", "Discovery", "Learning", "Adventure"],
            reversed: ["Lack of direction", "Impatience", "Procrastination", "Pessimism"]
        },
        meanings: {
            upright: {
                general: "Enthusiasm, exploration, discovery, and adventure. Young energy ready to learn and explore.",
                love: "Enthusiastic approach to love, exploring romantic possibilities, discovering love interests.",
                career: "Career exploration, enthusiastic learning, discovering professional passions, adventurous work approach.",
                spiritual: "Spiritual exploration, enthusiastic learning, discovering spiritual interests, adventurous practice."
            },
            reversed: {
                general: "Lack of direction, impatience, procrastination, pessimism about new ventures.",
                love: "Lack of romantic direction, impatience in love, procrastinating on relationship decisions.",
                career: "Lack of career direction, impatience with learning, procrastinating on professional development.",
                spiritual: "Lack of spiritual direction, impatience with spiritual learning, procrastinating on practice."
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
            upright: ["Action", "Adventure", "Impulsiveness", "Energy", "Passion"],
            reversed: ["Recklessness", "Impatience", "Lack of self-control", "Anger"]
        },
        meanings: {
            upright: {
                general: "Action, adventure, impulsiveness, and passion. Quick to act with fiery energy.",
                love: "Passionate romance, adventurous love, impulsive romantic actions, energetic courtship.",
                career: "Taking action in career, adventurous professional moves, passionate about work, energetic approach.",
                spiritual: "Taking spiritual action, adventurous spiritual practice, passionate about beliefs, energetic growth."
            },
            reversed: {
                general: "Recklessness, impatience, lack of self-control, anger affecting judgment.",
                love: "Reckless romantic behavior, impatience in relationships, anger issues affecting love.",
                career: "Reckless career moves, impatience with progress, anger issues at work, lack of professional control.",
                spiritual: "Reckless spiritual behavior, impatience with spiritual progress, spiritual anger."
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
            upright: ["Confidence", "Independence", "Determination", "Leadership", "Warmth"],
            reversed: ["Jealousy", "Selfishness", "Insecurity", "Demanding", "Bitchy"]
        },
        meanings: {
            upright: {
                general: "Confidence, independence, determination, and leadership. Warm, charismatic leader with creative vision.",
                love: "Confident in love, independent partner, determined about relationships, warm romantic leadership.",
                career: "Professional confidence, independent work style, determined career goals, warm leadership.",
                spiritual: "Spiritual confidence, independent spiritual path, determined about beliefs, warm spiritual leadership."
            },
            reversed: {
                general: "Jealousy, selfishness, insecurity, being demanding or difficult.",
                love: "Jealous in relationships, selfish romantic behavior, insecurity affecting love, demanding partner.",
                career: "Workplace jealousy, selfish professional behavior, insecurity affecting work, demanding leadership.",
                spiritual: "Spiritual jealousy, selfish spiritual behavior, insecurity about beliefs, demanding spiritual attitude."
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
            upright: ["Leadership", "Vision", "Entrepreneurship", "Charisma", "Success"],
            reversed: ["Domineering", "Arrogance", "Impulsiveness", "Lack of vision", "Tyranny"]
        },
        meanings: {
            upright: {
                general: "Leadership, vision, entrepreneurship, and charisma. Successful leader with clear vision and natural authority.",
                love: "Leadership in relationships, visionary about love, charismatic romantic partner, successful partnerships.",
                career: "Professional leadership, entrepreneurial success, charismatic business approach, visionary career goals.",
                spiritual: "Spiritual leadership, visionary spiritual approach, charismatic spiritual presence, successful spiritual development."
            },
            reversed: {
                general: "Domineering behavior, arrogance, impulsiveness, lack of vision, tyrannical leadership.",
                love: "Domineering in relationships, arrogant romantic behavior, impulsive love decisions, controlling partner.",
                career: "Domineering leadership, professional arrogance, impulsive business decisions, tyrannical management.",
                spiritual: "Domineering spiritual behavior, spiritual arrogance, impulsive spiritual decisions, spiritual tyranny."
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
            upright: ["New emotions", "Intuition", "Love", "Compassion", "Creativity"],
            reversed: ["Blocked emotions", "Emptiness", "Lack of love", "Creative block"]
        },
        meanings: {
            upright: {
                general: "New emotions, intuition, love, compassion, and creative beginnings. Fresh outpouring of emotional energy.",
                love: "New love, emotional fulfillment, deepening emotional connection in relationships.",
                career: "Creative inspiration, working with compassion, new opportunities in caring professions.",
                spiritual: "Emotional awakening, divine love, new intuitive abilities opening up."
            },
            reversed: {
                general: "Blocked emotions, emptiness, creative block affecting emotional expression.",
                love: "Emotional numbness, unrequited love, difficulty expressing feelings.",
                career: "Creative blocks, lack of inspiration, difficulty connecting emotionally with work.",
                spiritual: "Emotional blockages preventing spiritual growth, disconnection from divine love."
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
            upright: ["Unity", "Partnership", "Connection", "Mutual attraction", "Cooperation"],
            reversed: ["Disharmony", "Imbalance", "Broken partnership", "Self-love issues"]
        },
        meanings: {
            upright: {
                general: "Unity, partnership, connection, and mutual attraction. Harmonious bond built on mutual respect.",
                love: "Soul mate connections, engagement, deep mutual love and respect, perfect romantic partnership.",
                career: "Successful partnerships, teamwork, finding perfect business partner or collaborator.",
                spiritual: "Spiritual partnerships, finding spiritual community, balance between giving and receiving spiritually."
            },
            reversed: {
                general: "Discord, imbalance, broken partnership affecting harmony.",
                love: "Relationship problems, breakups, incompatibility, unrequited love, relationship imbalance.",
                career: "Partnership problems, workplace conflicts, difficulties with teamwork and collaboration.",
                spiritual: "Spiritual isolation, difficulty finding spiritual community, imbalance in spiritual relationships."
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
            upright: ["Friendship", "Community", "Celebration", "Support", "Social gatherings"],
            reversed: ["Isolation", "Loneliness", "Cancelled plans", "Lack of support"]
        },
        meanings: {
            upright: {
                general: "Friendship, community, celebration, and support. Joy shared with others and social connections.",
                love: "Celebrating love with friends, community support for relationship, social romantic events.",
                career: "Team celebrations, workplace friendships, community support for career, networking success.",
                spiritual: "Spiritual community, celebrating spiritual achievements with others, supported spiritual practice."
            },
            reversed: {
                general: "Isolation, loneliness, cancelled plans, lack of support from community.",
                love: "Isolation in relationships, lack of friend support for romance, cancelled romantic social events.",
                career: "Workplace isolation, lack of team support, cancelled work celebrations, networking difficulties.",
                spiritual: "Spiritual isolation, lack of spiritual community support, cancelled spiritual gatherings."
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
            upright: ["Apathy", "Contemplation", "Boredom", "Missed opportunities", "Introspection"],
            reversed: ["Renewed interest", "Motivation", "New opportunities", "Awareness"]
        },
        meanings: {
            upright: {
                general: "Apathy, contemplation, boredom, and missed opportunities. Discontentment with current situation.",
                love: "Relationship apathy, boredom in love, missing romantic opportunities, taking partner for granted.",
                career: "Career apathy, boredom at work, missing professional opportunities, job dissatisfaction.",
                spiritual: "Spiritual apathy, boredom with practice, missing spiritual opportunities, spiritual dissatisfaction."
            },
            reversed: {
                general: "Renewed interest, motivation, new opportunities, awareness of possibilities.",
                love: "Renewed romantic interest, motivation in relationships, awareness of love opportunities.",
                career: "Renewed career interest, professional motivation, awareness of work opportunities.",
                spiritual: "Renewed spiritual interest, motivation in practice, awareness of spiritual opportunities."
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
            upright: ["Loss", "Grief", "Disappointment", "Regret", "Emotional pain"],
            reversed: ["Recovery", "Forgiveness", "Moving on", "Acceptance", "Learning"]
        },
        meanings: {
            upright: {
                general: "Loss, grief, disappointment, and regret. Emotional pain from loss but hope remains.",
                love: "Romantic loss, breakup grief, disappointment in love, regret over relationship decisions.",
                career: "Career loss, professional disappointment, workplace grief, regret over work decisions.",
                spiritual: "Spiritual loss, disappointment in spiritual path, grief over spiritual setbacks."
            },
            reversed: {
                general: "Recovery from loss, forgiveness, moving on, acceptance, learning from experience.",
                love: "Recovery from romantic loss, forgiving ex-partner, moving on from breakup, accepting love endings.",
                career: "Recovery from career loss, forgiving workplace issues, moving on from job disappointment.",
                spiritual: "Recovery from spiritual loss, forgiving spiritual disappointments, moving on from setbacks."
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
            upright: ["Nostalgia", "Childhood", "Innocence", "Reunion", "Happy memories"],
            reversed: ["Living in past", "Stuck in childhood", "Unrealistic expectations", "Naivety"]
        },
        meanings: {
            upright: {
                general: "Nostalgia, childhood memories, innocence, and reunion. Pleasant memories bringing joy.",
                love: "Childhood sweethearts, nostalgic romance, innocent love, reunion with past love.",
                career: "Nostalgic about past work, reunion with former colleagues, innocent approach to career.",
                spiritual: "Nostalgic about spiritual beginnings, innocent spiritual approach, reunion with spiritual past."
            },
            reversed: {
                general: "Living in past, stuck in childhood patterns, unrealistic expectations, excessive naivety.",
                love: "Stuck in past relationships, unrealistic romantic expectations, immature love approach.",
                career: "Stuck in past career patterns, unrealistic professional expectations, immature work approach.",
                spiritual: "Stuck in past spiritual patterns, unrealistic spiritual expectations, immature spiritual approach."
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
            upright: ["Illusion", "Choices", "Wishful thinking", "Fantasy", "Options"],
            reversed: ["Clarity", "Decision made", "Reality check", "Focus", "Commitment"]
        },
        meanings: {
            upright: {
                general: "Illusion, choices, wishful thinking, and fantasy. Many options but confusion about reality.",
                love: "Romantic illusions, too many love choices, fantasy about relationships, wishful romantic thinking.",
                career: "Career illusions, too many professional options, fantasy about work, wishful career thinking.",
                spiritual: "Spiritual illusions, too many spiritual choices, fantasy about spiritual path, wishful thinking."
            },
            reversed: {
                general: "Clarity emerging, decision made, reality check, focus, commitment to path.",
                love: "Romantic clarity, choosing one love interest, reality check about relationships, commitment to partner.",
                career: "Career clarity, choosing professional path, reality check about work, commitment to career goals.",
                spiritual: "Spiritual clarity, choosing spiritual path, reality check about beliefs, commitment to practice."
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
            upright: ["Abandonment", "Walking away", "Seeking truth", "Spiritual quest", "Disappointment"],
            reversed: ["Fear of change", "Stagnation", "Avoidance", "Returning to past"]
        },
        meanings: {
            upright: {
                general: "Abandonment, walking away, seeking truth, and spiritual quest. Leaving behind what no longer serves.",
                love: "Walking away from unfulfilling relationship, seeking deeper romantic truth, abandoning false love.",
                career: "Leaving unsatisfying job, seeking meaningful work, abandoning unfulfilling career path.",
                spiritual: "Abandoning false spiritual path, seeking deeper spiritual truth, spiritual quest for meaning."
            },
            reversed: {
                general: "Fear of change, stagnation, avoidance, returning to past situations.",
                love: "Fear of leaving relationship, avoiding romantic change, returning to ex-partner.",
                career: "Fear of leaving job, avoiding career change, returning to old workplace.",
                spiritual: "Fear of spiritual change, avoiding spiritual growth, returning to old spiritual beliefs."
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
            upright: ["Satisfaction", "Contentment", "Gratitude", "Emotional fulfillment", "Wishes fulfilled"],
            reversed: ["Dissatisfaction", "Greed", "Materialism", "Unfulfilled desires", "Lack of gratitude"]
        },
        meanings: {
            upright: {
                general: "Satisfaction, contentment, gratitude, and emotional fulfillment. Wishes coming true and deep satisfaction.",
                love: "Romantic satisfaction, contentment in love, grateful for partner, emotional fulfillment in relationships.",
                career: "Career satisfaction, contentment with work, grateful for professional success, fulfilled ambitions.",
                spiritual: "Spiritual satisfaction, contentment with practice, grateful for spiritual growth, fulfilled spiritual wishes."
            },
            reversed: {
                general: "Dissatisfaction, greed, materialism, unfulfilled desires, lack of gratitude.",
                love: "Romantic dissatisfaction, greed in relationships, materalistic approach to love, ungrateful for partner.",
                career: "Career dissatisfaction, greed for more success, materialistic work approach, ungrateful for achievements.",
                spiritual: "Spiritual dissatisfaction, greed for spiritual advancement, materialistic spiritual approach."
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
            upright: ["Happiness", "Family", "Harmony", "Emotional fulfillment", "Domestic bliss"],
            reversed: ["Family problems", "Disharmony", "Broken home", "Unfulfilled relationships"]
        },
        meanings: {
            upright: {
                general: "Happiness, family harmony, emotional fulfillment, and domestic bliss. Perfect emotional contentment.",
                love: "Happy family life, harmonious relationships, emotional fulfillment in love, domestic happiness.",
                career: "Work-family balance, harmonious workplace, career supporting family happiness.",
                spiritual: "Spiritual family, harmonious spiritual community, emotional fulfillment through spiritual practice."
            },
            reversed: {
                general: "Family problems, disharmony, broken home, unfulfilled relationships.",
                love: "Family relationship problems, romantic disharmony, broken home, unfulfilled romantic relationships.",
                career: "Work-family conflicts, workplace disharmony, career problems affecting family.",
                spiritual: "Spiritual family problems, disharmony in spiritual community, unfulfilled spiritual relationships."
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
            upright: ["Emotional messages", "Intuition", "Creativity", "Sensitivity", "Spiritual messages"],
            reversed: ["Emotional immaturity", "Moodiness", "Blocked intuition", "Creative blocks"]
        },
        meanings: {
            upright: {
                general: "Emotional messages, intuition, creativity, and sensitivity. Young emotional energy bringing new insights.",
                love: "Romantic messages, intuitive approach to love, creative romance, sensitive to partner's needs.",
                career: "Creative work opportunities, intuitive career approach, sensitive to workplace emotions.",
                spiritual: "Spiritual messages, intuitive spiritual approach, creative spiritual expression, sensitive to spiritual energy."
            },
            reversed: {
                general: "Emotional immaturity, moodiness, blocked intuition, creative blocks.",
                love: "Immature romantic behavior, moody in relationships, blocked romantic intuition.",
                career: "Immature work behavior, moody at workplace, blocked creative intuition.",
                spiritual: "Immature spiritual behavior, moody about spiritual practice, blocked spiritual intuition."
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
            upright: ["Romance", "Charm", "Idealism", "Following heart", "Emotional pursuit"],
            reversed: ["Moodiness", "Unrealistic", "Jealousy", "Brooding", "Emotional manipulation"]
        },
        meanings: {
            upright: {
                general: "Romance, charm, idealism, and following heart. Emotional pursuit with romantic idealism.",
                love: "Romantic pursuit, charming courtship, idealistic about love, following heart in romance.",
                career: "Following heart in career, romantic approach to work, charming professional demeanor.",
                spiritual: "Following heart in spiritual practice, romantic approach to spirituality, charming spiritual presence."
            },
            reversed: {
                general: "Moodiness, unrealistic expectations, jealousy, brooding, emotional manipulation.",
                love: "Moody romantic behavior, unrealistic love expectations, jealousy in relationships, emotional manipulation.",
                career: "Moody work behavior, unrealistic career expectations, workplace jealousy, emotional work manipulation.",
                spiritual: "Moody spiritual behavior, unrealistic spiritual expectations, spiritual jealousy, emotional spiritual manipulation."
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
            upright: ["Intuition", "Compassion", "Emotional security", "Nurturing", "Psychic abilities"],
            reversed: ["Emotional insecurity", "Martyrdom", "Moodiness", "Lack of boundaries"]
        },
        meanings: {
            upright: {
                general: "Intuition, compassion, emotional security, and nurturing. Emotionally mature with strong psychic abilities.",
                love: "Nurturing romantic partner, emotionally secure in love, intuitive about relationships, compassionate lover.",
                career: "Nurturing leadership, emotionally secure at work, intuitive business decisions, compassionate management.",
                spiritual: "Nurturing spiritual presence, emotionally secure in beliefs, intuitive spiritual guidance, compassionate practice."
            },
            reversed: {
                general: "Emotional insecurity, martyrdom, moodiness, lack of emotional boundaries.",
                love: "Emotionally insecure in relationships, martyr complex in love, moody romantic behavior, poor boundaries.",
                career: "Emotionally insecure at work, martyr complex professionally, moody workplace behavior, poor work boundaries.",
                spiritual: "Emotionally insecure spiritually, spiritual martyrdom, moody about practice, poor spiritual boundaries."
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
            upright: ["Emotional balance", "Compassion", "Diplomacy", "Calm", "Wisdom"],
            reversed: ["Emotional manipulation", "Moodiness", "Lack of emotional control", "Suppressed emotions"]
        },
        meanings: {
            upright: {
                general: "Emotional balance, compassion, diplomacy, and wisdom. Emotionally mature leader with calm presence.",
                love: "Emotionally balanced partner, compassionate in love, diplomatic in relationships, wise romantic counsel.",
                career: "Emotionally balanced leadership, compassionate management, diplomatic business approach, wise professional decisions.",
                spiritual: "Emotionally balanced spiritual leadership, compassionate spiritual guidance, diplomatic spiritual approach, wise spiritual counsel."
            },
            reversed: {
                general: "Emotional manipulation, moodiness, lack of emotional control, suppressed emotions.",
                love: "Emotional manipulation in relationships, moody romantic behavior, lack of emotional control in love.",
                career: "Emotional manipulation at work, moody leadership, lack of emotional control professionally.",
                spiritual: "Emotional manipulation spiritually, moody spiritual behavior, lack of emotional control in practice."
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
            upright: ["New ideas", "Mental clarity", "Breakthrough", "Communication", "Truth"],
            reversed: ["Confusion", "Chaos", "Lack of clarity", "Misinformation"]
        },
        meanings: {
            upright: {
                general: "New ideas, clarity, breakthrough, and truth. Moment of mental clarity or decisive insight.",
                love: "Clear communication in relationships, breakthrough understanding, new intellectual connections with partners.",
                career: "New ideas, breakthrough innovations, clear thinking, success through mental acuity and communication.",
                spiritual: "Mental clarity about spiritual matters, breakthrough insights, truth revelation."
            },
            reversed: {
                general: "Confusion, chaos, misused mental power leading to poor decisions.",
                love: "Miscommunication in relationships, mental games, unclear thinking affecting relationship decisions.",
                career: "Confusion, poor communication, mental fog affecting professional judgment.",
                spiritual: "Mental confusion about spiritual matters, false insights, overthinking spiritual concepts."
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
            upright: ["Indecision", "Stalemate", "Blocked emotions", "Difficult choice"],
            reversed: ["Decision made", "Confusion cleared", "Information revealed", "Emotional release"]
        },
        meanings: {
            upright: {
                general: "Indecision, stalemate, being at crossroads where difficult choice needs to be made.",
                love: "Indecision about relationship, avoiding difficult conversations, being torn between two people.",
                career: "Difficult career choices, workplace dilemmas, avoiding necessary business decisions.",
                spiritual: "Being torn between different spiritual paths, avoiding difficult spiritual truths."
            },
            reversed: {
                general: "Finally making decision, confusion clearing, information being revealed.",
                love: "Making relationship decision, ending indecision, communication opening up.",
                career: "Breaking through indecision, new information helping career choices, resolving workplace dilemmas.",
                spiritual: "Spiritual clarity emerging, making spiritual decisions, releasing spiritual confusion."
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
            upright: ["Heartbreak", "Sorrow", "Grief", "Betrayal", "Emotional pain"],
            reversed: ["Recovery", "Forgiveness", "Healing", "Moving on", "Optimism"]
        },
        meanings: {
            upright: {
                general: "Heartbreak, sorrow, grief, and betrayal. Deep emotional pain from loss or betrayal.",
                love: "Romantic heartbreak, betrayal by partner, painful breakup, love triangle causing sorrow.",
                career: "Professional betrayal, workplace heartbreak, career disappointment, betrayal by colleagues.",
                spiritual: "Spiritual heartbreak, betrayal of spiritual trust, sorrow over spiritual loss."
            },
            reversed: {
                general: "Recovery from heartbreak, forgiveness, healing, moving on, returning optimism.",
                love: "Recovering from romantic heartbreak, forgiving partner's betrayal, healing from love pain.",
                career: "Recovering from professional betrayal, healing workplace relationships, moving on from career disappointment.",
                spiritual: "Recovering from spiritual heartbreak, forgiving spiritual betrayal, healing spiritual wounds."
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
            upright: ["Rest", "Meditation", "Recovery", "Passive", "Contemplation"],
            reversed: ["Restlessness", "Burnout", "Lack of progress", "Stagnation"]
        },
        meanings: {
            upright: {
                general: "Rest, meditation, recovery, and contemplation. Period of mental rest and passive reflection.",
                love: "Taking break from relationships, contemplating love life, resting from romantic drama.",
                career: "Taking career break, contemplating professional future, recovering from work stress.",
                spiritual: "Spiritual rest, meditation retreat, contemplating spiritual path, recovering from spiritual intensity."
            },
            reversed: {
                general: "Restlessness, burnout, lack of progress, stagnation from too much inactivity.",
                love: "Restlessness in relationships, burnout from romantic drama, lack of relationship progress.",
                career: "Professional restlessness, burnout from overwork, lack of career progress, workplace stagnation.",
                spiritual: "Spiritual restlessness, burnout from spiritual practice, lack of spiritual progress."
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
            upright: ["Conflict", "Defeat", "Betrayal", "Win at all costs", "Dishonor"],
            reversed: ["Reconciliation", "Making amends", "Learning from defeat", "Moving on"]
        },
        meanings: {
            upright: {
                general: "Conflict, defeat, betrayal, and dishonor. Victory achieved through questionable means.",
                love: "Relationship conflicts, betrayal in love, winning arguments but losing love, dishonor in romance.",
                career: "Workplace conflicts, professional betrayal, winning at expense of others, dishonor at work.",
                spiritual: "Spiritual conflicts, betrayal of spiritual principles, winning arguments but losing spiritual ground."
            },
            reversed: {
                general: "Reconciliation, making amends, learning from defeat, moving on from conflict.",
                love: "Reconciling after relationship conflict, making amends to partner, learning from romantic mistakes.",
                career: "Workplace reconciliation, making amends for professional mistakes, learning from career defeats.",
                spiritual: "Spiritual reconciliation, making amends for spiritual mistakes, learning from spiritual defeats."
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
            upright: ["Transition", "Moving on", "Travel", "Mental shift", "Leaving behind"],
            reversed: ["Stuck in past", "Resistance to change", "Unfinished business", "Rough transition"]
        },
        meanings: {
            upright: {
                general: "Transition, moving on, travel, and mental shift. Moving away from difficulties toward calmer waters.",
                love: "Transitioning in relationships, moving on from past love, traveling with partner, mental shift about romance.",
                career: "Career transition, moving to new job, business travel, mental shift about professional goals.",
                spiritual: "Spiritual transition, moving on from old beliefs, spiritual journey, mental shift about practice."
            },
            reversed: {
                general: "Stuck in past, resistance to change, unfinished business, rough transition.",
                love: "Stuck in past relationships, resistance to romantic change, unfinished romantic business.",
                career: "Stuck in old career patterns, resistance to professional change, unfinished work business.",
                spiritual: "Stuck in old spiritual patterns, resistance to spiritual change, unfinished spiritual business."
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
            upright: ["Deception", "Theft", "Stealth", "Strategy", "Acting alone"],
            reversed: ["Getting caught", "Confession", "Returning stolen goods", "Coming clean"]
        },
        meanings: {
            upright: {
                general: "Deception, theft, stealth, and strategy. Acting alone with questionable methods.",
                love: "Deception in relationships, emotional theft, stealth romantic behavior, secret love affairs.",
                career: "Workplace deception, theft of ideas, stealth professional behavior, going it alone at work.",
                spiritual: "Spiritual deception, theft of spiritual concepts, stealth spiritual behavior, going alone spiritually."
            },
            reversed: {
                general: "Getting caught in deception, confession, returning what was taken, coming clean.",
                love: "Getting caught in romantic deception, confessing to partner, coming clean about love affairs.",
                career: "Getting caught in workplace deception, confessing professional mistakes, returning stolen ideas.",
                spiritual: "Getting caught in spiritual deception, confessing spiritual mistakes, coming clean about beliefs."
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
            upright: ["Restriction", "Trapped", "Powerless", "Victim mentality", "Mental prison"],
            reversed: ["Freedom", "Breaking free", "New perspective", "Self-empowerment"]
        },
        meanings: {
            upright: {
                general: "Restriction, feeling trapped, powerlessness, and victim mentality. Mental prison of own making.",
                love: "Feeling trapped in relationships, powerless in love, victim mentality about romance.",
                career: "Feeling trapped at work, powerless professionally, victim mentality about career.",
                spiritual: "Feeling trapped spiritually, powerless in spiritual practice, victim mentality about beliefs."
            },
            reversed: {
                general: "Breaking free from restrictions, gaining new perspective, self-empowerment, finding freedom.",
                love: "Breaking free from relationship restrictions, gaining new romantic perspective, empowering love choices.",
                career: "Breaking free from career restrictions, gaining new professional perspective, empowering work choices.",
                spiritual: "Breaking free from spiritual restrictions, gaining new spiritual perspective, empowering spiritual choices."
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
            upright: ["Anxiety", "Worry", "Nightmares", "Mental anguish", "Despair"],
            reversed: ["Recovery", "Hope", "Healing", "Seeking help", "Inner turmoil resolving"]
        },
        meanings: {
            upright: {
                general: "Anxiety, worry, nightmares, and mental anguish. Overwhelmed by negative thoughts and despair.",
                love: "Anxiety about relationships, worry about partner, romantic nightmares, despair about love.",
                career: "Work anxiety, worry about professional future, career nightmares, despair about work situation.",
                spiritual: "Spiritual anxiety, worry about spiritual path, spiritual nightmares, despair about beliefs."
            },
            reversed: {
                general: "Recovery from anxiety, hope returning, healing mental anguish, seeking help.",
                love: "Recovery from relationship anxiety, hope returning to love life, healing romantic despair.",
                career: "Recovery from work anxiety, hope returning to career, healing professional despair.",
                spiritual: "Recovery from spiritual anxiety, hope returning to spiritual practice, healing spiritual despair."
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
            upright: ["Rock bottom", "Betrayal", "Painful ending", "Backstabbing", "Defeat"],
            reversed: ["Recovery", "Regeneration", "Healing", "Learning from pain", "New dawn"]
        },
        meanings: {
            upright: {
                general: "Rock bottom, betrayal, painful ending, and defeat. Complete mental/emotional breakdown.",
                love: "Rock bottom in relationships, romantic betrayal, painful relationship ending, love defeat.",
                career: "Career rock bottom, professional betrayal, painful job ending, workplace defeat.",
                spiritual: "Spiritual rock bottom, betrayal of spiritual trust, painful spiritual ending, spiritual defeat."
            },
            reversed: {
                general: "Recovery from rock bottom, regeneration, healing, learning from pain, new dawn approaching.",
                love: "Recovery from romantic rock bottom, healing from love betrayal, learning from relationship pain.",
                career: "Recovery from career rock bottom, healing from professional betrayal, learning from work pain.",
                spiritual: "Recovery from spiritual rock bottom, healing from spiritual betrayal, learning from spiritual pain."
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
            upright: ["Curiosity", "Mental energy", "New ideas", "Communication", "Vigilance"],
            reversed: ["Gossip", "Mental confusion", "Lack of focus", "All talk no action"]
        },
        meanings: {
            upright: {
                general: "Curiosity, mental energy, new ideas, and communication. Eager to learn and share information.",
                love: "Curious about love, mental connection with partner, communicating new romantic ideas.",
                career: "Professional curiosity, mental energy at work, communicating new ideas, vigilant about opportunities.",
                spiritual: "Spiritual curiosity, mental approach to spiritual practice, communicating spiritual ideas."
            },
            reversed: {
                general: "Gossip, mental confusion, lack of focus, all talk with no action.",
                love: "Romantic gossip, confusion about love, lack of focus in relationships, talking without acting.",
                career: "Workplace gossip, professional confusion, lack of career focus, talking without professional action.",
                spiritual: "Spiritual gossip, confusion about beliefs, lack of spiritual focus, talking without spiritual action."
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
            upright: ["Ambition", "Action", "Fast thinking", "Impatience", "Determination"],
            reversed: ["Reckless", "Unfocused", "Impulsive", "Lack of planning", "Aggression"]
        },
        meanings: {
            upright: {
                general: "Ambition, action, fast thinking, and determination. Quick mental action with strong drive.",
                love: "Ambitious in love, quick romantic decisions, determined pursuit of partner, fast-moving romance.",
                career: "Professional ambition, quick business decisions, determined career action, fast-paced work approach.",
                spiritual: "Spiritual ambition, quick spiritual decisions, determined spiritual action, fast spiritual progress."
            },
            reversed: {
                general: "Reckless behavior, unfocused energy, impulsiveness, lack of planning, aggression.",
                love: "Reckless romantic behavior, unfocused love energy, impulsive relationship decisions, romantic aggression.",
                career: "Reckless professional behavior, unfocused work energy, impulsive career decisions, workplace aggression.",
                spiritual: "Reckless spiritual behavior, unfocused spiritual energy, impulsive spiritual decisions, spiritual aggression."
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
            upright: ["Independence", "Clear thinking", "Direct communication", "Honesty", "Perception"],
            reversed: ["Harsh", "Bitter", "Cold", "Cruel", "Vindictive"]
        },
        meanings: {
            upright: {
                general: "Independence, clear thinking, direct communication, and honesty. Perceptive with sharp intellect.",
                love: "Independent in relationships, clear thinking about love, direct romantic communication, honest with partner.",
                career: "Professional independence, clear business thinking, direct work communication, honest leadership.",
                spiritual: "Spiritual independence, clear thinking about beliefs, direct spiritual communication, honest practice."
            },
            reversed: {
                general: "Harsh behavior, bitterness, coldness, cruelty, vindictive actions.",
                love: "Harsh in relationships, bitter about love, cold romantic behavior, cruel to partner.",
                career: "Harsh professional behavior, bitter about work, cold workplace demeanor, cruel leadership.",
                spiritual: "Harsh spiritual behavior, bitter about beliefs, cold spiritual demeanor, cruel spiritual judgment."
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
            upright: ["Authority", "Intellectual power", "Truth", "Justice", "Clear communication"],
            reversed: ["Abuse of power", "Manipulation", "Tyranny", "Harsh judgment", "Lack of compassion"]
        },
        meanings: {
            upright: {
                general: "Authority, intellectual power, truth, and justice. Clear communication with fair judgment.",
                love: "Authoritative in relationships, intellectual approach to love, truthful with partner, just romantic decisions.",
                career: "Professional authority, intellectual leadership, truthful business practices, just workplace decisions.",
                spiritual: "Spiritual authority, intellectual approach to beliefs, truthful spiritual practice, just spiritual judgment."
            },
            reversed: {
                general: "Abuse of power, manipulation, tyranny, harsh judgment, lack of compassion.",
                love: "Abusive relationship behavior, romantic manipulation, tyrannical with partner, harsh romantic judgment.",
                career: "Abusive professional behavior, workplace manipulation, tyrannical leadership, harsh business judgment.",
                spiritual: "Abusive spiritual behavior, spiritual manipulation, tyrannical spiritual leadership, harsh spiritual judgment."
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
            upright: ["New opportunities", "Manifestation", "Financial opportunity", "Material gain", "Prosperity"],
            reversed: ["Missed opportunity", "Financial loss", "Poor planning", "Greed"]
        },
        meanings: {
            upright: {
                general: "New financial opportunities, security, and manifestation of material goals. Fresh start in material matters.",
                love: "Relationship offering security and stability, manifestation of desired romantic situation.",
                career: "New job opportunities, financial gains, business ventures, manifestation of career goals.",
                spiritual: "Grounding spiritual energy into material reality, finding abundance through spiritual practice."
            },
            reversed: {
                general: "Missed opportunities, financial insecurity, poor material planning.",
                love: "Financial stress affecting love, relationships lacking stability and security.",
                career: "Missed opportunities, financial setbacks, poor planning affecting professional success.",
                spiritual: "Difficulty manifesting spiritual goals in material reality, spiritual materialism."
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
            upright: ["Balance", "Adaptability", "Time management", "Flexibility", "Juggling priorities"],
            reversed: ["Imbalance", "Overwhelmed", "Financial stress", "Poor time management"]
        },
        meanings: {
            upright: {
                general: "Balance, adaptability, juggling responsibilities, and maintaining equilibrium amidst life's demands.",
                love: "Balancing relationship needs with other responsibilities, adapting to changes in romantic situations.",
                career: "Managing multiple projects, work-life balance, adapting to changing workplace demands.",
                spiritual: "Balancing spiritual practice with material responsibilities, adapting spiritual beliefs to life changes."
            },
            reversed: {
                general: "Imbalance, being overwhelmed, struggling to manage multiple responsibilities.",
                love: "Relationship imbalance, neglecting romantic needs due to other priorities, relationship instability.",
                career: "Being overwhelmed at work, poor work-life balance, inability to manage professional responsibilities.",
                spiritual: "Imbalance between spiritual and material life, being overwhelmed by spiritual responsibilities."
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
            upright: ["Teamwork", "Collaboration", "Building", "Learning", "Craftsmanship"],
            reversed: ["Lack of teamwork", "Poor collaboration", "Lack of skill", "Working alone"]
        },
        meanings: {
            upright: {
                general: "Teamwork, collaboration, building something lasting, and learning craftsmanship from others.",
                love: "Building relationship together, collaborating with partner, learning from each other in love.",
                career: "Professional teamwork, collaborating on projects, building career skills, learning from colleagues.",
                spiritual: "Spiritual collaboration, building spiritual community, learning from spiritual teachers and peers."
            },
            reversed: {
                general: "Lack of teamwork, poor collaboration, working alone when teamwork needed.",
                love: "Lack of collaboration in relationships, not building together, poor romantic teamwork.",
                career: "Poor workplace collaboration, lack of teamwork, not learning from colleagues, working in isolation.",
                spiritual: "Lack of spiritual collaboration, not building spiritual community, poor spiritual teamwork."
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
            upright: ["Security", "Control", "Conserving", "Materialism", "Hoarding"],
            reversed: ["Generosity", "Sharing", "Letting go", "Financial freedom", "Spending"]
        },
        meanings: {
            upright: {
                general: "Security, control, conserving resources, but also materialism and hoarding.",
                love: "Controlling in relationships, holding onto security, fear of emotional investment, materialism affecting love.",
                career: "Financial security, controlling work situation, conservative business approach, hoarding professional resources.",
                spiritual: "Spiritual materialism, hoarding spiritual knowledge, controlling spiritual security, fear of spiritual investment."
            },
            reversed: {
                general: "Generosity, sharing resources, letting go of control, financial freedom.",
                love: "Generous in relationships, sharing with partner, letting go of relationship control, emotional freedom.",
                career: "Professional generosity, sharing work resources, letting go of career control, financial work freedom.",
                spiritual: "Spiritual generosity, sharing spiritual knowledge, letting go of spiritual control, spiritual freedom."
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
            upright: ["Financial loss", "Poverty", "Hardship", "Isolation", "Spiritual poverty"],
            reversed: ["Recovery", "Improvement", "Spiritual richness", "Help received", "End of hardship"]
        },
        meanings: {
            upright: {
                general: "Financial loss, poverty, hardship, and isolation. Material and spiritual poverty.",
                love: "Financial stress affecting relationships, feeling isolated in love, poverty of emotional connection.",
                career: "Career hardship, financial loss at work, professional isolation, poverty of career satisfaction.",
                spiritual: "Spiritual poverty, isolation from spiritual community, hardship in spiritual practice."
            },
            reversed: {
                general: "Recovery from hardship, improvement in situation, spiritual richness, help received.",
                love: "Recovery from relationship hardship, improvement in love situation, receiving help in romance.",
                career: "Recovery from career hardship, improvement in work situation, receiving professional help.",
                spiritual: "Recovery from spiritual hardship, improvement in spiritual situation, receiving spiritual help."
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
            upright: ["Generosity", "Charity", "Sharing", "Fairness", "Giving and receiving"],
            reversed: ["Inequality", "Taking advantage", "Debt", "One-sided generosity", "Strings attached"]
        },
        meanings: {
            upright: {
                general: "Generosity, charity, sharing, and fairness. Balanced giving and receiving.",
                love: "Generous in relationships, sharing with partner, fair romantic exchange, balanced give and take.",
                career: "Professional generosity, charitable work approach, sharing workplace resources, fair business practices.",
                spiritual: "Spiritual generosity, sharing spiritual gifts, charitable spiritual practice, balanced spiritual exchange."
            },
            reversed: {
                general: "Inequality, being taken advantage of, debt, one-sided generosity, strings attached to gifts.",
                love: "Inequality in relationships, being taken advantage of romantically, one-sided romantic giving.",
                career: "Workplace inequality, being taken advantage of professionally, one-sided professional giving.",
                spiritual: "Spiritual inequality, being taken advantage of spiritually, one-sided spiritual giving."
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
            upright: ["Assessment", "Long-term view", "Investment", "Patience", "Evaluation"],
            reversed: ["Impatience", "Lack of progress", "Poor investment", "Short-term thinking"]
        },
        meanings: {
            upright: {
                general: "Assessment, long-term view, investment, and patience. Evaluating progress and future potential.",
                love: "Assessing relationship progress, long-term romantic view, patience with love development, evaluating partner.",
                career: "Assessing career progress, long-term professional view, patience with career development, evaluating work investments.",
                spiritual: "Assessing spiritual progress, long-term spiritual view, patience with spiritual development, evaluating spiritual investments."
            },
            reversed: {
                general: "Impatience with progress, lack of long-term view, poor investments, short-term thinking.",
                love: "Impatience with relationship progress, short-term romantic thinking, poor emotional investments.",
                career: "Impatience with career progress, short-term professional thinking, poor career investments.",
                spiritual: "Impatience with spiritual progress, short-term spiritual thinking, poor spiritual investments."
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
            upright: ["Mastery", "Skill development", "Hard work", "Dedication", "Craftsmanship"],
            reversed: ["Lack of focus", "Poor quality", "Rushed work", "Lack of skill development"]
        },
        meanings: {
            upright: {
                general: "Mastery, skill development, hard work, and dedication. Focused effort on craftsmanship.",
                love: "Working on relationship skills, dedicating effort to love, mastering romantic communication.",
                career: "Professional skill development, dedicated work effort, mastering career crafts, focused professional improvement.",
                spiritual: "Developing spiritual skills, dedicated spiritual practice, mastering spiritual crafts, focused spiritual improvement."
            },
            reversed: {
                general: "Lack of focus, poor quality work, rushing without skill development.",
                love: "Lack of focus on relationship skills, poor quality romantic effort, rushing relationship development.",
                career: "Lack of professional focus, poor quality work, rushing career development without skill building.",
                spiritual: "Lack of spiritual focus, poor quality spiritual practice, rushing spiritual development."
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
            upright: ["Independence", "Self-sufficiency", "Luxury", "Material success", "Discipline"],
            reversed: ["Dependence", "Financial setbacks", "Lack of self-discipline", "Overspending"]
        },
        meanings: {
            upright: {
                general: "Independence, self-sufficiency, luxury, and material success. Enjoying fruits of disciplined effort.",
                love: "Independent in relationships, self-sufficient romantically, enjoying luxurious love, successful romantic independence.",
                career: "Professional independence, self-sufficient career, enjoying work success, disciplined professional achievement.",
                spiritual: "Spiritual independence, self-sufficient practice, enjoying spiritual luxury, disciplined spiritual achievement."
            },
            reversed: {
                general: "Dependence on others, financial setbacks, lack of self-discipline, overspending.",
                love: "Dependence in relationships, romantic financial issues, lack of relationship discipline, overspending on love.",
                career: "Professional dependence, career financial setbacks, lack of work discipline, overspending professionally.",
                spiritual: "Spiritual dependence, spiritual financial issues, lack of spiritual discipline, overspending spiritually."
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
            upright: ["Legacy", "Inheritance", "Family wealth", "Long-term success", "Tradition"],
            reversed: ["Financial failure", "Family disputes", "Lack of legacy", "Short-term thinking"]
        },
        meanings: {
            upright: {
                general: "Legacy, inheritance, family wealth, and long-term success. Building lasting material foundation.",
                love: "Family legacy in relationships, inherited romantic traditions, long-term love success, traditional partnerships.",
                career: "Professional legacy, inherited career advantages, long-term work success, traditional business approaches.",
                spiritual: "Spiritual legacy, inherited spiritual traditions, long-term spiritual success, traditional spiritual practices."
            },
            reversed: {
                general: "Financial failure, family disputes over money, lack of legacy, short-term thinking.",
                love: "Family disputes affecting relationships, lack of romantic legacy, short-term relationship thinking.",
                career: "Career financial failure, family disputes affecting work, lack of professional legacy, short-term career thinking.",
                spiritual: "Spiritual financial failure, family disputes over beliefs, lack of spiritual legacy, short-term spiritual thinking."
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
            upright: ["Study", "Learning", "New financial opportunity", "Manifestation", "Planning"],
            reversed: ["Lack of progress", "Poor planning", "Procrastination", "Lack of goals"]
        },
        meanings: {
            upright: {
                general: "Study, learning, new financial opportunity, and manifestation. Planning for material success.",
                love: "Learning about relationships, new romantic opportunities, planning romantic future, manifesting love goals.",
                career: "Professional learning, new career opportunities, planning career future, manifesting work goals.",
                spiritual: "Spiritual learning, new spiritual opportunities, planning spiritual future, manifesting spiritual goals."
            },
            reversed: {
                general: "Lack of progress, poor planning, procrastination, lack of clear goals.",
                love: "Lack of relationship progress, poor romantic planning, procrastinating on love goals.",
                career: "Lack of career progress, poor professional planning, procrastinating on career goals.",
                spiritual: "Lack of spiritual progress, poor spiritual planning, procrastinating on spiritual goals."
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
            upright: ["Reliability", "Hard work", "Routine", "Conservatism", "Efficiency"],
            reversed: ["Laziness", "Obsessiveness", "Inefficiency", "Perfectionism", "Frustration"]
        },
        meanings: {
            upright: {
                general: "Reliability, hard work, routine, and conservatism. Steady, efficient approach to goals.",
                love: "Reliable romantic partner, hard work in relationships, conservative romantic approach, efficient love efforts.",
                career: "Professional reliability, hard work at job, conservative career approach, efficient work methods.",
                spiritual: "Reliable spiritual practice, hard spiritual work, conservative spiritual approach, efficient spiritual methods."
            },
            reversed: {
                general: "Laziness, obsessiveness, inefficiency, perfectionism causing frustration.",
                love: "Lazy in relationships, obsessive romantic behavior, inefficient love efforts, perfectionist romantic expectations.",
                career: "Professional laziness, obsessive work behavior, inefficient work methods, perfectionist career expectations.",
                spiritual: "Spiritual laziness, obsessive spiritual behavior, inefficient spiritual methods, perfectionist spiritual expectations."
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
            upright: ["Nurturing", "Practical", "Providing", "Down-to-earth", "Resourceful"],
            reversed: ["Smothering", "Self-care neglect", "Financial dependence", "Jealousy", "Materialism"]
        },
        meanings: {
            upright: {
                general: "Nurturing, practical, providing, and down-to-earth. Resourceful care for others and material security.",
                love: "Nurturing romantic partner, practical approach to love, providing for partner, down-to-earth romance.",
                career: "Nurturing leadership, practical work approach, providing workplace security, resourceful professional methods.",
                spiritual: "Nurturing spiritual presence, practical spiritual approach, providing spiritual security, resourceful spiritual methods."
            },
            reversed: {
                general: "Smothering behavior, neglecting self-care, financial dependence, jealousy, excessive materialism.",
                love: "Smothering romantic behavior, neglecting romantic self-care, financial dependence in love, romantic jealousy.",
                career: "Smothering leadership, neglecting professional self-care, financial work dependence, workplace jealousy.",
                spiritual: "Smothering spiritual behavior, neglecting spiritual self-care, spiritual financial dependence, spiritual jealousy."
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
            upright: ["Financial success", "Leadership", "Security", "Discipline", "Abundance"],
            reversed: ["Financial failure", "Corruption", "Materialism", "Stubbornness", "Greed"]
        },
        meanings: {
            upright: {
                general: "Financial success, leadership, security, and discipline. Abundant material achievement through wise leadership.",
                love: "Financially successful partner, leadership in relationships, providing romantic security, disciplined love approach.",
                career: "Professional financial success, strong leadership, providing workplace security, disciplined career approach.",
                spiritual: "Spiritual financial success, spiritual leadership, providing spiritual security, disciplined spiritual approach."
            },
            reversed: {
                general: "Financial failure, corruption, excessive materialism, stubbornness, greed.",
                love: "Financial problems affecting love, corrupt romantic behavior, materialistic love approach, stubborn romantic behavior.",
                career: "Career financial failure, professional corruption, materialistic work approach, stubborn leadership.",
                spiritual: "Spiritual financial failure, spiritual corruption, materialistic spiritual approach, stubborn spiritual behavior."
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