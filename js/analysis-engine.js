// Advanced Tarot Analysis Engine with JSON Database Integration
// Now enhanced with comprehensive databases and academic sources

class AnalysisEngine {
    constructor() {
        this.analysisCache = new Map();
        this.dataLoader = null;
        this.isInitialized = false;
        this.initializationPromise = null;
        this.analysisText = {};
        
        this.jungianArchetypes = {
            "The Fool": "Innocent", "The Magician": "Magician", "The High Priestess": "Sage",
            "The Empress": "Mother", "The Emperor": "Ruler", "The Hierophant": "Teacher",
            "The Lovers": "Lover", "The Chariot": "Hero", "Strength": "Hero", "The Hermit": "Sage",
            "Wheel of Fortune": "Magician", "Justice": "Ruler", "The Hanged Man": "Martyr",
            "Death": "Destroyer", "Temperance": "Sage", "The Devil": "Shadow", "The Tower": "Destroyer",
            "The Star": "Innocent", "The Moon": "Shadow", "The Sun": "Hero", "Judgement": "Sage", "The World": "Sage"
        };
        
        window.addEventListener('tarotDataLoaded', () => this.initialize());
        if (window.tarotDataLoader && window.tarotDataLoader.isLoaded) {
            this.initialize();
        }
    }

    async initialize() {
        if (this.initializationPromise) return this.initializationPromise;
        this.initializationPromise = this._doInitialize();
        return this.initializationPromise;
    }
    
    async _doInitialize() {
        try {
            this.dataLoader = window.tarotDataLoader;
            if (!this.dataLoader || !this.dataLoader.isLoaded) throw new Error('TarotDataLoader not available or not loaded');
            this.analysisText = this.dataLoader.getData('analysis_text');
            this.isInitialized = true;
            console.log('AnalysisEngine initialized with JSON databases');
        } catch (error) {
            console.error('Failed to initialize AnalysisEngine:', error);
            this.isInitialized = false;
        }
    }
    
    async ensureInitialized() {
        if (!this.isInitialized) await this.initialize();
    }

    getAnalysisText(key, replacements = {}) {
        const path = key.split('.');
        let textObject = this.analysisText;
        try {
            for (const p of path) {
                textObject = textObject[p];
            }
            if (typeof textObject === 'undefined' || typeof textObject.text === 'undefined') {
                console.warn(`Analysis text for key '${key}' not found.`);
                return key;
            }
            let text = textObject.text;
            for (const placeholder in replacements) {
                text = text.replace(new RegExp(`\\{${placeholder}\\}`, 'g'), replacements[placeholder]);
            }
            return text;
        } catch (e) {
            console.warn(`Could not retrieve analysis text for key '${key}'`, e);
            return key;
        }
    }

    async analyzeReading(cards, spreadType) {
        await this.ensureInitialized();
        const cacheKey = JSON.stringify({ cards: cards.map(c => c.name), spreadType });
        if (this.analysisCache.has(cacheKey)) return this.analysisCache.get(cacheKey);
        
        const analysis = {
            overview: await this.generateOverview(cards, spreadType),
            elemental: await this.analyzeElementalBalance(cards),
            suits: await this.analyzeSuitDistribution(cards),
            energy: await this.analyzeEnergyPattern(cards),
            psychology: await this.analyzeJungianPattern(cards),
            spiritual: await this.analyzeSpiritualPath(cards),
            kabbalah: await this.analyzeKabbalisticInfluence(cards),
            chakras: await this.analyzeChakraAlignment(cards),
            archetypes: await this.analyzeArchetypes(cards),
            timing: await this.analyzeTiming(cards),
            karma: await this.analyzeKarmicPattern(cards),
            numerology: await this.analyzeNumerology(cards),
            elementalDignities: await this.analyzeElementalDignities(cards),
            astrologicalTransits: await this.analyzeAstrologicalTransits(cards),
            sacredGeometry: await this.analyzeSacredGeometry(cards),
            symbolism: await this.analyzeDeepSymbolism(cards),
            cardInteractions: await this.analyzeCardInteractions(cards),
            shadowWork: await this.analyzeShadowWork(cards),
            alchemical: await this.analyzeAlchemicalProcess(cards),
            mythological: await this.analyzeMythologicalPatterns(cards),
            quantumField: await this.analyzeQuantumFieldInfluence(cards),
            crossCultural: await this.analyzeCrossCulturalSymbols(cards),
            dreamSymbolism: await this.analyzeDreamSymbolism(cards),
            plantAnimal: await this.analyzePlantAnimalCorrespondences(cards),
            healingTherapeutic: await this.analyzeHealingTherapeutic(cards),
            professionalInsights: await this.analyzeProfessionalReadingMastery(cards),
            syntheticContext: await this.analyzeSyntheticReadingContext(cards, spreadType),
            masterSpreadInsights: await this.analyzeMasterSpreadInterpretations(cards, spreadType),
            mysticalWisdom: await this.analyzeMysticalOracularWisdom(cards),
            comprehensiveApplications: await this.analyzeComprehensiveApplications(cards)
        };
        this.analysisCache.set(cacheKey, analysis);
        return analysis;
    }

    async generateOverview(cards, spreadType) {
        const majorArcana = cards.filter(c => c.suit === "Major Arcana").length;
        const courtCards = cards.filter(c => ["King", "Queen", "Knight", "Page"].some(court => c.name.includes(court))).length;
        const reversedCards = cards.filter(c => c.isReversed).length;
        const intensity = majorArcana > cards.length * 0.5 ? "High" : majorArcana > cards.length * 0.3 ? "Medium" : "Low";
        const personalInfluence = courtCards > 0 ? "Strong personal influences present" : "Situational focus";
        const energyFlow = reversedCards > cards.length * 0.5 ? "Blocked or internal energy" : "Forward-moving energy";
        return {
            intensity, personalInfluence, energyFlow,
            majorArcanaCount: majorArcana, courtCardCount: courtCards, reversedCount: reversedCards,
            interpretation: this.generateOverviewInterpretation(intensity, personalInfluence, energyFlow)
        };
    }

    generateOverviewInterpretation(intensity, personalInfluence, energyFlow) {
        return this.getAnalysisText('overview.interpretation', { intensity: intensity.toLowerCase(), personalInfluence: personalInfluence.toLowerCase(), energyFlow: energyFlow.toLowerCase() });
    }

    analyzeSuitDistribution(cards) {
        const suits = {};
        cards.forEach(card => {
            if (!suits[card.suit]) suits[card.suit] = 0;
            suits[card.suit]++;
        });
        return {
            distribution: suits,
            dominantSuit: Object.keys(suits).reduce((a, b) => suits[a] > suits[b] ? a : b, null),
            interpretation: this.generateSuitInterpretation(suits)
        };
    }

    generateSuitInterpretation(suits) {
        const dominant = Object.keys(suits).reduce((a, b) => suits[a] > suits[b] ? a : b, null);
        if (!dominant) return "";
        const dominantMeaning = this.getAnalysisText(`suits.meanings.${dominant.replace(/\s/g, '')}`);
        return this.getAnalysisText('suits.interpretation', { dominantMeaning, dominantCount: suits[dominant] });
    }

    analyzeEnergyPattern(cards) {
        let forwardMoving = 0, blocked = 0, transformative = 0;
        const transformativeCards = ["Death", "Tower", "Wheel of Fortune", "Judgement", "Temperance"];
        cards.forEach(card => {
            if (card.isReversed) blocked++; else forwardMoving++;
            if (transformativeCards.some(name => card.name.includes(name))) transformative++;
        });
        const energyType = blocked > forwardMoving ? "Blocked/Internal" : transformative > 0 ? "Transformative" : "Forward-Moving";
        return {
            forwardMoving, blocked, transformative, energyType,
            interpretation: this.generateEnergyInterpretation(energyType)
        };
    }

    generateEnergyInterpretation(energyType) {
        if (energyType === "Blocked/Internal") return this.getAnalysisText('energy.blocked');
        if (energyType === "Transformative") return this.getAnalysisText('energy.transformative');
        return this.getAnalysisText('energy.forward');
    }

    async analyzeJungianPattern(cards) {
        await this.ensureInitialized();
        const archetypes = {}, shadowWork = [], animaAnimus = [];
        const psychologyData = this.isInitialized ? this.dataLoader.getData('psychology') : {};
        const jungianData = psychologyData.jungian_archetypes?.major_arcana_correspondences || {};
        cards.forEach(card => {
            const archetypeData = jungianData[card.name];
            const archetype = getText(archetypeData?.primary_archetype) || this.getBasicArchetype(card);
            if (archetype) {
                archetypes[archetype] = (archetypes[archetype] || 0) + 1;
                if (card.isReversed) {
                    const shadowMeaning = getText(archetypeData?.shadow_aspect) || this.getShadowMeaning(card.name);
                    shadowWork.push(`${card.name} (${archetype}) - ${shadowMeaning}`);
                }
                if (["The Empress", "The High Priestess", "Queen of Cups", "Queen of Pentacles"].includes(card.name)) {
                    const animaMeaning = getText(archetypeData?.anima_aspect) || this.getAnimaAnimusMeaning(card.name, "anima");
                    animaAnimus.push(`Anima: ${card.name} - ${animaMeaning}`);
                }
                if (["The Emperor", "The Magician", "King of Wands", "King of Swords"].includes(card.name)) {
                    const animusMeaning = getText(archetypeData?.animus_aspect) || this.getAnimaAnimusMeaning(card.name, "animus");
                    animaAnimus.push(`Animus: ${card.name} - ${animusMeaning}`);
                }
            }
        });
        return {
            dominantArchetypes: archetypes, shadowWork, animaAnimus,
            collectiveUnconscious: this.analyzeCollectiveUnconscious(cards),
            interpretation: this.generateJungianInterpretation(archetypes, shadowWork, animaAnimus)
        };
    }

    getShadowMeaning(cardName) {
        const shadowMeanings = { "The Fool": "reckless behavior or avoiding responsibility", "The Magician": "manipulation or misuse of power", "The High Priestess": "secrets or intuitive blocks", "The Empress": "overindulgence or neglecting self-care", "The Emperor": "authoritarian behavior or lack of structure" };
        return shadowMeanings[cardName] || this.getAnalysisText('jungian.shadow_fallback');
    }

    getAnimaAnimusMeaning(cardName, type) {
        const meanings = { anima: { "The Empress": "nurturing feminine energy and creativity", "The High Priestess": "intuitive wisdom and mystery", "Queen of Cups": "emotional intelligence and compassion", "Queen of Pentacles": "practical nurturing and abundance" }, animus: { "The Emperor": "structured masculine energy and leadership", "The Magician": "focused will and manifestation power", "King of Wands": "passionate leadership and vision", "King of Swords": "intellectual clarity and justice" } };
        return meanings[type][cardName] || this.getAnalysisText('jungian.anima_animus_fallback');
    }

    analyzeCollectiveUnconscious(cards) {
        const majorArcana = cards.filter(c => c.suit === "Major Arcana");
        return majorArcana.length > 0 ? this.getAnalysisText('jungian.collective_unconscious_present', { majorArcanaCount: majorArcana.length }) : this.getAnalysisText('jungian.collective_unconscious_subtle');
    }

    generateJungianInterpretation(archetypes, shadowWork, animaAnimus) {
        const dominantArchetype = Object.keys(archetypes).reduce((a, b) => archetypes[a] > archetypes[b] ? a : b, "");
        let interpretation = this.getAnalysisText('jungian.interpretation_base', { dominantArchetype });
        if (shadowWork.length > 0) interpretation += ' ' + this.getAnalysisText('jungian.interpretation_shadow', { shadowCount: shadowWork.length });
        if (animaAnimus.length > 0) interpretation += ' ' + this.getAnalysisText('jungian.interpretation_anima');
        return interpretation;
    }

    async analyzeSpiritualPath(cards) {
        await this.ensureInitialized();
        const soulLessons = [], spiritualGifts = [], higherSelf = [], ascension = [];
        cards.forEach(card => {
            if (card.suit === "Major Arcana") soulLessons.push(`${card.name}: ${this.getSoulLesson(card.name)}`);
            if (["The High Priestess", "The Hermit", "The Star", "The Moon"].includes(card.name)) spiritualGifts.push(`${card.name}: ${this.getSpiritualGift(card.name)}`);
            if (card.suit === "Major Arcana" && !card.isReversed) higherSelf.push(`${card.name}: ${this.getHigherSelfMessage(card.name)}`);
            if (["The World", "The Sun", "The Star", "Temperance"].includes(card.name)) ascension.push(`${card.name}: ${this.getAscensionPath(card.name)}`);
        });
        return { soulLessons, spiritualGifts, higherSelf, ascension, interpretation: this.generateSpiritualInterpretation(soulLessons, spiritualGifts, higherSelf, ascension) };
    }

    getSoulLesson(cardName) {
        const lessons = { "The Fool": "Trust in the journey and embrace new beginnings", "The Magician": "Develop your personal power and manifestation abilities", "The High Priestess": "Connect with your intuition and inner wisdom", "The Empress": "Embrace creativity and nurturing energy", "The Emperor": "Learn structure, discipline, and healthy boundaries" };
        return lessons[cardName] || this.getAnalysisText('spiritual.soul_lesson_fallback');
    }

    getSpiritualGift(cardName) {
        const gifts = { "The High Priestess": "Enhanced intuition and psychic abilities", "The Hermit": "Inner wisdom and ability to guide others", "The Star": "Hope, healing, and inspirational energy", "The Moon": "Connection to lunar cycles and subconscious wisdom" };
        return gifts[cardName] || this.getAnalysisText('spiritual.spiritual_gift_fallback');
    }

    getHigherSelfMessage(cardName) {
        const messages = { "The Fool": "Step forward with faith and trust", "The Magician": "You have all the tools you need", "The High Priestess": "Listen to your inner voice", "The Empress": "Create and nurture what you love", "The Emperor": "Take charge of your destiny" };
        return messages[cardName] || this.getAnalysisText('spiritual.higher_self_fallback');
    }

    getAscensionPath(cardName) {
        const paths = { "The World": "Completion of a major spiritual cycle", "The Sun": "Joy, vitality, and spiritual illumination", "The Star": "Hope and connection to higher purpose", "Temperance": "Balance and integration of spiritual lessons" };
        return paths[cardName] || this.getAnalysisText('spiritual.ascension_path_fallback');
    }

    generateSpiritualInterpretation(soulLessons, spiritualGifts, higherSelf, ascension) {
        let interpretation = this.getAnalysisText('spiritual.interpretation_base', { lessonCount: soulLessons.length });
        if (spiritualGifts.length > 0) interpretation += ' ' + this.getAnalysisText('spiritual.interpretation_gifts', { giftCount: spiritualGifts.length });
        if (higherSelf.length > 0) interpretation += ' ' + this.getAnalysisText('spiritual.interpretation_higher_self', { messageCount: higherSelf.length });
        if (ascension.length > 0) interpretation += ' ' + this.getAnalysisText('spiritual.interpretation_ascension', { ascensionCount: ascension.length });
        return interpretation;
    }

    async analyzeKabbalisticInfluence(cards) {
        if (!this.isInitialized) return { interpretation: this.getAnalysisText('kabbalah.uninitialized') };
        const paths = [], sephiroth = {}, hebrewLetters = [];
        const kabbData = this.dataLoader.getData('kabbalah');
        cards.forEach(card => {
            if (card.suit === 'Major Arcana' && card.number !== null) {
                const pathNumber = card.number;
                if (kabbData.paths && kabbData.paths[pathNumber]) {
                    const path = kabbData.paths[pathNumber];
                    const cleanPath = {};
                    for (const key in path) cleanPath[key] = getText(path[key]);
                    paths.push({ card: card.name, pathNumber, ...cleanPath });
                    if (cleanPath.hebrew_letter) hebrewLetters.push(cleanPath.hebrew_letter);
                }
            }
            const suitSephirah = { 'Wands': 'Chokmah', 'Cups': 'Binah', 'Swords': 'Gevurah', 'Pentacles': 'Malkuth' };
            if (suitSephirah[card.suit]) {
                const seph = suitSephirah[card.suit];
                sephiroth[seph] = (sephiroth[seph] || 0) + 1;
            }
        });
        return { activePaths: paths, sephirothInfluence: sephiroth, hebrewLetters, interpretation: this.getAnalysisText('kabbalah.interpretation', { pathCount: paths.length, sephirothCount: Object.keys(sephiroth).length }) };
    }

    async analyzeChakraAlignment(cards) {
        if (!this.isInitialized) return { interpretation: this.getAnalysisText('chakras.uninitialized') };
        const chakras = { Root: 0, Sacral: 0, "Solar Plexus": 0, Heart: 0, Throat: 0, "Third Eye": 0, Crown: 0 };
        cards.forEach(card => {
            if (card.suit === 'Major Arcana') {
                const chakraMapping = { 0: "Root", 1: "Throat", 2: "Crown", 3: "Heart", 4: "Root", 5: "Throat", 6: "Heart", 7: "Solar Plexus", 8: "Heart", 9: "Crown", 10: "Root", 11: "Heart", 12: "Crown", 13: "Root", 14: "Heart", 15: "Root", 16: "Crown", 17: "Crown", 18: "Third Eye", 19: "Solar Plexus", 20: "Throat", 21: "Crown" };
                if (card.number !== null && chakraMapping[card.number]) chakras[chakraMapping[card.number]]++;
            } else {
                const suitChakras = { 'Wands': 'Solar Plexus', 'Cups': 'Heart', 'Swords': 'Throat', 'Pentacles': 'Root' };
                if (suitChakras[card.suit]) chakras[suitChakras[card.suit]]++;
            }
        });
        const dominant = Object.keys(chakras).reduce((a, b) => chakras[a] > chakras[b] ? a : b);
        return { alignment: chakras, dominant, interpretation: this.getAnalysisText('chakras.interpretation', { dominantChakra: dominant, cardCount: cards.length, plural: cards.length > 1 ? 's' : ''}) };
    }

    async analyzeArchetypes(cards) {
        await this.ensureInitialized();
        return {
            primary: this.getAnalysisText('archetypes.primary'),
            mythological: this.getAnalysisText('archetypes.mythological'),
            interpretation: this.getAnalysisText('archetypes.interpretation')
        };
    }

    async analyzeTiming(cards) {
        await this.ensureInitialized();
        return {
            seasonal: this.getAnalysisText('timing.seasonal'),
            lunar: this.getAnalysisText('timing.lunar'),
            planetary: this.getAnalysisText('timing.planetary'),
            interpretation: this.getAnalysisText('timing.interpretation')
        };
    }

    async analyzeKarmicPattern(cards) {
        await this.ensureInitialized();
        return {
            debts: this.getAnalysisText('karma.debts'),
            pastLife: this.getAnalysisText('karma.past_life'),
            contracts: this.getAnalysisText('karma.contracts'),
            dharma: this.getAnalysisText('karma.dharma'),
            interpretation: this.getAnalysisText('karma.interpretation')
        };
    }

    getBasicArchetype(card) {
        if (card.suit === "Major Arcana" && this.jungianArchetypes[card.name]) {
            return this.jungianArchetypes[card.name];
        }
        if (card.name.includes("King")) return "Ruler";
        if (card.name.includes("Queen")) return "Mother";
        if (card.name.includes("Knight")) return "Hero";
        if (card.name.includes("Page")) return "Innocent";
        const suitArchetypes = { "Wands": "Magician", "Cups": "Lover", "Swords": "Hero", "Pentacles": "Creator" };
        return suitArchetypes[card.suit] || "Seeker";
    }

    async analyzeElementalBalance(cards) {
        await this.ensureInitialized();
        const elements = { Fire: 0, Water: 0, Air: 0, Earth: 0 };
        const elementalInsights = {};
        for (const card of cards) {
            if (card.element && elements.hasOwnProperty(card.element)) {
                elements[card.element]++;
            }
            if (card.suit === "Wands") elements.Fire++;
            else if (card.suit === "Cups") elements.Water++;
            else if (card.suit === "Swords") elements.Air++;
            else if (card.suit === "Pentacles") elements.Earth++;
            if (this.isInitialized) {
                const suitElements = { 'Wands': 'fire', 'Cups': 'water', 'Swords': 'air', 'Pentacles': 'earth' };
                const elementKey = suitElements[card.suit] || card.element?.toLowerCase();
                if (elementKey) {
                    const elementData = this.dataLoader.getElementalData(elementKey);
                    if (elementData && !elementalInsights[elementKey]) {
                        elementalInsights[elementKey] = elementData;
                    }
                }
            }
        }
        const dominant = Object.keys(elements).reduce((a, b) => elements[a] > elements[b] ? a : b, null);
        const lacking = Object.keys(elements).reduce((a, b) => elements[a] < elements[b] ? a : b, null);
        return {
            distribution: elements,
            dominant,
            lacking,
            balance: this.calculateElementalBalance(elements),
            elementalInsights,
            interpretation: await this.generateEnhancedElementalInterpretation(dominant, lacking, elements, elementalInsights)
        };
    }

    async generateEnhancedElementalInterpretation(dominant, lacking, elements, insights) {
        let interpretation = '';
        if (this.isInitialized && dominant && insights[dominant.toLowerCase()]) {
            const dominantData = insights[dominant.toLowerCase()];
            interpretation += `${dominant} energy dominates this reading. `;
            if (dominantData.psychological_aspects) interpretation += `${getText(dominantData.psychological_aspects)}. `;
            if (dominantData.life_lessons) interpretation += `Key lesson: ${getText(dominantData.life_lessons)}. `;
            if (dominantData.academic_quotes && dominantData.academic_quotes.length > 0) {
                const quote = dominantData.academic_quotes[0];
                interpretation += `\n\nAs ${getText(quote.author)} noted: "${getText(quote.quote)}"`;
            }
        } else if (dominant) {
            const dominantMeaning = { Fire: "passion, creativity, and action dominate your current situation", Water: "emotions, intuition, and relationships are the primary focus", Air: "thoughts, communication, and mental clarity are emphasized", Earth: "practical matters, material concerns, and stability are highlighted" };
            interpretation = dominantMeaning[dominant] || '';
        }
        return interpretation;
    }

    calculateElementalBalance(elements) {
        const total = Object.values(elements).reduce((sum, count) => sum + count, 0);
        if (total === 0) return 100;
        const average = total / 4;
        const variance = Object.values(elements).reduce((sum, count) => sum + Math.pow(count - average, 2), 0) / 4;
        return Math.max(0, 100 - (variance * 10));
    }

    generateElementalInterpretation(dominant, lacking, elements) {
        const dominantMeaning = { Fire: "passion, creativity, and action dominate your current situation", Water: "emotions, intuition, and relationships are the primary focus", Air: "thoughts, communication, and mental clarity are emphasized", Earth: "practical matters, material concerns, and stability are highlighted" };
        const lackingMeaning = { Fire: "you may need more passion and initiative", Water: "emotional connection and intuition may be lacking", Air: "clearer thinking and communication might be needed", Earth: "more grounding and practical focus could be beneficial" };
        if (!dominant || !lacking) return "";
        return `${dominantMeaning[dominant]}. However, ${lackingMeaning[lacking]}.`;
    }

    async analyzeCrossCulturalSymbols(cards) {
        if (!this.isInitialized) return { symbols: [], universalThemes: [], interpretation: this.getAnalysisText('cross_cultural.uninitialized') };
        const symbols = [], universalThemes = new Set();
        try {
            const crossCulturalData = this.dataLoader.getData('cross_cultural_symbols');
            for (const card of cards) {
                if (crossCulturalData.universal_symbols) {
                    Object.keys(crossCulturalData.universal_symbols).forEach(symbol => {
                        const symbolData = crossCulturalData.universal_symbols[symbol];
                        if (symbolData.tarot_cards && symbolData.tarot_cards.includes(card.name)) {
                            symbols.push({ symbol, card: card.name, cultures: symbolData.cultural_variations || [], meaning: symbolData.universal_meaning || '' });
                            if (symbolData.archetypal_themes) symbolData.archetypal_themes.forEach(theme => universalThemes.add(theme));
                        }
                    });
                }
            }
            return { symbols, universalThemes: Array.from(universalThemes), interpretation: this.generateCrossCulturalInterpretation(symbols, Array.from(universalThemes)) };
        } catch (error) {
            console.error('Error in cross-cultural analysis:', error);
            return { symbols: [], universalThemes: [], interpretation: "Unable to perform cross-cultural analysis." };
        }
    }

    generateCrossCulturalInterpretation(symbols, themes) {
        if (symbols.length === 0) return this.getAnalysisText('cross_cultural.no_resonance');
        let interpretation = this.getAnalysisText('cross_cultural.interpretation_base', { symbolCount: symbols.length }) + '\n\n';
        symbols.forEach(sym => { interpretation += `• ${sym.symbol} (${sym.card}): ${sym.meaning}\n`; });
        if (themes.length > 0) interpretation += '\n' + this.getAnalysisText('cross_cultural.themes_present', { themes: themes.join(', ') });
        return interpretation;
    }

    async analyzeDreamSymbolism(cards) {
        if (!this.isInitialized) return { dreamSymbols: [], interpretation: this.getAnalysisText('dream.uninitialized') };
        try {
            const dreamData = this.dataLoader.getData('dream_symbolism');
            const dreamSymbols = [];
            for (const card of cards) {
                if (dreamData.dream_tarot_connections?.[card.name]) {
                    const cardDreamData = dreamData.dream_tarot_connections[card.name];
                    dreamSymbols.push({ card: card.name, dreamMeaning: cardDreamData.dream_interpretation || '', symbolTypes: cardDreamData.symbol_types || [], collectiveUnconscious: cardDreamData.collective_unconscious_themes || [] });
                }
            }
            return { dreamSymbols, interpretation: this.generateDreamInterpretation(dreamSymbols) };
        } catch (error) {
            console.error('Error in dream symbolism analysis:', error);
            return { dreamSymbols: [], interpretation: "Unable to perform dream analysis." };
        }
    }

    generateDreamInterpretation(dreamSymbols) {
        if (dreamSymbols.length === 0) return this.getAnalysisText('dream.no_resonance');
        let interpretation = this.getAnalysisText('dream.interpretation_base') + '\n\n';
        dreamSymbols.forEach(symbol => { interpretation += `• ${symbol.card}: ${symbol.dreamMeaning}\n`; });
        const allThemes = dreamSymbols.flatMap(s => s.collectiveUnconscious);
        const uniqueThemes = [...new Set(allThemes)];
        if (uniqueThemes.length > 0) interpretation += '\n' + this.getAnalysisText('dream.themes_present', { themes: uniqueThemes.join(', ') });
        return interpretation;
    }

    async analyzePlantAnimalCorrespondences(cards) {
        if (!this.isInitialized) return { correspondences: [], interpretation: this.getAnalysisText('nature.uninitialized') };
        try {
            const natureData = this.dataLoader.getData('plant_animal_correspondences');
            const correspondences = [];
            for (const card of cards) {
                if (natureData.tarot_nature_connections?.[card.name]) {
                    correspondences.push({ card: card.name, ...natureData.tarot_nature_connections[card.name] });
                }
            }
            return { correspondences, interpretation: this.generateNatureInterpretation(correspondences) };
        } catch (error) {
            console.error('Error in nature correspondences analysis:', error);
            return { correspondences: [], interpretation: "Unable to perform nature analysis." };
        }
    }

    generateNatureInterpretation(correspondences) {
        if (correspondences.length === 0) return this.getAnalysisText('nature.no_resonance');
        let interpretation = this.getAnalysisText('nature.interpretation_base') + '\n\n';
        correspondences.forEach(corr => {
            interpretation += `• ${corr.card}:\n`;
            if (corr.plants) interpretation += `  Plants: ${corr.plants.join(', ')}\n`;
            if (corr.animals) interpretation += `  Animals: ${corr.animals.join(', ')}\n`;
            if (corr.natural_magic) interpretation += `  Natural Magic: ${corr.natural_magic}\n`;
        });
        return interpretation;
    }

    async analyzeHealingTherapeutic(cards) {
        if (!this.isInitialized) return { healingAspects: [], interpretation: this.getAnalysisText('healing.uninitialized') };
        try {
            const healingData = this.dataLoader.getData('healing_therapeutics');
            const healingAspects = [];
            for (const card of cards) {
                if (healingData.therapeutic_applications?.[card.name]) {
                    healingAspects.push({ card: card.name, ...healingData.therapeutic_applications[card.name] });
                }
            }
            return { healingAspects, interpretation: this.generateHealingInterpretation(healingAspects) };
        } catch (error) {
            console.error('Error in healing analysis:', error);
            return { healingAspects: [], interpretation: "Unable to perform therapeutic analysis." };
        }
    }

    generateHealingInterpretation(healingAspects) {
        if (healingAspects.length === 0) return this.getAnalysisText('healing.no_resonance');
        let interpretation = this.getAnalysisText('healing.interpretation_base') + '\n\n';
        healingAspects.forEach(aspect => {
            interpretation += `• ${aspect.card}:\n`;
            if (aspect.trauma_healing) interpretation += `  Trauma Work: ${aspect.trauma_healing}\n`;
            if (aspect.therapeutic_approach) interpretation += `  Approach: ${aspect.therapeutic_approach}\n`;
            if (aspect.healing_modalities) interpretation += `  Modalities: ${aspect.healing_modalities.join(', ')}\n`;
        });
        return interpretation;
    }

    async analyzeProfessionalReadingMastery(cards) {
        if (!this.isInitialized) return { professionalInsights: [], interpretation: this.getAnalysisText('professional.uninitialized') };
        try {
            const masteryData = this.dataLoader.getData('professional_reading_mastery');
            const insights = [];
            if (masteryData.reading_techniques) insights.push({ type: 'technique', recommendation: this.selectProfessionalTechnique(cards, masteryData.reading_techniques) });
            if (masteryData.client_dynamics && cards.length > 0) insights.push({ type: 'client_dynamics', guidance: this.analyzeClientDynamics(cards, masteryData.client_dynamics) });
            return { professionalInsights: insights, interpretation: this.generateProfessionalInterpretation(insights) };
        } catch (error) {
            console.error('Error in professional analysis:', error);
            return { professionalInsights: [], interpretation: "Unable to perform professional analysis." };
        }
    }

    selectProfessionalTechnique(cards, techniques) {
        const majorArcanaCount = cards.filter(c => c.suit === "Major Arcana").length;
        const reversedCount = cards.filter(c => c.isReversed).length;
        if (majorArcanaCount > cards.length * 0.6) return getText(techniques.spiritual_counseling) || "Focus on spiritual guidance and life path insights.";
        if (reversedCount > cards.length * 0.5) return getText(techniques.shadow_work) || "Emphasize inner work and unconscious pattern exploration.";
        return getText(techniques.practical_guidance) || "Provide clear, actionable advice for practical matters.";
    }

    analyzeClientDynamics(cards, dynamics) {
        const suits = cards.map(c => c.suit);
        const dominantSuit = suits.reduce((a, b, i, arr) => arr.filter(v => v === a).length >= arr.filter(v => v === b).length ? a : b, null);
        const suitDynamics = { "Cups": getText(dynamics.emotional_support) || "Client may need emotional support and validation.", "Wands": getText(dynamics.motivation) || "Client likely seeks inspiration and direction for action.", "Swords": getText(dynamics.clarity) || "Client probably needs mental clarity and decision-making support.", "Pentacles": getText(dynamics.practical_advice) || "Client is looking for practical, material guidance.", "Major Arcana": getText(dynamics.spiritual_guidance) || "Client is seeking deeper spiritual insight." };
        return suitDynamics[dominantSuit] || "Provide balanced, comprehensive guidance.";
    }

    generateProfessionalInterpretation(insights) {
        if (insights.length === 0) return this.getAnalysisText('professional.fallback');
        let interpretation = this.getAnalysisText('professional.interpretation_base') + '\n\n';
        insights.forEach(insight => {
            if (insight.type === 'technique') interpretation += this.getAnalysisText('professional.technique_title', { technique: insight.recommendation }) + '\n\n';
            else if (insight.type === 'client_dynamics') interpretation += this.getAnalysisText('professional.dynamics_title', { guidance: insight.guidance }) + '\n\n';
        });
        return interpretation;
    }

    async analyzeSyntheticReadingContext(cards, spreadType) {
        if (!this.isInitialized) return { context: {}, interpretation: this.getAnalysisText('context.uninitialized') };
        try {
            const context = { spreadType, cardCount: cards.length, complexity: this.assessReadingComplexity(cards), thematicCoherence: this.assessThematicCoherence(cards), narrativeFlow: this.assessNarrativeFlow(cards) };
            return { context, interpretation: this.generateContextInterpretation(context) };
        } catch (error) {
            console.error('Error in context analysis:', error);
            return { context: {}, interpretation: "Unable to perform context analysis." };
        }
    }

    assessReadingComplexity(cards) {
        const majorArcana = cards.filter(c => c.suit === "Major Arcana").length;
        const courtCards = cards.filter(c => ["King", "Queen", "Knight", "Page"].some(court => c.name.includes(court))).length;
        const reversedCards = cards.filter(c => c.isReversed).length;
        const complexityScore = (majorArcana * 2) + courtCards + (reversedCards * 1.5);
        const maxPossibleScore = cards.length * 3;
        const complexityRatio = maxPossibleScore > 0 ? complexityScore / maxPossibleScore : 0;
        if (complexityRatio > 0.7) return "High";
        if (complexityRatio > 0.4) return "Medium";
        return "Low";
    }

    assessThematicCoherence(cards) {
        const suits = cards.map(c => c.suit);
        if (suits.length === 0) return "N/A";
        const suitVariety = new Set(suits).size;
        const dominantSuit = suits.reduce((a, b, i, arr) => arr.filter(v => v === a).length >= arr.filter(v => v === b).length ? a : b);
        const dominantSuitRatio = suits.filter(s => s === dominantSuit).length / suits.length;
        if (dominantSuitRatio > 0.7) return "Highly Focused";
        if (suitVariety >= 3) return "Diverse";
        return "Moderately Focused";
    }

    assessNarrativeFlow(cards) {
        if (cards.length < 3) return "Limited Narrative";
        const hasBeginning = cards.some(c => c.name.includes("Ace") || c.name === "The Fool");
        const hasMiddle = cards.some(c => ["Two", "Three", "Four", "Five", "Six", "Seven"].some(num => c.name.includes(num)));
        const hasEnd = cards.some(c => ["Ten", "The World", "Judgement"].some(end => c.name.includes(end)));
        if (hasBeginning && hasMiddle && hasEnd) return "Complete Story Arc";
        if (hasBeginning || hasEnd) return "Partial Story Arc";
        return "Situational Snapshot";
    }

    generateContextInterpretation(context) {
        let interpretation = this.getAnalysisText('context.interpretation_base') + '\n\n';
        interpretation += this.getAnalysisText('context.complexity_line', { complexity: context.complexity }) + '\n';
        interpretation += this.getAnalysisText('context.coherence_line', { coherence: context.thematicCoherence }) + '\n';
        interpretation += this.getAnalysisText('context.flow_line', { flow: context.narrativeFlow }) + '\n\n';
        if (context.complexity === "High") interpretation += this.getAnalysisText('context.complexity_high') + '\n';
        else if (context.complexity === "Low") interpretation += this.getAnalysisText('context.complexity_low') + '\n';
        return interpretation;
    }

    async analyzeMasterSpreadInterpretations(cards, spreadType) {
        if (!this.isInitialized) return { spreadInsights: {}, interpretation: this.getAnalysisText('spreads.uninitialized') };
        try {
            const spreadData = this.dataLoader.getData('master_spread_interpretations');
            const spreadInsights = {};
            if (spreadData.spread_mastery?.[spreadType]) spreadInsights.technique = spreadData.spread_mastery[spreadType];
            if (spreadData.position_dynamics && cards.length > 1) spreadInsights.positionInteractions = this.analyzePositionInteractions(cards);
            return { spreadInsights, interpretation: this.generateSpreadInterpretation(spreadInsights, spreadType) };
        } catch (error) {
            console.error('Error in spread analysis:', error);
            return { spreadInsights: {}, interpretation: "Unable to perform spread analysis." };
        }
    }

    analyzePositionInteractions(cards) {
        const interactions = [];
        for (let i = 0; i < cards.length - 1; i++) {
            const currentCard = cards[i];
            const nextCard = cards[i + 1];
            const currentElement = this.getCardElement(currentCard);
            const nextElement = this.getCardElement(nextCard);
            if (currentElement && nextElement) {
                const interaction = this.getElementalInteraction(currentElement, nextElement);
                interactions.push({ position1: i, position2: i + 1, card1: currentCard.name, card2: nextCard.name, interaction });
            }
        }
        return interactions;
    }

    getCardElement(card) {
        if (card.element) return card.element;
        const suitElements = { 'Wands': 'Fire', 'Cups': 'Water', 'Swords': 'Air', 'Pentacles': 'Earth' };
        return suitElements[card.suit];
    }

    getElementalInteraction(element1, element2) {
        const interactions = { 'Fire-Water': 'Steam - Transformation through emotional passion', 'Fire-Air': 'Amplification - Ideas fueled by enthusiasm', 'Fire-Earth': 'Manifestation - Dreams brought into reality', 'Water-Air': 'Mist - Intuitive communication and inspiration', 'Water-Earth': 'Growth - Nurturing practical development', 'Air-Earth': 'Erosion - Mental focus wearing down obstacles' };
        const key = `${element1}-${element2}`;
        const reverseKey = `${element2}-${element1}`;
        return interactions[key] || interactions[reverseKey] || 'Neutral interaction';
    }

    generateSpreadInterpretation(insights, spreadType) {
        let interpretation = this.getAnalysisText('spreads.interpretation_base', { spreadType }) + '\n\n';
        if (insights.technique) interpretation += this.getAnalysisText('spreads.mastery_technique', { technique: getText(insights.technique.advanced_technique) || 'Standard interpretation' }) + '\n\n';
        if (insights.positionInteractions && insights.positionInteractions.length > 0) {
            interpretation += this.getAnalysisText('spreads.position_interactions_title') + '\n';
            insights.positionInteractions.forEach(interaction => { interpretation += `• ${interaction.card1} → ${interaction.card2}: ${interaction.interaction}\n`; });
        }
        return interpretation;
    }

    async analyzeMysticalOracularWisdom(cards) {
        if (!this.isInitialized) return { mysticalInsights: [], interpretation: this.getAnalysisText('mystical.uninitialized') };
        try {
            const mysticalData = this.dataLoader.getData('mystical_oracular_wisdom');
            const mysticalInsights = [];
            if (mysticalData.oracular_techniques) mysticalInsights.push({ type: 'technique', value: this.selectOracularTechnique(cards, mysticalData.oracular_techniques) });
            if (mysticalData.transcendent_wisdom) mysticalInsights.push({ type: 'wisdom', value: this.extractTranscendentWisdom(cards, mysticalData.transcendent_wisdom) });
            return { mysticalInsights, interpretation: this.generateMysticalInterpretation(mysticalInsights) };
        } catch (error) {
            console.error('Error in mystical analysis:', error);
            return { mysticalInsights: [], interpretation: "Unable to access mystical wisdom." };
        }
    }

    selectOracularTechnique(cards, techniques) {
        const majorArcanaRatio = cards.filter(c => c.suit === "Major Arcana").length / cards.length;
        if (majorArcanaRatio > 0.7) return techniques.high_mystical || "Focus on soul purpose and spiritual destiny.";
        if (majorArcanaRatio > 0.3) return techniques.balanced_mystical || "Integrate spiritual wisdom with practical guidance.";
        return techniques.grounded_mystical || "Find the sacred within the mundane circumstances.";
    }

    extractTranscendentWisdom(cards, wisdomData) {
        const cardNames = cards.map(c => c.name);
        if (cardNames.some(name => ['The Star', 'The Sun', 'The World'].includes(name))) return wisdomData.illumination || "You are approaching a time of spiritual illumination and clarity.";
        if (cardNames.some(name => ['Death', 'The Tower', 'The Hanged Man'].includes(name))) return wisdomData.transformation || "Great transformation requires the courage to release what no longer serves.";
        return wisdomData.general || "Trust in the divine timing of your soul's journey.";
    }

    generateMysticalInterpretation(insights) {
        if (insights.length === 0) return this.getAnalysisText('mystical.no_resonance');
        let interpretation = this.getAnalysisText('mystical.interpretation_base') + '\n\n';
        insights.forEach(insight => {
            if (insight.type === 'technique') interpretation += this.getAnalysisText('mystical.oracle_guidance', { guidance: getText(insight.value) }) + '\n\n';
            else if (insight.type === 'wisdom') interpretation += this.getAnalysisText('mystical.transcendent_wisdom', { wisdom: getText(insight.value) }) + '\n\n';
        });
        return interpretation;
    }

    async analyzeComprehensiveApplications(cards) {
        if (!this.isInitialized) return { applications: [], interpretation: this.getAnalysisText('applications.uninitialized') };
        try {
            const applicationData = this.dataLoader.getData('comprehensive_applications');
            const applications = [];
            if (applicationData.life_mastery) applications.push({ category: 'Life Mastery', insight: this.extractLifeMasteryInsight(cards, applicationData.life_mastery) });
            if (applicationData.manifestation_techniques) applications.push({ category: 'Manifestation', insight: this.extractManifestationGuidance(cards, applicationData.manifestation_techniques) });
            if (applicationData.integration_practices) applications.push({ category: 'Integration', insight: this.extractIntegrationPractice(cards, applicationData.integration_practices) });
            return { applications, interpretation: this.generateApplicationsInterpretation(applications) };
        } catch (error) {
            console.error('Error in applications analysis:', error);
            return { applications: [], interpretation: "Unable to provide application guidance." };
        }
    }

    extractLifeMasteryInsight(cards, masteryData) {
        const suits = cards.map(c => c.suit);
        const dominantArea = this.getDominantLifeArea(suits);
        const areas = { 'emotional': getText(masteryData.emotional_mastery) || "Focus on emotional intelligence and heart-centered decision making.", 'mental': getText(masteryData.mental_mastery) || "Develop clarity of thought and conscious communication.", 'physical': getText(masteryData.physical_mastery) || "Ground your spiritual insights in practical, material action.", 'spiritual': getText(masteryData.spiritual_mastery) || "Align your actions with your highest spiritual purpose." };
        return areas[dominantArea] || areas['spiritual'];
    }

    getDominantLifeArea(suits) {
        if (suits.length === 0) return 'spiritual';
        const counts = suits.reduce((acc, suit) => { acc[suit] = (acc[suit] || 0) + 1; return acc; }, {});
        const dominant = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
        const areaMapping = { 'Cups': 'emotional', 'Swords': 'mental', 'Pentacles': 'physical', 'Wands': 'spiritual', 'Major Arcana': 'spiritual' };
        return areaMapping[dominant] || 'spiritual';
    }

    extractManifestationGuidance(cards, manifestationData) {
        const aces = cards.filter(c => c.name.includes('Ace')).length;
        const tens = cards.filter(c => c.name.includes('Ten')).length;
        if (aces > 0 && tens > 0) return getText(manifestationData.complete_cycle) || "You have both the seed and the fruition - trust the manifestation process.";
        if (aces > 0) return getText(manifestationData.new_beginnings) || "Focus your intention clearly - you are planting powerful seeds.";
        if (tens > 0) return getText(manifestationData.completion) || "Harvest time approaches - prepare to receive the fruits of your efforts.";
        return getText(manifestationData.process) || "Stay present with the unfolding process of manifestation.";
    }

    extractIntegrationPractice(cards, integrationData) {
        const reversed = cards.filter(c => c.isReversed).length;
        const upright = cards.length - reversed;
        if (reversed > upright) return getText(integrationData.inner_work) || "Focus on inner integration and shadow work practices.";
        if (upright > reversed * 2) return getText(integrationData.outer_expression) || "Express your inner wisdom through concrete action in the world.";
        return getText(integrationData.balanced_integration) || "Balance inner reflection with outer expression.";
    }

    generateApplicationsInterpretation(applications) {
        if (applications.length === 0) return this.getAnalysisText('applications.fallback');
        let interpretation = this.getAnalysisText('applications.interpretation_base') + '\n\n';
        applications.forEach(app => { interpretation += this.getAnalysisText('applications.insight_line', { category: app.category, insight: app.insight }) + '\n\n'; });
        return interpretation;
    }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AnalysisEngine;
}