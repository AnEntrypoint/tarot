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
        
        this.initializeEventListeners();
        this.loadSavedReadings();
        this.initializeUI();
    }

    initializeEventListeners() {
        // Spread selection
        document.querySelectorAll('.spread-option').forEach(option => {
            option.addEventListener('click', (e) => this.selectSpread(e.target.closest('.spread-option')));
        });

        // Main action buttons
        document.getElementById('startReadingBtn').addEventListener('click', () => this.startReading());
        document.getElementById('resetReadingBtn').addEventListener('click', () => this.resetReading());
        document.getElementById('saveReadingBtn').addEventListener('click', () => this.saveReading());
        document.getElementById('analyzeReadingBtn').addEventListener('click', () => this.analyzeReading());
        
        // Deck interaction
        document.getElementById('deckContainer').addEventListener('click', () => this.drawCard());
        
        // Modal events
        document.getElementById('closeModal').addEventListener('click', () => this.closeModal());
        document.getElementById('cardModal').addEventListener('click', (e) => {
            if (e.target.id === 'cardModal') this.closeModal();
        });

        // Analysis tab events
        document.querySelectorAll('.tab-button').forEach(button => {
            button.addEventListener('click', (e) => this.switchAnalysisTab(e.target.dataset.tab));
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyboardShortcuts(e));
    }

    initializeUI() {
        this.updateInstructionText("Select a spread type to begin your mystical journey");
        this.hideAllButtons();
        this.clearReadingArea();
    }

    selectSpread(option) {
        // Remove previous selection
        document.querySelectorAll('.spread-option').forEach(opt => opt.classList.remove('selected'));
        
        // Add selection to clicked option
        option.classList.add('selected');
        
        // Get spread configuration
        const spreadType = option.dataset.spread;
        this.currentSpread = { ...spreads[spreadType], type: spreadType };
        
        // Update UI
        this.showButton('startReadingBtn');
        this.updateInstructionText(
            `You've selected the ${this.currentSpread.name}. Click "Begin Reading" to start your journey into the cards' wisdom.`
        );
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
        this.showElement('deckContainer');
        this.showButton('resetReadingBtn');
        this.clearReadingArea();
        this.hideElement('readingSummary');
        this.hideElement('analysisPanel');
        
        // Update instruction
        this.updateInstructionText(`Draw ${this.currentSpread.cardCount} card(s) for your ${this.currentSpread.name} reading. Click the deck to draw your first card.`);
        
        // Enable deck interaction
        this.enableDeckInteraction();
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
        
        // Create or update the spread layout
        let spreadContainer = readingArea.querySelector('.reading-grid');
        if (!spreadContainer) {
            spreadContainer = document.createElement('div');
            spreadContainer.className = `reading-grid reading-grid-${this.currentSpread.type}`;
            readingArea.appendChild(spreadContainer);
        }
        
        // Create card element
        const cardElement = this.cardRenderer.createCardElement(card, card.position);
        spreadContainer.appendChild(cardElement);
        
        // Animate card appearance
        this.cardRenderer.animateCardAppearance(cardElement);
    }

    updateReadingProgress() {
        const remaining = this.currentSpread.cardCount - this.drawnCards.length;
        if (remaining > 0) {
            this.updateInstructionText(
                `${remaining} more card${remaining > 1 ? 's' : ''} to draw. Click the deck to continue your reading.`
            );
        }
    }

    completeReading() {
        this.readingInProgress = false;
        this.disableDeckInteraction();
        this.hideElement('deckContainer');
        
        // Show action buttons
        this.showButton('saveReadingBtn');
        this.showButton('analyzeReadingBtn');
        
        // Generate and display reading summary
        this.generateReadingSummary();
        
        this.updateInstructionText(
            "Your reading is complete! Explore the detailed meanings by clicking on individual cards, or use the analysis tools for deeper insights."
        );
    }

    generateReadingSummary() {
        const summaryElement = document.getElementById('readingSummary');
        const contentElement = document.getElementById('summaryContent');
        
        let summaryHTML = `
            <div class="reading-header">
                <h4 class="text-xl font-semibold mb-2 text-teal-400">${this.currentSpread.name}</h4>
                <p class="text-gray-300 mb-4">${this.currentSpread.interpretation}</p>
            </div>
            
            <div class="cards-overview">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        `;
        
        this.drawnCards.forEach((card, index) => {
            summaryHTML += `
                <div class="card-summary">
                    <div class="flex items-start gap-3">
                        <div class="card-position-indicator">
                            <span class="position-number">${index + 1}</span>
                        </div>
                        <div class="card-summary-content">
                            <h5 class="font-semibold text-blue-300">${card.position.name}</h5>
                            <p class="text-sm text-gray-400 mb-2">${card.position.description}</p>
                            <p class="font-medium text-white">${card.name}${card.isReversed ? ' (Reversed)' : ''}</p>
                            <p class="text-sm text-gray-300 mt-1">${this.getCardSummary(card)}</p>
                        </div>
                    </div>
                </div>
            `;
        });
        
        summaryHTML += `
                </div>
            </div>
            
            <div class="reading-insight mt-6">
                <h5 class="font-semibold text-purple-300 mb-3">Overall Reading Insight</h5>
                <p class="text-gray-300">${this.generateOverallInsight()}</p>
            </div>
        `;
        
        contentElement.innerHTML = summaryHTML;
        summaryElement.classList.remove('hidden');
    }

    getCardSummary(card) {
        const meaning = card.isReversed ? card.meanings.reversed.general : card.meanings.upright.general;
        return meaning.substring(0, 120) + '...';
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

    analyzeReading() {
        if (!this.drawnCards.length) return;

        // Generate comprehensive analysis
        this.currentAnalysis = this.analysisEngine.analyzeReading(this.drawnCards, this.currentSpread.type);
        
        // Display analysis
        this.displayAnalysis();
        
        // Show analysis panel
        this.showElement('analysisPanel');
        
        // Smooth scroll to analysis
        document.getElementById('analysisPanel').scrollIntoView({ behavior: 'smooth' });
    }

    displayAnalysis() {
        if (!this.currentAnalysis) return;

        // Update each analysis tab
        this.updateOverviewTab();
        this.updatePsychologyTab();
        this.updateSpiritualTab();
        this.updateKabbalahTab();
        this.updateChakrasTab();
        this.updateArchetypesTab();
        this.updateTimingTab();
        this.updateKarmaTab();
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

    switchAnalysisTab(tabName) {
        // Hide all tab contents
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Remove active class from all buttons
        document.querySelectorAll('.tab-button').forEach(button => {
            button.classList.remove('active');
        });
        
        // Show selected tab content
        document.getElementById(`${tabName}Tab`).classList.add('active');
        
        // Add active class to clicked button
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    }

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
        spreadContainer.className = `reading-grid reading-grid-${this.currentSpread.type}`;
        
        this.drawnCards.forEach(card => {
            const cardElement = this.cardRenderer.createCardElement(card, card.position);
            spreadContainer.appendChild(cardElement);
        });
        
        readingArea.appendChild(spreadContainer);
        
        // Show relevant buttons
        this.showButton('resetReadingBtn');
        this.showButton('saveReadingBtn');
        this.showButton('analyzeReadingBtn');
        
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
        ['startReadingBtn', 'resetReadingBtn', 'saveReadingBtn', 'analyzeReadingBtn'].forEach(id => {
            this.hideButton(id);
        });
    }

    clearReadingArea() {
        const readingArea = document.getElementById('readingArea');
        if (readingArea) readingArea.innerHTML = '';
    }

    updateInstructionText(text) {
        const instructionElement = document.getElementById('instructionText');
        if (instructionElement) instructionElement.textContent = text;
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