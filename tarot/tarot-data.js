// Comprehensive Tarot Card Database with Enhanced Meanings
const tarotCards = [
    // Major Arcana
    {
        name: "The Fool",
        number: 0,
        suit: "Major Arcana",
        element: "Air",
        astrology: "Uranus",
        numerology: 0,
        image: "https://raw.githubusercontent.com/searge/tarot/main/img/big/major_00_Fool.jpg",
        keywords: {
            upright: ["New beginnings", "Innocence", "Spontaneity", "Free spirit", "Adventure"],
            reversed: ["Recklessness", "Taken advantage of", "Inconsideration", "Foolishness"]
        },
        meanings: {
            upright: {
                general: "The Fool represents new beginnings, a leap of faith, innocence, and a free-spirited approach to life. It signifies embarking on a new journey with optimism and a sense of adventure, trusting in the unknown. This card encourages spontaneity and embracing the unexpected.",
                love: "In love, The Fool suggests a new relationship beginning with excitement and passion. It may indicate taking a leap of faith in romance, being open to love, or approaching relationships with childlike wonder and authenticity.",
                career: "Professionally, The Fool indicates new career opportunities, starting fresh, or taking an unconventional path. It suggests following your passion rather than convention, and being open to learning and growth.",
                spiritual: "Spiritually, The Fool represents the beginning of a spiritual journey, openness to new beliefs, and trusting in divine guidance. It encourages faith in the unknown and embracing spiritual adventure."
            },
            reversed: {
                general: "In reverse, The Fool suggests recklessness, being taken advantage of, or a naive approach that leads to poor decisions. It can indicate hesitation, a fear of moving forward, or a need to reconsider your path.",
                love: "Reversed in love, The Fool may indicate being too naive in relationships, making poor romantic choices, or being taken advantage of by a partner. It warns against ignoring red flags.",
                career: "Career-wise, reversed suggests poor planning, risky decisions, or being unprepared for new opportunities. It may indicate a need to gain more experience before making major moves.",
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
        image: "https://raw.githubusercontent.com/searge/tarot/main/img/big/major_01_Magician.jpg",
        keywords: {
            upright: ["Manifestation", "Resourcefulness", "Power", "Inspired action", "Will"],
            reversed: ["Manipulation", "Poor planning", "Untapped talents", "Lack of focus"]
        },
        meanings: {
            upright: {
                general: "The Magician symbolizes manifestation, resourcefulness, power, and inspired action. It indicates that you have all the tools and abilities necessary to achieve your goals. This card encourages you to use your skills, willpower, and creativity to bring your desires into reality.",
                love: "In relationships, The Magician suggests you have the power to manifest the love you desire. It indicates clear communication, charisma, and the ability to create the relationship dynamics you want.",
                career: "Professionally, The Magician represents having the skills and resources to succeed. It suggests leadership, innovation, and the ability to turn ideas into reality through focused effort.",
                spiritual: "Spiritually, The Magician represents the power of will and focused intention in spiritual practice. It suggests mastery over the elements and the ability to manifest spiritual goals."
            },
            reversed: {
                general: "When reversed, The Magician can point to manipulation, poor planning, or untapped talents. It might suggest a misuse of power, deception, or feeling powerless.",
                love: "Reversed in love, it may indicate manipulation in relationships, using charm for selfish purposes, or a partner who is not genuine in their intentions.",
                career: "Career-wise, reversed suggests misusing skills, lacking direction, or failing to apply talents effectively. It may indicate office politics or unethical behavior.",
                spiritual: "Spiritually reversed, it warns against using spiritual knowledge for ego or manipulation rather than genuine growth and service."
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
        image: "https://raw.githubusercontent.com/searge/tarot/main/img/big/major_02_High_Priestess.jpg",
        keywords: {
            upright: ["Intuition", "Sacred knowledge", "Divine feminine", "Subconscious", "Mystery"],
            reversed: ["Secrets revealed", "Hidden agendas", "Lack of intuition", "Disconnection"]
        },
        meanings: {
            upright: {
                general: "The High Priestess represents intuition, sacred knowledge, the subconscious, and mystery. She encourages you to look within, trust your inner voice, and pay attention to dreams and hidden truths.",
                love: "In love, The High Priestess suggests trusting your intuition about relationships. It may indicate a deep, spiritual connection or the need to listen to your inner wisdom about romantic matters.",
                career: "Professionally, it suggests using intuition alongside logic, trusting gut feelings about opportunities, and possibly working in fields related to spirituality, psychology, or healing.",
                spiritual: "Spiritually, The High Priestess represents deep inner knowing, psychic abilities, and connection to the divine feminine. It encourages meditation and inner exploration."
            },
            reversed: {
                general: "Reversed, The High Priestess suggests secrets being revealed, hidden agendas, or a need to withdraw from external noise to find inner peace.",
                love: "In love, reversed may indicate hidden aspects of a relationship coming to light, lack of emotional connection, or ignoring intuitive warnings about a partner.",
                career: "Career-wise, it may suggest office secrets, hidden information affecting work, or disconnection from intuitive guidance in professional decisions.",
                spiritual: "Spiritually reversed, it indicates being disconnected from intuition, ignoring inner wisdom, or spiritual confusion."
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
        image: "https://raw.githubusercontent.com/searge/tarot/main/img/big/major_03_Empress.jpg",
        keywords: {
            upright: ["Femininity", "Beauty", "Nature", "Nurturing", "Abundance", "Fertility"],
            reversed: ["Creative block", "Dependence", "Smothering", "Lack of growth"]
        },
        meanings: {
            upright: {
                general: "The Empress embodies femininity, beauty, nature, nurturing, and abundance. She signifies fertility, creativity, and the blossoming of new ideas or projects. This card encourages connection with nature and embracing your sensual side.",
                love: "In relationships, The Empress represents deep love, sensuality, and possibly pregnancy or starting a family. It suggests nurturing, caring relationships and feminine energy.",
                career: "Professionally, it indicates creative success, abundance, and growth. It may suggest careers in creative fields, healthcare, or working with children.",
                spiritual: "Spiritually, The Empress connects you with Mother Earth energy, natural cycles, and the divine feminine aspect of creation."
            },
            reversed: {
                general: "In reverse, The Empress can indicate a creative block, dependence on others, or issues with nurturing. It might suggest smothering behavior or a disregard for natural cycles.",
                love: "Reversed in love, it may indicate codependency, smothering behavior, or fertility issues. It could suggest an imbalance in giving and receiving care.",
                career: "Career-wise, reversed suggests creative blocks, lack of growth, or problems with female colleagues. It may indicate financial struggles or lack of abundance.",
                spiritual: "Spiritually reversed, it suggests disconnection from nature, blocked creativity, or issues with the feminine aspect of divinity."
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
        image: "https://raw.githubusercontent.com/searge/tarot/main/img/big/major_04_Emperor.jpg",
        keywords: {
            upright: ["Authority", "Structure", "Control", "Father figure", "Leadership"],
            reversed: ["Domination", "Excessive control", "Lack of discipline", "Tyranny"]
        },
        meanings: {
            upright: {
                general: "The Emperor signifies authority, structure, control, and a father figure. He represents leadership, stability, and the establishment of order. This card encourages discipline, strategic planning, and taking charge of your life.",
                love: "In relationships, The Emperor suggests a stable, committed partnership with clear boundaries and mutual respect. It may represent a protective, provider-type partner.",
                career: "Professionally, it indicates leadership roles, structure, authority, and success through discipline and organization. It suggests climbing the corporate ladder or starting your own business.",
                spiritual: "Spiritually, The Emperor represents divine masculine energy, spiritual authority, and the need for structure in spiritual practice."
            },
            reversed: {
                general: "Reversed, The Emperor suggests domination, excessive control, or rigidity. It can indicate an abuse of power, a lack of discipline, or a tyrannical approach.",
                love: "In love, reversed may indicate controlling behavior, power struggles, or lack of commitment. It could suggest daddy issues or problems with authority figures.",
                career: "Career-wise, reversed suggests abuse of power, poor leadership, or resistance to authority. It may indicate workplace tyranny or lack of structure.",
                spiritual: "Spiritually reversed, it warns against spiritual authoritarianism, rigid thinking, or misuse of spiritual authority."
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
        image: "https://raw.githubusercontent.com/searge/tarot/main/img/big/major_05_Hierophant.jpg",
        keywords: {
            upright: ["Spiritual wisdom", "Religious beliefs", "Conformity", "Tradition", "Institutions"],
            reversed: ["Personal beliefs", "Freedom", "Challenging tradition", "New approaches"]
        },
        meanings: {
            upright: {
                general: "The Hierophant represents spiritual wisdom, tradition, conformity, and institutions. It often signifies learning from established systems, seeking guidance from mentors, and adhering to conventional beliefs.",
                love: "In relationships, The Hierophant may suggest traditional commitment like marriage, seeking relationship counseling, or finding love through conventional means.",
                career: "Professionally, it indicates working within established systems, following traditional career paths, or roles in education, religion, or large institutions.",
                spiritual: "Spiritually, it represents organized religion, traditional spiritual practices, and learning from established spiritual teachers or systems."
            },
            reversed: {
                general: "When reversed, The Hierophant suggests rebellion, unconventionality, or a need for new approaches. It can indicate challenging traditions or questioning authority.",
                love: "Reversed in love, it may suggest unconventional relationships, challenging traditional relationship norms, or spiritual incompatibility with a partner.",
                career: "Career-wise, reversed indicates breaking from traditional career paths, challenging workplace norms, or working in alternative or innovative fields.",
                spiritual: "Spiritually reversed, it suggests developing personal spiritual beliefs, questioning religious doctrine, or exploring alternative spiritual paths."
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
        image: "https://raw.githubusercontent.com/searge/tarot/main/img/big/major_06_Lovers.jpg",
        keywords: {
            upright: ["Love", "Harmony", "Relationships", "Choice", "Values alignment"],
            reversed: ["Disharmony", "Imbalance", "Misaligned values", "Difficult choices"]
        },
        meanings: {
            upright: {
                general: "The Lovers symbolize love, harmony, relationships, choices, and values alignment. It often represents a significant romantic partnership, but also important decisions that align with your core values.",
                love: "In love, The Lovers represents deep romantic connection, soul mates, or a significant relationship choice. It suggests harmony, mutual attraction, and spiritual connection.",
                career: "Professionally, it may indicate partnership in business, working with someone you're compatible with, or making career choices based on personal values.",
                spiritual: "Spiritually, The Lovers represents the union of opposites, divine love, and making choices that align with your higher self."
            },
            reversed: {
                general: "Reversed, The Lovers can indicate disharmony, imbalance, or a misalignment of values within relationships. It might suggest a difficult choice or conflict.",
                love: "In relationships, reversed suggests relationship problems, incompatibility, infidelity, or a difficult choice between two lovers.",
                career: "Career-wise, it may indicate workplace conflicts, poor partnerships, or making career choices that conflict with personal values.",
                spiritual: "Spiritually reversed, it suggests internal conflict, misaligned choices, or difficulty integrating different aspects of yourself."
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
        image: "https://raw.githubusercontent.com/searge/tarot/main/img/big/major_07_Chariot.jpg",
        keywords: {
            upright: ["Control", "Willpower", "Victory", "Determination", "Direction"],
            reversed: ["Lack of control", "Opposition", "Lack of direction", "Aggression"]
        },
        meanings: {
            upright: {
                general: "The Chariot signifies control, willpower, victory, determination, and clear direction. It represents overcoming obstacles through sheer force of will and focused effort.",
                love: "In relationships, The Chariot suggests taking control of your love life, pursuing someone with determination, or overcoming relationship obstacles through willpower.",
                career: "Professionally, it indicates success through determination, taking control of your career path, or achieving victory in competitive situations.",
                spiritual: "Spiritually, The Chariot represents mastering your desires, spiritual willpower, and achieving spiritual goals through disciplined practice."
            },
            reversed: {
                general: "When reversed, The Chariot suggests a lack of control, opposition, or a lack of direction. It can indicate feeling overwhelmed or being pulled in too many directions.",
                love: "Reversed in love, it may suggest relationship conflicts, power struggles, or lack of direction in romantic matters.",
                career: "Career-wise, reversed indicates setbacks, lack of progress, or feeling stuck despite efforts to move forward.",
                spiritual: "Spiritually reversed, it suggests lack of spiritual direction, internal conflicts, or difficulty maintaining spiritual discipline."
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
        image: "https://raw.githubusercontent.com/searge/tarot/main/img/big/major_08_Strength.jpg",
        keywords: {
            upright: ["Courage", "Compassion", "Inner strength", "Patience", "Control"],
            reversed: ["Weakness", "Self-doubt", "Lack of confidence", "Giving up"]
        },
        meanings: {
            upright: {
                general: "Strength embodies courage, compassion, inner strength, and influence. It represents the power of gentle persuasion and inner fortitude over brute force.",
                love: "In relationships, Strength suggests patience, compassion, and gentle influence. It indicates the strength to work through relationship challenges with love.",
                career: "Professionally, it represents leadership through inspiration rather than force, dealing with difficult people with patience, and inner confidence.",
                spiritual: "Spiritually, Strength represents mastering your lower nature, spiritual courage, and the power of love over fear."
            },
            reversed: {
                general: "Reversed, Strength can indicate weakness, self-doubt, or a lack of self-discipline. It might suggest feeling overwhelmed by challenges or giving in to fears.",
                love: "In love, reversed may indicate lack of confidence in relationships, being too aggressive or passive, or inability to handle relationship challenges.",
                career: "Career-wise, reversed suggests lack of confidence, being overwhelmed by work challenges, or misusing personal power.",
                spiritual: "Spiritually reversed, it indicates lack of spiritual courage, being overwhelmed by negative emotions, or giving up on spiritual growth."
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
        image: "https://raw.githubusercontent.com/searge/tarot/main/img/big/major_09_Hermit.jpg",
        keywords: {
            upright: ["Introspection", "Solitude", "Guidance", "Inner wisdom", "Soul searching"],
            reversed: ["Isolation", "Loneliness", "Withdrawal", "Avoiding introspection"]
        },
        meanings: {
            upright: {
                general: "The Hermit represents introspection, solitude, guidance, and soul-searching. It signifies a period of withdrawal to seek inner wisdom and clarity.",
                love: "In relationships, The Hermit suggests taking time alone to understand what you want in love, or finding a spiritual guide in romantic matters.",
                career: "Professionally, it indicates seeking mentorship, taking time to reflect on career goals, or working independently.",
                spiritual: "Spiritually, The Hermit represents the search for spiritual truth, meditation, and the role of the wise teacher or guide."
            },
            reversed: {
                general: "When reversed, The Hermit suggests isolation, loneliness, or excessive withdrawal. It can indicate feeling disconnected or avoiding necessary introspection.",
                love: "Reversed in love, it may suggest loneliness, fear of intimacy, or avoiding relationship issues through withdrawal.",
                career: "Career-wise, reversed indicates isolation at work, avoiding career development, or refusing helpful guidance.",
                spiritual: "Spiritually reversed, it suggests avoiding inner work, spiritual bypassing, or feeling disconnected from spiritual guidance."
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
        image: "https://raw.githubusercontent.com/searge/tarot/main/img/big/major_10_Wheel_of_Fortune.jpg",
        keywords: {
            upright: ["Good luck", "Destiny", "Change", "Cycles", "Turning point"],
            reversed: ["Bad luck", "Resistance to change", "Breaking cycles", "Setbacks"]
        },
        meanings: {
            upright: {
                general: "The Wheel of Fortune signifies good luck, destiny, change, cycles, and turning points. It represents a fated event or shift in circumstances that is beyond your control.",
                love: "In love, it suggests a destined meeting, positive changes in relationships, or the natural cycles of love and connection.",
                career: "Professionally, it indicates lucky breaks, positive career changes, or beneficial cycles in your work life.",
                spiritual: "Spiritually, it represents karmic cycles, spiritual evolution, and trusting in divine timing and destiny."
            },
            reversed: {
                general: "Reversed, The Wheel of Fortune can indicate bad luck, resistance to change, or breaking cycles. It might suggest unexpected setbacks or struggling against natural flow.",
                love: "In relationships, reversed may indicate relationship cycles ending, resistance to changes in love, or unlucky timing in romance.",
                career: "Career-wise, reversed suggests setbacks, missed opportunities, or resistance to necessary changes in professional life.",
                spiritual: "Spiritually reversed, it indicates struggling against karmic lessons, resisting spiritual growth, or feeling unlucky spiritually."
            }
        }
    },
    
    // Minor Arcana - Wands
    {
        name: "Ace of Wands",
        number: 1,
        suit: "Wands",
        element: "Fire",
        astrology: "Fire signs (Aries, Leo, Sagittarius)",
        numerology: 1,
        image: "https://raw.githubusercontent.com/searge/tarot/main/img/big/wands01.jpg",
        keywords: {
            upright: ["Inspiration", "New opportunities", "Growth", "Potential", "Creative energy"],
            reversed: ["Lack of energy", "Delays", "Creative blocks", "Wasted opportunities"]
        },
        meanings: {
            upright: {
                general: "The Ace of Wands represents a burst of inspiration, new opportunities, creative potential, and the spark of creation. It signifies a fresh start in a passionate endeavor.",
                love: "In love, it suggests new romantic beginnings, passion, or a burst of sexual energy in existing relationships.",
                career: "Professionally, it indicates new projects, creative opportunities, or the spark of a brilliant new idea that could lead to success.",
                spiritual: "Spiritually, it represents spiritual awakening, new spiritual practices, or a renewed passion for spiritual growth."
            },
            reversed: {
                general: "Reversed, the Ace of Wands suggests a lack of inspiration, missed opportunities, or delays in creative projects.",
                love: "In relationships, reversed may indicate lack of passion, delayed romantic opportunities, or creative blocks in expressing love.",
                career: "Career-wise, it suggests missed opportunities, lack of motivation, or creative blocks preventing professional growth.",
                spiritual: "Spiritually reversed, it indicates spiritual apathy, delayed spiritual growth, or lack of inspiration in spiritual practice."
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
        image: "https://raw.githubusercontent.com/searge/tarot/main/img/big/wands02.jpg",
        keywords: {
            upright: ["Planning", "Future vision", "Personal power", "Discovery", "Planning"],
            reversed: ["Fear of unknown", "Lack of planning", "Playing it safe", "Disorganized thinking"]
        },
        meanings: {
            upright: {
                general: "The Two of Wands signifies planning, future vision, progress, and discovery. It represents standing at a crossroads and making strategic plans for expansion.",
                love: "In love, it suggests planning for the future with a partner, long-distance relationships, or considering relationship expansion.",
                career: "Professionally, it indicates strategic planning, expanding your business or career, or considering new opportunities abroad.",
                spiritual: "Spiritually, it represents planning your spiritual journey, exploring new spiritual territories, or expanding spiritual awareness."
            },
            reversed: {
                general: "When reversed, the Two of Wands suggests fear of the unknown, lack of planning, or indecision about future directions.",
                love: "Reversed in love, it may indicate fear of commitment, unwillingness to plan for the future together, or relationship stagnation.",
                career: "Career-wise, reversed suggests poor planning, fear of taking risks, or playing it too safe professionally.",
                spiritual: "Spiritually reversed, it indicates lack of spiritual direction, fear of spiritual exploration, or stagnation in spiritual growth."
            }
        }
    },
    
    // Minor Arcana - Cups
    {
        name: "Ace of Cups",
        number: 1,
        suit: "Cups",
        element: "Water",
        astrology: "Water signs (Cancer, Scorpio, Pisces)",
        numerology: 1,
        image: "https://raw.githubusercontent.com/searge/tarot/main/img/big/cups01.jpg",
        keywords: {
            upright: ["New emotions", "Intuition", "Love", "Compassion", "Creativity"],
            reversed: ["Blocked emotions", "Emptiness", "Lack of love", "Creative block"]
        },
        meanings: {
            upright: {
                general: "The Ace of Cups represents new emotions, intuition, love, compassion, and creative beginnings. It signifies a fresh outpouring of emotional energy.",
                love: "In love, it represents new love, emotional fulfillment, or a deepening of emotional connection in existing relationships.",
                career: "Professionally, it suggests creative inspiration, working with compassion, or new opportunities in caring professions.",
                spiritual: "Spiritually, it represents emotional awakening, divine love, or new intuitive abilities opening up."
            },
            reversed: {
                general: "Reversed, the Ace of Cups suggests blocked emotions, emptiness, or a creative block affecting emotional expression.",
                love: "In relationships, reversed may indicate emotional numbness, unrequited love, or difficulty expressing feelings.",
                career: "Career-wise, it suggests creative blocks, lack of inspiration, or difficulty connecting emotionally with work.",
                spiritual: "Spiritually reversed, it indicates emotional blockages preventing spiritual growth or disconnection from divine love."
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
        image: "https://raw.githubusercontent.com/searge/tarot/main/img/big/cups02.jpg",
        keywords: {
            upright: ["Unity", "Partnership", "Connection", "Mutual attraction", "Cooperation"],
            reversed: ["Disharmony", "Imbalance", "Broken partnership", "Self-love issues"]
        },
        meanings: {
            upright: {
                general: "The Two of Cups signifies unity, partnership, connection, and mutual attraction. It represents a harmonious bond built on mutual respect and understanding.",
                love: "In love, it's one of the most positive cards, indicating soul mate connections, engagement, or deep mutual love and respect.",
                career: "Professionally, it suggests successful partnerships, teamwork, or finding the perfect business partner or collaborator.",
                spiritual: "Spiritually, it represents spiritual partnerships, finding your spiritual community, or balance between giving and receiving spiritually."
            },
            reversed: {
                general: "When reversed, the Two of Cups suggests discord, imbalance, or a broken partnership affecting harmony.",
                love: "Reversed in love, it indicates relationship problems, breakups, incompatibility, or unrequited love.",
                career: "Career-wise, it suggests partnership problems, workplace conflicts, or difficulties with teamwork and collaboration.",
                spiritual: "Spiritually reversed, it indicates spiritual isolation, difficulty finding spiritual community, or imbalance in spiritual relationships."
            }
        }
    },
    
    // Minor Arcana - Swords
    {
        name: "Ace of Swords",
        number: 1,
        suit: "Swords",
        element: "Air",
        astrology: "Air signs (Gemini, Libra, Aquarius)",
        numerology: 1,
        image: "https://raw.githubusercontent.com/searge/tarot/main/img/big/swords01.jpg",
        keywords: {
            upright: ["New ideas", "Mental clarity", "Breakthrough", "Communication", "Truth"],
            reversed: ["Confusion", "Chaos", "Lack of clarity", "Misinformation"]
        },
        meanings: {
            upright: {
                general: "The Ace of Swords represents new ideas, clarity, a breakthrough, and truth. It signifies a moment of mental clarity or a decisive insight.",
                love: "In love, it suggests clear communication, breakthrough understanding in relationships, or new intellectual connections with partners.",
                career: "Professionally, it indicates new ideas, breakthrough innovations, clear thinking, or success through mental acuity and communication.",
                spiritual: "Spiritually, it represents mental clarity about spiritual matters, breakthrough insights, or truth revelation."
            },
            reversed: {
                general: "Reversed, the Ace of Swords suggests confusion, chaos, or misused mental power leading to poor decisions.",
                love: "In relationships, reversed may indicate miscommunication, mental games, or unclear thinking affecting relationship decisions.",
                career: "Career-wise, it suggests confusion, poor communication, or mental fog affecting professional judgment.",
                spiritual: "Spiritually reversed, it indicates mental confusion about spiritual matters, false insights, or overthinking spiritual concepts."
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
        image: "https://raw.githubusercontent.com/searge/tarot/main/img/big/swords02.jpg",
        keywords: {
            upright: ["Indecision", "Stalemate", "Blocked emotions", "Difficult choice"],
            reversed: ["Decision made", "Confusion cleared", "Information revealed", "Emotional release"]
        },
        meanings: {
            upright: {
                general: "The Two of Swords signifies indecision, a stalemate, or being at a crossroads where a difficult choice needs to be made.",
                love: "In love, it suggests indecision about a relationship, avoiding difficult conversations, or being torn between two people.",
                career: "Professionally, it indicates difficult career choices, workplace dilemmas, or avoiding necessary business decisions.",
                spiritual: "Spiritually, it represents being torn between different spiritual paths or avoiding difficult spiritual truths."
            },
            reversed: {
                general: "When reversed, the Two of Swords suggests finally making a decision, confusion clearing, or information being revealed.",
                love: "Reversed in love, it indicates making a relationship decision, ending indecision, or communication opening up.",
                career: "Career-wise, reversed suggests breaking through indecision, new information helping career choices, or resolving workplace dilemmas.",
                spiritual: "Spiritually reversed, it indicates spiritual clarity emerging, making spiritual decisions, or releasing spiritual confusion."
            }
        }
    },
    
    // Minor Arcana - Pentacles
    {
        name: "Ace of Pentacles",
        number: 1,
        suit: "Pentacles",
        element: "Earth",
        astrology: "Earth signs (Taurus, Virgo, Capricorn)",
        numerology: 1,
        image: "https://raw.githubusercontent.com/searge/tarot/main/img/big/pents01.jpg",
        keywords: {
            upright: ["New opportunities", "Manifestation", "Financial opportunity", "Material gain", "Prosperity"],
            reversed: ["Missed opportunity", "Financial loss", "Poor planning", "Greed"]
        },
        meanings: {
            upright: {
                general: "The Ace of Pentacles represents new financial opportunities, security, and manifestation of material goals. It signifies a fresh start in material matters.",
                love: "In love, it may suggest a relationship that offers security and stability, or the manifestation of a desired romantic situation.",
                career: "Professionally, it indicates new job opportunities, financial gains, business ventures, or the manifestation of career goals.",
                spiritual: "Spiritually, it represents grounding spiritual energy into material reality and finding abundance through spiritual practice."
            },
            reversed: {
                general: "Reversed, the Ace of Pentacles suggests missed opportunities, financial insecurity, or poor material planning.",
                love: "In relationships, reversed may indicate financial stress affecting love, or relationships lacking stability and security.",
                career: "Career-wise, it suggests missed opportunities, financial setbacks, or poor planning affecting professional success.",
                spiritual: "Spiritually reversed, it indicates difficulty manifesting spiritual goals in material reality or spiritual materialism."
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
        image: "https://raw.githubusercontent.com/searge/tarot/main/img/big/pents02.jpg",
        keywords: {
            upright: ["Balance", "Adaptability", "Time management", "Flexibility", "Juggling priorities"],
            reversed: ["Imbalance", "Overwhelmed", "Financial stress", "Poor time management"]
        },
        meanings: {
            upright: {
                general: "The Two of Pentacles signifies balance, adaptability, juggling responsibilities, and maintaining equilibrium amidst life's demands.",
                love: "In love, it suggests balancing relationship needs with other life responsibilities, or adapting to changes in romantic situations.",
                career: "Professionally, it indicates managing multiple projects, work-life balance, or adapting to changing workplace demands.",
                spiritual: "Spiritually, it represents balancing spiritual practice with material responsibilities and adapting spiritual beliefs to life changes."
            },
            reversed: {
                general: "When reversed, the Two of Pentacles suggests imbalance, being overwhelmed, or struggling to manage multiple responsibilities.",
                love: "Reversed in love, it may indicate relationship imbalance, neglecting romantic needs due to other priorities, or relationship instability.",
                career: "Career-wise, it suggests being overwhelmed at work, poor work-life balance, or inability to manage professional responsibilities.",
                spiritual: "Spiritually reversed, it indicates imbalance between spiritual and material life, or being overwhelmed by spiritual responsibilities."
            }
        }
    }
];

// Spread Configurations
const spreads = {
    single: {
        name: "Single Card",
        positions: ["Guidance"],
        description: "A single card for immediate insight and guidance"
    },
    "three-card": {
        name: "Past-Present-Future",
        positions: ["Past", "Present", "Future"],
        description: "Classic three-card timeline reading"
    },
    relationship: {
        name: "Relationship Spread",
        positions: ["You", "Your Partner", "The Relationship", "Advice"],
        description: "Four-card spread exploring romantic connections"
    },
    "celtic-cross": {
        name: "Celtic Cross",
        positions: [
            "Present Situation",
            "Challenge/Cross",
            "Distant Past/Foundation",
            "Recent Past",
            "Possible Outcome",
            "Immediate Future",
            "Your Approach",
            "External Influences",
            "Hopes and Fears",
            "Final Outcome"
        ],
        description: "Comprehensive 10-card reading for deep insight"
    }
};

// Reading interpretations based on card combinations
const readingInterpretations = {
    majorArcanaHeavy: "Your reading contains many Major Arcana cards, indicating significant life themes and spiritual lessons at play.",
    cupsHeavy: "The abundance of Cups suggests emotional themes, relationships, and intuitive matters are prominent.",
    wandsHeavy: "Many Wands indicate creative energy, passion, and action-oriented themes in your reading.",
    swordsHeavy: "The prevalence of Swords suggests mental challenges, communication, and intellectual themes.",
    pentaclesHeavy: "Multiple Pentacles indicate material concerns, career matters, and practical issues are highlighted.",
    reversedHeavy: "Many reversed cards suggest internal blocks, delays, or the need for inner reflection.",
    aces: "Multiple Aces indicate new beginnings and fresh opportunities across different life areas.",
    courts: "Court cards suggest people of influence or different aspects of personality are important now."
};