// Tarot Spread Configurations
// References: "Tarot Spreads" by Barbara Moore, "The Complete Guide to Tarot" by Eden Gray

const spreads = {
    single: {
        name: { text: "Single Card Reading", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
        cardCount: 1,
        positions: [
            { name: { text: "Guidance", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }, description: { text: "What you need to know right now", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" } }
        ],
        interpretation: { text: "A single card reading offers direct, focused insight into your current situation or question. This simple yet powerful spread provides clarity and immediate guidance.", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
    },
    
    "three-card": {
        name: { text: "Past-Present-Future", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
        cardCount: 3,
        positions: [
            { name: { text: "Past", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }, description: { text: "Influences from your past affecting the situation", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" } },
            { name: { text: "Present", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }, description: { text: "Current situation and immediate influences", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" } },
            { name: { text: "Future", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }, description: { text: "Likely outcome based on current path", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" } }
        ],
        interpretation: { text: "The three-card spread is one of the most versatile and popular layouts. It provides a timeline perspective, showing how past influences shape your present and future possibilities.", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
    },
    
    relationship: {
        name: { text: "Relationship Spread", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
        cardCount: 4,
        positions: [
            { name: { text: "You", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }, description: { text: "Your role and feelings in the relationship", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" } },
            { name: { text: "Your Partner", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }, description: { text: "Their role and feelings in the relationship", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" } },
            { name: { text: "The Connection", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }, description: { text: "The dynamic between you both", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" } },
            { name: { text: "Guidance", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }, description: { text: "Advice for improving the relationship", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" } }
        ],
        interpretation: { text: "This spread illuminates the dynamics between two people, whether romantic, platonic, or professional. It reveals hidden aspects of the relationship and provides guidance for harmony.", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
    },
    
    "celtic-cross": {
        name: { text: "Celtic Cross", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
        cardCount: 10,
        positions: [
            { name: { text: "Present Situation", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }, description: { text: "The heart of the matter", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" } },
            { name: { text: "Challenge", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }, description: { text: "What crosses or challenges you", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" } },
            { name: { text: "Distant Past", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }, description: { text: "Foundation of the situation", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" } },
            { name: { text: "Recent Past", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }, description: { text: "Recent events affecting the situation", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" } },
            { name: { text: "Possible Outcome", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }, description: { text: "What may come to pass", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" } },
            { name: { text: "Immediate Future", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }, description: { text: "What will happen next", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" } },
            { name: { text: "Your Approach", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }, description: { text: "How you're handling the situation", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" } },
            { name: { text: "External Influences", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }, description: { text: "How others see the situation", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" } },
            { name: { text: "Hopes and Fears", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }, description: { text: "Your inner feelings about the outcome", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" } },
            { name: { text: "Final Outcome", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }, description: { text: "The ultimate result of the situation", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" } }
        ],
        interpretation: { text: "The Celtic Cross is the most comprehensive and detailed spread, providing a complete analysis of any situation. It examines all angles and timeframes to give you the fullest possible understanding.", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
    }
};

// Advanced Spread Configurations for Future Implementation
const advancedSpreads = {
    "chakra-alignment": {
        name: { text: "Chakra Alignment", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
        cardCount: 7,
        positions: [
            { name: { text: "Root Chakra", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }, description: { text: "Foundation and security", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" } },
            { name: { text: "Sacral Chakra", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }, description: { text: "Creativity and sexuality", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" } },
            { name: { text: "Solar Plexus", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }, description: { text: "Personal power and confidence", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" } },
            { name: { text: "Heart Chakra", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }, description: { text: "Love and compassion", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" } },
            { name: { text: "Throat Chakra", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }, description: { text: "Communication and truth", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" } },
            { name: { text: "Third Eye", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }, description: { text: "Intuition and wisdom", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" } },
            { name: { text: "Crown Chakra", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }, description: { text: "Spiritual connection", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" } }
        ],
        interpretation: { text: "This spread examines the energy centers of your body to identify blockages and guide healing work.", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
    },
    
    "year-ahead": {
        name: { text: "Year Ahead", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" },
        cardCount: 12,
        positions: [
            { name: { text: "January", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }, description: { text: "New year foundations", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" } },
            { name: { text: "February", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }, description: { text: "Building momentum", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" } },
            { name: { text: "March", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }, description: { text: "Action and growth", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" } },
            { name: { text: "April", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }, description: { text: "Renewal and fresh starts", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" } },
            { name: { text: "May", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }, description: { text: "Manifestation and abundance", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" } },
            { name: { text: "June", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }, description: { text: "Relationships and harmony", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" } },
            { name: { text: "July", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }, description: { text: "Personal power and leadership", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" } },
            { name: { text: "August", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }, description: { text: "Harvest and achievements", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" } },
            { name: { text: "September", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }, description: { text: "Wisdom and reflection", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" } },
            { name: { text: "October", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }, description: { text: "Transformation and change", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" } },
            { name: { text: "November", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }, description: { text: "Gratitude and preparation", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" } },
            { name: { text: "December", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }, description: { text: "Completion and rest", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" } }
        ],
        interpretation: { text: "A comprehensive yearly forecast that provides guidance for each month ahead.", citation_key: "Manly_P_Hall-The_Secret_Teachings_of_All_Ages" }
    }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { spreads, advancedSpreads };
}

// Make spreads available globally for the controller
window.spreads = spreads;