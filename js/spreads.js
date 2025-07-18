// Tarot Spread Configurations
// References: "Tarot Spreads" by Barbara Moore, "The Complete Guide to Tarot" by Eden Gray

const spreads = {
    single: {
        name: "Single Card Reading",
        cardCount: 1,
        positions: [
            { name: "Guidance", description: "What you need to know right now" }
        ],
        interpretation: "A single card reading offers direct, focused insight into your current situation or question. This simple yet powerful spread provides clarity and immediate guidance."
    },
    
    "three-card": {
        name: "Past-Present-Future",
        cardCount: 3,
        positions: [
            { name: "Past", description: "Influences from your past affecting the situation" },
            { name: "Present", description: "Current situation and immediate influences" },
            { name: "Future", description: "Likely outcome based on current path" }
        ],
        interpretation: "The three-card spread is one of the most versatile and popular layouts. It provides a timeline perspective, showing how past influences shape your present and future possibilities."
    },
    
    relationship: {
        name: "Relationship Spread",
        cardCount: 4,
        positions: [
            { name: "You", description: "Your role and feelings in the relationship" },
            { name: "Your Partner", description: "Their role and feelings in the relationship" },
            { name: "The Connection", description: "The dynamic between you both" },
            { name: "Guidance", description: "Advice for improving the relationship" }
        ],
        interpretation: "This spread illuminates the dynamics between two people, whether romantic, platonic, or professional. It reveals hidden aspects of the relationship and provides guidance for harmony."
    },
    
    "celtic-cross": {
        name: "Celtic Cross",
        cardCount: 10,
        positions: [
            { name: "Present Situation", description: "The heart of the matter" },
            { name: "Challenge", description: "What crosses or challenges you" },
            { name: "Distant Past", description: "Foundation of the situation" },
            { name: "Recent Past", description: "Recent events affecting the situation" },
            { name: "Possible Outcome", description: "What may come to pass" },
            { name: "Immediate Future", description: "What will happen next" },
            { name: "Your Approach", description: "How you're handling the situation" },
            { name: "External Influences", description: "How others see the situation" },
            { name: "Hopes and Fears", description: "Your inner feelings about the outcome" },
            { name: "Final Outcome", description: "The ultimate result of the situation" }
        ],
        interpretation: "The Celtic Cross is the most comprehensive and detailed spread, providing a complete analysis of any situation. It examines all angles and timeframes to give you the fullest possible understanding."
    }
};

// Advanced Spread Configurations for Future Implementation
const advancedSpreads = {
    "chakra-alignment": {
        name: "Chakra Alignment",
        cardCount: 7,
        positions: [
            { name: "Root Chakra", description: "Foundation and security" },
            { name: "Sacral Chakra", description: "Creativity and sexuality" },
            { name: "Solar Plexus", description: "Personal power and confidence" },
            { name: "Heart Chakra", description: "Love and compassion" },
            { name: "Throat Chakra", description: "Communication and truth" },
            { name: "Third Eye", description: "Intuition and wisdom" },
            { name: "Crown Chakra", description: "Spiritual connection" }
        ],
        interpretation: "This spread examines the energy centers of your body to identify blockages and guide healing work."
    },
    
    "year-ahead": {
        name: "Year Ahead",
        cardCount: 12,
        positions: [
            { name: "January", description: "New year foundations" },
            { name: "February", description: "Building momentum" },
            { name: "March", description: "Action and growth" },
            { name: "April", description: "Renewal and fresh starts" },
            { name: "May", description: "Manifestation and abundance" },
            { name: "June", description: "Relationships and harmony" },
            { name: "July", description: "Personal power and leadership" },
            { name: "August", description: "Harvest and achievements" },
            { name: "September", description: "Wisdom and reflection" },
            { name: "October", description: "Transformation and change" },
            { name: "November", description: "Gratitude and preparation" },
            { name: "December", description: "Completion and rest" }
        ],
        interpretation: "A comprehensive yearly forecast that provides guidance for each month ahead."
    }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { spreads, advancedSpreads };
}