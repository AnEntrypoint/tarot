// Mystic Tarot Reader - Professional Edition
class TarotReader {
    constructor() {
        this.currentDeck = [];
        this.drawnCards = [];
        this.currentSpread = null;
        this.readingInProgress = false;
        this.savedReadings = JSON.parse(localStorage.getItem('tarotReadings')) || [];
        this.isLoading = false;
        
        this.loadingMessages = [
            "Shuffling the cosmic deck...",
            "Consulting the stars...",
            "Drawing from the akashic records...",
            "Channeling mystical energies...",
            "Preparing your divine guidance...",
            "Aligning with universal wisdom...",
            "Connecting with your higher self...",
            "Weaving the threads of fate...",
            "Awakening ancient knowledge...",
            "Harmonizing spiritual frequencies..."
        ];
        
        this.initializeEventListeners();
        this.showInitialLoading();
    }

    initializeEventListeners() {
        // Spread selection
        document.querySelectorAll('.spread-option').forEach(option => {
            option.addEventListener('click', (e) => this.selectSpread(e.target.closest('.spread-option')));
        });

        // Button events
        document.getElementById('startReadingBtn').addEventListener('click', () => this.startReading());
        document.getElementById('resetReadingBtn').addEventListener('click', () => this.resetReading());
        document.getElementById('saveReadingBtn').addEventListener('click', () => this.saveReading());
        
        // Deck click
        document.getElementById('deckContainer').addEventListener('click', () => this.drawCard());
        
        // Modal events
        document.getElementById('closeModal').addEventListener('click', () => this.closeModal());
        document.getElementById('cardModal').addEventListener('click', (e) => {
            if (e.target.id === 'cardModal') this.closeModal();
        });
    }

    // Loading Methods
    showInitialLoading() {
        this.showLoading("Initializing mystical energies...");
        
        // Simulate initial app loading
        setTimeout(() => {
            this.hideLoading();
            this.loadSavedReadings();
        }, 1500);
    }

    showLoading(message = null) {
        this.isLoading = true;
        const overlay = document.getElementById('loadingOverlay');
        const messageElement = document.getElementById('loadingMessage');
        
        if (message) {
            messageElement.textContent = message;
        } else {
            // Cycle through mystical messages
            const randomMessage = this.loadingMessages[Math.floor(Math.random() * this.loadingMessages.length)];
            messageElement.textContent = randomMessage;
        }
        
        overlay.classList.remove('hidden');
        overlay.classList.add('fade-in');
    }

    hideLoading() {
        this.isLoading = false;
        const overlay = document.getElementById('loadingOverlay');
        
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.classList.add('hidden');
            overlay.style.opacity = '1';
        }, 300);
    }

    updateLoadingMessage(message) {
        if (this.isLoading) {
            document.getElementById('loadingMessage').textContent = message;
        }
    }

    showButtonLoading(buttonId) {
        const button = document.getElementById(buttonId);
        if (button) {
            button.classList.add('btn-loading');
            button.disabled = true;
        }
    }

    hideButtonLoading(buttonId) {
        const button = document.getElementById(buttonId);
        if (button) {
            button.classList.remove('btn-loading');
            button.disabled = false;
        }
    }

    createCardSkeleton() {
        return `
            <div class="card-skeleton">
                <div class="skeleton-image"></div>
                <div class="skeleton-text medium"></div>
                <div class="skeleton-text short"></div>
                <div class="skeleton-text long"></div>
                <div class="skeleton-text medium"></div>
            </div>
        `;
    }

    showCardLoadingSkeletons(count) {
        const readingArea = document.getElementById('readingArea');
        readingArea.innerHTML = '';
        
        this.adjustReadingLayout(readingArea);
        
        for (let i = 0; i < count; i++) {
            const skeletonDiv = document.createElement('div');
            skeletonDiv.innerHTML = this.createCardSkeleton();
            readingArea.appendChild(skeletonDiv.firstElementChild);
        }
    }

    selectSpread(option) {
        if (this.isLoading) return;

        // Show loading for spread selection
        this.showLoading("Preparing your chosen spread...");
        
        setTimeout(() => {
            // Remove previous selection
            document.querySelectorAll('.spread-option').forEach(opt => opt.classList.remove('selected'));
            
            // Add selection to clicked option
            option.classList.add('selected');
            
            // Get spread type
            const spreadType = option.dataset.spread;
            this.currentSpread = spreads[spreadType];
            
            // Show start button
            document.getElementById('startReadingBtn').classList.remove('hidden');
            document.getElementById('instructionText').textContent = 
                `You've selected the ${this.currentSpread.name}. Click "Begin Reading" to start!`;
            
            this.hideLoading();
        }, 800);
    }

    startReading() {
        if (!this.currentSpread || this.isLoading) return;

        // Show button loading
        this.showButtonLoading('startReadingBtn');
        this.showLoading("Shuffling the mystical deck...");

        setTimeout(() => {
            // Initialize reading
            this.currentDeck = this.shuffleDeck([...tarotCards]);
            this.drawnCards = [];
            this.readingInProgress = true;

            this.updateLoadingMessage("Preparing your reading space...");

            setTimeout(() => {
                // Show card skeletons first
                this.showCardLoadingSkeletons(this.currentSpread.positions.length);

                setTimeout(() => {
                    // Update UI
                    document.getElementById('spreadSelection').classList.add('hidden');
                    document.getElementById('startReadingBtn').classList.add('hidden');
                    document.getElementById('deckContainer').classList.remove('hidden');
                    document.getElementById('progressContainer').classList.remove('hidden');
                    document.getElementById('resetReadingBtn').classList.remove('hidden');
                    
                    // Clear skeletons and prepare for cards
                    document.getElementById('readingArea').innerHTML = '';
                    document.getElementById('readingSummary').classList.add('hidden');
                    
                    // Set instruction
                    this.updateInstruction();
                    this.updateProgress();
                    
                    this.hideButtonLoading('startReadingBtn');
                    this.hideLoading();
                }, 1000);
            }, 800);
        }, 1200);
    }

    drawCard() {
        if (!this.readingInProgress || this.drawnCards.length >= this.currentSpread.positions.length || this.isLoading) return;

        // Show card drawing animation
        const deckCard = document.querySelector('.deck-card');
        deckCard.classList.add('pulse');
        deckCard.style.pointerEvents = 'none';

        this.showLoading("Drawing your card from the cosmic deck...");

        setTimeout(() => {
            // Draw random card
            const cardIndex = Math.floor(Math.random() * this.currentDeck.length);
            const card = this.currentDeck.splice(cardIndex, 1)[0];
            
            // Determine if reversed (40% chance for more balanced readings)
            const isReversed = Math.random() < 0.4;
            
            // Add position and reversed status
            const drawnCard = {
                ...card,
                isReversed,
                position: this.currentSpread.positions[this.drawnCards.length],
                positionIndex: this.drawnCards.length
            };

            this.updateLoadingMessage(`Revealing ${drawnCard.position} card...`);

            setTimeout(() => {
                this.drawnCards.push(drawnCard);
                this.displayCard(drawnCard);
                this.updateProgress();
                this.updateInstruction();
                
                // Re-enable deck
                deckCard.classList.remove('pulse');
                deckCard.style.pointerEvents = 'auto';
                
                this.hideLoading();
                
                // Check if reading is complete
                if (this.drawnCards.length >= this.currentSpread.positions.length) {
                    setTimeout(() => this.completeReading(), 500);
                }
            }, 1000);
        }, 800);
    }

    displayCard(card) {
        const cardElement = this.createCardElement(card);
        
        // Add card to reading area with animation
        const readingArea = document.getElementById('readingArea');
        
        // Adjust grid layout based on spread
        this.adjustReadingLayout(readingArea);
        
        // Add mystical entrance animation
        cardElement.style.opacity = '0';
        cardElement.style.transform = 'translateY(50px) scale(0.8)';
        cardElement.classList.add('card-flip');
        readingArea.appendChild(cardElement);
        
        // Animate in with mystical effects
        setTimeout(() => {
            cardElement.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            cardElement.style.opacity = '1';
            cardElement.style.transform = 'translateY(0) scale(1)';
            
            // Add fade-in class for additional effects
            setTimeout(() => {
                cardElement.classList.add('fade-in');
            }, 300);
        }, 100);
    }

    createCardElement(card) {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'tarot-card relative cursor-pointer';
        cardDiv.onclick = () => this.showCardDetails(card);
        
        const orientation = card.isReversed ? 'Reversed' : 'Upright';
        const meaningKey = card.isReversed ? 'reversed' : 'upright';
        const meanings = card.meanings[meaningKey];
        
        cardDiv.innerHTML = `
            <div class="card-position">${card.positionIndex + 1}</div>
            <div class="card-number">${this.formatCardNumber(card)}</div>
            
            <div class="p-3 sm:p-4 lg:p-6">
                <!-- Card Image -->
                <div class="mb-3 flex justify-center">
                    <div class="card-image-container bg-gradient-to-b from-indigo-900 to-purple-900 rounded-lg border-2 border-purple-400 flex items-center justify-center relative overflow-hidden ${card.isReversed ? 'transform rotate-180' : ''}">
                        <div class="image-loading absolute inset-0"></div>
                        <img src="${card.image}" alt="${card.name}" class="w-full h-full object-cover rounded-lg opacity-0 transition-opacity duration-500" 
                             onload="this.style.opacity='1'; this.previousElementSibling.style.display='none'"
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'; this.previousElementSibling.style.display='none'">
                        <div class="absolute inset-0 flex items-center justify-center text-purple-300 text-xs font-medium text-center p-2" style="display: none;">
                            ${card.name}
                        </div>
                    </div>
                </div>
                
                <!-- Card Title -->
                <h3 class="text-lg sm:text-xl font-bold text-center mb-2 text-amber-400">
                    ${card.name}
                </h3>
                
                <!-- Position and Orientation -->
                <div class="text-center mb-3">
                    <p class="text-base sm:text-lg font-semibold text-purple-300 mb-1">${card.position}</p>
                    <p class="text-xs sm:text-sm ${card.isReversed ? 'text-red-300' : 'text-green-300'}">${orientation}</p>
                </div>
                
                <!-- Keywords -->
                <div class="keywords mb-3">
                    ${card.keywords[meaningKey].map(keyword => 
                        `<span class="keyword">${keyword}</span>`
                    ).join('')}
                </div>
                
                <!-- Card Details -->
                <div class="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                    <div class="meaning-section">
                        <h4 class="font-semibold text-purple-300 mb-1 sm:mb-2">General Meaning:</h4>
                        <p class="text-gray-300 leading-relaxed">${meanings.general}</p>
                    </div>
                    
                    <div class="space-y-2 sm:grid sm:grid-cols-3 sm:gap-2 sm:space-y-0">
                        <div class="meaning-section">
                            <h5 class="font-semibold text-pink-300 mb-1">💕 Love:</h5>
                            <p class="text-gray-300 text-xs leading-relaxed">${meanings.love}</p>
                        </div>
                        <div class="meaning-section">
                            <h5 class="font-semibold text-yellow-300 mb-1">💼 Career:</h5>
                            <p class="text-gray-300 text-xs leading-relaxed">${meanings.career}</p>
                        </div>
                        <div class="meaning-section">
                            <h5 class="font-semibold text-blue-300 mb-1">🔮 Spiritual:</h5>
                            <p class="text-gray-300 text-xs leading-relaxed">${meanings.spiritual}</p>
                        </div>
                    </div>
                </div>
                
                <!-- Metaphysical Information -->
                <div class="mt-3 pt-3 border-t border-purple-500/30">
                    <div class="flex flex-wrap items-center justify-center gap-1 text-xs">
                        <span class="element-badge element-${card.element.toLowerCase()}">${card.element}</span>
                        <span class="astro-symbol">${this.getAstrologySymbol(card.astrology)}</span>
                        <span class="text-gray-400">Numerology: ${card.numerology}</span>
                    </div>
                </div>
            </div>
        `;
        
        return cardDiv;
    }

    adjustReadingLayout(readingArea) {
        const cardCount = this.currentSpread.positions.length;
        
        if (cardCount === 1) {
            readingArea.className = 'reading-grid-single mb-6';
        } else if (cardCount === 3) {
            readingArea.className = 'reading-grid-three mb-6';
        } else if (cardCount === 4) {
            readingArea.className = 'reading-grid-four mb-6';
        } else if (cardCount === 10) {
            readingArea.className = 'mb-6';
            readingArea.innerHTML = '<div class="celtic-cross-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"></div>';
        }
    }

    completeReading() {
        this.readingInProgress = false;
        
        this.showLoading("Interpreting the cosmic messages...");
        
        setTimeout(() => {
            this.updateLoadingMessage("Weaving together the threads of destiny...");
            
            setTimeout(() => {
                // Hide deck and show save button
                document.getElementById('deckContainer').classList.add('hidden');
                document.getElementById('saveReadingBtn').classList.remove('hidden');
                
                // Update instruction with typing effect
                const instructionText = document.getElementById('instructionText');
                instructionText.classList.add('typing');
                instructionText.textContent = 
                    "Your reading is complete! Click on any card for detailed information.";
                
                this.updateLoadingMessage("Finalizing your divine guidance...");
                
                setTimeout(() => {
                    // Generate and show reading summary
                    this.generateReadingSummary();
                    
                    // Update progress to 100%
                    document.getElementById('progressFill').style.width = '100%';
                    document.getElementById('progressText').textContent = 'Reading Complete';
                    
                    this.hideLoading();
                    
                    // Remove typing effect after completion
                    setTimeout(() => {
                        instructionText.classList.remove('typing');
                    }, 2000);
                }, 1000);
            }, 1200);
        }, 800);
    }

    generateReadingSummary() {
        const summary = this.analyzeReading();
        const summaryElement = document.getElementById('readingSummary');
        const contentElement = document.getElementById('summaryContent');
        
        contentElement.innerHTML = `
            <div class="space-y-4 lg:space-y-6">
                <div class="space-y-4 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
                    <div>
                        <h4 class="text-base lg:text-lg font-semibold text-purple-300 mb-2 lg:mb-3">📊 Reading Overview</h4>
                        <ul class="space-y-1 lg:space-y-2 text-xs lg:text-sm text-gray-300">
                            <li><strong>Spread:</strong> ${this.currentSpread.name}</li>
                            <li><strong>Total Cards:</strong> ${this.drawnCards.length}</li>
                            <li><strong>Major Arcana:</strong> ${summary.majorArcanaCount}</li>
                            <li><strong>Reversed Cards:</strong> ${summary.reversedCount}</li>
                            <li><strong>Dominant Element:</strong> ${summary.dominantElement}</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="text-base lg:text-lg font-semibold text-purple-300 mb-2 lg:mb-3">🔮 Key Themes</h4>
                        <div class="keywords">
                            ${summary.keyThemes.map(theme => `<span class="keyword">${theme}</span>`).join('')}
                        </div>
                    </div>
                </div>
                
                <div>
                    <h4 class="text-base lg:text-lg font-semibold text-purple-300 mb-2 lg:mb-3">✨ Interpretation</h4>
                    <div class="space-y-2 lg:space-y-3 text-xs lg:text-sm text-gray-300 leading-relaxed">
                        ${summary.interpretation.map(paragraph => `<p>${paragraph}</p>`).join('')}
                    </div>
                </div>
                
                <div>
                    <h4 class="text-base lg:text-lg font-semibold text-purple-300 mb-2 lg:mb-3">💡 Guidance</h4>
                    <div class="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 p-3 lg:p-4 rounded-lg border border-purple-500/30">
                        <p class="text-xs lg:text-sm text-gray-300 leading-relaxed">${summary.guidance}</p>
                    </div>
                </div>
            </div>
        `;
        
        summaryElement.classList.remove('hidden');
    }

    analyzeReading() {
        const majorArcanaCount = this.drawnCards.filter(card => card.suit === 'Major Arcana').length;
        const reversedCount = this.drawnCards.filter(card => card.isReversed).length;
        
        // Count elements
        const elementCounts = {};
        this.drawnCards.forEach(card => {
            elementCounts[card.element] = (elementCounts[card.element] || 0) + 1;
        });
        
        const dominantElement = Object.entries(elementCounts).reduce((a, b) => 
            elementCounts[a[0]] > elementCounts[b[0]] ? a : b)[0];
        
        // Extract key themes
        const allKeywords = this.drawnCards.flatMap(card => 
            card.isReversed ? card.keywords.reversed : card.keywords.upright
        );
        const keyThemes = [...new Set(allKeywords)].slice(0, 8);
        
        // Generate interpretation
        const interpretation = this.generateInterpretation();
        const guidance = this.generateGuidance();
        
        return {
            majorArcanaCount,
            reversedCount,
            dominantElement,
            keyThemes,
            interpretation,
            guidance
        };
    }

    generateInterpretation() {
        const interpretations = [];
        
        // Analyze Major Arcana presence
        const majorArcanaCount = this.drawnCards.filter(card => card.suit === 'Major Arcana').length;
        if (majorArcanaCount >= this.drawnCards.length * 0.5) {
            interpretations.push("The strong presence of Major Arcana cards indicates that significant life themes and spiritual lessons are at play. This reading deals with important karmic influences and major life changes.");
        }
        
        // Analyze reversed cards
        const reversedCount = this.drawnCards.filter(card => card.isReversed).length;
        if (reversedCount >= this.drawnCards.length * 0.5) {
            interpretations.push("Many reversed cards suggest a time of internal reflection and inner work. There may be blockages or delays that require patience and introspection to overcome.");
        }
        
        // Analyze suit patterns
        const suitCounts = {};
        this.drawnCards.forEach(card => {
            if (card.suit !== 'Major Arcana') {
                suitCounts[card.suit] = (suitCounts[card.suit] || 0) + 1;
            }
        });
        
        const dominantSuit = Object.entries(suitCounts).reduce((a, b) => 
            (suitCounts[a[0]] || 0) > (suitCounts[b[0]] || 0) ? a : b)[0];
        
        if (suitCounts[dominantSuit] >= 2) {
            switch (dominantSuit) {
                case 'Wands':
                    interpretations.push("The presence of multiple Wands indicates themes of creativity, passion, and action. You're in a phase of dynamic energy and new projects.");
                    break;
                case 'Cups':
                    interpretations.push("Multiple Cups reveal emotional themes, relationships, and intuitive matters. Your heart and feelings are central to this reading.");
                    break;
                case 'Swords':
                    interpretations.push("The prevalence of Swords suggests mental challenges, communication issues, and the need for clear thinking and decisive action.");
                    break;
                case 'Pentacles':
                    interpretations.push("Multiple Pentacles highlight material concerns, career matters, and practical issues that require grounded, realistic approaches.");
                    break;
            }
        }
        
        // Add specific card interactions
        if (this.drawnCards.length >= 3) {
            interpretations.push(this.analyzeCardInteractions());
        }
        
        return interpretations.length > 0 ? interpretations : 
            ["This reading reveals a complex blend of energies and influences. Each card contributes its unique wisdom to your current situation."];
    }

    analyzeCardInteractions() {
        // Look for interesting card combinations
        const cardNames = this.drawnCards.map(card => card.name);
        
        // Check for complementary energies
        if (cardNames.includes('The Sun') && cardNames.includes('The Moon')) {
            return "The presence of both The Sun and The Moon suggests a balance between conscious and unconscious forces, day and night energies in your life.";
        }
        
        if (cardNames.includes('The Lovers') && cardNames.includes('Two of Cups')) {
            return "The combination of The Lovers and Two of Cups strongly emphasizes love, relationships, and deep emotional connections.";
        }
        
        // Check for challenging combinations
        if (cardNames.includes('The Tower') && cardNames.includes('Death')) {
            return "The presence of both The Tower and Death indicates a period of profound transformation and necessary endings that will lead to rebirth.";
        }
        
        // Check for Aces (new beginnings)
        const aceCount = this.drawnCards.filter(card => card.name.includes('Ace')).length;
        if (aceCount >= 2) {
            return "Multiple Aces indicate a time of new beginnings across different areas of your life - opportunities are abundant.";
        }
        
        return "The cards in your reading create a unique narrative that speaks to your current journey and the energies surrounding you.";
    }

    generateGuidance() {
        const guidanceOptions = [
            "Trust in the wisdom of the cards and allow their messages to guide you forward. Remember that you have the power to shape your destiny.",
            "The cards reveal both challenges and opportunities. Embrace the lessons they offer and use this insight to make empowered choices.",
            "This reading invites you to reflect deeply on the themes presented. Meditation and journaling can help integrate these insights.",
            "The universe is speaking to you through these cards. Pay attention to synchronicities and signs in your daily life.",
            "Each card in your reading offers a piece of the puzzle. Trust your intuition to understand how they connect to your life."
        ];
        
        // Choose guidance based on reading characteristics
        const reversedCount = this.drawnCards.filter(card => card.isReversed).length;
        if (reversedCount > this.drawnCards.length / 2) {
            return "The abundance of reversed cards suggests this is a time for patience and inner reflection. Trust that delays and challenges are preparing you for future success.";
        }
        
        const majorArcanaCount = this.drawnCards.filter(card => card.suit === 'Major Arcana').length;
        if (majorArcanaCount > this.drawnCards.length / 2) {
            return "The strong Major Arcana presence indicates you're at an important spiritual crossroads. Pay attention to the deeper lessons and trust in divine timing.";
        }
        
        return guidanceOptions[Math.floor(Math.random() * guidanceOptions.length)];
    }

    showCardDetails(card) {
        const modal = document.getElementById('cardModal');
        const modalCardName = document.getElementById('modalCardName');
        const modalCardContent = document.getElementById('modalCardContent');
        
        modalCardName.textContent = `${card.name} ${card.isReversed ? '(Reversed)' : ''}`;
        
        const meaningKey = card.isReversed ? 'reversed' : 'upright';
        const meanings = card.meanings[meaningKey];
        
        modalCardContent.innerHTML = `
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
                <div>
                    <div class="text-center mb-4 lg:mb-6">
                        <div class="w-32 h-48 sm:w-40 sm:h-60 lg:w-48 lg:h-72 mx-auto bg-gradient-to-b from-indigo-900 to-purple-900 rounded-lg border-2 border-purple-400 flex items-center justify-center relative overflow-hidden ${card.isReversed ? 'transform rotate-180' : ''}">
                            <div class="image-loading absolute inset-0"></div>
                            <img src="${card.image}" alt="${card.name}" class="w-full h-full object-cover rounded-lg opacity-0 transition-opacity duration-500" 
                                 onload="this.style.opacity='1'; this.previousElementSibling.style.display='none'"
                                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'; this.previousElementSibling.style.display='none'">
                            <div class="absolute inset-0 flex items-center justify-center text-purple-300 text-sm lg:text-lg font-medium text-center p-2 lg:p-4" style="display: none;">
                                ${card.name}
                            </div>
                        </div>
                    </div>
                    
                    <div class="text-center space-y-3 lg:space-y-4">
                        <div>
                            <h4 class="text-base lg:text-lg font-semibold text-purple-300 mb-2">Metaphysical Properties</h4>
                            <div class="space-y-1 lg:space-y-2 text-xs lg:text-sm">
                                <p><strong>Element:</strong> <span class="element-badge element-${card.element.toLowerCase()}">${card.element}</span></p>
                                <p><strong>Astrology:</strong> ${card.astrology} ${this.getAstrologySymbol(card.astrology)}</p>
                                <p><strong>Numerology:</strong> ${card.numerology}</p>
                                <p><strong>Suit:</strong> ${card.suit}</p>
                            </div>
                        </div>
                        
                        <div>
                            <h4 class="text-base lg:text-lg font-semibold text-purple-300 mb-2">Keywords</h4>
                            <div class="keywords">
                                ${card.keywords[meaningKey].map(keyword => 
                                    `<span class="keyword">${keyword}</span>`
                                ).join('')}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="space-y-4 lg:space-y-6">
                    <div>
                        <h4 class="text-base lg:text-lg font-semibold text-purple-300 mb-2 lg:mb-3">General Meaning</h4>
                        <p class="text-sm lg:text-base text-gray-300 leading-relaxed">${meanings.general}</p>
                    </div>
                    
                    <div>
                        <h4 class="text-base lg:text-lg font-semibold text-pink-300 mb-2 lg:mb-3">💕 Love & Relationships</h4>
                        <p class="text-sm lg:text-base text-gray-300 leading-relaxed">${meanings.love}</p>
                    </div>
                    
                    <div>
                        <h4 class="text-base lg:text-lg font-semibold text-yellow-300 mb-2 lg:mb-3">💼 Career & Finance</h4>
                        <p class="text-sm lg:text-base text-gray-300 leading-relaxed">${meanings.career}</p>
                    </div>
                    
                    <div>
                        <h4 class="text-base lg:text-lg font-semibold text-blue-300 mb-2 lg:mb-3">🔮 Spiritual Growth</h4>
                        <p class="text-sm lg:text-base text-gray-300 leading-relaxed">${meanings.spiritual}</p>
                    </div>
                    
                    <div class="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 p-3 lg:p-4 rounded-lg border border-purple-500/30">
                        <h4 class="text-base lg:text-lg font-semibold text-amber-300 mb-2">Position in Reading</h4>
                        <p class="text-sm lg:text-base text-gray-300"><strong>${card.position}:</strong> This card appears in the ${card.position.toLowerCase()} position, emphasizing its role in ${this.getPositionMeaning(card.position)}.</p>
                    </div>
                </div>
            </div>
        `;
        
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }

    closeModal() {
        const modal = document.getElementById('cardModal');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }

    saveReading() {
        if (this.isLoading) return;

        this.showButtonLoading('saveReadingBtn');
        this.showLoading("Preserving your reading in the akashic records...");

        setTimeout(() => {
            const reading = {
                id: Date.now(),
                date: new Date().toISOString(),
                spread: this.currentSpread.name,
                cards: this.drawnCards.map(card => ({
                    name: card.name,
                    position: card.position,
                    isReversed: card.isReversed,
                    suit: card.suit,
                    element: card.element
                }))
            };
            
            this.savedReadings.unshift(reading);
            localStorage.setItem('tarotReadings', JSON.stringify(this.savedReadings));
            
            this.updateLoadingMessage("Updating your reading history...");
            
            setTimeout(() => {
                this.loadSavedReadings();
                this.hideButtonLoading('saveReadingBtn');
                this.hideLoading();
                
                // Show confirmation
                this.showNotification('Reading saved successfully!');
            }, 800);
        }, 1200);
    }

    loadSavedReadings(showAll = false) {
        const container = document.getElementById('savedReadingsList');
        
        if (this.savedReadings.length === 0) {
            container.innerHTML = '<div class="col-span-full text-center py-8"><p class="text-gray-400 mb-4">📚 No saved readings yet</p><p class="text-gray-500 text-sm">Complete a reading and save it to build your mystical library!</p></div>';
            return;
        }

        const displayCount = showAll ? this.savedReadings.length : 6;
        const readingsToShow = this.savedReadings.slice(0, displayCount);
        
        container.innerHTML = readingsToShow.map(reading => `
            <div class="tarot-card hover:scale-105 transition-transform duration-300 relative group">
                <div class="p-3 lg:p-4 cursor-pointer" onclick="app.loadSavedReading(${reading.id})">
                    <div class="flex items-center justify-between mb-2">
                        <h4 class="text-base lg:text-lg font-semibold text-amber-400">${reading.spread}</h4>
                        <span class="text-xs bg-purple-600 px-2 py-1 rounded-full">📖 Load</span>
                    </div>
                    <p class="text-xs lg:text-sm text-gray-400 mb-2 lg:mb-3">
                        📅 ${new Date(reading.date).toLocaleDateString()} 
                        🕐 ${new Date(reading.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </p>
                    <div class="space-y-1">
                        ${reading.cards.slice(0, 3).map(card => `
                            <div class="text-xs text-gray-300">
                                <strong>${card.position}:</strong> ${card.name} ${card.isReversed ? '🔄' : '⬆️'}
                            </div>
                        `).join('')}
                        ${reading.cards.length > 3 ? `<div class="text-xs text-purple-300">✨ +${reading.cards.length - 3} more cards</div>` : ''}
                    </div>
                    <div class="mt-3 pt-2 border-t border-purple-500/30">
                        <p class="text-xs text-purple-300">🔮 Click to view full reading</p>
                    </div>
                </div>
                <button class="absolute top-2 right-2 w-6 h-6 bg-red-600 hover:bg-red-700 text-white rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" 
                        onclick="event.stopPropagation(); app.deleteSavedReading(${reading.id})" 
                        title="Delete reading">
                    ×
                </button>
            </div>
        `).join('');

        // Add "Show More" button if there are more readings
        if (!showAll && this.savedReadings.length > 6) {
            container.innerHTML += `
                <div class="col-span-full flex justify-center mt-6">
                    <button onclick="app.loadSavedReadings(true)" 
                            class="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105">
                        📜 Show All ${this.savedReadings.length} Readings
                    </button>
                </div>
            `;
        } else if (showAll && this.savedReadings.length > 6) {
            container.innerHTML += `
                <div class="col-span-full flex justify-center mt-6">
                    <button onclick="app.loadSavedReadings(false)" 
                            class="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105">
                        📚 Show Less
                    </button>
                </div>
            `;
        }
    }

    loadSavedReading(readingId) {
        const reading = this.savedReadings.find(r => r.id === readingId);
        if (!reading || this.isLoading) return;
        
        this.showLoading("Loading your saved reading...");
        
        setTimeout(() => {
            this.updateLoadingMessage("Reconstructing the cosmic arrangement...");
            
            setTimeout(() => {
                // Reset current state
                this.resetReadingState();
                
                // Find the spread configuration
                const spreadKey = Object.keys(spreads).find(key => 
                    spreads[key].name === reading.spread
                );
                
                if (!spreadKey) {
                    this.hideLoading();
                    this.showNotification('Error: Could not find spread configuration');
                    return;
                }
                
                this.currentSpread = spreads[spreadKey];
                this.readingInProgress = false; // This is a completed reading
                
                this.updateLoadingMessage("Restoring the sacred cards...");
                
                setTimeout(() => {
                    // Reconstruct the drawn cards with full data
                    this.drawnCards = reading.cards.map((savedCard, index) => {
                        // Find the full card data from the tarot deck
                        const fullCard = tarotCards.find(card => card.name === savedCard.name);
                        
                        if (!fullCard) {
                            console.warn(`Card not found: ${savedCard.name}`);
                            return null;
                        }
                        
                        return {
                            ...fullCard,
                            isReversed: savedCard.isReversed,
                            position: savedCard.position,
                            positionIndex: index
                        };
                    }).filter(card => card !== null);
                    
                    // Update UI to show the loaded reading
                    this.displayLoadedReading();
                    
                    this.updateLoadingMessage("Finalizing the restoration...");
                    
                    setTimeout(() => {
                        this.hideLoading();
                        this.showNotification(`Loaded reading from ${new Date(reading.date).toLocaleDateString()}`);
                    }, 500);
                }, 1000);
            }, 800);
        }, 600);
    }

    resetReadingState() {
        // Hide all UI elements
        document.getElementById('spreadSelection').classList.add('hidden');
        document.getElementById('startReadingBtn').classList.add('hidden');
        document.getElementById('deckContainer').classList.add('hidden');
        document.getElementById('progressContainer').classList.add('hidden');
        document.getElementById('readingArea').innerHTML = '';
        
        // Clear selections
        document.querySelectorAll('.spread-option').forEach(opt => opt.classList.remove('selected'));
    }

    displayLoadedReading() {
        // Update instruction text with loaded indicator
        const instructionText = document.getElementById('instructionText');
        instructionText.classList.remove('typing');
        instructionText.innerHTML = `
            <span class="inline-flex items-center gap-2">
                📖 Loaded ${this.currentSpread.name} reading 
                <span class="bg-green-600 text-white px-2 py-1 rounded-full text-xs">SAVED</span>
            </span>
            <br>
            <span class="text-sm text-gray-400">Click on any card for detailed information</span>
        `;
        
        // Show reading controls with additional context
        document.getElementById('resetReadingBtn').classList.remove('hidden');
        document.getElementById('saveReadingBtn').classList.add('hidden'); // Hide save since it's already saved
        
        // Set up the reading area layout
        const readingArea = document.getElementById('readingArea');
        this.adjustReadingLayout(readingArea);
        
        // Display each card with animation
        this.drawnCards.forEach((card, index) => {
            setTimeout(() => {
                this.displayCard(card);
            }, index * 300); // Stagger the card appearances
        });
        
        // Generate and show the reading summary after all cards are displayed
        setTimeout(() => {
            this.generateReadingSummary();
            document.getElementById('readingSummary').classList.remove('hidden');
        }, this.drawnCards.length * 300 + 500);
        
        // Update progress bar to show completion
        setTimeout(() => {
            document.getElementById('progressContainer').classList.remove('hidden');
            document.getElementById('progressFill').style.width = '100%';
            document.getElementById('progressText').textContent = 'Saved Reading Loaded';
        }, 200);
    }

    deleteSavedReading(readingId) {
        if (this.isLoading) return;

        // Show confirmation
        if (confirm('Are you sure you want to delete this reading? This action cannot be undone.')) {
            this.showLoading("Removing reading from the akashic records...");
            
            setTimeout(() => {
                // Remove the reading from the array
                this.savedReadings = this.savedReadings.filter(reading => reading.id !== readingId);
                
                // Update localStorage
                localStorage.setItem('tarotReadings', JSON.stringify(this.savedReadings));
                
                // Refresh the display
                this.loadSavedReadings();
                
                this.hideLoading();
                this.showNotification('Reading deleted successfully');
            }, 800);
        }
    }

    resetReading() {
        if (this.isLoading) return;

        this.showButtonLoading('resetReadingBtn');
        this.showLoading("Clearing the sacred space...");

        setTimeout(() => {
            this.updateLoadingMessage("Resetting cosmic energies...");
            
            setTimeout(() => {
                // Reset state
                this.currentDeck = [];
                this.drawnCards = [];
                this.readingInProgress = false;
                
                // Reset UI
                document.getElementById('spreadSelection').classList.remove('hidden');
                document.getElementById('startReadingBtn').classList.add('hidden');
                document.getElementById('resetReadingBtn').classList.add('hidden');
                document.getElementById('saveReadingBtn').classList.add('hidden');
                document.getElementById('deckContainer').classList.add('hidden');
                document.getElementById('progressContainer').classList.add('hidden');
                document.getElementById('readingSummary').classList.add('hidden');
                
                // Clear selections and content
                document.querySelectorAll('.spread-option').forEach(opt => opt.classList.remove('selected'));
                document.getElementById('readingArea').innerHTML = '';
                
                const instructionText = document.getElementById('instructionText');
                instructionText.classList.remove('typing');
                instructionText.textContent = 'Select a spread type to begin your mystical journey';
                
                // Reset progress
                document.getElementById('progressFill').style.width = '0%';
                document.getElementById('progressText').textContent = '';
                
                this.hideButtonLoading('resetReadingBtn');
                this.hideLoading();
            }, 1000);
        }, 600);
    }

    updateInstruction() {
        const remainingCards = this.currentSpread.positions.length - this.drawnCards.length;
        if (remainingCards > 0) {
            const nextPosition = this.currentSpread.positions[this.drawnCards.length];
            document.getElementById('instructionText').textContent = 
                `Click the deck to draw your ${nextPosition} card (${remainingCards} remaining)`;
        }
    }

    updateProgress() {
        const progress = (this.drawnCards.length / this.currentSpread.positions.length) * 100;
        document.getElementById('progressFill').style.width = `${progress}%`;
        document.getElementById('progressText').textContent = 
            `${this.drawnCards.length} of ${this.currentSpread.positions.length} cards drawn`;
    }

    shuffleDeck(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    formatCardNumber(card) {
        if (card.suit === 'Major Arcana') {
            return `${card.number}`;
        }
        return `${card.number} of ${card.suit}`;
    }

    getAstrologySymbol(astrology) {
        const symbols = {
            'Uranus': '♅',
            'Mercury': '☿',
            'Moon': '☽',
            'Venus': '♀',
            'Aries': '♈',
            'Taurus': '♉',
            'Gemini': '♊',
            'Cancer': '♋',
            'Leo': '♌',
            'Virgo': '♍',
            'Libra': '♎',
            'Scorpio': '♏',
            'Sagittarius': '♐',
            'Capricorn': '♑',
            'Aquarius': '♒',
            'Pisces': '♓',
            'Jupiter': '♃',
            'Mars': '♂',
            'Saturn': '♄'
        };
        
        for (const [key, symbol] of Object.entries(symbols)) {
            if (astrology.includes(key)) {
                return symbol;
            }
        }
        return '✨';
    }

    getPositionMeaning(position) {
        const meanings = {
            'Past': 'influences and experiences that have shaped your current situation',
            'Present': 'current energies and circumstances affecting you now',
            'Future': 'potential outcomes and energies moving toward you',
            'Guidance': 'wisdom and direction for your path forward',
            'You': 'your current state, motivations, and inner landscape',
            'Your Partner': 'your partner\'s energy, feelings, and perspective',
            'The Relationship': 'the dynamic and energy between you both',
            'Advice': 'guidance for navigating this relationship',
            'Present Situation': 'the heart of the matter and current circumstances',
            'Challenge/Cross': 'obstacles or lessons you\'re currently facing',
            'Distant Past/Foundation': 'deep roots and foundational influences',
            'Recent Past': 'recent events that led to this moment',
            'Possible Outcome': 'one potential future if current path continues',
            'Immediate Future': 'what\'s coming in the near term',
            'Your Approach': 'your conscious attitude and approach to the situation',
            'External Influences': 'outside forces and other people\'s influences',
            'Hopes and Fears': 'your deepest desires and anxieties about this matter',
            'Final Outcome': 'the most likely resolution based on current energies'
        };
        
        return meanings[position] || 'this aspect of your reading';
    }

    showNotification(message) {
        // Create a simple notification
        const notification = document.createElement('div');
        notification.className = 'fixed top-4 right-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300';
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Initialize the application
const app = new TarotReader();