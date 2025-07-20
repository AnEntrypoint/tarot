/**
 * Data Loader Module
 * Loads all JSON databases and provides unified access to tarot correspondence data
 */

class TarotDataLoader {
    constructor() {
        this.dataCache = {};
        this.isLoaded = false;
        this.loadPromise = null;
    }

    /**
     * Load all JSON databases
     * @returns {Promise} Promise that resolves when all data is loaded
     */
    async loadAllData() {
        if (this.loadPromise) {
            return this.loadPromise;
        }

        this.loadPromise = this._loadDataSources();
        return this.loadPromise;
    }

    /**
     * Internal method to load all data sources
     * @private
     */
    async _loadDataSources() {
        const dataSources = [
            'numerology',
            'astrology', 
            'kabbalah',
            'psychology',
            'mythology',
            'alchemy',
            'sacred_geometry',
            'chakras',
            'colors',
            'elements'
        ];

        const loadPromises = dataSources.map(source => this._loadJSONFile(source));
        
        try {
            await Promise.all(loadPromises);
            this.isLoaded = true;
            console.log('All tarot databases loaded successfully');
        } catch (error) {
            console.error('Error loading tarot databases:', error);
            throw error;
        }
    }

    /**
     * Load individual JSON file
     * @private
     */
    async _loadJSONFile(sourceName) {
        try {
            const response = await fetch(`data/${sourceName}.json`);
            if (!response.ok) {
                throw new Error(`Failed to load ${sourceName}.json: ${response.statusText}`);
            }
            const data = await response.json();
            this.dataCache[sourceName] = data;
        } catch (error) {
            console.error(`Error loading ${sourceName}.json:`, error);
            throw error;
        }
    }

    /**
     * Get data from specific source
     * @param {string} source - The data source name
     * @returns {Object} The data from that source
     */
    getData(source) {
        if (!this.isLoaded) {
            throw new Error('Data not loaded yet. Call loadAllData() first.');
        }
        return this.dataCache[source] || {};
    }

    /**
     * Get numerology data for a specific number
     * @param {number|string} number - Life path number
     * @returns {Object} Numerology data for that number
     */
    getNumerologyData(number) {
        const data = this.getData('numerology');
        return data.lifePath?.[number.toString()] || {};
    }

    /**
     * Get astrological data for a planet or sign
     * @param {string} type - 'planets' or 'zodiac_signs'
     * @param {string} name - Planet or sign name
     * @returns {Object} Astrological data
     */
    getAstrologyData(type, name) {
        const data = this.getData('astrology');
        return data[type]?.[name] || {};
    }

    /**
     * Get Kabbalistic data for a sephirah or path
     * @param {string} type - 'sephiroth' or 'paths'
     * @param {string|number} identifier - Sephirah name or path number
     * @returns {Object} Kabbalistic data
     */
    getKabbalahData(type, identifier) {
        const data = this.getData('kabbalah');
        return data[type]?.[identifier] || {};
    }

    /**
     * Get psychological archetype data for a tarot card
     * @param {string} cardName - Tarot card name
     * @returns {Object} Jungian archetype data
     */
    getPsychologyData(cardName) {
        const data = this.getData('psychology');
        return data.jungian_archetypes?.major_arcana_correspondences?.[cardName] || {};
    }

    /**
     * Get mythological correspondences
     * @param {string} type - Type of mythological data
     * @returns {Object} Mythological data
     */
    getMythologyData(type) {
        const data = this.getData('mythology');
        return data[type] || {};
    }

    /**
     * Get alchemical data
     * @param {string} type - Type of alchemical data
     * @returns {Object} Alchemical data
     */
    getAlchemyData(type) {
        const data = this.getData('alchemy');
        return data[type] || {};
    }

    /**
     * Get sacred geometry data
     * @param {string} type - Type of geometric data
     * @returns {Object} Sacred geometry data
     */
    getSacredGeometryData(type) {
        const data = this.getData('sacred_geometry');
        return data[type] || {};
    }

    /**
     * Get chakra system data
     * @param {string} chakra - Chakra name or system type
     * @returns {Object} Chakra data
     */
    getChakraData(chakra) {
        const data = this.getData('chakras');
        if (chakra && data.chakra_system) {
            return data.chakra_system[chakra] || {};
        }
        return data.chakra_system || {};
    }

    /**
     * Get color psychology data
     * @param {string} color - Color name
     * @returns {Object} Color data
     */
    getColorData(color) {
        const data = this.getData('colors');
        return data.color_psychology?.[color] || {};
    }

    /**
     * Get elemental correspondence data
     * @param {string} element - Element name
     * @returns {Object} Elemental data
     */
    getElementalData(element) {
        const data = this.getData('elements');
        return data.classical_elements?.[element] || {};
    }

    /**
     * Get comprehensive card analysis data
     * @param {string} cardName - Tarot card name
     * @param {string} suit - Card suit (for minor arcana)
     * @returns {Object} Comprehensive analysis data
     */
    getCardAnalysis(cardName, suit = null) {
        const analysis = {
            psychology: this.getPsychologyData(cardName),
            numerology: {},
            astrology: {},
            kabbalah: {},
            mythology: {},
            alchemy: {},
            chakras: {},
            colors: {},
            elements: {}
        };

        // Add suit-specific elemental data for minor arcana
        if (suit) {
            const suitElements = {
                'Wands': 'fire',
                'Cups': 'water', 
                'Swords': 'air',
                'Pentacles': 'earth'
            };
            
            const element = suitElements[suit];
            if (element) {
                analysis.elements = this.getElementalData(element);
            }
        }

        // Extract number for numerological analysis
        const numberMatch = cardName.match(/(\d+)/);
        if (numberMatch) {
            const number = numberMatch[1];
            analysis.numerology = this.getNumerologyData(number);
        }

        return analysis;
    }

    /**
     * Search across all databases for a keyword
     * @param {string} keyword - Search term
     * @returns {Array} Array of search results with source and context
     */
    searchAll(keyword) {
        if (!this.isLoaded) {
            throw new Error('Data not loaded yet. Call loadAllData() first.');
        }

        const results = [];
        const searchTerm = keyword.toLowerCase();

        Object.keys(this.dataCache).forEach(source => {
            const sourceResults = this._searchInObject(this.dataCache[source], searchTerm, source);
            results.push(...sourceResults);
        });

        return results;
    }

    /**
     * Recursively search within an object for a keyword
     * @private
     */
    _searchInObject(obj, searchTerm, source, path = '') {
        const results = [];

        if (typeof obj === 'string' && obj.toLowerCase().includes(searchTerm)) {
            results.push({
                source,
                path,
                content: obj,
                type: 'text'
            });
        } else if (Array.isArray(obj)) {
            obj.forEach((item, index) => {
                const itemResults = this._searchInObject(item, searchTerm, source, `${path}[${index}]`);
                results.push(...itemResults);
            });
        } else if (typeof obj === 'object' && obj !== null) {
            Object.keys(obj).forEach(key => {
                if (key.toLowerCase().includes(searchTerm)) {
                    results.push({
                        source,
                        path: path ? `${path}.${key}` : key,
                        content: obj[key],
                        type: 'key'
                    });
                }
                
                const valueResults = this._searchInObject(
                    obj[key], 
                    searchTerm, 
                    source, 
                    path ? `${path}.${key}` : key
                );
                results.push(...valueResults);
            });
        }

        return results;
    }

    /**
     * Get all available quotes from academic sources
     * @returns {Array} Array of quotes with attribution
     */
    getAllQuotes() {
        if (!this.isLoaded) {
            throw new Error('Data not loaded yet. Call loadAllData() first.');
        }

        const quotes = [];
        
        Object.keys(this.dataCache).forEach(source => {
            const sourceQuotes = this._extractQuotes(this.dataCache[source], source);
            quotes.push(...sourceQuotes);
        });

        return quotes;
    }

    /**
     * Extract quotes from an object recursively
     * @private
     */
    _extractQuotes(obj, source, path = '') {
        const quotes = [];

        if (typeof obj === 'object' && obj !== null && !Array.isArray(obj)) {
            if (obj.quote && obj.author && obj.source) {
                quotes.push({
                    quote: obj.quote,
                    author: obj.author,
                    source: obj.source,
                    database: source,
                    path: path
                });
            }

            Object.keys(obj).forEach(key => {
                const newPath = path ? `${path}.${key}` : key;
                const nestedQuotes = this._extractQuotes(obj[key], source, newPath);
                quotes.push(...nestedQuotes);
            });
        } else if (Array.isArray(obj)) {
            obj.forEach((item, index) => {
                const nestedQuotes = this._extractQuotes(item, source, `${path}[${index}]`);
                quotes.push(...nestedQuotes);
            });
        }

        return quotes;
    }

    /**
     * Get random quote from any database
     * @param {string} [source] - Optional specific source to get quote from
     * @returns {Object} Random quote object
     */
    getRandomQuote(source = null) {
        const allQuotes = this.getAllQuotes();
        const filteredQuotes = source ? 
            allQuotes.filter(q => q.database === source) : 
            allQuotes;

        if (filteredQuotes.length === 0) {
            return null;
        }

        const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
        return filteredQuotes[randomIndex];
    }

    /**
     * Get integration suggestions between different analytical systems
     * @param {Array} cards - Array of card names
     * @returns {Object} Integration suggestions
     */
    getIntegrationSuggestions(cards) {
        const suggestions = {
            numerological_patterns: [],
            elemental_balance: {},
            psychological_themes: [],
            spiritual_synthesis: [],
            practical_applications: []
        };

        // Analyze numerological patterns
        const numbers = cards.map(card => {
            const match = card.match(/(\d+)/);
            return match ? parseInt(match[1]) : null;
        }).filter(n => n !== null);

        if (numbers.length > 0) {
            const sum = numbers.reduce((a, b) => a + b, 0);
            const average = Math.round(sum / numbers.length);
            suggestions.numerological_patterns.push({
                pattern: 'average_number',
                value: average,
                meaning: this.getNumerologyData(average)
            });
        }

        // Analyze elemental balance
        const suitElements = {
            'Wands': 'fire',
            'Cups': 'water',
            'Swords': 'air', 
            'Pentacles': 'earth'
        };

        const elementCounts = { fire: 0, water: 0, air: 0, earth: 0 };
        
        cards.forEach(card => {
            Object.keys(suitElements).forEach(suit => {
                if (card.includes(suit)) {
                    elementCounts[suitElements[suit]]++;
                }
            });
        });

        suggestions.elemental_balance = elementCounts;

        return suggestions;
    }
}

// Create global instance
window.tarotDataLoader = new TarotDataLoader();

// Auto-load data when the page loads
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.tarotDataLoader.loadAllData();
        console.log('Tarot databases initialized successfully');
        
        // Dispatch custom event to notify other modules
        window.dispatchEvent(new CustomEvent('tarotDataLoaded'));
    } catch (error) {
        console.error('Failed to initialize tarot databases:', error);
    }
});