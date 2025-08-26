// Main Tarot Application Controller
// Orchestrates all modules and handles the main application logic

class TarotAppController {
    constructor() {
        this.cardRenderer = new CardRenderer();
        this.analysisEngine = new AnalysisEngine();
        this.currentDeck = [];
        this.drawnCards = [];
        this.currentSpread = null;
        this.readingInProgress = false;
        this.savedReadings = JSON.parse(localStorage.getItem('tarotReadings')) || [];
        this.currentAnalysis = null;
        this.readingMode = 'draw'; // 'draw' or 'manual'
        this.cardSelectionInProgress = false;
        this.uiText = {};
        this.positionalContexts = {};
        this.psychologicalAspects = {};
        this.spiritualMessages = {};
        
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Wait for data to be loaded before initializing UI
        window.addEventListener('tarotDataLoaded', () => {
            this.uiText = window.tarotDataLoader.getData('ui_text');
            this.positionalContexts = window.tarotDataLoader.getData('positional_contexts');
            this.psychologicalAspects = window.tarotDataLoader.getData('psychological_aspects');
            this.spiritualMessages = window.tarotDataLoader.getData('spiritual_messages');
            this.loadSavedReadings();
            this.initializeUI();
        });
        // Spread selection
        document.querySelectorAll('.spread-option').forEach(option => {
            option.addEventListener('click', (e) => this.selectSpread(e.target.closest('.spread-option')));
        });

        // Main action buttons
        document.getElementById('startReadingBtn').addEventListener('click', () => this.startReading());
        document.getElementById('resetReadingBtn').addEventListener('click', () => this.resetReading());
        document.getElementById('saveReadingBtn').addEventListener('click', () => this.saveReading());
        // Analyze reading now runs automatically - no button needed
        
        // Deck interaction
        document.getElementById('deckContainer').addEventListener('click', () => this.drawCard());
        
        // Modal events
        document.getElementById('closeModal').addEventListener('click', () => this.closeModal());
        document.getElementById('cardModal').addEventListener('click', (e) => {
            if (e.target.id === 'cardModal') this.closeModal();
        });

        // Tab buttons removed - analysis now uses section headers

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyboardShortcuts(e));
    }

    initializeUI() {
        this.updateInstructionText(this.getUIText('instructions.select_spread'));
        this.hideAllButtons();
        this.clearReadingArea();
    }

    selectSpread(option) {
        console.log("Spread selected:", option.dataset.spread);
        // Remove previous selection
        document.querySelectorAll('.spread-option').forEach(opt => opt.classList.remove('selected'));
        
        // Add selection to clicked option
        option.classList.add('selected');
        
        // Get spread configuration
        const spreadType = option.dataset.spread;
        this.currentSpread = Object.assign({}, spreads[spreadType], { type: spreadType });
        
        // Update UI
        this.showButton('startReadingBtn');
        const spreadNameHTML = renderTextWithCitation(this.currentSpread.name, getText(this.currentSpread.name));
        const instructionText = this.getUIText('instructions.spread_selected', { spreadName: spreadNameHTML });
        this.updateInstructionText(instructionText, true);
    }

    startReading() {
        if (!this.currentSpread) return;

        // Initialize reading state
        this.currentDeck = this.shuffleDeck([...tarotCards]);
        this.drawnCards = [];
        this.readingInProgress = true;
        this.currentAnalysis = null;

        // Update UI
        this.hideElement('spreadSelection');
        this.hideButton('startReadingBtn');
        this.showButton('resetReadingBtn');
        this.clearReadingArea();
        this.hideElement('readingSummary');
        this.hideElement('analysisPanel');
        
        // Set up the reading grid first (without cards)
        const readingArea = document.getElementById('readingArea');
        const spreadContainer = document.createElement('div');
        // Map spread types to CSS classes
        const spreadClassMap = {
            'single': 'single',
            'three-card': 'three-card',
            'relationship': 'relationship',
            'celtic-cross': 'celtic-cross'
        };
        spreadContainer.className = `reading-grid reading-grid-${spreadClassMap[this.currentSpread.type] || this.currentSpread.type}`;
        readingArea.appendChild(spreadContainer);
        
        // Create placeholder positions
        for (let i = 0; i < this.currentSpread.cardCount; i++) {
            const placeholder = document.createElement('div');
            placeholder.className = 'card-placeholder-slot';
            placeholder.dataset.position = i;
            placeholder.innerHTML = `
                <div class="card-position-label">${this.currentSpread.positions[i].name}</div>
                <div class="card-placeholder-inner">
                    <span class="placeholder-number">${i + 1}</span>
                </div>
            `;
            spreadContainer.appendChild(placeholder);
        }
        
        // Show mode selection
        this.showModeSelection();
    }

    drawCard() {
        if (!this.readingInProgress || this.drawnCards.length >= this.currentSpread.cardCount) return;

        // Draw random card from deck
        const cardIndex = Math.floor(Math.random() * this.currentDeck.length);
        const card = this.currentDeck.splice(cardIndex, 1)[0];
        
        // Determine if reversed (30% chance for more balanced readings)
        const isReversed = Math.random() < 0.3;
        
        // Create drawn card with position info
        const drawnCard = {
            ...card,
            isReversed,
            position: this.currentSpread.positions[this.drawnCards.length],
            positionIndex: this.drawnCards.length,
            timestamp: new Date().toISOString()
        };

        // Add to drawn cards
        this.drawnCards.push(drawnCard);
        
        // Display the card
        this.displayCard(drawnCard);
        
        // Update instruction and check if reading is complete
        this.updateReadingProgress();
        
        // Disable deck if all cards drawn
        if (this.drawnCards.length >= this.currentSpread.cardCount) {
            this.completeReading();
        }
    }

    displayCard(card) {
        const readingArea = document.getElementById('readingArea');
        const spreadContainer = readingArea.querySelector('.reading-grid');
        
        // Find the placeholder for this position
        const placeholder = spreadContainer.querySelector(`.card-placeholder-slot[data-position="${card.positionIndex}"]`);
        
        if (placeholder) {
            // Create card element
            const cardElement = this.cardRenderer.createCardElement(card, card.position);
            
            // Replace placeholder with actual card
            placeholder.replaceWith(cardElement);
            
            // Animate card appearance
            this.cardRenderer.animateCardAppearance(cardElement);
        }
    }

    updateReadingProgress() {
        const remaining = this.currentSpread.cardCount - this.drawnCards.length;
        if (remaining > 0) {
            this.updateInstructionText(
                this.getUIText('instructions.draw_cards', { remaining, plural: remaining > 1 ? 's' : '' })
            );
        }
    }

    completeReading() {
        this.readingInProgress = false;
        this.disableDeckInteraction();
        this.hideElement('deckContainer');
        // Remove ready-to-draw class when hiding deck
        const deckCard = document.querySelector('.deck-card');
        if (deckCard) {
            deckCard.classList.remove('ready-to-draw');
        }
        
        // Show action buttons
        this.showButton('saveReadingBtn');
        // Remove manual analyze button - analysis will run automatically
        
        // Generate and display reading summary
        this.generateReadingSummary();
        
        // Automatically run analysis when reading is complete
        setTimeout(() => this.analyzeReading(), 500); // Small delay for smooth UX
        
        this.updateInstructionText(this.getUIText('instructions.reading_complete'));
    }

    generateReadingSummary() {
        const summaryElement = document.getElementById('readingSummary');
        const contentElement = document.getElementById('summaryContent');
        
        // Generate detailed elemental and numerical analysis
        const elementalStats = this.getElementalStats();
        const numericalStats = this.getNumericalStats();
        const energeticStats = this.getEnergeticStats();
        
        let summaryHTML = `
            <div class="reading-header">
                <h4 class="text-xl font-semibold mb-2 text-teal-400">${renderTextWithCitation(this.currentSpread.name, getText(this.currentSpread.name))}</h4>
                <p class="text-gray-300 mb-4">${renderTextWithCitation(this.currentSpread.interpretation, getText(this.currentSpread.interpretation))}</p>
                
                <!-- Quick Stats -->
                <div class="reading-stats grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div class="stat-card">
                        <span class="stat-value">${this.drawnCards.filter(c => c.suit === 'Major Arcana').length}</span>
                        <span class="stat-label">${this.getUIText('stats_labels.major_arcana')}</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-value">${this.drawnCards.filter(c => c.isReversed).length}</span>
                        <span class="stat-label">${this.getUIText('stats_labels.reversed')}</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-value">${elementalStats.dominant}</span>
                        <span class="stat-label">${this.getUIText('stats_labels.dominant_element')}</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-value">${energeticStats.overall}</span>
                        <span class="stat-label">${this.getUIText('stats_labels.energy_level')}</span>
                    </div>
                </div>
            </div>
            
            <div class="cards-overview">
                <h5 class="font-semibold text-purple-300 mb-4">${this.getUIText('stats_labels.detailed_card_analysis')}</h5>
                <div class="grid grid-cols-1 gap-4">
        `;
        
        this.drawnCards.forEach((card, index) => {
            const cardAnalysis = this.getDetailedCardAnalysis(card);
            summaryHTML += `
                <div class="detailed-card-summary">
                    <div class="card-header">
                        <div class="card-position-indicator">
                            <span class="position-number">${index + 1}</span>
                        </div>
                        <div class="card-title-section">
                            <h5 class="font-semibold text-blue-300">${renderTextWithCitation(card.position.name, getText(card.position.name))}</h5>
                            <p class="text-sm text-gray-400">${renderTextWithCitation(card.position.description, getText(card.position.description))}</p>
                        </div>
                        <div class="card-energy-indicator ${card.element?.toLowerCase() || 'neutral'}">
                            ${this.getElementSymbol(card.element)}
                        </div>
                    </div>
                    
                    <div class="card-main-info">
                        <div class="card-name-section">
                            <p class="font-medium text-white text-lg">${card.name}${card.isReversed ? this.getUIText('card_rendering.reversed_suffix') : ''}</p>
                            <div class="card-metadata">
                                <span class="metadata-item">${card.suit}</span>
                                ${card.number ? `<span class="metadata-item">Number ${card.number}</span>` : ''}
                                ${card.element ? `<span class="metadata-item">${card.element}</span>` : ''}
                                ${card.astrology ? `<span class="metadata-item">${renderTextWithCitation(card.astrology, getText(card.astrology))}</span>` : ''}
                            </div>
                        </div>
                        
                        <div class="card-analysis-grid">
                            <div class="analysis-section">
                                <h6 class="analysis-title">${this.getUIText('stats_labels.primary_meaning')}</h6>
                                <p class="text-sm text-gray-300">${cardAnalysis.primaryMeaning}</p>
                            </div>
                            
                            <div class="analysis-section">
                                <h6 class="analysis-title">${this.getUIText('stats_labels.position_specific_interpretation')}</h6>
                                <p class="text-sm text-gray-300">${cardAnalysis.positionSpecific}</p>
                            </div>
                            
                            <div class="analysis-section">
                                <h6 class="analysis-title">${this.getUIText('stats_labels.keywords')}</h6>
                                <div class="keywords-list">
                                    ${cardAnalysis.keywords.map(kw => `<span class="keyword-tag">${kw}</span>`).join('')}
                                </div>
                            </div>
                            
                            <div class="analysis-section">
                                <h6 class="analysis-title">${this.getUIText('stats_labels.energetic_influence')}</h6>
                                <p class="text-sm text-gray-300">${cardAnalysis.energeticInfluence}</p>
                            </div>
                            
                            <div class="analysis-section">
                                <h6 class="analysis-title">${this.getUIText('stats_labels.psychological_aspect')}</h6>
                                <p class="text-sm text-gray-300">${cardAnalysis.psychological}</p>
                            </div>
                            
                            <div class="analysis-section">
                                <h6 class="analysis-title">${this.getUIText('stats_labels.spiritual_message')}</h6>
                                <p class="text-sm text-gray-300">${cardAnalysis.spiritual}</p>
                            </div>
                            
                            ${card.isReversed ? `
                                <div class="analysis-section reversed-analysis">
                                    <h6 class="analysis-title">${this.getUIText('stats_labels.reversed_significance')}</h6>
                                    <p class="text-sm text-gray-300">${cardAnalysis.reversedSignificance}</p>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        });
        
        summaryHTML += `
                </div>
            </div>
            
            <div class="comprehensive-insights mt-8">
                <h5 class="font-semibold text-purple-300 mb-4">${this.getUIText('insights_titles.comprehensive')}</h5>
                
                <div class="insights-grid">
                    <div class="insight-section">
                        <h6 class="insight-title">${this.getUIText('insights_titles.elemental_analysis')}</h6>
                        <p class="text-sm text-gray-300">${elementalStats.analysis}</p>
                        <div class="element-breakdown">
                            ${Object.entries(elementalStats.breakdown).map(([element, count]) => 
                                `<div class="element-stat">
                                    <span class="element-icon ${element.toLowerCase()}">${this.getElementSymbol(element)}</span>
                                    <span class="element-name">${element}</span>
                                    <span class="element-count">${count}</span>
                                </div>`
                            ).join('')}
                        </div>
                    </div>
                    
                    <div class="insight-section">
                        <h6 class="insight-title">${this.getUIText('insights_titles.numerical_significance')}</h6>
                        <p class="text-sm text-gray-300">${numericalStats.analysis}</p>
                        <div class="numerical-patterns">
                            ${numericalStats.patterns.map(pattern => 
                                `<div class="number-pattern">${pattern}</div>`
                            ).join('')}
                        </div>
                    </div>
                    
                    <div class="insight-section">
                        <h6 class="insight-title">${this.getUIText('insights_titles.energetic_flow')}</h6>
                        <p class="text-sm text-gray-300">${energeticStats.analysis}</p>
                        <div class="energy-flow-map">
                            ${this.drawnCards.map((card, i) => 
                                `<div class="flow-node ${this.getEnergyDirection(card, i)}">
                                    <span class="node-number">${i + 1}</span>
                                    <span class="node-energy">${this.getCardEnergyType(card)}</span>
                                </div>`
                            ).join('')}
                        </div>
                    </div>
                    
                    <div class="insight-section full-width">
                        <h6 class="insight-title">${this.getUIText('insights_titles.overall_synthesis')}</h6>
                        <p class="text-gray-300">${this.generateComprehensiveInsight()}</p>
                    </div>
                    
                    <div class="insight-section full-width">
                        <h6 class="insight-title">${this.getUIText('insights_titles.practical_guidance')}</h6>
                        <div class="guidance-list">
                            ${this.generatePracticalGuidance().map(guidance => 
                                `<div class="guidance-item">
                                    <span class="guidance-icon">💡</span>
                                    <span class="guidance-text">${guidance}</span>
                                </div>`
                            ).join('')}
                        </div>
                    </div>
                    
                    <div class="insight-section full-width">
                        <h6 class="insight-title">${this.getUIText('insights_titles.reflection_questions')}</h6>
                        <div class="reflection-questions">
                            ${this.generateReflectionQuestions().map(question => 
                                `<div class="reflection-question">
                                    <span class="question-icon">❓</span>
                                    <span class="question-text">${question}</span>
                                </div>`
                            ).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        contentElement.innerHTML = summaryHTML;
        summaryElement.classList.remove('hidden');
    }

    getCardSummary(card) {
        const meaning = card.isReversed ? card.meanings.reversed.general : card.meanings.upright.general;
        return meaning.substring(0, 120) + this.getUIText('general.truncation_suffix');
    }

    getElementalStats() {
        const breakdown = {};
        let dominant = this.getUIText('stats_labels.balanced');
        let maxCount = 0;
        
        this.drawnCards.forEach(card => {
            if (card.element) {
                breakdown[card.element] = (breakdown[card.element] || 0) + 1;
                if (breakdown[card.element] > maxCount) {
                    maxCount = breakdown[card.element];
                    dominant = card.element;
                }
            }
        });
        
        const analysis = this.generateElementalAnalysis(breakdown, dominant);
        
        return { breakdown, dominant, analysis };
    }
    
    getNumericalStats() {
        const numbers = this.drawnCards
            .filter(card => card.number !== null)
            .map(card => card.number);
        
        const patterns = [];
        const sum = numbers.reduce((a, b) => a + b, 0);
        const average = numbers.length > 0 ? (sum / numbers.length).toFixed(1) : 0;
        
        // Find sequences
        const sortedNumbers = [...numbers].sort((a, b) => a - b);
        let sequences = [];
        let currentSeq = [sortedNumbers[0]];
        
        for (let i = 1; i < sortedNumbers.length; i++) {
            if (sortedNumbers[i] === sortedNumbers[i-1] + 1) {
                currentSeq.push(sortedNumbers[i]);
            } else {
                if (currentSeq.length > 1) sequences.push([...currentSeq]);
                currentSeq = [sortedNumbers[i]];
            }
        }
        if (currentSeq.length > 1) sequences.push(currentSeq);
        
        if (sequences.length > 0) {
            patterns.push(this.getUIText('numerical_stats.sequential_pattern', { sequences: sequences.map(seq => seq.join('-')).join(', ') }));
        }
        
        patterns.push(this.getUIText('numerical_stats.average_value', { average }));
        patterns.push(this.getUIText('numerical_stats.total_sum', { sum }));
        
        // Check for master numbers
        const masterNumbers = numbers.filter(n => [11, 22, 33].includes(n));
        if (masterNumbers.length > 0) {
            patterns.push(this.getUIText('numerical_stats.master_numbers_present', { numbers: masterNumbers.join(', ') }));
        }
        
        const analysis = this.getUIText('numerical_stats.analysis', {
            frequency_meaning: this.getNumericalFrequencyMeaning(average),
            sum,
            vibration_meaning: this.getNumericalVibrationMeaning(sum)
        });
        
        return { patterns, analysis, average, sum };
    }
    
    getEnergeticStats() {
        const energyTypes = {
            active: 0,
            passive: 0,
            transformative: 0,
            stable: 0
        };
        
        this.drawnCards.forEach(card => {
            const energyType = this.getCardEnergyType(card);
            energyTypes[energyType]++;
        });
        
        const dominant = Object.entries(energyTypes)
            .sort(([,a], [,b]) => b - a)[0][0];
        
        const overall = this.getOverallEnergyLevel(energyTypes);
        const analysis = this.generateEnergeticAnalysis(energyTypes, dominant);
        
        return { energyTypes, dominant, overall, analysis };
    }
    
    getDetailedCardAnalysis(card) {
        const primaryMeaning = renderTextWithCitation(
            card.isReversed ? card.meanings.reversed.general : card.meanings.upright.general,
            getText(card.isReversed ? card.meanings.reversed.general : card.meanings.upright.general)
        );
        
        const keywords = (card.isReversed ?
            card.keywords.reversed : 
            card.keywords.upright).map(kw => renderTextWithCitation(kw, getText(kw)));
        
        const positionSpecific = this.getPositionSpecificMeaning(card, card.position);

        const energeticInfluenceData = this.getEnergeticInfluenceData(card);
        const energeticInfluence = energeticInfluenceData.map(d => {
            let text = getText(d.data);
            if (d.placeholder && d.value) {
                text = text.replace(d.placeholder, d.value);
            }
            return renderTextWithCitation(d.data, text);
        }).join('');

        const psychologicalData = this.getPsychologicalAspectData(card);
        const psychological = renderTextWithCitation(psychologicalData, getText(psychologicalData));

        const spiritualData = this.getSpiritualMessageData(card);
        const spiritual = spiritualData.map(d => renderTextWithCitation(d, getText(d))).join('');

        const reversedSignificance = card.isReversed ? 
            this.getReversedSignificance(card) : '';
        
        return {
            primaryMeaning,
            keywords,
            positionSpecific,
            energeticInfluence,
            psychological,
            spiritual,
            reversedSignificance
        };
    }
    
    getElementSymbol(element) {
        const symbols = {
            'Fire': '🔥',
            'Water': '💧',
            'Air': '💨',
            'Earth': '🌍',
            'Spirit': '✨'
        };
        return symbols[element] || '❔';
    }
    
    getCardEnergyType(card) {
        if (card.suit === 'Major Arcana') {
            const transformativeCards = ['Death', 'The Tower', 'Judgement', 'The World'];
            if (transformativeCards.includes(card.name)) return 'transformative';
            return 'active';
        }
        
        if (card.suit === 'Wands') return 'active';
        if (card.suit === 'Cups') return 'passive';
        if (card.suit === 'Swords') return 'transformative';
        if (card.suit === 'Pentacles') return 'stable';
        
        return 'active';
    }
    
    getEnergyDirection(card, index) {
        const energyType = this.getCardEnergyType(card);
        const position = index % 4; // Create cyclical pattern
        
        if (energyType === 'active') return 'ascending';
        if (energyType === 'transformative') return 'dynamic';
        if (energyType === 'passive') return 'descending';
        return 'stable';
    }
    
    generateElementalAnalysis(breakdown, dominant) {
        const elementalMeanings = {
            'Fire': 'passionate energy, creativity, and action-oriented approach',
            'Water': 'emotional depth, intuition, and spiritual flow',
            'Air': 'mental clarity, communication, and intellectual pursuits',
            'Earth': 'practical grounding, material stability, and tangible results'
        };
        
        let analysis = `This reading is strongly influenced by ${dominant} energy, bringing ${elementalMeanings[dominant] || 'balanced forces'}. `;
        
        const missingElements = ['Fire', 'Water', 'Air', 'Earth'].filter(el => !breakdown[el]);
        if (missingElements.length > 0) {
            analysis += `The absence of ${missingElements.join(' and ')} suggests areas that may need attention or conscious integration.`;
        }
        
        return analysis;
    }
    
    getNumericalFrequencyMeaning(average) {
        if (average < 5) return 'foundational energy and new beginnings';
        if (average < 10) return 'manifestation energy and practical development';
        if (average < 15) return 'completion energy and mastery';
        return 'transformational energy and spiritual evolution';
    }
    
    getNumericalVibrationMeaning(sum) {
        const reduced = this.reduceNumber(sum);
        const vibrations = {
            1: 'leadership and new beginnings',
            2: 'partnership and balance', 
            3: 'creativity and expression',
            4: 'stability and foundation',
            5: 'change and freedom',
            6: 'harmony and responsibility',
            7: 'spiritual seeking and introspection',
            8: 'material mastery and achievement',
            9: 'completion and wisdom'
        };
        return vibrations[reduced] || 'unique spiritual frequency';
    }
    
    reduceNumber(num) {
        while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
            num = num.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
        }
        return num;
    }
    
    getOverallEnergyLevel(energyTypes) {
        const total = Object.values(energyTypes).reduce((a, b) => a + b, 0);
        const activeScore = energyTypes.active * 3 + energyTypes.transformative * 2 + energyTypes.passive * 1 + energyTypes.stable * 2;
        const percentage = (activeScore / (total * 3)) * 100;
        
        if (percentage > 75) return 'High';
        if (percentage > 50) return 'Moderate';
        if (percentage > 25) return 'Gentle';
        return 'Subtle';
    }
    
    generateEnergeticAnalysis(energyTypes, dominant) {
        const energyDescriptions = {
            active: 'dynamic forward movement and initiating action',
            passive: 'receptive flow and emotional processing',
            transformative: 'catalytic change and breakthrough energy',
            stable: 'grounding force and sustained growth'
        };
        
        return `The energetic signature is primarily ${dominant}, emphasizing ${energyDescriptions[dominant]}. ` +
               `This creates a reading focused on ${this.getEnergeticFocus(dominant)}.`;
    }
    
    getEnergeticFocus(dominantEnergy) {
        const focuses = {
            active: 'taking initiative and moving forward with confidence',
            passive: 'deep emotional healing and intuitive guidance',
            transformative: 'breakthrough moments and significant life changes',
            stable: 'building lasting foundations and practical manifestation'
        };
        return focuses[dominantEnergy] || 'balanced growth and development';
    }
    
    getPositionSpecificMeaning(card, position) {
        const meaningDataField = card.isReversed ? card.meanings.reversed.general : card.meanings.upright.general;
        const meaningText = getText(meaningDataField);

        const positionNameText = renderTextWithCitation(position.name, getText(position.name));
        const truncatedMeaning = meaningText.substring(0, 150) + this.getUIText('general.truncation_suffix');

        // We don't add a citation to the truncated meaning here to avoid breaking HTML.
        // The full, cited meaning is available in the card detail modal.
        return this.getUIText('templates.position_specific_meaning', {
            positionName: positionNameText,
            cardName: card.name,
            context: this.getPositionContext(position.name, card),
            meaning: truncatedMeaning
        });
    }
    
    getPositionContext(positionName, card) {
        const contextData = this.positionalContexts[positionName] || this.positionalContexts['default'];
        return getText(contextData);
    }
    
    getEnergeticInfluenceData(card) {
        const data = [];
        const element = card.element;
        const suit = card.suit;
        const isReversed = card.isReversed;
        
        data.push({
            data: this.uiText.templates.energetic_influence_base,
            placeholder: '{element}',
            value: element || getText(this.uiText.stats_labels.balanced)
        });
        
        if (suit === 'Major Arcana') {
            data.push({ data: this.uiText.templates.energetic_influence_major });
        } else {
            const suitKey = `energetic_influence_${suit.toLowerCase()}`;
            data.push({ data: this.uiText.templates[suitKey] || this.uiText.templates.energetic_influence_fallback });
        }
        
        if (isReversed) {
            data.push({ data: this.uiText.templates.energetic_influence_reversed });
        }
        
        return data;
    }

    getPsychologicalAspectData(card) {
        if (card.suit === 'Major Arcana') {
            return this.psychologicalAspects.major_arcana[card.name] || this.psychologicalAspects.defaults.major_arcana;
        }
        
        return this.psychologicalAspects.suits[card.suit] || this.psychologicalAspects.defaults.suit;
    }

    getSpiritualMessageData(card) {
        const messages = [];
        messages.push(this.spiritualMessages.suits[card.suit] || this.spiritualMessages.default);
        
        if (card.isReversed) {
            messages.push(this.spiritualMessages.reversed_suffix);
        }
        
        return messages;
    }
    
    getReversedSignificance(card) {
        return this.getUIText('templates.reversed_significance', { cardName: card.name });
    }
    
    generateComprehensiveInsight() {
        const majorArcanaCount = this.drawnCards.filter(c => c.suit === 'Major Arcana').length;
        const reversedCount = this.drawnCards.filter(c => c.isReversed).length;
        const elements = {};
        
        this.drawnCards.forEach(card => {
            if (card.element) {
                elements[card.element] = (elements[card.element] || 0) + 1;
            }
        });
        
        let insight = this.getUIText('comprehensive_insight.intro');
        
        if (majorArcanaCount > this.drawnCards.length / 2) {
            insight += this.getUIText('comprehensive_insight.major_arcana_dominant');
        } else if (majorArcanaCount === 0) {
            insight += this.getUIText('comprehensive_insight.major_arcana_none');
        } else {
            insight += this.getUIText('comprehensive_insight.major_arcana_balanced');
        }
        
        if (reversedCount > this.drawnCards.length / 2) {
            insight += this.getUIText('comprehensive_insight.reversed_dominant');
        }
        
        const dominantElement = Object.entries(elements).sort(([,a], [,b]) => b - a)[0];
        if (dominantElement) {
            const elementKey = `comprehensive_insight.elemental_${dominantElement[0].toLowerCase()}`;
            insight += this.getUIText(elementKey) || '';
        }
        
        insight += this.getUIText('comprehensive_insight.conclusion');
        
        return insight;
    }
    
    generatePracticalGuidance() {
        const guidance = [];
        const elements = {};
        const suits = {};
        
        this.drawnCards.forEach(card => {
            if (card.element) elements[card.element] = (elements[card.element] || 0) + 1;
            suits[card.suit] = (suits[card.suit] || 0) + 1;
        });
        
        // Element-based guidance
        Object.entries(elements).forEach(([element, count]) => {
            if (count >= 2) {
                const elementKey = `practical_guidance.${element.toLowerCase()}`;
                guidance.push(this.getUIText(elementKey));
            }
        });
        
        // Reversed card guidance
        const reversedCount = this.drawnCards.filter(c => c.isReversed).length;
        if (reversedCount > 0) {
            guidance.push(this.getUIText('practical_guidance.reversed'));
        }
        
        // Major Arcana guidance
        const majorCount = this.drawnCards.filter(c => c.suit === 'Major Arcana').length;
        if (majorCount > 0) {
            guidance.push(this.getUIText('practical_guidance.major_arcana'));
        }
        
        // Default guidance
        if (guidance.length === 0) {
            guidance.push(this.getUIText('practical_guidance.default1'));
            guidance.push(this.getUIText('practical_guidance.default2'));
        }
        
        return guidance;
    }
    
    generateReflectionQuestions() {
        const questions = [];
        const themes = new Set();
        
        this.drawnCards.forEach(card => {
            themes.add(card.suit);
            if (card.isReversed) themes.add('shadow');
        });
        
        if (themes.has('Major Arcana')) {
            questions.push(this.getUIText('reflection_questions.major_arcana1'));
            questions.push(this.getUIText('reflection_questions.major_arcana2'));
        }
        
        if (themes.has('Wands')) {
            questions.push(this.getUIText('reflection_questions.wands1'));
            questions.push(this.getUIText('reflection_questions.wands2'));
        }
        
        if (themes.has('Cups')) {
            questions.push(this.getUIText('reflection_questions.cups1'));
            questions.push(this.getUIText('reflection_questions.cups2'));
        }
        
        if (themes.has('Swords')) {
            questions.push(this.getUIText('reflection_questions.swords1'));
            questions.push(this.getUIText('reflection_questions.swords2'));
        }
        
        if (themes.has('Pentacles')) {
            questions.push(this.getUIText('reflection_questions.pentacles1'));
            questions.push(this.getUIText('reflection_questions.pentacles2'));
        }
        
        if (themes.has('shadow')) {
            questions.push(this.getUIText('reflection_questions.shadow1'));
            questions.push(this.getUIText('reflection_questions.shadow2'));
        }
        
        // Ensure we have at least 3 questions
        if (questions.length < 3) {
            questions.push(this.getUIText('reflection_questions.default1'));
            questions.push(this.getUIText('reflection_questions.default2'));
            questions.push(this.getUIText('reflection_questions.default3'));
        }
        
        return questions.slice(0, 5); // Return max 5 questions
    }

    generateOverallInsight() {
        const majorArcanaCount = this.drawnCards.filter(c => c.suit === "Major Arcana").length;
        const reversedCount = this.drawnCards.filter(c => c.isReversed).length;
        const elements = this.getElementalDistribution();
        
        let insight = "";
        
        if (majorArcanaCount > this.drawnCards.length / 2) {
            insight += "This reading carries significant spiritual weight with major life lessons at play. ";
        }
        
        if (reversedCount > this.drawnCards.length / 2) {
            insight += "The presence of reversed cards suggests internal processing and the need for reflection. ";
        }
        
        const dominantElement = Object.keys(elements).reduce((a, b) => elements[a] > elements[b] ? a : b);
        if (elements[dominantElement] > 1) {
            insight += `The ${dominantElement} element dominates, emphasizing ${this.getElementalFocus(dominantElement)}. `;
        }
        
        return insight || "This reading provides a balanced perspective on your current situation with varied influences at play.";
    }

    getElementalDistribution() {
        const elements = { Fire: 0, Water: 0, Air: 0, Earth: 0 };
        this.drawnCards.forEach(card => {
            if (card.element && elements.hasOwnProperty(card.element)) {
                elements[card.element]++;
            }
        });
        return elements;
    }

    getElementalFocus(element) {
        const focuses = {
            Fire: "passion, creativity, and taking action",
            Water: "emotions, intuition, and spiritual connection",
            Air: "communication, thoughts, and mental clarity",
            Earth: "practical matters, material stability, and grounding"
        };
        return focuses[element] || "balanced energy";
    }

    async analyzeReading() {
        if (!this.drawnCards.length) return;

        try {
            // Generate comprehensive analysis
            this.currentAnalysis = await this.analysisEngine.analyzeReading(this.drawnCards, this.currentSpread.type);
            
            // Display analysis
            this.displayAnalysis();
            
            // Show analysis panel (no auto-scroll for cleaner UX)
            this.showElement('analysisPanel');
        } catch (error) {
            console.error('Error analyzing reading:', error);
            alert('Error analyzing reading. Please try again.');
        }
    }

    displayAnalysis() {
        if (!this.currentAnalysis) return;

        // Define sections with their update methods and data validation
        const sections = [
            { id: 'overview', updateMethod: () => this.updateOverviewTab(), hasData: () => true }, // Always show overview
            { id: 'psychology', updateMethod: () => this.updatePsychologyTab(), hasData: () => this.hasAnalysisData('psychology') },
            { id: 'spiritual', updateMethod: () => this.updateSpiritualTab(), hasData: () => this.hasAnalysisData('spiritual') },
            { id: 'kabbalah', updateMethod: () => this.updateKabbalahTab(), hasData: () => this.hasAnalysisData('kabbalah') },
            { id: 'chakras', updateMethod: () => this.updateChakrasTab(), hasData: () => this.hasAnalysisData('chakras') },
            { id: 'archetypes', updateMethod: () => this.updateArchetypesTab(), hasData: () => this.hasAnalysisData('archetypes') },
            { id: 'timing', updateMethod: () => this.updateTimingTab(), hasData: () => this.hasAnalysisData('timing') },
            { id: 'karma', updateMethod: () => this.updateKarmaTab(), hasData: () => this.hasAnalysisData('karma') },
            { id: 'numerology', updateMethod: () => this.updateNumerologyTab(), hasData: () => this.hasAnalysisData('numerology') },
            { id: 'elements', updateMethod: () => this.updateElementsTab(), hasData: () => this.hasAnalysisData('elemental') },
            { id: 'astrology', updateMethod: () => this.updateAstrologyTab(), hasData: () => this.hasAnalysisData('astrologicalTransits') },
            { id: 'geometry', updateMethod: () => this.updateGeometryTab(), hasData: () => this.hasAnalysisData('sacredGeometry') },
            { id: 'symbolism', updateMethod: () => this.updateSymbolismTab(), hasData: () => this.hasAnalysisData('symbolism') },
            { id: 'interactions', updateMethod: () => this.updateInteractionsTab(), hasData: () => this.hasAnalysisData('cardInteractions') },
            { id: 'shadow', updateMethod: () => this.updateShadowTab(), hasData: () => this.hasAnalysisData('shadowWork') },
            { id: 'alchemy', updateMethod: () => this.updateAlchemyTab(), hasData: () => this.hasAnalysisData('alchemical') }
        ];

        // Update sections and hide those without meaningful data
        sections.forEach(section => {
            const sectionContent = document.getElementById(`${section.id}Section`);
            
            if (section.hasData()) {
                // Update the section content
                section.updateMethod();
                // Show the section
                if (sectionContent) {
                    sectionContent.style.display = 'block';
                    sectionContent.removeAttribute('data-empty');
                }
                
                // Check for empty cards after update and mark them
                this.markEmptyAnalysisCards(section.id);
            } else {
                // Hide sections without meaningful data
                if (sectionContent) {
                    sectionContent.style.display = 'none';
                    sectionContent.setAttribute('data-empty', 'true');
                }
            }
        });
        
        // Update remaining tabs manually (these should be added to the main tabs array eventually)
        this.updateMythologyTab();
        this.markEmptyAnalysisCards('mythology');
        
        this.updateQuantumTab();
        this.markEmptyAnalysisCards('quantum');
    }

    // Helper function to check if analysis section has meaningful data
    hasAnalysisData(sectionKey) {
        if (!this.currentAnalysis || !this.currentAnalysis[sectionKey]) return false;
        
        const section = this.currentAnalysis[sectionKey];
        
        // List of phrases that indicate empty or placeholder content
        const emptyIndicators = [
            'requires JSON database',
            'not available',
            'analysis not available',
            'no specific',
            'general tarot reading',
            'basic interpretation',
            'standard meaning',
            'undefined',
            'null',
            'empty',
            'no data',
            'coming soon',
            'not implemented',
            'placeholder'
        ];
        
        // Helper to check if a string is meaningful
        const isStringMeaningful = (str) => {
            if (!str || typeof str !== 'string') return false;
            const cleanStr = str.trim().toLowerCase();
            if (cleanStr.length < 10) return false; // Too short to be meaningful
            return !emptyIndicators.some(indicator => cleanStr.includes(indicator));
        };
        
        // Helper to check if an object has meaningful content
        const hasObjectMeaningfulContent = (obj) => {
            if (!obj || typeof obj !== 'object') return false;
            
            return Object.values(obj).some(value => {
                if (typeof value === 'string') {
                    return isStringMeaningful(value);
                } else if (Array.isArray(value)) {
                    return value.length > 0 && value.some(item => 
                        typeof item === 'string' ? isStringMeaningful(item) : 
                        typeof item === 'object' ? hasObjectMeaningfulContent(item) : 
                        true
                    );
                } else if (typeof value === 'object') {
                    return hasObjectMeaningfulContent(value);
                }
                return true; // Numbers, booleans etc are considered meaningful
            });
        };
        
        // Check for meaningful content based on section type
        if (Array.isArray(section)) {
            return section.length > 0 && section.some(item => 
                typeof item === 'string' ? isStringMeaningful(item) : 
                typeof item === 'object' ? hasObjectMeaningfulContent(item) : 
                true
            );
        }
        
        if (typeof section === 'object') {
            return hasObjectMeaningfulContent(section);
        }
        
        if (typeof section === 'string') {
            return isStringMeaningful(section);
        }
        
        return false;
    }

    // Mark empty analysis cards for CSS hiding
    markEmptyAnalysisCards(sectionId) {
        const sectionContent = document.getElementById(`${sectionId}Section`);
        if (!sectionContent) return;
        
        const analysisCards = sectionContent.querySelectorAll('.analysis-card');
        analysisCards.forEach(card => {
            const contentDiv = card.querySelector('div:not(h4)'); // Get content div (not header)
            if (contentDiv) {
                const content = contentDiv.textContent || contentDiv.innerHTML;
                const cleanContent = content.trim().toLowerCase();
                
                // List of indicators for empty/meaningless content
                const emptyIndicators = [
                    'requires json database',
                    'not available',
                    'analysis not available',
                    'no specific',
                    'general tarot reading',
                    'basic interpretation',
                    'standard meaning',
                    'undefined',
                    'null',
                    'empty',
                    'no data',
                    'coming soon',
                    'not implemented',
                    'placeholder',
                    'lorem ipsum'
                ];
                
                const isEmpty = !cleanContent || 
                               cleanContent.length < 10 || 
                               emptyIndicators.some(indicator => cleanContent.includes(indicator)) ||
                               cleanContent === '{}' ||
                               cleanContent === '[]' ||
                               /^[\s\-\.]*$/.test(cleanContent); // Only whitespace, dashes, or dots
                
                if (isEmpty) {
                    card.setAttribute('data-empty', 'true');
                    card.style.display = 'none';
                } else {
                    card.removeAttribute('data-empty');
                    card.style.display = '';
                }
            }
        });
        
        // Hide the entire section if all cards are empty
        const visibleCards = sectionContent.querySelectorAll('.analysis-card:not([data-empty="true"])');
        if (visibleCards.length === 0) {
            sectionContent.style.display = 'none';
            sectionContent.setAttribute('data-empty', 'true');
        }
    }

    updateOverviewTab() {
        const analysis = this.currentAnalysis;
        
        document.getElementById('readingOverview').innerHTML = `
            <div class="analysis-metric">
                <span class="metric-label">Spiritual Intensity</span>
                <span class="metric-value">${analysis.overview.intensity}</span>
            </div>
            <div class="analysis-metric">
                <span class="metric-label">Major Arcana Cards</span>
                <span class="metric-value">${analysis.overview.majorArcanaCount}</span>
            </div>
            <div class="analysis-metric">
                <span class="metric-label">Reversed Cards</span>
                <span class="metric-value">${analysis.overview.reversedCount}</span>
            </div>
            <p class="text-sm text-gray-300 mt-3">${analysis.overview.interpretation}</p>
        `;
        
        document.getElementById('elementalBalance').innerHTML = `
            <div class="element-breakdown">
                ${Object.entries(analysis.elemental.distribution).map(([element, count]) => `
                    <div class="element-item">
                        <div class="element-indicator ${element.toLowerCase()}"></div>
                        <span class="element-name">${element}</span>
                        <span class="element-count">${count}</span>
                    </div>
                `).join('')}
            </div>
            <div class="progress-bar-container mt-3">
                <div class="progress-bar-fill" style="width: ${analysis.elemental.balance}%"></div>
            </div>
            <p class="text-sm text-gray-300 mt-2">Balance Score: ${Math.round(analysis.elemental.balance)}%</p>
            <p class="text-sm text-gray-300 mt-2">${analysis.elemental.interpretation}</p>
        `;
        
        document.getElementById('suitDistribution').innerHTML = `
            <div class="suit-breakdown">
                ${Object.entries(analysis.suits.distribution).map(([suit, count]) => `
                    <div class="analysis-metric">
                        <span class="metric-label">${suit}</span>
                        <span class="metric-value">${count}</span>
                    </div>
                `).join('')}
            </div>
            <p class="text-sm text-gray-300 mt-3">${analysis.suits.interpretation}</p>
        `;
        
        document.getElementById('energyAssessment').innerHTML = `
            <div class="energy-metrics">
                <div class="analysis-metric">
                    <span class="metric-label">Energy Type</span>
                    <span class="metric-value">${analysis.energy.energyType}</span>
                </div>
                <div class="analysis-metric">
                    <span class="metric-label">Forward-Moving</span>
                    <span class="metric-value">${analysis.energy.forwardMoving}</span>
                </div>
                <div class="analysis-metric">
                    <span class="metric-label">Blocked/Internal</span>
                    <span class="metric-value">${analysis.energy.blocked}</span>
                </div>
                <div class="analysis-metric">
                    <span class="metric-label">Transformative</span>
                    <span class="metric-value">${analysis.energy.transformative}</span>
                </div>
            </div>
            <p class="text-sm text-gray-300 mt-3">${analysis.energy.interpretation}</p>
        `;
    }

    updatePsychologyTab() {
        const analysis = this.currentAnalysis.psychology;
        
        document.getElementById('jungianAnalysis').innerHTML = `
            <div class="archetype-list">
                ${Object.entries(analysis.dominantArchetypes).map(([archetype, count]) => `
                    <div class="pattern-indicator">
                        <div class="pattern-dot"></div>
                        <span>${archetype} (${count})</span>
                    </div>
                `).join('')}
            </div>
            <p class="text-sm text-gray-300 mt-3">${analysis.interpretation}</p>
        `;
        
        document.getElementById('shadowWork').innerHTML = `
            <ul class="insights-list">
                ${analysis.shadowWork.map(work => `<li>${work}</li>`).join('')}
            </ul>
            ${analysis.shadowWork.length === 0 ? '<p class="text-gray-400">No significant shadow work indicated in this reading.</p>' : ''}
        `;
        
        document.getElementById('animaAnimus').innerHTML = `
            <ul class="insights-list">
                ${analysis.animaAnimus.map(aspect => `<li>${aspect}</li>`).join('')}
            </ul>
            ${analysis.animaAnimus.length === 0 ? '<p class="text-gray-400">No significant anima/animus dynamics present.</p>' : ''}
        `;
        
        document.getElementById('collectiveUnconscious').innerHTML = `
            <p class="text-sm text-gray-300">${analysis.collectiveUnconscious}</p>
        `;
        
        document.getElementById('psychologicalPatterns').innerHTML = `
            <p class="text-sm text-gray-300">Psychological patterns indicate themes of personal growth, integration, and the journey toward wholeness.</p>
        `;
    }

    updateSpiritualTab() {
        const analysis = this.currentAnalysis.spiritual;
        
        document.getElementById('soulLessons').innerHTML = `
            <ul class="insights-list">
                ${analysis.soulLessons.map(lesson => `<li>${lesson}</li>`).join('')}
            </ul>
        `;
        
        document.getElementById('spiritualGifts').innerHTML = `
            <ul class="insights-list">
                ${analysis.spiritualGifts.map(gift => `<li>${gift}</li>`).join('')}
            </ul>
            ${analysis.spiritualGifts.length === 0 ? '<p class="text-gray-400">Spiritual gifts are present but may need development.</p>' : ''}
        `;
        
        document.getElementById('higherSelfMessages').innerHTML = `
            <ul class="insights-list">
                ${analysis.higherSelf.map(message => `<li>${message}</li>`).join('')}
            </ul>
        `;
        
        document.getElementById('ascensionPath').innerHTML = `
            <ul class="insights-list">
                ${analysis.ascension.map(path => `<li>${path}</li>`).join('')}
            </ul>
            ${analysis.ascension.length === 0 ? '<p class="text-gray-400">Continue on your current spiritual path with patience and dedication.</p>' : ''}
        `;
    }

    updateKabbalahTab() {
        const analysis = this.currentAnalysis.kabbalah;
        
        document.getElementById('treeOfLife').innerHTML = `
            <p class="text-sm text-gray-300">${analysis.interpretation}</p>
        `;
        
        document.getElementById('sephirothInfluences').innerHTML = `
            <div class="sephiroth-list">
                ${Object.entries(analysis.sephirothInfluence).map(([sephira, count]) => `
                    <div class="analysis-metric">
                        <span class="metric-label">${sephira}</span>
                        <span class="metric-value">${count}</span>
                    </div>
                `).join('')}
            </div>
        `;
        
        document.getElementById('pathworking').innerHTML = `
            <p class="text-sm text-gray-300">${analysis.activePaths.length} active paths on the Tree of Life are highlighted in this reading.</p>
        `;
        
        document.getElementById('hebrewLetters').innerHTML = `
            <div class="hebrew-letters">
                ${analysis.hebrewLetters.map(letter => `<span class="hebrew-letter">${letter}</span>`).join(' ')}
            </div>
        `;
    }

    updateChakrasTab() {
        const analysis = this.currentAnalysis.chakras;
        
        document.getElementById('chakraAlignment').innerHTML = `
            <div class="chakra-list">
                ${Object.entries(analysis.alignment).map(([chakra, count]) => `
                    <div class="analysis-metric">
                        <span class="metric-label">${chakra}</span>
                        <span class="metric-value">${count}</span>
                    </div>
                `).join('')}
            </div>
            <p class="text-sm text-gray-300 mt-3">${analysis.interpretation}</p>
        `;
        
        document.getElementById('energyBlocks').innerHTML = `
            <p class="text-sm text-gray-300">Energy blocks may be present in areas with zero activation. Focus on balancing these chakras.</p>
        `;
        
        document.getElementById('kundaliniFlow').innerHTML = `
            <p class="text-sm text-gray-300">Kundalini energy flows most freely through activated chakras. Meditation and yoga can enhance this flow.</p>
        `;
        
        document.getElementById('meridianActivity').innerHTML = `
            <p class="text-sm text-gray-300">Meridian activity corresponds to chakra activation. Consider acupuncture or energy healing for balance.</p>
        `;
    }

    updateArchetypesTab() {
        const analysis = this.currentAnalysis.archetypes;
        
        document.getElementById('primaryArchetypes').innerHTML = `
            <p class="text-sm text-gray-300">${analysis.primary}</p>
        `;
        
        document.getElementById('mythologicalConnections').innerHTML = `
            <p class="text-sm text-gray-300">${analysis.mythological}</p>
        `;
        
        document.getElementById('heroJourney').innerHTML = `
            <p class="text-sm text-gray-300">${analysis.interpretation}</p>
        `;
        
        document.getElementById('goddessAspects').innerHTML = `
            <p class="text-sm text-gray-300">Divine feminine energy is present in various forms throughout this reading.</p>
        `;
    }

    updateTimingTab() {
        const analysis = this.currentAnalysis.timing;
        
        document.getElementById('seasonalTiming').innerHTML = `
            <p class="text-sm text-gray-300">${analysis.seasonal}</p>
        `;
        
        document.getElementById('lunarCycles').innerHTML = `
            <p class="text-sm text-gray-300">${analysis.lunar}</p>
        `;
        
        document.getElementById('planetaryTransits').innerHTML = `
            <p class="text-sm text-gray-300">${analysis.planetary}</p>
        `;
        
        document.getElementById('manifestationWindows').innerHTML = `
            <p class="text-sm text-gray-300">${analysis.interpretation}</p>
        `;
    }

    updateKarmaTab() {
        const analysis = this.currentAnalysis.karma;
        
        document.getElementById('karmicDebts').innerHTML = `
            <p class="text-sm text-gray-300">${analysis.debts}</p>
        `;
        
        document.getElementById('pastLifeInfluences').innerHTML = `
            <p class="text-sm text-gray-300">${analysis.pastLife}</p>
        `;
        
        document.getElementById('soulContracts').innerHTML = `
            <p class="text-sm text-gray-300">${analysis.contracts}</p>
        `;
        
        document.getElementById('dharmicPurpose').innerHTML = `
            <p class="text-sm text-gray-300">${analysis.dharma}</p>
        `;
    }

    updateNumerologyTab() {
        const analysis = this.currentAnalysis.numerology;
        
        document.getElementById('numerologyLifePath').innerHTML = `
            <div class="analysis-metric">
                <span class="metric-label">Life Path Number</span>
                <span class="metric-value text-2xl">${analysis.lifePath}</span>
            </div>
            ${analysis.masterNumbers.length > 0 ? `
                <div class="master-numbers mt-3">
                    <h5 class="text-sm font-semibold text-yellow-400 mb-2">Master Numbers Present:</h5>
                    ${analysis.masterNumbers.map(m => `
                        <div class="master-number-item">
                            <span class="text-lg font-bold">${m.number}</span> - ${m.card}<br>
                            <span class="text-xs text-gray-400">${m.meaning}</span>
                        </div>
                    `).join('')}
                </div>
            ` : ''}
        `;
        
        document.getElementById('numerologyPatterns').innerHTML = `
            ${analysis.repeatingPatterns.length > 0 ? `
                <div class="repeating-patterns">
                    ${analysis.repeatingPatterns.map(p => `
                        <div class="pattern-item mb-2">
                            <span class="font-semibold">${p.number}</span> appears ${p.frequency} times<br>
                            <span class="text-xs text-gray-400">${p.meaning}</span>
                        </div>
                    `).join('')}
                </div>
            ` : '<p class="text-sm text-gray-400">No repeating patterns detected</p>'}
        `;
        
        document.getElementById('pythagoreanAnalysis').innerHTML = `
            <div class="pythagorean-grid">
                <div class="analysis-metric">
                    <span class="metric-label">Soul Urge</span>
                    <span class="metric-value">${analysis.pythagoreanAnalysis.soulUrge}</span>
                </div>
                <div class="analysis-metric">
                    <span class="metric-label">Expression</span>
                    <span class="metric-value">${analysis.pythagoreanAnalysis.expression}</span>
                </div>
                <div class="analysis-metric">
                    <span class="metric-label">Personality</span>
                    <span class="metric-value">${analysis.pythagoreanAnalysis.personality}</span>
                </div>
                <div class="analysis-metric">
                    <span class="metric-label">Maturity</span>
                    <span class="metric-value">${analysis.pythagoreanAnalysis.maturity}</span>
                </div>
            </div>
        `;
        
        document.getElementById('angelNumbers').innerHTML = `
            ${analysis.angelNumbers.length > 0 ? `
                <div class="angel-numbers">
                    ${analysis.angelNumbers.map(a => `
                        <div class="angel-number-item mb-2">
                            <span class="font-bold text-teal-400">${a.sequence}</span><br>
                            <span class="text-sm">${a.meaning}</span>
                        </div>
                    `).join('')}
                </div>
            ` : ''}
            <div class="frequency-info mt-3">
                <span class="text-xs text-gray-400">Overall Vibrational Frequency:</span><br>
                <span class="text-lg font-semibold">${analysis.vibrationalFrequencies.overall.toFixed(2)} Hz</span>
            </div>
        `;
    }

    updateElementsTab() {
        const analysis = this.currentAnalysis.elementalDignities;
        
        document.getElementById('elementalDignities').innerHTML = `
            <div class="dignities-summary">
                <p class="text-sm mb-2">Dominant Element: <span class="font-semibold text-teal-400">${analysis.dominantElement || 'Balanced'}</span></p>
                ${analysis.missingElements.length > 0 ? `
                    <p class="text-sm text-yellow-400">Missing: ${analysis.missingElements.join(', ')}</p>
                ` : ''}
            </div>
        `;
        
        document.getElementById('elementalFlow').innerHTML = `
            <div class="flow-diagram">
                ${analysis.elementalFlow.map((flow, i) => `
                    <div class="flow-item">
                        <span class="position-number">${flow.position}</span>
                        <span class="element-name">${flow.element}</span>
                        ${flow.flowDirection !== 'terminus' ? `
                            <span class="flow-arrow ${flow.flowDirection}">→</span>
                        ` : ''}
                    </div>
                `).join('')}
            </div>
        `;
        
        document.getElementById('strengtheningPairs').innerHTML = `
            ${analysis.strengtheningPairs.length > 0 ? `
                <div class="pair-list">
                    ${analysis.strengtheningPairs.map(p => `
                        <div class="pair-item mb-2">
                            <span class="font-semibold">${p.cards[0]} + ${p.cards[1]}</span><br>
                            <span class="text-sm text-gray-400">${p.effect}</span>
                        </div>
                    `).join('')}
                </div>
            ` : '<p class="text-sm text-gray-400">No strengthening combinations found</p>'}
        `;
        
        document.getElementById('elementalBalanceDetail').innerHTML = `
            <div class="element-chart">
                ${Object.entries(analysis.elementalBalance).map(([element, count]) => `
                    <div class="element-bar">
                        <span class="element-label">${element}</span>
                        <div class="bar-container">
                            <div class="bar-fill ${element.toLowerCase()}" style="width: ${(count / this.drawnCards.length) * 100}%"></div>
                        </div>
                        <span class="element-count">${count}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    updateAstrologyTab() {
        const analysis = this.currentAnalysis.astrologicalTransits;
        
        document.getElementById('currentTransits').innerHTML = `
            <div class="transit-info">
                <p class="mb-2">Lunar Phase: <span class="font-semibold">${analysis.lunarPhase}</span></p>
                <p class="mb-2">Planetary Hour: <span class="font-semibold">${analysis.planetaryHours}</span></p>
                ${analysis.retrogrades.length > 0 ? `
                    <p class="text-yellow-400">Retrogrades: ${analysis.retrogrades.join(', ')}</p>
                ` : ''}
            </div>
        `;
        
        document.getElementById('planetaryInfluences').innerHTML = `
            <div class="planetary-list">
                ${analysis.cardAstrology.map(ca => `
                    <div class="planetary-item mb-2">
                        <span class="font-semibold">${ca.card}</span> - ${ca.astrological}<br>
                        <span class="text-sm text-gray-400">${ca.currentTransit}</span>
                    </div>
                `).join('')}
            </div>
        `;
        
        document.getElementById('lunarPhaseImpact').innerHTML = `
            <p class="text-sm text-gray-300">${analysis.interpretation.split('\n')[0]}</p>
        `;
        
        document.getElementById('aspectPatterns').innerHTML = `
            ${analysis.aspectPatterns.length > 0 ? `
                <div class="aspect-list">
                    ${analysis.aspectPatterns.map(pattern => `
                        <div class="aspect-item">${pattern}</div>
                    `).join('')}
                </div>
            ` : '<p class="text-sm text-gray-400">No significant aspect patterns detected</p>'}
        `;
    }

    updateGeometryTab() {
        const analysis = this.currentAnalysis.sacredGeometry;
        
        document.getElementById('goldenRatio').innerHTML = `
            ${analysis.goldenRatio.length > 0 ? `
                <div class="ratio-list">
                    ${analysis.goldenRatio.map(r => `
                        <div class="ratio-item mb-2">
                            <span class="font-semibold">${r.card}</span><br>
                            ${r.relationships.map(rel => `
                                <span class="text-sm">With ${rel.withCard}: ${rel.ratio.toFixed(3)} - ${rel.significance}</span><br>
                            `).join('')}
                        </div>
                    `).join('')}
                </div>
            ` : '<p class="text-sm text-gray-400">No golden ratio relationships found</p>'}
        `;
        
        document.getElementById('fibonacciSequences').innerHTML = `
            ${analysis.fibonacciSequence.length > 0 ? `
                <div class="fibonacci-list">
                    ${analysis.fibonacciSequence.map(f => `
                        <div class="fib-item mb-2">
                            <span class="font-semibold">${f.card}</span> - Number ${f.number}<br>
                            <span class="text-sm text-gray-400">${f.meaning}</span>
                        </div>
                    `).join('')}
                </div>
            ` : '<p class="text-sm text-gray-400">No Fibonacci numbers present</p>'}
        `;
        
        document.getElementById('platonicSolids').innerHTML = `
            <p class="text-sm text-gray-300">${analysis.platonicSolids.length} Platonic solid correspondences found</p>
        `;
        
        document.getElementById('sacredPatterns').innerHTML = `
            <div class="pattern-summary">
                ${analysis.geometricPatterns.map(pattern => `
                    <div class="pattern-badge">${pattern}</div>
                `).join('')}
            </div>
        `;
    }

    updateSymbolismTab() {
        const analysis = this.currentAnalysis.symbolism;
        
        document.getElementById('archetypicalSymbols').innerHTML = `
            <div class="symbol-grid">
                ${analysis.archetypicalSymbols.slice(0, 6).map(s => `
                    <div class="symbol-item">
                        <span class="symbol-name">${s.symbol}</span><br>
                        <span class="text-xs text-gray-400">${s.card}</span>
                    </div>
                `).join('')}
            </div>
        `;
        
        document.getElementById('colorSymbolism').innerHTML = `
            <div class="color-analysis">
                ${analysis.colorSymbolism.slice(0, 4).map(c => `
                    <div class="color-item mb-2">
                        <span class="color-indicator" style="background-color: ${c.color}"></span>
                        <span class="ml-2">${c.color} - ${c.meaning}</span>
                    </div>
                `).join('')}
            </div>
        `;
        
        document.getElementById('animalPlantTotems').innerHTML = `
            <div class="totem-list">
                ${analysis.animalSymbolism.slice(0, 3).map(a => `
                    <div class="totem-item">${a.animal} - ${a.totemMeaning}</div>
                `).join('')}
            </div>
        `;
        
        document.getElementById('alchemicalSymbols').innerHTML = `
            <p class="text-sm text-gray-300">Dominant themes: ${analysis.dominantThemes.join(', ')}</p>
        `;
    }

    updateInteractionsTab() {
        const analysis = this.currentAnalysis.cardInteractions;
        
        document.getElementById('cardConnections').innerHTML = `
            <div class="connection-list">
                ${analysis.directConnections.slice(0, 4).map(conn => `
                    <div class="connection-item mb-2">
                        <span class="font-semibold">${conn.from} → ${conn.to}</span><br>
                        <span class="text-sm text-gray-400">${conn.connectionType}: ${conn.narrative}</span>
                    </div>
                `).join('')}
            </div>
        `;
        
        document.getElementById('energyFlows').innerHTML = `
            <div class="energy-flow-diagram">
                ${analysis.energyFlows.map(flow => `
                    <div class="energy-node">${flow}</div>
                `).join('')}
            </div>
        `;
        
        document.getElementById('narrativeThreads').innerHTML = `
            <div class="narrative-list">
                ${analysis.narrativeThreads.slice(0, 3).map(thread => `
                    <div class="narrative-item mb-2">${thread}</div>
                `).join('')}
            </div>
        `;
        
        document.getElementById('cardClusters').innerHTML = `
            ${analysis.cardClusters.length > 0 ? `
                <div class="cluster-list">
                    ${analysis.cardClusters.map(cluster => `
                        <div class="cluster-item">${cluster}</div>
                    `).join('')}
                </div>
            ` : '<p class="text-sm text-gray-400">No significant card clusters detected</p>'}
        `;
    }

    updateShadowTab() {
        const analysis = this.currentAnalysis.shadowWork;
        
        document.getElementById('shadowAspects').innerHTML = `
            <div class="shadow-list">
                ${analysis.shadowAspects.map(aspect => `
                    <div class="shadow-item mb-3">
                        <span class="font-semibold">${aspect.card}</span><br>
                        <span class="text-sm">Manifestation: ${aspect.shadowManifestation}</span><br>
                        <span class="text-sm text-gray-400">Fear: ${aspect.underlyingFear}</span>
                    </div>
                `).join('')}
            </div>
        `;
        
        document.getElementById('projectionsDenials').innerHTML = `
            ${analysis.projections.length > 0 ? `
                <div class="projection-list">
                    ${analysis.projections.map(proj => `
                        <div class="projection-item mb-2">
                            <span class="font-semibold">${proj.card}</span><br>
                            <span class="text-sm">${proj.projectedQualities.join(', ')}</span>
                        </div>
                    `).join('')}
                </div>
            ` : '<p class="text-sm text-gray-400">No significant projections identified</p>'}
        `;
        
        document.getElementById('integrationOpportunities').innerHTML = `
            <div class="integration-list">
                ${analysis.integrationOpportunities.map(opp => `
                    <div class="integration-item mb-2">• ${opp}</div>
                `).join('')}
            </div>
        `;
        
        document.getElementById('shadowGifts').innerHTML = `
            <div class="gift-list">
                ${analysis.shadowGifts.map(gift => `
                    <div class="gift-item text-teal-400">✦ ${gift}</div>
                `).join('')}
            </div>
        `;
    }

    updateAlchemyTab() {
        const analysis = this.currentAnalysis.alchemical;
        
        document.getElementById('alchemicalStage').innerHTML = `
            <div class="stage-indicator">
                <span class="text-2xl font-bold">${analysis.currentStage || 'Prima Materia'}</span>
                <p class="text-sm text-gray-400 mt-2">${this.getAlchemicalStageDescription(analysis.currentStage)}</p>
            </div>
        `;
        
        document.getElementById('transformationProcess').innerHTML = `
            <div class="process-steps">
                ${analysis.transformation.map((step, i) => `
                    <div class="process-step">
                        <span class="step-number">${i + 1}</span>
                        <span class="step-description">${step}</span>
                    </div>
                `).join('')}
            </div>
        `;
        
        document.getElementById('primaMateria').innerHTML = `
            <p class="text-sm text-gray-300">${analysis.primaMateria.join(', ')}</p>
        `;
        
        document.getElementById('philosophersStone').innerHTML = `
            ${analysis.philosophersStone.length > 0 ? `
                <div class="stone-indicators">
                    ${analysis.philosophersStone.map(indicator => `
                        <div class="stone-item text-yellow-400">✦ ${indicator}</div>
                    `).join('')}
                </div>
            ` : '<p class="text-sm text-gray-400">The Great Work continues...</p>'}
        `;
    }

    updateMythologyTab() {
        const analysis = this.currentAnalysis.mythological;
        
        document.getElementById('heroJourneyStage').innerHTML = `
            <div class="journey-map">
                ${analysis.heroJourney.map(stage => `
                    <div class="journey-stage mb-2">
                        <span class="font-semibold">${stage.card}</span> - ${stage.stage}<br>
                        <span class="text-sm text-gray-400">${stage.meaning}</span>
                    </div>
                `).join('')}
            </div>
        `;
        
        document.getElementById('divineArchetypes').innerHTML = `
            <div class="archetype-grid">
                ${analysis.goddessArchetypes.concat(analysis.godArchetypes).slice(0, 4).map(arch => `
                    <div class="archetype-card">
                        <span class="archetype-name">${arch.goddess || arch.god}</span><br>
                        <span class="text-xs">${arch.card}</span>
                    </div>
                `).join('')}
            </div>
        `;
        
        document.getElementById('culturalMythologies').innerHTML = `
            <div class="mythology-list">
                ${Object.entries(analysis.culturalMythologies).filter(([_, myths]) => myths.length > 0).map(([culture, myths]) => `
                    <div class="mythology-item mb-2">
                        <span class="font-semibold capitalize">${culture}:</span> ${myths.slice(0, 2).join(', ')}
                    </div>
                `).join('')}
            </div>
        `;
        
        document.getElementById('cosmicCycles').innerHTML = `
            <div class="cycle-list">
                ${analysis.cosmicCycles.map(cycle => `
                    <div class="cycle-item">${cycle}</div>
                `).join('')}
            </div>
        `;
    }

    updateQuantumTab() {
        const analysis = this.currentAnalysis.quantumField;
        
        document.getElementById('fieldCoherence').innerHTML = `
            <div class="coherence-meter">
                <span class="text-2xl font-bold">${(analysis.fieldCoherence * 100).toFixed(1)}%</span>
                <div class="coherence-bar">
                    <div class="coherence-fill" style="width: ${analysis.fieldCoherence * 100}%"></div>
                </div>
                <p class="text-sm text-gray-400 mt-2">Field coherence indicates energetic alignment</p>
            </div>
        `;
        
        document.getElementById('quantumEntanglements').innerHTML = `
            <div class="entanglement-list">
                ${analysis.entanglements.map(ent => `
                    <div class="entanglement-item mb-2">
                        <span class="font-semibold">${ent.cards[0]} ↔ ${ent.cards[1]}</span><br>
                        <span class="text-sm">Strength: ${(ent.strength * 100).toFixed(0)}% - ${ent.type}</span>
                    </div>
                `).join('')}
            </div>
        `;
        
        document.getElementById('probabilityFields').innerHTML = `
            <div class="probability-visualization">
                ${analysis.probabilityFields.map(field => `
                    <div class="probability-node">${field}</div>
                `).join('')}
            </div>
        `;
        
        document.getElementById('synchronicities').innerHTML = `
            <div class="sync-list">
                ${analysis.synchronicities.map(sync => `
                    <div class="sync-item text-teal-400">✨ ${sync}</div>
                `).join('')}
            </div>
        `;
    }

    getAlchemicalStageDescription(stage) {
        const descriptions = {
            'nigredo': 'The blackening - decomposition and shadow work',
            'albedo': 'The whitening - purification and illumination',
            'citrinitas': 'The yellowing - solar consciousness emerging',
            'rubedo': 'The reddening - final integration and wholeness'
        };
        return descriptions[stage?.toLowerCase()] || 'The beginning of transformation';
    }

    // switchAnalysisTab method removed - analysis now uses section-based layout

    saveReading() {
        if (!this.drawnCards.length) return;

        const reading = {
            id: Date.now(),
            date: new Date().toISOString(),
            spreadType: this.currentSpread.type,
            spreadName: this.currentSpread.name,
            cards: this.drawnCards.map(card => ({
                name: card.name,
                isReversed: card.isReversed,
                position: card.position,
                positionIndex: card.positionIndex
            })),
            analysis: this.currentAnalysis
        };

        this.savedReadings.unshift(reading);
        
        // Keep only last 50 readings
        if (this.savedReadings.length > 50) {
            this.savedReadings = this.savedReadings.slice(0, 50);
        }
        
        localStorage.setItem('tarotReadings', JSON.stringify(this.savedReadings));
        this.loadSavedReadings();
        
        // Show success message
        this.showTemporaryMessage('Reading saved successfully!', 'success');
    }

    loadSavedReadings() {
        const container = document.getElementById('savedReadingsList');
        if (!container) return;

        if (this.savedReadings.length === 0) {
            container.innerHTML = '<p class="text-gray-400 text-center py-8">No saved readings yet. Complete a reading and save it to see it here.</p>';
            return;
        }

        container.innerHTML = this.savedReadings.map(reading => `
            <div class="saved-reading-card" data-reading-id="${reading.id}">
                <div class="saved-reading-header">
                    <h4 class="font-semibold text-blue-300">${reading.spreadName}</h4>
                    <span class="text-sm text-gray-400">${new Date(reading.date).toLocaleDateString()}</span>
                </div>
                <div class="saved-reading-preview">
                    <p class="text-sm text-gray-300">${reading.cards.length} cards drawn</p>
                    <div class="saved-reading-cards">
                        ${reading.cards.slice(0, 3).map(card => `
                            <span class="saved-card-name">${card.name}${card.isReversed ? ' (R)' : ''}</span>
                        `).join(', ')}
                        ${reading.cards.length > 3 ? '...' : ''}
                    </div>
                </div>
                <div class="saved-reading-actions">
                    <button class="load-reading-btn" onclick="tarotApp.loadSavedReading(${reading.id})">Load</button>
                    <button class="delete-reading-btn" onclick="tarotApp.deleteSavedReading(${reading.id})">Delete</button>
                </div>
            </div>
        `).join('');
    }

    loadSavedReading(readingId) {
        const reading = this.savedReadings.find(r => r.id === readingId);
        if (!reading) return;

        // Reset current state
        this.resetReading();
        
        // Set up the reading
        this.currentSpread = { ...spreads[reading.spreadType], type: reading.spreadType };
        this.drawnCards = reading.cards.map(cardData => {
            const fullCard = tarotCards.find(c => c.name === cardData.name);
            return {
                ...fullCard,
                isReversed: cardData.isReversed,
                position: cardData.position,
                positionIndex: cardData.positionIndex
            };
        });
        
        // Display the reading
        this.displaySavedReading();
        
        // Load analysis if available
        if (reading.analysis) {
            this.currentAnalysis = reading.analysis;
            this.displayAnalysis();
        }
        
        this.showTemporaryMessage('Reading loaded successfully!', 'success');
    }

    displaySavedReading() {
        const readingArea = document.getElementById('readingArea');
        readingArea.innerHTML = '';
        
        const spreadContainer = document.createElement('div');
        // Map spread types to CSS classes
        const spreadClassMap = {
            'single': 'single',
            'three-card': 'three-card',
            'relationship': 'relationship',
            'celtic-cross': 'celtic-cross'
        };
        spreadContainer.className = `reading-grid reading-grid-${spreadClassMap[this.currentSpread.type] || this.currentSpread.type}`;
        
        this.drawnCards.forEach(card => {
            const cardElement = this.cardRenderer.createCardElement(card, card.position);
            spreadContainer.appendChild(cardElement);
        });
        
        readingArea.appendChild(spreadContainer);
        
        // Show relevant buttons
        this.showButton('resetReadingBtn');
        this.showButton('saveReadingBtn');
        // Analyze reading now runs automatically
        
        // Generate summary
        this.generateReadingSummary();
        
        // Update instruction
        this.updateInstructionText("Saved reading loaded. Click on cards for detailed meanings or use the analysis tools.");
    }

    deleteSavedReading(readingId) {
        if (!confirm('Are you sure you want to delete this reading?')) return;
        
        this.savedReadings = this.savedReadings.filter(r => r.id !== readingId);
        localStorage.setItem('tarotReadings', JSON.stringify(this.savedReadings));
        this.loadSavedReadings();
        
        this.showTemporaryMessage('Reading deleted successfully!', 'success');
    }

    resetReading() {
        this.readingInProgress = false;
        this.currentSpread = null;
        this.drawnCards = [];
        this.currentDeck = [];
        this.currentAnalysis = null;
        
        // Reset UI
        this.showElement('spreadSelection');
        this.hideAllButtons();
        this.hideElement('deckContainer');
        // Remove ready-to-draw class when resetting
        const deckCard = document.querySelector('.deck-card');
        if (deckCard) {
            deckCard.classList.remove('ready-to-draw');
        }
        this.hideElement('readingSummary');
        this.hideElement('analysisPanel');
        this.clearReadingArea();
        
        // Clear selections
        document.querySelectorAll('.spread-option').forEach(opt => opt.classList.remove('selected'));
        
        this.updateInstructionText("Select a spread type to begin your mystical journey");
    }

    shuffleDeck(deck) {
        const shuffled = [...deck];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    closeModal() {
        document.getElementById('cardModal').classList.add('hidden');
        document.getElementById('cardModal').classList.remove('flex');
    }

    handleKeyboardShortcuts(e) {
        if (e.ctrlKey || e.metaKey) {
            switch (e.key) {
                case 'n':
                    e.preventDefault();
                    this.resetReading();
                    break;
                case 's':
                    e.preventDefault();
                    if (this.drawnCards.length > 0) {
                        this.saveReading();
                    }
                    break;
                case 'a':
                    e.preventDefault();
                    if (this.drawnCards.length > 0) {
                        this.analyzeReading();
                    }
                    break;
            }
        }
        
        if (e.key === 'Escape') {
            this.closeModal();
        }
    }

    // Utility methods
    showElement(elementId) {
        const element = document.getElementById(elementId);
        if (element) element.classList.remove('hidden');
    }

    hideElement(elementId) {
        const element = document.getElementById(elementId);
        if (element) element.classList.add('hidden');
    }

    showButton(buttonId) {
        const button = document.getElementById(buttonId);
        if (button) button.classList.remove('hidden');
    }

    hideButton(buttonId) {
        const button = document.getElementById(buttonId);
        if (button) button.classList.add('hidden');
    }

    hideAllButtons() {
        ['startReadingBtn', 'resetReadingBtn', 'saveReadingBtn'].forEach(id => {
            this.hideButton(id);
        });
    }

    clearReadingArea() {
        const readingArea = document.getElementById('readingArea');
        if (readingArea) readingArea.innerHTML = '';
    }

    updateInstructionText(text, isHTML = false) {
        const instructionElement = document.getElementById('instructionText');
        if (instructionElement) {
            if (isHTML) {
                instructionElement.innerHTML = text;
            } else {
                instructionElement.textContent = text;
            }
        }
    }

    getUIText(key, replacements = {}) {
        const path = key.split('.');
        let textObject = this.uiText;
        try {
            for (const p of path) {
                textObject = textObject[p];
            }

            if (typeof textObject === 'undefined' || typeof textObject.text === 'undefined') {
                console.warn(`UI text for key '${key}' not found.`);
                return key;
            }

            let text = textObject.text;
            for (const placeholder in replacements) {
                text = text.replace(new RegExp(`\\{${placeholder}\\}`, 'g'), replacements[placeholder]);
            }
            return text;
        } catch (e) {
            console.warn(`Could not retrieve UI text for key '${key}'`, e);
            return key;
        }
    }

    enableDeckInteraction() {
        const deckContainer = document.getElementById('deckContainer');
        if (deckContainer) {
            deckContainer.classList.remove('disabled');
            deckContainer.style.cursor = 'pointer';
        }
    }

    disableDeckInteraction() {
        const deckContainer = document.getElementById('deckContainer');
        if (deckContainer) {
            deckContainer.classList.add('disabled');
            deckContainer.style.cursor = 'not-allowed';
        }
    }

    showTemporaryMessage(message, type = 'info') {
        // Create temporary message element
        const messageDiv = document.createElement('div');
        messageDiv.className = `temporary-message ${type}`;
        messageDiv.textContent = message;
        messageDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : '#3b82f6'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            animation: slideIn 0.3s ease-out;
        `;
        
        document.body.appendChild(messageDiv);
        
        // Remove after 3 seconds
        setTimeout(() => {
            messageDiv.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => {
                if (messageDiv.parentNode) {
                    messageDiv.parentNode.removeChild(messageDiv);
                }
            }, 300);
        }, 3000);
    }

    // Show mode selection UI
    showModeSelection() {
        const modalDiv = document.createElement('div');
        modalDiv.id = 'modeSelectionModal';
        modalDiv.className = 'mode-selection-modal';
        modalDiv.innerHTML = `
            <div class="mode-selection-content">
                <h3 class="text-xl font-semibold mb-4 text-teal-400">Choose Your Reading Method</h3>
                <div class="mode-options">
                    <button class="mode-option-btn" data-mode="draw">
                        <div class="mode-icon">🎴</div>
                        <h4 class="text-lg font-semibold mb-2">Draw Cards</h4>
                        <p class="text-sm text-gray-300">Let fate guide your reading by randomly drawing cards from the deck</p>
                    </button>
                    <button class="mode-option-btn" data-mode="manual">
                        <div class="mode-icon">🔮</div>
                        <h4 class="text-lg font-semibold mb-2">Select Cards</h4>
                        <p class="text-sm text-gray-300">Choose specific cards from the deck for your reading</p>
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modalDiv);
        
        // Add event listeners
        modalDiv.querySelectorAll('.mode-option-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.readingMode = e.currentTarget.dataset.mode;
                this.closeModeSelection();
                
                if (this.readingMode === 'draw') {
                    this.startDrawMode();
                } else {
                    this.startManualMode();
                }
            });
        });
    }
    
    closeModeSelection() {
        const modal = document.getElementById('modeSelectionModal');
        if (modal) {
            modal.remove();
        }
    }
    
    startDrawMode() {
        this.showElement('deckContainer');
        this.updateInstructionText(`Draw ${this.currentSpread.cardCount} card(s) for your ${getText(this.currentSpread.name)} reading. Click the deck to draw your first card.`);
        this.enableDeckInteraction();
        // Add ready-to-draw class to show "CLICK TO DRAW" text
        const deckCard = document.querySelector('.deck-card');
        if (deckCard) {
            deckCard.classList.add('ready-to-draw');
        }
    }
    
    startManualMode() {
        this.cardSelectionInProgress = true;
        this.showCardPicker();
    }
    
    showCardPicker() {
        const pickerDiv = document.createElement('div');
        pickerDiv.id = 'cardPickerModal';
        pickerDiv.className = 'card-picker-modal';
        
        // Group cards by suit
        const cardsBySuit = {
            'Major Arcana': [],
            'Wands': [],
            'Cups': [],
            'Swords': [],
            'Pentacles': []
        };
        
        tarotCards.forEach(card => {
            cardsBySuit[card.suit].push(card);
        });
        
        const cardsNeeded = this.currentSpread.cardCount - this.drawnCards.length;
        
        pickerDiv.innerHTML = `
            <div class="card-picker-content">
                <div class="card-picker-header">
                    <h3 class="text-xl font-semibold text-teal-400">Select ${cardsNeeded} Card${cardsNeeded > 1 ? 's' : ''}</h3>
                    <p class="text-sm text-gray-300">Position: ${getText(this.currentSpread.positions[this.drawnCards.length].name)}</p>
                    <button id="closeCardPicker" class="close-picker-btn">×</button>
                </div>
                <div class="card-picker-suits">
                    ${Object.entries(cardsBySuit).map(([suit, cards]) => `
                        <div class="suit-section">
                            <h4 class="suit-header">${suit}</h4>
                            <div class="suit-cards">
                                ${cards.map(card => `
                                    <button class="picker-card" data-card-name="${card.name}" 
                                            ${this.isCardAlreadyDrawn(card) ? 'disabled' : ''}>
                                        <span class="picker-card-name">${card.name}</span>
                                        ${this.isCardAlreadyDrawn(card) ? '<span class="card-used">Used</span>' : ''}
                                    </button>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="card-picker-footer">
                    <label class="reversed-option">
                        <input type="checkbox" id="reverseCardOption">
                        <span>Draw as reversed</span>
                    </label>
                </div>
            </div>
        `;
        
        document.body.appendChild(pickerDiv);
        
        // Add event listeners
        document.getElementById('closeCardPicker').addEventListener('click', () => this.closeCardPicker());
        
        pickerDiv.querySelectorAll('.picker-card:not([disabled])').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const cardName = e.currentTarget.dataset.cardName;
                const isReversed = document.getElementById('reverseCardOption').checked;
                this.selectCard(cardName, isReversed);
            });
        });
    }
    
    closeCardPicker() {
        const picker = document.getElementById('cardPickerModal');
        if (picker) {
            picker.remove();
        }
        this.cardSelectionInProgress = false;
    }
    
    isCardAlreadyDrawn(card) {
        return this.drawnCards.some(drawn => drawn.name === card.name);
    }
    
    selectCard(cardName, isReversed) {
        const card = tarotCards.find(c => c.name === cardName);
        if (!card) return;
        
        // Create drawn card with position info
        const drawnCard = {
            ...card,
            isReversed,
            position: this.currentSpread.positions[this.drawnCards.length],
            positionIndex: this.drawnCards.length,
            timestamp: new Date().toISOString()
        };
        
        // Add to drawn cards
        this.drawnCards.push(drawnCard);
        
        // Display the card
        this.displayCard(drawnCard);
        
        // Close picker
        this.closeCardPicker();
        
        // Check if more cards needed
        if (this.drawnCards.length < this.currentSpread.cardCount) {
            setTimeout(() => {
                this.showCardPicker();
            }, 300);
        } else {
            this.completeReading();
        }
    }
}

// Initialize the application when DOM is loaded
let tarotApp;

document.addEventListener('DOMContentLoaded', () => {
    tarotApp = new TarotAppController();
});

// Add CSS animations for messages
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TarotAppController;
}