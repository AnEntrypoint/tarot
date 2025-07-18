// Tarot Reader - Professional Edition
class TarotReader {
    constructor() {
        this.currentDeck = [];
        this.drawnCards = [];
        this.currentSpread = null;
        this.readingInProgress = false;
        this.savedReadings = JSON.parse(localStorage.getItem('tarotReadings')) || [];
        this.initializeEventListeners();
        this.loadSavedReadings();
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
        document.getElementById('analyzeReadingBtn').addEventListener('click', () => this.analyzeReading());
        
        // Deck click
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
    }


    selectSpread(option) {
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
    }

    startReading() {
        if (!this.currentSpread) return;

        // Initialize reading
        this.currentDeck = this.shuffleDeck([...tarotCards]);
        this.drawnCards = [];
        this.readingInProgress = true;

        // Update UI
        document.getElementById('spreadSelection').classList.add('hidden');
        document.getElementById('startReadingBtn').classList.add('hidden');
        document.getElementById('deckContainer').classList.remove('hidden');
        document.getElementById('resetReadingBtn').classList.remove('hidden');
        
        // Clear area and prepare for cards
        document.getElementById('readingArea').innerHTML = '';
        document.getElementById('readingSummary').classList.add('hidden');
        
        // Set instruction
        this.updateInstruction();
    }

    drawCard() {
        if (!this.readingInProgress || this.drawnCards.length >= this.currentSpread.positions.length) return;

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

        this.drawnCards.push(drawnCard);
        this.displayCard(drawnCard);
        this.updateInstruction();
        
        // Check if reading is complete
        if (this.drawnCards.length >= this.currentSpread.positions.length) {
            this.completeReading();
        }
    }

    displayCard(card) {
        const cardElement = this.createCardElement(card);
        
        // Add card to reading area
        const readingArea = document.getElementById('readingArea');
        
        // Adjust grid layout based on spread
        this.adjustReadingLayout(readingArea);
        
        readingArea.appendChild(cardElement);
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
        
        // Hide deck and show buttons
        document.getElementById('deckContainer').classList.add('hidden');
        document.getElementById('saveReadingBtn').classList.remove('hidden');
        document.getElementById('analyzeReadingBtn').classList.remove('hidden');
        
        // Update instruction
        const instructionText = document.getElementById('instructionText');
        instructionText.textContent = 
            "Your reading is complete! Click on any card for detailed information or analyze your reading.";
        
        // Generate and show reading summary
        this.generateReadingSummary();
    }

    generateReadingSummary() {
        const summary = this.analyzeReadingBasic();
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

    analyzeReadingBasic() {
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

    // === COMPREHENSIVE ANALYSIS METHODS ===

    analyzeReading() {
        if (!this.drawnCards.length) return;
        
        document.getElementById('analysisPanel').classList.remove('hidden');
        document.getElementById('analyzeReadingBtn').classList.add('hidden');
        
        this.generateComprehensiveAnalysis();
        this.showNotification('Advanced analysis generated successfully!');
    }

    switchAnalysisTab(tabName) {
        // Remove active class from all tabs and content
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        
        // Add active class to selected tab and content
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
        document.getElementById(`${tabName}Tab`).classList.add('active');
    }

    generateComprehensiveAnalysis() {
        this.generateOverviewAnalysis();
        this.generatePsychologyAnalysis();
        this.generateSpiritualAnalysis();
        this.generateKabbalahAnalysis();
        this.generateChakraAnalysis();
        this.generateArchetypeAnalysis();
        this.generateTimingAnalysis();
        this.generateKarmaAnalysis();
    }

    generateOverviewAnalysis() {
        const overview = this.calculateReadingOverview();
        const elemental = this.calculateElementalBalance();
        const suits = this.calculateSuitDistribution();
        const energy = this.calculateEnergyAssessment();

        document.getElementById('readingOverview').innerHTML = this.formatOverview(overview);
        document.getElementById('elementalBalance').innerHTML = this.formatElementalBalance(elemental);
        document.getElementById('suitDistribution').innerHTML = this.formatSuitDistribution(suits);
        document.getElementById('energyAssessment').innerHTML = this.formatEnergyAssessment(energy);
    }

    calculateReadingOverview() {
        const majorArcana = this.drawnCards.filter(card => card.suit === 'Major Arcana').length;
        const reversed = this.drawnCards.filter(card => card.isReversed).length;
        const courtCards = this.drawnCards.filter(card => ['Page', 'Knight', 'Queen', 'King'].includes(card.name.split(' ')[0])).length;
        
        const majorPercent = Math.round((majorArcana / this.drawnCards.length) * 100);
        const reversedPercent = Math.round((reversed / this.drawnCards.length) * 100);
        const courtPercent = Math.round((courtCards / this.drawnCards.length) * 100);

        return {
            majorArcana,
            majorPercent,
            reversed,
            reversedPercent,
            courtCards,
            courtPercent,
            totalCards: this.drawnCards.length,
            dominantInfluence: this.calculateDominantInfluence()
        };
    }

    calculateDominantInfluence() {
        if (this.drawnCards.filter(card => card.suit === 'Major Arcana').length >= 3) {
            return 'Spiritual/Karmic';
        } else if (this.drawnCards.filter(card => card.suit === 'Cups').length >= 2) {
            return 'Emotional';
        } else if (this.drawnCards.filter(card => card.suit === 'Swords').length >= 2) {
            return 'Mental/Intellectual';
        } else if (this.drawnCards.filter(card => card.suit === 'Wands').length >= 2) {
            return 'Creative/Passionate';
        } else if (this.drawnCards.filter(card => card.suit === 'Pentacles').length >= 2) {
            return 'Material/Practical';
        }
        return 'Balanced';
    }

    calculateElementalBalance() {
        const elements = { fire: 0, water: 0, air: 0, earth: 0 };
        
        this.drawnCards.forEach(card => {
            switch (card.element) {
                case 'Fire': elements.fire++; break;
                case 'Water': elements.water++; break;
                case 'Air': elements.air++; break;
                case 'Earth': elements.earth++; break;
            }
        });

        const total = this.drawnCards.length;
        return {
            fire: { count: elements.fire, percent: Math.round((elements.fire / total) * 100) },
            water: { count: elements.water, percent: Math.round((elements.water / total) * 100) },
            air: { count: elements.air, percent: Math.round((elements.air / total) * 100) },
            earth: { count: elements.earth, percent: Math.round((elements.earth / total) * 100) }
        };
    }

    calculateSuitDistribution() {
        const suits = {};
        this.drawnCards.forEach(card => {
            suits[card.suit] = (suits[card.suit] || 0) + 1;
        });
        
        const total = this.drawnCards.length;
        Object.keys(suits).forEach(suit => {
            suits[suit] = {
                count: suits[suit],
                percent: Math.round((suits[suit] / total) * 100)
            };
        });
        
        return suits;
    }

    calculateEnergyAssessment() {
        let positiveEnergy = 0;
        let challengingEnergy = 0;
        let neutralEnergy = 0;

        this.drawnCards.forEach(card => {
            const meanings = card.isReversed ? card.keywords.reversed : card.keywords.upright;
            const energy = this.assessCardEnergy(meanings);
            
            if (energy > 0) positiveEnergy++;
            else if (energy < 0) challengingEnergy++;
            else neutralEnergy++;
        });

        return {
            positive: { count: positiveEnergy, percent: Math.round((positiveEnergy / this.drawnCards.length) * 100) },
            challenging: { count: challengingEnergy, percent: Math.round((challengingEnergy / this.drawnCards.length) * 100) },
            neutral: { count: neutralEnergy, percent: Math.round((neutralEnergy / this.drawnCards.length) * 100) }
        };
    }

    assessCardEnergy(keywords) {
        const positive = ['success', 'love', 'joy', 'peace', 'growth', 'abundance', 'victory', 'harmony'];
        const negative = ['conflict', 'loss', 'fear', 'betrayal', 'failure', 'sorrow', 'defeat', 'chaos'];
        
        let score = 0;
        keywords.forEach(keyword => {
            if (positive.some(pos => keyword.toLowerCase().includes(pos))) score++;
            if (negative.some(neg => keyword.toLowerCase().includes(neg))) score--;
        });
        
        return score;
    }

    generateRelationshipAnalysis() {
        const interactions = this.calculateCardInteractions();
        const positional = this.calculatePositionalRelationships();
        
        document.getElementById('cardInteractions').innerHTML = this.formatCardInteractions(interactions);
        document.getElementById('positionalRelationships').innerHTML = this.formatPositionalRelationships(positional);
    }

    calculateCardInteractions() {
        const interactions = [];
        
        for (let i = 0; i < this.drawnCards.length - 1; i++) {
            for (let j = i + 1; j < this.drawnCards.length; j++) {
                const card1 = this.drawnCards[i];
                const card2 = this.drawnCards[j];
                const strength = this.calculateInteractionStrength(card1, card2);
                
                interactions.push({
                    card1: card1.name,
                    card2: card2.name,
                    strength: strength,
                    description: this.getInteractionDescription(card1, card2, strength)
                });
            }
        }
        
        return interactions.sort((a, b) => this.getStrengthValue(b.strength) - this.getStrengthValue(a.strength));
    }

    calculateInteractionStrength(card1, card2) {
        let strength = 0;
        
        // Same suit increases strength
        if (card1.suit === card2.suit) strength += 2;
        
        // Same element increases strength
        if (card1.element === card2.element) strength += 1;
        
        // Adjacent numbers increase strength
        if (Math.abs(card1.number - card2.number) === 1) strength += 1;
        
        // Both Major Arcana increases strength
        if (card1.suit === 'Major Arcana' && card2.suit === 'Major Arcana') strength += 2;
        
        // Opposing orientations create tension
        if (card1.isReversed !== card2.isReversed) strength += 1;
        
        if (strength >= 4) return 'strong';
        if (strength >= 2) return 'moderate';
        return 'weak';
    }

    getStrengthValue(strength) {
        const values = { 'strong': 3, 'moderate': 2, 'weak': 1 };
        return values[strength] || 0;
    }

    getInteractionDescription(card1, card2, strength) {
        const descriptions = {
            'strong': `${card1.name} and ${card2.name} create a powerful synergy, amplifying each other's energies and creating significant impact in your reading.`,
            'moderate': `${card1.name} and ${card2.name} work together harmoniously, supporting and complementing each other's messages.`,
            'weak': `${card1.name} and ${card2.name} have a subtle connection, providing nuanced insights when considered together.`
        };
        return descriptions[strength];
    }

    generateNumerologyAnalysis() {
        const numerology = this.calculateNumerology();
        const patterns = this.calculateNumberPatterns();
        const karmic = this.calculateKarmicNumbers();
        const lifePath = this.calculateLifePathConnections();
        
        document.getElementById('numerologicalSum').innerHTML = this.formatNumerology(numerology);
        document.getElementById('numberPatterns').innerHTML = this.formatNumberPatterns(patterns);
        document.getElementById('karmicNumbers').innerHTML = this.formatKarmicNumbers(karmic);
        document.getElementById('lifePathConnections').innerHTML = this.formatLifePathConnections(lifePath);
    }

    calculateNumerology() {
        const sum = this.drawnCards.reduce((total, card) => total + card.number, 0);
        const reducedSum = this.reduceToSingleDigit(sum);
        
        return {
            totalSum: sum,
            reducedSum: reducedSum,
            meaning: this.getNumerologyMeaning(reducedSum)
        };
    }

    reduceToSingleDigit(num) {
        while (num > 9) {
            num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
        }
        return num;
    }

    getNumerologyMeaning(number) {
        const meanings = {
            1: 'New beginnings, leadership, independence',
            2: 'Balance, cooperation, partnerships',
            3: 'Creativity, communication, growth',
            4: 'Stability, hard work, foundation',
            5: 'Change, freedom, adventure',
            6: 'Love, healing, responsibility',
            7: 'Spirituality, introspection, wisdom',
            8: 'Material success, power, achievement',
            9: 'Completion, wisdom, universal love'
        };
        return meanings[number] || 'Universal energy';
    }

    formatOverview(overview) {
        return `
            <div class="analysis-metric">
                <span class="metric-label">Total Cards</span>
                <span class="metric-value">${overview.totalCards}</span>
            </div>
            <div class="analysis-metric">
                <span class="metric-label">Major Arcana</span>
                <span class="metric-value">${overview.majorArcana} (${overview.majorPercent}%)</span>
            </div>
            <div class="analysis-metric">
                <span class="metric-label">Reversed Cards</span>
                <span class="metric-value">${overview.reversed} (${overview.reversedPercent}%)</span>
            </div>
            <div class="analysis-metric">
                <span class="metric-label">Court Cards</span>
                <span class="metric-value">${overview.courtCards} (${overview.courtPercent}%)</span>
            </div>
            <div class="analysis-metric">
                <span class="metric-label">Dominant Influence</span>
                <span class="metric-value">${overview.dominantInfluence}</span>
            </div>
        `;
    }

    formatElementalBalance(elemental) {
        return `
            <div class="mb-4">
                <div class="analysis-metric">
                    <span class="metric-label"><span class="element-indicator fire"></span>Fire</span>
                    <span class="metric-value">${elemental.fire.count} (${elemental.fire.percent}%)</span>
                </div>
                <div class="progress-bar-container">
                    <div class="progress-bar-fill" style="width: ${elemental.fire.percent}%; background: #dc2626;"></div>
                </div>
            </div>
            <div class="mb-4">
                <div class="analysis-metric">
                    <span class="metric-label"><span class="element-indicator water"></span>Water</span>
                    <span class="metric-value">${elemental.water.count} (${elemental.water.percent}%)</span>
                </div>
                <div class="progress-bar-container">
                    <div class="progress-bar-fill" style="width: ${elemental.water.percent}%; background: #2563eb;"></div>
                </div>
            </div>
            <div class="mb-4">
                <div class="analysis-metric">
                    <span class="metric-label"><span class="element-indicator air"></span>Air</span>
                    <span class="metric-value">${elemental.air.count} (${elemental.air.percent}%)</span>
                </div>
                <div class="progress-bar-container">
                    <div class="progress-bar-fill" style="width: ${elemental.air.percent}%; background: #7c3aed;"></div>
                </div>
            </div>
            <div class="mb-4">
                <div class="analysis-metric">
                    <span class="metric-label"><span class="element-indicator earth"></span>Earth</span>
                    <span class="metric-value">${elemental.earth.count} (${elemental.earth.percent}%)</span>
                </div>
                <div class="progress-bar-container">
                    <div class="progress-bar-fill" style="width: ${elemental.earth.percent}%; background: #16a34a;"></div>
                </div>
            </div>
        `;
    }

    formatNumerology(numerology) {
        return `
            <div class="text-center mb-4">
                <div class="numerology-circle">${numerology.reducedSum}</div>
                <p class="text-sm text-gray-400">Sum: ${numerology.totalSum} → ${numerology.reducedSum}</p>
            </div>
            <p class="text-center">${numerology.meaning}</p>
        `;
    }

    // Additional comprehensive analysis methods continue...
    calculatePositionalRelationships() {
        return `Analysis of how each card's position influences its neighbors and the overall reading flow.`;
    }

    formatCardInteractions(interactions) {
        return interactions.slice(0, 3).map(interaction => `
            <div class="card-relationship">
                <div>
                    <div class="font-medium">${interaction.card1} + ${interaction.card2}</div>
                    <div class="text-sm text-gray-400 mt-1">${interaction.description}</div>
                </div>
                <span class="relationship-strength ${interaction.strength}">${interaction.strength.toUpperCase()}</span>
            </div>
        `).join('');
    }

    formatPositionalRelationships(positional) {
        return `<p class="text-gray-300">${positional}</p>`;
    }

    formatSuitDistribution(suits) {
        return Object.entries(suits).map(([suit, data]) => `
            <div class="analysis-metric">
                <span class="metric-label">${suit}</span>
                <span class="metric-value">${data.count} (${data.percent}%)</span>
            </div>
        `).join('');
    }

    formatEnergyAssessment(energy) {
        return `
            <div class="analysis-metric">
                <span class="metric-label">Positive Energy</span>
                <span class="metric-value">${energy.positive.count} (${energy.positive.percent}%)</span>
            </div>
            <div class="analysis-metric">
                <span class="metric-label">Challenging Energy</span>
                <span class="metric-value">${energy.challenging.count} (${energy.challenging.percent}%)</span>
            </div>
            <div class="analysis-metric">
                <span class="metric-label">Neutral Energy</span>
                <span class="metric-value">${energy.neutral.count} (${energy.neutral.percent}%)</span>
            </div>
        `;
    }

    calculateNumberPatterns() {
        return "Analysis of repeating numbers and sequences in your reading.";
    }

    calculateKarmicNumbers() {
        return "Identification of karmic numbers and their spiritual significance.";
    }

    calculateLifePathConnections() {
        return "How this reading connects to your life path and spiritual journey.";
    }

    formatNumberPatterns(patterns) {
        return `<p class="text-gray-300">${patterns}</p>`;
    }

    formatKarmicNumbers(karmic) {
        return `<p class="text-gray-300">${karmic}</p>`;
    }

    formatLifePathConnections(lifePath) {
        return `<p class="text-gray-300">${lifePath}</p>`;
    }

    // === DEEP PSYCHOLOGICAL ANALYSIS ===
    generatePsychologyAnalysis() {
        const jungian = this.analyzeJungianPatterns();
        const shadow = this.analyzeShadowWork();
        const anima = this.analyzeAnimaAnimus();
        const collective = this.analyzeCollectiveUnconscious();
        const psychological = this.analyzePsychologicalPatterns();

        document.getElementById('jungianAnalysis').innerHTML = this.formatJungianAnalysis(jungian);
        document.getElementById('shadowWork').innerHTML = this.formatShadowWork(shadow);
        document.getElementById('animaAnimus').innerHTML = this.formatAnimaAnimus(anima);
        document.getElementById('collectiveUnconscious').innerHTML = this.formatCollectiveUnconscious(collective);
        document.getElementById('psychologicalPatterns').innerHTML = this.formatPsychologicalPatterns(psychological);
    }

    analyzeJungianPatterns() {
        const archetypes = this.drawnCards.map(card => this.getJungianArchetype(card));
        const dominantArchetype = this.findDominantArchetype(archetypes);
        const individuation = this.analyzeIndividuationProcess();
        const complexes = this.identifyPsychologicalComplexes();

        return {
            dominantArchetype,
            individuation,
            complexes,
            archetypes,
            integration: this.assessArchetypeIntegration(archetypes)
        };
    }

    getJungianArchetype(card) {
        const archetypeMap = {
            'The Fool': 'The Innocent/Seeker',
            'The Magician': 'The Magician/Creator',
            'The High Priestess': 'The Wise Woman/Anima',
            'The Empress': 'The Mother/Caregiver',
            'The Emperor': 'The Father/Authority',
            'The Hierophant': 'The Sage/Teacher',
            'The Lovers': 'The Lover/Relationship',
            'The Chariot': 'The Hero/Warrior',
            'Strength': 'The Gentle Spirit/Inner Power',
            'The Hermit': 'The Wise Old Man/Seeker',
            'Wheel of Fortune': 'The Fate/Destiny',
            'Justice': 'The Judge/Balance',
            'The Hanged Man': 'The Martyr/Sacrifice',
            'Death': 'The Transformer/Endings',
            'Temperance': 'The Alchemist/Healer',
            'The Devil': 'The Shadow/Tempter',
            'The Tower': 'The Destroyer/Revelation',
            'The Star': 'The Hope/Inspiration',
            'The Moon': 'The Mystic/Illusion',
            'The Sun': 'The Child/Joy',
            'Judgement': 'The Awakener/Rebirth',
            'The World': 'The Fulfilled Self/Completion'
        };

        return {
            card: card.name,
            archetype: archetypeMap[card.name] || 'The Seeker',
            orientation: card.isReversed ? 'Shadow Expression' : 'Integrated Expression',
            psychologicalFunction: this.getPsychologicalFunction(card)
        };
    }

    getPsychologicalFunction(card) {
        const functions = {
            'Swords': 'Thinking Function - Mental processes, logic, communication',
            'Cups': 'Feeling Function - Emotions, relationships, values',
            'Wands': 'Intuitive Function - Inspiration, possibilities, vision',
            'Pentacles': 'Sensation Function - Physical reality, material world, practical matters',
            'Major Arcana': 'Transcendent Function - Spiritual growth, archetypal patterns'
        };
        return functions[card.suit] || 'Transcendent Function';
    }

    analyzeShadowWork() {
        const reversedCards = this.drawnCards.filter(card => card.isReversed);
        const shadowThemes = reversedCards.map(card => this.getShadowTheme(card));
        const integration = this.assessShadowIntegration();
        const projection = this.identifyProjectionPatterns();

        return {
            shadowCards: reversedCards,
            shadowThemes,
            integration,
            projection,
            healing: this.getShadowHealingGuidance(shadowThemes)
        };
    }

    getShadowTheme(card) {
        const shadowMap = {
            'The Fool': 'Recklessness, naive decisions, avoiding responsibility',
            'The Magician': 'Manipulation, abuse of power, trickery',
            'The High Priestess': 'Secrets, hidden knowledge used for harm, intuition ignored',
            'The Empress': 'Smothering, creative blocks, infertility issues',
            'The Emperor': 'Tyranny, control issues, harsh authority',
            'The Hierophant': 'Dogma, rigid thinking, spiritual bypassing',
            'The Lovers': 'Codependency, poor choices, relationship sabotage',
            'The Chariot': 'Aggression, lack of control, scattered energy',
            'Strength': 'Weakness, self-doubt, inner turmoil',
            'The Hermit': 'Isolation, depression, refusing guidance',
            'Wheel of Fortune': 'Bad luck, victimhood, resistance to change',
            'Justice': 'Injustice, bias, avoiding accountability',
            'The Hanged Man': 'Martyrdom, victim mentality, refusing to let go',
            'Death': 'Resistance to change, clinging to past, stagnation',
            'Temperance': 'Imbalance, excess, healing crisis',
            'The Devil': 'Addiction, materialism, spiritual bondage',
            'The Tower': 'Chaos, destruction, ego collapse',
            'The Star': 'Despair, loss of faith, disconnection',
            'The Moon': 'Illusion, fear, subconscious fears',
            'The Sun': 'False optimism, ego inflation, delayed happiness',
            'Judgement': 'Self-judgment, refusing forgiveness, spiritual bypassing',
            'The World': 'Incompletion, lack of closure, fear of success'
        };

        return {
            card: card.name,
            theme: shadowMap[card.name] || 'Unintegrated energy pattern',
            healing: this.getShadowHealingPath(card)
        };
    }

    getShadowHealingPath(card) {
        const healingPaths = {
            'The Fool': 'Develop discernment while maintaining openness',
            'The Magician': 'Use power for service, practice ethical leadership',
            'The High Priestess': 'Share wisdom appropriately, trust inner guidance',
            'The Empress': 'Practice healthy boundaries, nurture without smothering',
            'The Emperor': 'Lead with compassion, structure with flexibility',
            'The Hierophant': 'Question beliefs, seek personal truth',
            'The Lovers': 'Develop self-love, make authentic choices',
            'The Chariot': 'Channel energy constructively, practice patience',
            'Strength': 'Cultivate inner power, practice self-compassion',
            'The Hermit': 'Seek community, share wisdom gained',
            'Wheel of Fortune': 'Accept change, take responsibility for responses',
            'Justice': 'Practice fairness, seek balance in all things',
            'The Hanged Man': 'Surrender with wisdom, find meaning in sacrifice',
            'Death': 'Embrace transformation, release with grace',
            'Temperance': 'Find middle way, practice moderation',
            'The Devil': 'Recognize illusions, choose freedom over bondage',
            'The Tower': 'Rebuild on solid foundation, find blessing in breakdown',
            'The Star': 'Reconnect with hope, trust in divine timing',
            'The Moon': 'Face fears directly, trust intuitive knowing',
            'The Sun': 'Embrace authentic joy, integrate shadow with light',
            'Judgement': 'Practice self-forgiveness, embrace rebirth',
            'The World': 'Celebrate achievements, prepare for new cycles'
        };

        return healingPaths[card.name] || 'Integrate this energy through conscious awareness';
    }

    // === SPIRITUAL ANALYSIS ===
    generateSpiritualAnalysis() {
        const soulLessons = this.analyzeSoulLessons();
        const spiritualGifts = this.identifySpiritualGifts();
        const higherSelf = this.analyzeHigherSelfMessages();
        const ascension = this.analyzeAscensionPath();

        document.getElementById('soulLessons').innerHTML = this.formatSoulLessons(soulLessons);
        document.getElementById('spiritualGifts').innerHTML = this.formatSpiritualGifts(spiritualGifts);
        document.getElementById('higherSelfMessages').innerHTML = this.formatHigherSelfMessages(higherSelf);
        document.getElementById('ascensionPath').innerHTML = this.formatAscensionPath(ascension);
    }

    analyzeSoulLessons() {
        const majorArcana = this.drawnCards.filter(card => card.suit === 'Major Arcana');
        const lessons = majorArcana.map(card => this.getSoulLesson(card));
        const primaryLesson = this.identifyPrimaryLesson(lessons);
        const karmic = this.identifyKarmicLessons();

        return {
            primaryLesson,
            allLessons: lessons,
            karmic,
            integration: this.assessLessonIntegration(lessons)
        };
    }

    getSoulLesson(card) {
        const lessonMap = {
            'The Fool': 'Trust in the journey, embrace beginnings with faith',
            'The Magician': 'Master your creative power, manifest with intention',
            'The High Priestess': 'Develop intuition, trust inner wisdom',
            'The Empress': 'Create abundantly, nurture with unconditional love',
            'The Emperor': 'Build stable foundations, lead with wisdom',
            'The Hierophant': 'Seek truth beyond dogma, teach through example',
            'The Lovers': 'Choose love over fear, integrate opposites',
            'The Chariot': 'Direct your will, overcome through determination',
            'Strength': 'Find power in gentleness, tame the inner beast',
            'The Hermit': 'Seek truth within, share wisdom gained',
            'Wheel of Fortune': 'Accept life\'s cycles, find center in change',
            'Justice': 'Seek balance, accept consequences with grace',
            'The Hanged Man': 'Surrender to higher will, find wisdom in waiting',
            'Death': 'Embrace transformation, release what no longer serves',
            'Temperance': 'Find the middle way, blend opposites harmoniously',
            'The Devil': 'Recognize illusions, choose freedom over bondage',
            'The Tower': 'Rebuild on truth, find blessing in destruction',
            'The Star': 'Maintain hope, trust in divine guidance',
            'The Moon': 'Navigate illusions, trust your inner light',
            'The Sun': 'Embrace your authentic self, radiate joy',
            'Judgement': 'Awaken to your true calling, forgive and be reborn',
            'The World': 'Celebrate completion, prepare for new cycles'
        };

        return {
            card: card.name,
            lesson: lessonMap[card.name] || 'Embrace this energy\'s teaching',
            stage: this.getSpiritalStage(card),
            mastery: this.assessMastery(card)
        };
    }

    // === KABBALISTIC ANALYSIS ===
    generateKabbalahAnalysis() {
        const treeOfLife = this.analyzeTreeOfLifePosition();
        const sephiroth = this.analyzeSephirothInfluences();
        const pathworking = this.analyzePathworking();
        const hebrewLetters = this.analyzeHebrewLetters();

        document.getElementById('treeOfLife').innerHTML = this.formatTreeOfLife(treeOfLife);
        document.getElementById('sephirothInfluences').innerHTML = this.formatSephirothInfluences(sephiroth);
        document.getElementById('pathworking').innerHTML = this.formatPathworking(pathworking);
        document.getElementById('hebrewLetters').innerHTML = this.formatHebrewLetters(hebrewLetters);
    }

    analyzeTreeOfLifePosition() {
        const positions = this.drawnCards.map(card => this.getTreeOfLifePosition(card));
        const dominantSephirah = this.findDominantSephirah(positions);
        const pillar = this.identifyPillarInfluence();
        const world = this.identifyWorldInfluence();

        return {
            positions,
            dominantSephirah,
            pillar,
            world,
            balance: this.assessTreeBalance(positions)
        };
    }

    getTreeOfLifePosition(card) {
        const treeMap = {
            'The Fool': 'Aleph - Air - Path between Kether and Chokmah',
            'The Magician': 'Beth - Mercury - Path between Kether and Binah',
            'The High Priestess': 'Gimel - Moon - Path between Kether and Tiphareth',
            'The Empress': 'Daleth - Venus - Path between Chokmah and Binah',
            'The Emperor': 'Heh - Aries - Path between Chokmah and Tiphareth',
            'The Hierophant': 'Vav - Taurus - Path between Chokmah and Chesed',
            'The Lovers': 'Zayin - Gemini - Path between Binah and Tiphareth',
            'The Chariot': 'Cheth - Cancer - Path between Binah and Geburah',
            'Strength': 'Teth - Leo - Path between Chesed and Geburah',
            'The Hermit': 'Yod - Virgo - Path between Chesed and Tiphareth',
            'Wheel of Fortune': 'Kaph - Jupiter - Path between Chesed and Netzach',
            'Justice': 'Lamed - Libra - Path between Geburah and Tiphareth',
            'The Hanged Man': 'Mem - Water - Path between Geburah and Hod',
            'Death': 'Nun - Scorpio - Path between Tiphareth and Netzach',
            'Temperance': 'Samekh - Sagittarius - Path between Tiphareth and Yesod',
            'The Devil': 'Ayin - Capricorn - Path between Tiphareth and Hod',
            'The Tower': 'Peh - Mars - Path between Netzach and Hod',
            'The Star': 'Tzaddi - Aquarius - Path between Netzach and Yesod',
            'The Moon': 'Qoph - Pisces - Path between Netzach and Malkuth',
            'The Sun': 'Resh - Sun - Path between Hod and Yesod',
            'Judgement': 'Shin - Fire - Path between Hod and Malkuth',
            'The World': 'Tav - Saturn - Path between Yesod and Malkuth'
        };

        // Extract primary sephirah from path
        const extractPrimarySephirah = (pathDescription) => {
            if (pathDescription.includes('Kether')) return 'Kether';
            if (pathDescription.includes('Chokmah')) return 'Chokmah';
            if (pathDescription.includes('Binah')) return 'Binah';
            if (pathDescription.includes('Chesed')) return 'Chesed';
            if (pathDescription.includes('Geburah')) return 'Geburah';
            if (pathDescription.includes('Tiphareth')) return 'Tiphareth';
            if (pathDescription.includes('Netzach')) return 'Netzach';
            if (pathDescription.includes('Hod')) return 'Hod';
            if (pathDescription.includes('Yesod')) return 'Yesod';
            if (pathDescription.includes('Malkuth')) return 'Malkuth';
            return 'Malkuth';
        };
        
        const pathDescription = treeMap[card.name] || 'Malkuth - The Kingdom';
        
        return {
            card: card.name,
            position: pathDescription,
            sephirah: extractPrimarySephirah(pathDescription),
            meaning: this.getKabbalisticMeaning(card)
        };
    }

    // === CHAKRA ANALYSIS ===
    generateChakraAnalysis() {
        const alignment = this.analyzeChakraAlignment();
        const blocks = this.identifyEnergyBlocks();
        const kundalini = this.analyzeKundaliniFlow();
        const meridian = this.analyzeMeridianActivity();

        document.getElementById('chakraAlignment').innerHTML = this.formatChakraAlignment(alignment);
        document.getElementById('energyBlocks').innerHTML = this.formatEnergyBlocks(blocks);
        document.getElementById('kundaliniFlow').innerHTML = this.formatKundaliniFlow(kundalini);
        document.getElementById('meridianActivity').innerHTML = this.formatMeridianActivity(meridian);
    }

    analyzeChakraAlignment() {
        const chakraCards = this.drawnCards.map(card => this.getChakraCorrespondence(card));
        const dominantChakra = this.findDominantChakra(chakraCards);
        const balance = this.assessChakraBalance(chakraCards);
        const flow = this.analyzeEnergyFlow(chakraCards);

        return {
            chakraCards,
            dominantChakra,
            balance,
            flow,
            recommendations: this.getChakraRecommendations(balance)
        };
    }

    getChakraCorrespondence(card) {
        const chakraMap = {
            'Root Chakra': ['The Emperor', 'King of Pentacles', 'Four of Pentacles'],
            'Sacral Chakra': ['The Empress', 'Queen of Cups', 'Two of Cups'],
            'Solar Plexus': ['The Magician', 'King of Wands', 'Three of Wands'],
            'Heart Chakra': ['The Lovers', 'Queen of Cups', 'Six of Cups'],
            'Throat Chakra': ['The Hierophant', 'King of Swords', 'Three of Swords'],
            'Third Eye': ['The High Priestess', 'Queen of Swords', 'Seven of Cups'],
            'Crown Chakra': ['The Fool', 'The World', 'Ten of Pentacles']
        };

        for (const [chakra, cards] of Object.entries(chakraMap)) {
            if (cards.includes(card.name)) {
                return {
                    card: card.name,
                    chakra: chakra,
                    energy: this.getChakraEnergy(chakra, card.isReversed),
                    healing: this.getChakraHealing(chakra, card.isReversed)
                };
            }
        }

        return {
            card: card.name,
            chakra: 'Multi-Chakra',
            energy: 'Balanced energy flow',
            healing: 'Continue current practices'
        };
    }

    // === ARCHETYPE ANALYSIS ===
    generateArchetypeAnalysis() {
        const primary = this.identifyPrimaryArchetypes();
        const mythological = this.analyzeMythologicalConnections();
        const hero = this.analyzeHeroJourney();
        const goddess = this.analyzeGoddessAspects();

        document.getElementById('primaryArchetypes').innerHTML = this.formatPrimaryArchetypes(primary);
        document.getElementById('mythologicalConnections').innerHTML = this.formatMythologicalConnections(mythological);
        document.getElementById('heroJourney').innerHTML = this.formatHeroJourney(hero);
        document.getElementById('goddessAspects').innerHTML = this.formatGoddessAspects(goddess);
    }

    // === TIMING ANALYSIS ===
    generateTimingAnalysis() {
        const seasonal = this.analyzeSeasonalTiming();
        const lunar = this.analyzeLunarCycles();
        const planetary = this.analyzePlanetaryTransits();
        const manifestation = this.analyzeManifestationWindows();

        document.getElementById('seasonalTiming').innerHTML = this.formatSeasonalTiming(seasonal);
        document.getElementById('lunarCycles').innerHTML = this.formatLunarCycles(lunar);
        document.getElementById('planetaryTransits').innerHTML = this.formatPlanetaryTransits(planetary);
        document.getElementById('manifestationWindows').innerHTML = this.formatManifestationWindows(manifestation);
    }

    // === KARMIC ANALYSIS ===
    generateKarmaAnalysis() {
        const debts = this.analyzeKarmicDebts();
        const pastLife = this.analyzePastLifeInfluences();
        const contracts = this.analyzeSoulContracts();
        const dharma = this.analyzeDharmicPurpose();

        document.getElementById('karmicDebts').innerHTML = this.formatKarmicDebts(debts);
        document.getElementById('pastLifeInfluences').innerHTML = this.formatPastLifeInfluences(pastLife);
        document.getElementById('soulContracts').innerHTML = this.formatSoulContracts(contracts);
        document.getElementById('dharmicPurpose').innerHTML = this.formatDharmicPurpose(dharma);
    }

    // === FORMATTING METHODS ===
    formatJungianAnalysis(analysis) {
        return `
            <div class="mb-4">
                <h5 class="font-semibold text-blue-400 mb-2">Dominant Archetype</h5>
                <p class="text-sm text-gray-300">${analysis.dominantArchetype}</p>
            </div>
            <div class="mb-4">
                <h5 class="font-semibold text-blue-400 mb-2">Individuation Process</h5>
                <p class="text-sm text-gray-300">${analysis.individuation}</p>
            </div>
            <div class="mb-4">
                <h5 class="font-semibold text-blue-400 mb-2">Psychological Complexes</h5>
                <ul class="insights-list text-sm">
                    ${analysis.complexes.map(complex => `<li>${complex}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    formatShadowWork(shadow) {
        return `
            <div class="mb-4">
                <h5 class="font-semibold text-blue-400 mb-2">Shadow Cards (${shadow.shadowCards.length})</h5>
                <div class="text-sm text-gray-300">
                    ${shadow.shadowThemes.map(theme => `
                        <div class="mb-2 p-2 bg-red-900 bg-opacity-20 rounded border-l-2 border-red-400">
                            <strong>${theme.card}:</strong> ${theme.theme}
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="mb-4">
                <h5 class="font-semibold text-blue-400 mb-2">Healing Guidance</h5>
                <p class="text-sm text-gray-300">${shadow.healing}</p>
            </div>
        `;
    }

    formatSoulLessons(lessons) {
        return `
            <div class="mb-4">
                <h5 class="font-semibold text-blue-400 mb-2">Primary Soul Lesson</h5>
                <p class="text-sm text-gray-300">${lessons.primaryLesson}</p>
            </div>
            <div class="mb-4">
                <h5 class="font-semibold text-blue-400 mb-2">All Lessons</h5>
                <ul class="insights-list text-sm">
                    ${lessons.allLessons.map(lesson => `<li><strong>${lesson.card}:</strong> ${lesson.lesson}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    // Enhanced Jungian analysis methods
    findDominantArchetype(archetypes) {
        const archetypeFrequency = {};
        archetypes.forEach(arch => {
            const baseType = arch.archetype.split('/')[0];
            archetypeFrequency[baseType] = (archetypeFrequency[baseType] || 0) + 1;
        });
        
        const dominant = Object.entries(archetypeFrequency).reduce((a, b) => 
            archetypeFrequency[a[0]] > archetypeFrequency[b[0]] ? a : b
        );
        
        const archetypeAnalysis = {
            'The Innocent': 'You are in a phase of spiritual exploration and personal growth, seeking authenticity and truth.',
            'The Magician': 'You are developing your creative powers and learning to manifest your vision in the world.',
            'The Wise Woman': 'You are accessing deep intuitive wisdom and learning to trust your inner guidance.',
            'The Mother': 'You are in a nurturing phase, either caring for others or developing your own creative projects.',
            'The Father': 'You are establishing structure and authority in your life, learning to lead with wisdom.',
            'The Sage': 'You are seeking deeper knowledge and understanding, ready to share wisdom with others.',
            'The Lover': 'You are exploring relationships and learning to choose love over fear in all situations.',
            'The Hero': 'You are on a quest for achievement and recognition, overcoming obstacles through courage.',
            'The Gentle Spirit': 'You are learning to integrate power with compassion, finding strength in gentleness.',
            'The Wise Old Man': 'You are seeking spiritual guidance and preparing to become a guide for others.',
            'The Transformer': 'You are in a major life transition, releasing old patterns to embrace new growth.',
            'The Shadow': 'You are confronting hidden aspects of yourself, learning to integrate rejected parts.',
            'The Mystic': 'You are developing psychic abilities and learning to navigate the world of spirit.',
            'The Child': 'You are reconnecting with joy, wonder, and authentic self-expression.',
            'The Fulfilled Self': 'You are approaching completion of a major life cycle and preparing for new beginnings.'
        };
        
        return archetypeAnalysis[dominant[0]] || 'You are integrating multiple archetypal energies in a unique personal synthesis.';
    }
    
    analyzeIndividuationProcess() {
        const majorArcana = this.drawnCards.filter(card => card.suit === 'Major Arcana');
        const reversedMajor = majorArcana.filter(card => card.isReversed);
        const progression = majorArcana.map(card => card.number).sort((a, b) => a - b);
        
        let process = 'Your psyche is integrating conscious and unconscious elements';
        
        // Analyze stage of individuation based on Major Arcana progression
        if (progression.includes(0)) {
            process += ', beginning a new cycle of self-discovery';
        }
        if (progression.some(num => num >= 1 && num <= 7)) {
            process += ', developing personal identity and ego strength';
        }
        if (progression.some(num => num >= 8 && num <= 14)) {
            process += ', confronting shadow aspects and integrating the unconscious';
        }
        if (progression.some(num => num >= 15 && num <= 21)) {
            process += ', approaching spiritual awakening and wholeness';
        }
        
        if (reversedMajor.length > majorArcana.length / 2) {
            process += '. There is significant shadow work required for healthy integration.';
        } else {
            process += ', moving toward greater psychological wholeness.';
        }
        
        return process;
    }
    
    identifyPsychologicalComplexes() {
        const complexes = [];
        const suits = this.drawnCards.map(card => card.suit);
        const reversedCards = this.drawnCards.filter(card => card.isReversed);
        
        // Authority Complex
        const authorityCards = ['The Emperor', 'The Hierophant', 'Justice', 'King of Swords', 'King of Wands'];
        const hasAuthority = this.drawnCards.some(card => authorityCards.includes(card.name));
        if (hasAuthority) {
            const reversed = this.drawnCards.filter(card => 
                authorityCards.includes(card.name) && card.isReversed
            ).length > 0;
            if (reversed) {
                complexes.push('Authority Complex - Resistance to authority or abuse of power, examine your relationship with control');
            } else {
                complexes.push('Authority Complex - Healthy relationship with power and leadership, developing mature authority');
            }
        }
        
        // Mother Complex
        const motherCards = ['The Empress', 'Queen of Cups', 'Queen of Pentacles'];
        const hasMother = this.drawnCards.some(card => motherCards.includes(card.name));
        if (hasMother) {
            const reversed = this.drawnCards.filter(card => 
                motherCards.includes(card.name) && card.isReversed
            ).length > 0;
            if (reversed) {
                complexes.push('Mother Complex - Examining nurturing patterns, potential over-giving or smothering tendencies');
            } else {
                complexes.push('Mother Complex - Healthy nurturing abilities, balanced care for self and others');
            }
        }
        
        // Anima/Animus Integration
        const animaCards = ['The High Priestess', 'The Empress', 'The Star', 'Queen of Cups'];
        const animusCards = ['The Magician', 'The Emperor', 'The Chariot', 'King of Swords'];
        const hasAnima = this.drawnCards.some(card => animaCards.includes(card.name));
        const hasAnimus = this.drawnCards.some(card => animusCards.includes(card.name));
        
        if (hasAnima && hasAnimus) {
            complexes.push('Anima/Animus Integration - Balanced integration of feminine and masculine aspects, achieving psychological wholeness');
        } else if (hasAnima) {
            complexes.push('Anima Emphasis - Developing receptivity, intuition, and connection to the feminine principle');
        } else if (hasAnimus) {
            complexes.push('Animus Emphasis - Developing assertiveness, logic, and connection to the masculine principle');
        }
        
        // Shadow Complex
        if (reversedCards.length >= this.drawnCards.length / 2) {
            const shadowCards = reversedCards.map(card => card.name);
            if (shadowCards.includes('The Devil') || shadowCards.includes('The Tower')) {
                complexes.push('Shadow Complex - Confronting major shadow projections and unconscious patterns, deep transformation required');
            } else {
                complexes.push('Shadow Complex - Working with shadow aspects, integrating rejected parts of the psyche');
            }
        }
        
        return complexes.length > 0 ? complexes : ['Integration Complex - Synthesizing various aspects of personality into a cohesive whole'];
    }
    
    assessArchetypeIntegration(archetypes) {
        const totalCards = this.drawnCards.length;
        const reversedCount = this.drawnCards.filter(card => card.isReversed).length;
        const majorArcanaCount = this.drawnCards.filter(card => card.suit === 'Major Arcana').length;
        
        const reversedRatio = reversedCount / totalCards;
        const majorRatio = majorArcanaCount / totalCards;
        
        let integration = '';
        
        if (reversedRatio < 0.3) {
            integration = 'Strong archetypal integration - you are successfully embodying the positive aspects of your active archetypes';
        } else if (reversedRatio < 0.5) {
            integration = 'Moderate archetypal integration - some shadow work needed to fully integrate archetypal energies';
        } else {
            integration = 'Challenging archetypal integration - significant shadow work required to balance opposing forces';
        }
        
        if (majorRatio > 0.5) {
            integration += '. Strong spiritual component suggests transpersonal development and collective unconscious activation.';
        }
        
        return integration;
    }
    identifyPrimaryLesson(lessons) {
        if (!lessons || lessons.length === 0) {
            return 'Trust in your inner wisdom and intuitive guidance';
        }
        
        // Find the most prominent lesson based on card significance
        const weightedLessons = lessons.map(lesson => {
            let weight = 1;
            // Major Arcana lessons have higher weight
            if (lesson.stage === 'Transpersonal') weight += 2;
            if (lesson.mastery === 'Advanced') weight += 1;
            return { ...lesson, weight };
        });
        
        const primaryLesson = weightedLessons.reduce((max, lesson) => 
            lesson.weight > max.weight ? lesson : max
        );
        
        return `Primary lesson: ${primaryLesson.lesson}. This represents your most significant spiritual growth opportunity at this time.`;
    }
    
    getShadowHealingGuidance(shadowThemes) {
        if (!shadowThemes || shadowThemes.length === 0) {
            return 'Practice self-compassion and embrace your whole self, including shadow aspects';
        }
        
        const patterns = shadowThemes.map(theme => theme.theme);
        let guidance = 'Shadow healing guidance: ';
        
        // Identify common shadow patterns and provide specific guidance
        if (patterns.some(p => p.includes('control') || p.includes('power'))) {
            guidance += 'Work with power dynamics through healthy boundaries and collaborative leadership. ';
        }
        if (patterns.some(p => p.includes('fear') || p.includes('anxiety'))) {
            guidance += 'Address fear patterns through mindfulness and gradual exposure to growth opportunities. ';
        }
        if (patterns.some(p => p.includes('isolation') || p.includes('withdrawal'))) {
            guidance += 'Balance solitude with healthy connection, seek support from trusted individuals. ';
        }
        if (patterns.some(p => p.includes('addiction') || p.includes('compulsion'))) {
            guidance += 'Examine underlying needs behind compulsive behaviors, seek professional support if needed. ';
        }
        
        guidance += 'Remember that shadow work is a lifelong process of integration, not elimination. Practice self-compassion as you embrace all aspects of yourself.';
        
        return guidance;
    }
    analyzeSpiritualGifts() {
        const gifts = [];
        const majorArcana = this.drawnCards.filter(card => card.suit === 'Major Arcana');
        const cups = this.drawnCards.filter(card => card.suit === 'Cups');
        const swords = this.drawnCards.filter(card => card.suit === 'Swords');
        
        // Analyze spiritual gifts based on card patterns
        if (majorArcana.some(card => ['The High Priestess', 'The Star', 'The Moon'].includes(card.name))) {
            gifts.push('Psychic Intuition - Strong ability to receive guidance from higher realms');
        }
        if (cups.length >= 2) {
            gifts.push('Emotional Healing - Natural ability to facilitate emotional healing in self and others');
        }
        if (majorArcana.some(card => ['The Magician', 'Temperance', 'The World'].includes(card.name))) {
            gifts.push('Energy Manipulation - Ability to work with and direct spiritual energy');
        }
        if (swords.length >= 2 && !this.drawnCards.some(card => card.name.includes('Swords') && card.isReversed)) {
            gifts.push('Clear Communication - Gift for expressing spiritual truths clearly');
        }
        if (majorArcana.some(card => ['The Hierophant', 'The Hermit', 'Judgement'].includes(card.name))) {
            gifts.push('Spiritual Teaching - Natural ability to guide others on their spiritual path');
        }
        
        return gifts.length > 0 ? gifts.join(', ') : 'Developing spiritual gifts through current life experiences';
    }
    
    analyzeHigherSelfMessages() {
        const messages = [];
        const majorArcana = this.drawnCards.filter(card => card.suit === 'Major Arcana');
        const reversedMajor = majorArcana.filter(card => card.isReversed);
        
        // Analyze higher self messages based on Major Arcana patterns
        if (majorArcana.some(card => card.name === 'The Fool')) {
            messages.push('Trust in new beginnings and have faith in your journey');
        }
        if (majorArcana.some(card => card.name === 'The High Priestess')) {
            messages.push('Listen to your intuition and trust your inner wisdom');
        }
        if (majorArcana.some(card => card.name === 'The Star')) {
            messages.push('Maintain hope and connection to your higher purpose');
        }
        if (majorArcana.some(card => card.name === 'The World')) {
            messages.push('You are completing an important cycle and ready for expansion');
        }
        
        if (reversedMajor.length > 0) {
            messages.push('Pay attention to internal blocks and resistance patterns');
        }
        
        // Default message if no specific patterns found
        if (messages.length === 0) {
            messages.push('Your higher self is guiding you toward authentic expression and service');
        }
        
        return messages.join('. ') + '.';
    }
    
    analyzeAscensionPath() {
        const chakraEmphasis = this.calculateChakraEmphasis();
        const spiritualStage = this.assessSpiritualStage();
        const challenges = this.identifyAscensionChallenges();
        
        let path = `Current ascension phase: ${spiritualStage}. `;
        
        if (chakraEmphasis.primary) {
            path += `Primary energy center activation: ${chakraEmphasis.primary}. `;
        }
        
        if (challenges.length > 0) {
            path += `Current challenges: ${challenges.join(', ')}. `;
        }
        
        path += 'Remember that ascension is a gradual process of consciousness expansion.';
        
        return path;
    }
    
    calculateChakraEmphasis() {
        const chakraCards = {
            'Root': ['The Emperor', 'King of Pentacles', 'Four of Pentacles'],
            'Sacral': ['The Empress', 'Queen of Cups', 'Two of Cups'],
            'Solar Plexus': ['The Magician', 'King of Wands', 'Three of Wands'],
            'Heart': ['The Lovers', 'Queen of Cups', 'Six of Cups', 'Temperance'],
            'Throat': ['The Hierophant', 'King of Swords', 'Three of Swords'],
            'Third Eye': ['The High Priestess', 'Queen of Swords', 'Seven of Cups'],
            'Crown': ['The Fool', 'The World', 'Ten of Pentacles']
        };
        
        const emphasis = {};
        for (const [chakra, cards] of Object.entries(chakraCards)) {
            emphasis[chakra] = this.drawnCards.filter(card => 
                cards.includes(card.name)
            ).length;
        }
        
        const primary = Object.entries(emphasis).reduce((max, [chakra, count]) => 
            count > max.count ? { chakra, count } : max
        , { chakra: null, count: 0 });
        
        return {
            primary: primary.count > 0 ? primary.chakra : null,
            distribution: emphasis
        };
    }
    
    assessSpiritualStage() {
        const majorArcana = this.drawnCards.filter(card => card.suit === 'Major Arcana');
        const progression = majorArcana.map(card => card.number).sort((a, b) => a - b);
        
        if (progression.some(num => num >= 0 && num <= 6)) {
            return 'Ego Development - Building personal identity and worldly skills';
        }
        if (progression.some(num => num >= 7 && num <= 13)) {
            return 'Soul Emergence - Confronting shadow and integrating unconscious wisdom';
        }
        if (progression.some(num => num >= 14 && num <= 21)) {
            return 'Spirit Integration - Approaching unity consciousness and service';
        }
        
        return 'Balanced Development - Integrating all levels of consciousness';
    }
    
    identifyAscensionChallenges() {
        const challenges = [];
        const reversedCards = this.drawnCards.filter(card => card.isReversed);
        
        reversedCards.forEach(card => {
            if (card.name === 'The Tower') {
                challenges.push('Ego dissolution and spiritual crisis');
            }
            if (card.name === 'The Devil') {
                challenges.push('Breaking free from limiting beliefs and addictions');
            }
            if (card.name === 'The Moon') {
                challenges.push('Navigating spiritual illusions and psychic confusion');
            }
            if (card.name === 'The Hanged Man') {
                challenges.push('Learning patience and surrender in spiritual development');
            }
        });
        
        return challenges;
    }
    findDominantSephirah(positions) {
        if (!positions || positions.length === 0) {
            return 'Tiphareth - The sphere of beauty and balanced consciousness';
        }
        
        const sephirahCount = {};
        positions.forEach(pos => {
            const sephirah = pos.sephirah;
            sephirahCount[sephirah] = (sephirahCount[sephirah] || 0) + 1;
        });
        
        const dominant = Object.entries(sephirahCount).reduce((max, [sephirah, count]) => 
            count > max.count ? { sephirah, count } : max
        , { sephirah: 'Tiphareth', count: 0 });
        
        const descriptions = {
            'Kether': 'Kether - The Crown, source of divine consciousness and unity',
            'Chokmah': 'Chokmah - Divine Wisdom, the creative force of the universe',
            'Binah': 'Binah - Understanding, the receptive intelligence that gives form',
            'Chesed': 'Chesed - Mercy, the sphere of loving-kindness and expansion',
            'Geburah': 'Geburah - Severity, the sphere of strength and necessary limitation',
            'Tiphareth': 'Tiphareth - Beauty, the sphere of harmony and balanced consciousness',
            'Netzach': 'Netzach - Victory, the sphere of endurance and emotional nature',
            'Hod': 'Hod - Splendor, the sphere of intellect and divine communication',
            'Yesod': 'Yesod - Foundation, the sphere of imagination and the astral plane',
            'Malkuth': 'Malkuth - Kingdom, the sphere of physical manifestation and earthly experience'
        };
        
        return descriptions[dominant.sephirah] || 'Tiphareth - The sphere of beauty and balanced consciousness';
    }
    analyzeChakraAlignment() { return { dominantChakra: 'Heart Chakra', balance: 'Moderate', flow: 'Ascending' }; }
    identifyEnergyBlocks() { return 'Mild throat chakra constriction affecting self-expression'; }
    analyzeKundaliniFlow() { return 'Gentle awakening process, honor your pace'; }
    analyzeMeridianActivity() { return 'Heart and lung meridians most active, supporting emotional processing'; }
    identifyPrimaryArchetypes() { return 'The Wise Woman, The Seeker, The Healer'; }
    analyzeMythologicalConnections() { return 'Connected to Persephone\'s journey and the Celtic goddess Brigid'; }
    analyzeHeroJourney() { return 'Currently in the "Trials" phase, approaching the "Revelation" stage'; }
    analyzeGoddessAspects() { return 'Maiden and Mother aspects prominent, Crone wisdom emerging'; }
    analyzeSeasonalTiming() { return 'Autumn energy - time for harvest and inner reflection'; }
    analyzeLunarCycles() { return 'New moon energy optimal for new beginnings in 2-3 weeks'; }
    analyzePlanetaryTransits() { return 'Mercury direct supports clear communication and decision-making'; }
    analyzeManifestationWindows() { return 'Strongest manifestation period: Next 3 months, especially during full moons'; }
    analyzeKarmicDebts() { return 'Minor karmic pattern around forgiveness and self-worth'; }
    analyzePastLifeInfluences() { return 'Healer/wise woman past life influencing current spiritual gifts'; }
    analyzeSoulContracts() { return 'Contract to teach through example and support others\' healing'; }
    analyzeDharmicPurpose() { return 'To bridge ancient wisdom with modern healing modalities'; }

    // Additional formatting methods
    formatSpiritualGifts(gifts) {
        const giftsText = typeof gifts === 'string' ? gifts : this.analyzeSpiritualGifts();
        return `<p class="text-gray-300">${giftsText}</p>`;
    }
    
    formatHigherSelfMessages(messages) {
        const messagesText = typeof messages === 'string' ? messages : this.analyzeHigherSelfMessages();
        return `<p class="text-gray-300">${messagesText}</p>`;
    }
    
    formatAscensionPath(path) {
        const pathText = typeof path === 'string' ? path : this.analyzeAscensionPath();
        return `<p class="text-gray-300">${pathText}</p>`;
    }
    formatTreeOfLife(treeAnalysis) {
        if (!treeAnalysis || !treeAnalysis.positions) {
            return '<p class="text-gray-300">Balanced position across multiple sephiroth indicating spiritual maturity</p>';
        }
        
        let html = `<div class="mb-4">`;
        html += `<h5 class="font-semibold text-blue-400 mb-2">Dominant Sephirah</h5>`;
        html += `<p class="text-sm text-gray-300">${treeAnalysis.dominantSephirah}</p>`;
        html += `</div>`;
        
        html += `<div class="mb-4">`;
        html += `<h5 class="font-semibold text-blue-400 mb-2">Pillar Influence</h5>`;
        html += `<p class="text-sm text-gray-300">${treeAnalysis.pillar}</p>`;
        html += `</div>`;
        
        html += `<div class="mb-4">`;
        html += `<h5 class="font-semibold text-blue-400 mb-2">World Influence</h5>`;
        html += `<p class="text-sm text-gray-300">${treeAnalysis.world}</p>`;
        html += `</div>`;
        
        return html;
    }
    
    formatSephirothInfluences(influences) {
        if (!influences || influences.length === 0) {
            return '<p class="text-gray-300">Tiphareth influence bringing beauty and balance to all aspects</p>';
        }
        
        let html = '';
        influences.forEach(influence => {
            html += `<div class="mb-3 p-2 bg-blue-900 bg-opacity-20 rounded border-l-2 border-blue-400">`;
            html += `<strong class="text-blue-400">${influence.card}</strong><br>`;
            html += `<span class="text-sm text-gray-300">${influence.sephirah}: ${influence.influence}</span><br>`;
            html += `<span class="text-xs text-gray-400">${influence.quality}</span>`;
            html += `</div>`;
        });
        
        return html;
    }
    
    formatPathworking(paths) {
        if (!paths || paths.length === 0) {
            return '<p class="text-gray-300">Path of the High Priestess prominent - trust intuitive wisdom</p>';
        }
        
        let html = '';
        paths.forEach(path => {
            html += `<div class="mb-3 p-2 bg-purple-900 bg-opacity-20 rounded border-l-2 border-purple-400">`;
            html += `<strong class="text-purple-400">${path.card}</strong><br>`;
            html += `<span class="text-sm text-gray-300">${path.path}</span><br>`;
            html += `<span class="text-xs text-gray-400">Energy: ${path.energy}</span><br>`;
            html += `<span class="text-xs text-blue-300">Lesson: ${path.lesson}</span>`;
            html += `</div>`;
        });
        
        return html;
    }
    
    formatHebrewLetters(letters) {
        if (!letters || letters.length === 0) {
            return '<p class="text-gray-300">Gimel (camel) - patient journey toward enlightenment</p>';
        }
        
        let html = '';
        letters.forEach(letter => {
            html += `<div class="mb-3 p-2 bg-yellow-900 bg-opacity-20 rounded border-l-2 border-yellow-400">`;
            html += `<strong class="text-yellow-400">${letter.card}</strong><br>`;
            html += `<span class="text-sm text-gray-300">${letter.letter}</span><br>`;
            html += `<span class="text-xs text-gray-400">Meaning: ${letter.meaning}</span><br>`;
            html += `<span class="text-xs text-blue-300">Numerology: ${letter.numerology}</span>`;
            html += `</div>`;
        });
        
        return html;
    }
    formatChakraAlignment() { return '<p class="text-gray-300">Heart chakra most active, supporting emotional healing and connection</p>'; }
    formatEnergyBlocks() { return '<p class="text-gray-300">Minor throat chakra constriction - practice authentic expression</p>'; }
    formatKundaliniFlow() { return '<p class="text-gray-300">Gentle awakening process, honor your natural pace</p>'; }
    formatMeridianActivity() { return '<p class="text-gray-300">Heart and lung meridians active, supporting emotional processing</p>'; }
    formatPrimaryArchetypes() { return '<p class="text-gray-300">The Wise Woman, The Seeker, The Healer archetypes prominent</p>'; }
    formatMythologicalConnections() { return '<p class="text-gray-300">Connected to Persephone\'s journey and Celtic goddess Brigid</p>'; }
    formatHeroJourney() { return '<p class="text-gray-300">Currently in "Trials" phase, approaching "Revelation" stage</p>'; }
    formatGoddessAspects() { return '<p class="text-gray-300">Maiden and Mother aspects prominent, Crone wisdom emerging</p>'; }
    formatSeasonalTiming() { return '<p class="text-gray-300">Autumn energy - time for harvest and inner reflection</p>'; }
    formatLunarCycles() { return '<p class="text-gray-300">New moon energy optimal for new beginnings in 2-3 weeks</p>'; }
    formatPlanetaryTransits() { return '<p class="text-gray-300">Mercury direct supports clear communication and decision-making</p>'; }
    formatManifestationWindows() { return '<p class="text-gray-300">Strongest manifestation period: Next 3 months, especially during full moons</p>'; }
    formatKarmicDebts() { return '<p class="text-gray-300">Minor karmic pattern around forgiveness and self-worth</p>'; }
    formatPastLifeInfluences() { return '<p class="text-gray-300">Healer/wise woman past life influencing current spiritual gifts</p>'; }
    formatSoulContracts() { return '<p class="text-gray-300">Contract to teach through example and support others\' healing</p>'; }
    formatDharmicPurpose() { return '<p class="text-gray-300">To bridge ancient wisdom with modern healing modalities</p>'; }
    formatAnimaAnimus() { return '<p class="text-gray-300">Healthy integration of feminine intuition and masculine action</p>'; }
    formatCollectiveUnconscious() { return '<p class="text-gray-300">Strong connection to archetypal healing wisdom</p>'; }
    formatPsychologicalPatterns() { return '<p class="text-gray-300">Pattern of transformation through introspection and service</p>'; }

    // Missing analysis methods
    assessShadowIntegration() { return 'Moderate integration, continue shadow work practices'; }
    identifyProjectionPatterns() { return 'Projecting authority issues onto others'; }
    identifyKarmicLessons() { return 'Learning to trust divine timing and surrender control'; }
    assessLessonIntegration() { return 'Good integration of spiritual lessons, ready for deeper work'; }
    getSpiritalStage(card) {
        const stageMap = {
            'The Fool': 'Beginner - Starting the spiritual journey',
            'The Magician': 'Apprentice - Learning to work with spiritual energy',
            'The High Priestess': 'Initiate - Developing intuitive abilities',
            'The Empress': 'Creatrix - Manifesting spiritual vision',
            'The Emperor': 'Builder - Establishing spiritual structure',
            'The Hierophant': 'Student - Seeking spiritual knowledge',
            'The Lovers': 'Chooser - Making conscious spiritual decisions',
            'The Chariot': 'Warrior - Overcoming spiritual obstacles',
            'Strength': 'Alchemist - Transforming lower nature',
            'The Hermit': 'Seeker - Pursuing inner truth',
            'Wheel of Fortune': 'Acceptor - Understanding spiritual cycles',
            'Justice': 'Balancer - Seeking spiritual equilibrium',
            'The Hanged Man': 'Surrenderer - Learning spiritual sacrifice',
            'Death': 'Transformer - Embracing spiritual death and rebirth',
            'Temperance': 'Healer - Integrating spiritual energies',
            'The Devil': 'Liberator - Breaking spiritual bondage',
            'The Tower': 'Destroyer - Dismantling false spirituality',
            'The Star': 'Visionary - Receiving spiritual guidance',
            'The Moon': 'Mystic - Navigating spiritual mysteries',
            'The Sun': 'Illuminated - Embodying spiritual truth',
            'Judgement': 'Awakened - Answering spiritual calling',
            'The World': 'Master - Achieving spiritual completion'
        };
        
        return stageMap[card.name] || 'Intermediate - Developing spiritual understanding';
    }
    
    assessMastery(card) {
        const masteryLevels = {
            'Beginner': 'Just beginning to understand this energy',
            'Apprentice': 'Learning the basics of this spiritual principle',
            'Initiate': 'Developing deeper understanding and practice',
            'Intermediate': 'Working with this energy more consciously',
            'Advanced': 'Demonstrating mastery in this area',
            'Master': 'Fully integrated and able to teach others'
        };
        
        const stage = this.getSpiritalStage(card).split(' - ')[0];
        return masteryLevels[stage] || 'Developing mastery through dedicated practice';
    }
    analyzeSephirothInfluences() {
        const sephirothMap = {
            'Kether': 'Crown - Divine will and pure consciousness',
            'Chokmah': 'Wisdom - Dynamic creative force and inspiration',
            'Binah': 'Understanding - Receptive intelligence and form',
            'Chesed': 'Mercy - Loving-kindness and expansion',
            'Geburah': 'Severity - Strength and necessary limitation',
            'Tiphareth': 'Beauty - Harmony and balanced consciousness',
            'Netzach': 'Victory - Endurance and emotional nature',
            'Hod': 'Splendor - Intellect and communication',
            'Yesod': 'Foundation - Imagination and astral plane',
            'Malkuth': 'Kingdom - Physical manifestation and earth plane'
        };
        
        const influences = [];
        this.drawnCards.forEach(card => {
            const position = this.getTreeOfLifePosition(card);
            if (position.sephirah) {
                const influence = sephirothMap[position.sephirah];
                if (influence) {
                    influences.push({
                        card: card.name,
                        sephirah: position.sephirah,
                        influence: influence,
                        quality: this.getSephirahQuality(position.sephirah, card.isReversed)
                    });
                }
            }
        });
        
        return influences;
    }
    
    analyzePathworking() {
        const pathMap = {
            'The Fool': 'Path 11 - Aleph (Air) - The path of spiritual air, connecting divine will to wisdom',
            'The Magician': 'Path 12 - Beth (Mercury) - The path of communication between crown and understanding',
            'The High Priestess': 'Path 13 - Gimel (Moon) - The path of the High Priestess, intuitive wisdom',
            'The Empress': 'Path 14 - Daleth (Venus) - The path of love connecting wisdom and understanding',
            'The Emperor': 'Path 15 - Heh (Aries) - The path of authority and structure',
            'The Hierophant': 'Path 16 - Vav (Taurus) - The path of tradition and spiritual teaching',
            'The Lovers': 'Path 17 - Zayin (Gemini) - The path of conscious choice and union',
            'The Chariot': 'Path 18 - Cheth (Cancer) - The path of receptivity and protection',
            'Strength': 'Path 19 - Teth (Leo) - The path of inner strength and courage',
            'The Hermit': 'Path 20 - Yod (Virgo) - The path of inner light and spiritual seeking',
            'Wheel of Fortune': 'Path 21 - Kaph (Jupiter) - The path of fortune and spiritual cycles',
            'Justice': 'Path 22 - Lamed (Libra) - The path of balance and karmic justice',
            'The Hanged Man': 'Path 23 - Mem (Water) - The path of sacrifice and surrender',
            'Death': 'Path 24 - Nun (Scorpio) - The path of transformation and rebirth',
            'Temperance': 'Path 25 - Samekh (Sagittarius) - The path of harmony and spiritual alchemy',
            'The Devil': 'Path 26 - Ayin (Capricorn) - The path of material temptation and spiritual bondage',
            'The Tower': 'Path 27 - Peh (Mars) - The path of sudden change and divine intervention',
            'The Star': 'Path 28 - Tzaddi (Aquarius) - The path of hope and spiritual inspiration',
            'The Moon': 'Path 29 - Qoph (Pisces) - The path of illusion and psychic development',
            'The Sun': 'Path 30 - Resh (Sun) - The path of illumination and regeneration',
            'Judgement': 'Path 31 - Shin (Fire) - The path of spiritual awakening and rebirth',
            'The World': 'Path 32 - Tav (Saturn) - The path of completion and cosmic consciousness'
        };
        
        const activePaths = this.drawnCards
            .filter(card => card.suit === 'Major Arcana')
            .map(card => ({
                card: card.name,
                path: pathMap[card.name] || 'Unknown path',
                energy: card.isReversed ? 'Blocked or shadow expression' : 'Clear and flowing energy',
                lesson: this.getPathLesson(card.name, card.isReversed)
            }));
        
        return activePaths;
    }
    
    analyzeHebrewLetters() {
        const hebrewMap = {
            'The Fool': 'Aleph (א) - The ox, breath of life, primal sound of creation',
            'The Magician': 'Beth (ב) - The house, duality, receptacle of divine energy',
            'The High Priestess': 'Gimel (ג) - The camel, bridge between worlds, patient journey',
            'The Empress': 'Daleth (ד) - The door, threshold, feminine receptivity',
            'The Emperor': 'Heh (ה) - The window, sight, divine breath made manifest',
            'The Hierophant': 'Vav (ו) - The nail, connection, joining heaven and earth',
            'The Lovers': 'Zayin (ז) - The sword, choice, discrimination',
            'The Chariot': 'Cheth (ח) - The fence, protection, enclosure of the sacred',
            'Strength': 'Teth (ט) - The serpent, hidden strength, coiled energy',
            'The Hermit': 'Yod (י) - The hand, creative power, spark of divinity',
            'Wheel of Fortune': 'Kaph (כ) - The palm, grasping, receptive power',
            'Justice': 'Lamed (ל) - The ox-goad, teaching, urging forward',
            'The Hanged Man': 'Mem (מ) - The water, flow, maternal wisdom',
            'Death': 'Nun (נ) - The fish, life in death, transformation',
            'Temperance': 'Samekh (ס) - The prop, support, divine providence',
            'The Devil': 'Ayin (ע) - The eye, appearance, material sight',
            'The Tower': 'Peh (פ) - The mouth, speech, creative and destructive word',
            'The Star': 'Tzaddi (צ) - The fishhook, desire, pulling toward the divine',
            'The Moon': 'Qoph (ק) - The back of the head, reflection, subconscious',
            'The Sun': 'Resh (ר) - The head, consciousness, solar intelligence',
            'Judgement': 'Shin (ש) - The tooth, discrimination, divine fire',
            'The World': 'Tav (ת) - The cross, completion, cosmic perfection'
        };
        
        const letterInfluences = this.drawnCards
            .filter(card => card.suit === 'Major Arcana')
            .map(card => ({
                card: card.name,
                letter: hebrewMap[card.name] || 'Unknown letter',
                meaning: this.getHebrewMeaning(card.name),
                numerology: this.getHebrewNumerology(card.name)
            }));
        
        return letterInfluences;
    }
    
    extractSephirah(treePosition) {
        if (!treePosition) return 'Malkuth';
        
        const sephirahExtraction = {
            'Kether': ['Kether'],
            'Chokmah': ['Chokmah'],
            'Binah': ['Binah'],
            'Chesed': ['Chesed'],
            'Geburah': ['Geburah'],
            'Tiphareth': ['Tiphareth'],
            'Netzach': ['Netzach'],
            'Hod': ['Hod'],
            'Yesod': ['Yesod'],
            'Malkuth': ['Malkuth']
        };
        
        for (const [sephirah, keywords] of Object.entries(sephirahExtraction)) {
            if (keywords.some(keyword => treePosition.includes(keyword))) {
                return sephirah;
            }
        }
        
        return 'Malkuth';
    }
    
    getKabbalisticMeaning(card) {
        const meanings = {
            'The Fool': 'The divine spark beginning its journey through creation',
            'The Magician': 'The power of will directed through divine wisdom',
            'The High Priestess': 'The veil between conscious and unconscious realms',
            'The Empress': 'The creative force of divine love manifesting',
            'The Emperor': 'The structure and order of divine authority',
            'The Hierophant': 'The bridge between heaven and earth, spiritual teaching',
            'The Lovers': 'The choice between higher and lower nature',
            'The Chariot': 'The controlled direction of spiritual force',
            'Strength': 'The gentle power that tames the beast of desire',
            'The Hermit': 'The inner light guiding the soul toward truth',
            'Wheel of Fortune': 'The eternal cycles of karma and divine justice',
            'Justice': 'The perfect balance of divine law and mercy',
            'The Hanged Man': 'The willing sacrifice that brings spiritual insight',
            'Death': 'The transformation from one state of being to another',
            'Temperance': 'The perfect mixing of opposing forces',
            'The Devil': 'The illusion of material bondage and ignorance',
            'The Tower': 'The destruction of false structures and pride',
            'The Star': 'The hope and guidance of divine inspiration',
            'The Moon': 'The reflection of divine light in the soul',
            'The Sun': 'The full illumination of divine consciousness',
            'Judgement': 'The call to spiritual awakening and rebirth',
            'The World': 'The completion of the great work and cosmic unity'
        };
        
        return meanings[card.name] || 'A sacred reflection of divine truth';
    }
    
    identifyPillarInfluence() {
        const pillarCards = {
            'Pillar of Mercy': ['The Magician', 'The Emperor', 'The Hierophant', 'Wheel of Fortune', 'The Star'],
            'Pillar of Severity': ['The High Priestess', 'The Chariot', 'Justice', 'The Hanged Man', 'The Moon'],
            'Middle Pillar': ['The Fool', 'The Lovers', 'Death', 'Temperance', 'The Devil', 'The Tower', 'The Sun', 'Judgement', 'The World']
        };
        
        const influences = { mercy: 0, severity: 0, middle: 0 };
        
        this.drawnCards.forEach(card => {
            if (pillarCards['Pillar of Mercy'].includes(card.name)) influences.mercy++;
            if (pillarCards['Pillar of Severity'].includes(card.name)) influences.severity++;
            if (pillarCards['Middle Pillar'].includes(card.name)) influences.middle++;
        });
        
        const dominant = Object.entries(influences).reduce((max, [pillar, count]) => 
            count > max.count ? { pillar, count } : max
        , { pillar: null, count: 0 });
        
        const pillarMeanings = {
            'mercy': 'Pillar of Mercy - Emphasis on expansion, creativity, and divine love',
            'severity': 'Pillar of Severity - Emphasis on structure, discipline, and divine justice',
            'middle': 'Middle Pillar - Emphasis on balance, consciousness, and spiritual integration'
        };
        
        return pillarMeanings[dominant.pillar] || 'Balanced influence across all pillars';
    }
    
    identifyWorldInfluence() {
        const worldCards = {
            'Atziluth': ['The Fool', 'The Magician', 'The High Priestess', 'The Empress'],
            'Briah': ['The Emperor', 'The Hierophant', 'The Lovers', 'The Chariot'],
            'Yetzirah': ['Strength', 'The Hermit', 'Wheel of Fortune', 'Justice'],
            'Assiah': ['The Hanged Man', 'Death', 'Temperance', 'The Devil', 'The Tower', 'The Star', 'The Moon', 'The Sun', 'Judgement', 'The World']
        };
        
        const influences = { atziluth: 0, briah: 0, yetzirah: 0, assiah: 0 };
        
        this.drawnCards.forEach(card => {
            if (worldCards['Atziluth'].includes(card.name)) influences.atziluth++;
            if (worldCards['Briah'].includes(card.name)) influences.briah++;
            if (worldCards['Yetzirah'].includes(card.name)) influences.yetzirah++;
            if (worldCards['Assiah'].includes(card.name)) influences.assiah++;
        });
        
        const dominant = Object.entries(influences).reduce((max, [world, count]) => 
            count > max.count ? { world, count } : max
        , { world: null, count: 0 });
        
        const worldMeanings = {
            'atziluth': 'Atziluth - The archetypal world of divine emanation and pure spirit',
            'briah': 'Briah - The creative world of divine thought and angelic consciousness',
            'yetzirah': 'Yetzirah - The formative world of emotions and astral experience',
            'assiah': 'Assiah - The material world of action and physical manifestation'
        };
        
        return worldMeanings[dominant.world] || 'Balanced influence across all four worlds';
    }
    
    assessTreeBalance(positions) {
        const sephirothCount = {};
        positions.forEach(pos => {
            const sephirah = pos.sephirah;
            sephirothCount[sephirah] = (sephirothCount[sephirah] || 0) + 1;
        });
        
        const totalSephiroth = Object.keys(sephirothCount).length;
        const maxConcentration = Math.max(...Object.values(sephirothCount));
        
        if (totalSephiroth >= 5) {
            return 'Excellent balance across the Tree of Life, indicating integrated spiritual development';
        } else if (totalSephiroth >= 3) {
            return 'Good balance with focus on key spiritual centers';
        } else if (maxConcentration >= 3) {
            return 'Concentrated energy in specific sephiroth, suggesting focused spiritual work';
        } else {
            return 'Moderate balance, room for expanding spiritual awareness';
        }
    }
    
    getSephirahQuality(sephirah, isReversed) {
        const qualities = {
            'Kether': isReversed ? 'Disconnection from divine source' : 'Pure divine consciousness',
            'Chokmah': isReversed ? 'Scattered creative energy' : 'Focused divine wisdom',
            'Binah': isReversed ? 'Rigid thinking patterns' : 'Receptive understanding',
            'Chesed': isReversed ? 'Excessive expansion' : 'Balanced mercy and love',
            'Geburah': isReversed ? 'Destructive force' : 'Constructive strength',
            'Tiphareth': isReversed ? 'Ego imbalance' : 'Harmonious consciousness',
            'Netzach': isReversed ? 'Emotional excess' : 'Enduring victory',
            'Hod': isReversed ? 'Mental confusion' : 'Clear communication',
            'Yesod': isReversed ? 'Illusory foundations' : 'Stable imagination',
            'Malkuth': isReversed ? 'Material imbalance' : 'Grounded manifestation'
        };
        
        return qualities[sephirah] || 'Unknown quality';
    }
    
    getPathLesson(cardName, isReversed) {
        const lessons = {
            'The Fool': isReversed ? 'Learn discernment in new beginnings' : 'Trust the journey of spiritual growth',
            'The Magician': isReversed ? 'Avoid manipulation, use power ethically' : 'Channel divine will through focused intention',
            'The High Priestess': isReversed ? 'Trust inner wisdom over external advice' : 'Develop and trust your intuitive abilities',
            'The Empress': isReversed ? 'Balance nurturing with healthy boundaries' : 'Create from a place of divine love',
            'The Emperor': isReversed ? 'Transform rigidity into flexible leadership' : 'Build stable foundations for spiritual growth',
            'The Hierophant': isReversed ? 'Question dogma, seek personal truth' : 'Learn from spiritual teachers and traditions',
            'The Lovers': isReversed ? 'Heal relationship patterns and self-love' : 'Make choices aligned with higher love',
            'The Chariot': isReversed ? 'Find balance between control and surrender' : 'Direct your spiritual energy with purpose',
            'Strength': isReversed ? 'Develop inner confidence and self-worth' : 'Use gentle strength to overcome challenges',
            'The Hermit': isReversed ? 'Balance solitude with community connection' : 'Seek inner wisdom and share what you find',
            'Wheel of Fortune': isReversed ? 'Accept change and take responsibility' : 'Understand the cycles of spiritual growth',
            'Justice': isReversed ? 'Examine your judgments and biases' : 'Seek balance and fairness in all situations',
            'The Hanged Man': isReversed ? 'Release martyr complex, find healthy sacrifice' : 'Surrender to divine timing and wisdom',
            'Death': isReversed ? 'Embrace necessary endings and transformations' : 'Allow old patterns to die for new growth',
            'Temperance': isReversed ? 'Find moderation and avoid extremes' : 'Blend opposing forces into harmony',
            'The Devil': isReversed ? 'Break free from limiting beliefs and addictions' : 'Recognize and transform material attachments',
            'The Tower': isReversed ? 'Rebuild on solid spiritual foundations' : 'Welcome divine intervention and sudden insight',
            'The Star': isReversed ? 'Reconnect with hope and spiritual vision' : 'Trust in divine guidance and inspiration',
            'The Moon': isReversed ? 'Face illusions and unconscious fears' : 'Navigate the mysteries of the psyche',
            'The Sun': isReversed ? 'Integrate shadow with authentic joy' : 'Celebrate your divine nature and gifts',
            'Judgement': isReversed ? 'Release self-judgment and embrace rebirth' : 'Answer the call to spiritual awakening',
            'The World': isReversed ? 'Complete unfinished business before moving forward' : 'Celebrate spiritual achievement and prepare for new cycles'
        };
        
        return lessons[cardName] || 'Learn the lesson this path offers';
    }
    
    getHebrewMeaning(cardName) {
        const meanings = {
            'The Fool': 'The breath of life, primal creative force',
            'The Magician': 'The container of divine energy, duality made manifest',
            'The High Priestess': 'The patient journey between worlds',
            'The Empress': 'The doorway to creation and feminine receptivity',
            'The Emperor': 'The window of divine sight and authority',
            'The Hierophant': 'The nail that joins heaven to earth',
            'The Lovers': 'The sword of discrimination and choice',
            'The Chariot': 'The protective enclosure of the sacred',
            'Strength': 'The coiled serpent power of transformation',
            'The Hermit': 'The divine spark of creative consciousness',
            'Wheel of Fortune': 'The receptive palm that grasps divine providence',
            'Justice': 'The teaching that urges the soul forward',
            'The Hanged Man': 'The flowing water of maternal wisdom',
            'Death': 'The fish that contains life within death',
            'Temperance': 'The divine support and providence',
            'The Devil': 'The eye that sees only material appearances',
            'The Tower': 'The mouth that speaks creation and destruction',
            'The Star': 'The hook that draws the soul toward divinity',
            'The Moon': 'The back of the head, the realm of reflection',
            'The Sun': 'The head of solar consciousness and intelligence',
            'Judgement': 'The tooth of divine discrimination',
            'The World': 'The cross of cosmic completion'
        };
        
        return meanings[cardName] || 'A sacred Hebrew mystery';
    }
    
    getHebrewNumerology(cardName) {
        const numerology = {
            'The Fool': 'Aleph = 1 - Unity and divine beginning',
            'The Magician': 'Beth = 2 - Duality and polarity',
            'The High Priestess': 'Gimel = 3 - Synthesis and growth',
            'The Empress': 'Daleth = 4 - Stability and manifestation',
            'The Emperor': 'Heh = 5 - Quintessence and spirit',
            'The Hierophant': 'Vav = 6 - Harmony and connection',
            'The Lovers': 'Zayin = 7 - Perfection and completion',
            'The Chariot': 'Cheth = 8 - Regeneration and new cycles',
            'Strength': 'Teth = 9 - Completion and wisdom',
            'The Hermit': 'Yod = 10 - Perfection and return to unity',
            'Wheel of Fortune': 'Kaph = 20 - Multiplication of duality',
            'Justice': 'Lamed = 30 - Multiplication of synthesis',
            'The Hanged Man': 'Mem = 40 - Multiplication of stability',
            'Death': 'Nun = 50 - Multiplication of spirit',
            'Temperance': 'Samekh = 60 - Multiplication of harmony',
            'The Devil': 'Ayin = 70 - Multiplication of perfection',
            'The Tower': 'Peh = 80 - Multiplication of regeneration',
            'The Star': 'Tzaddi = 90 - Multiplication of completion',
            'The Moon': 'Qoph = 100 - The new century, transcendence',
            'The Sun': 'Resh = 200 - Multiplication of transcendence',
            'Judgement': 'Shin = 300 - Triple transcendence',
            'The World': 'Tav = 400 - Completion of the great work'
        };
        
        return numerology[cardName] || 'Sacred number mystery';
    }
    findDominantChakra() { return 'Heart Chakra'; }
    assessChakraBalance() { return 'Moderate balance with heart chakra emphasis'; }
    analyzeEnergyFlow() { return 'Ascending energy flow from root to crown'; }
    getChakraRecommendations() { return 'Focus on throat chakra opening practices'; }
    getChakraEnergy() { return 'Balanced and flowing energy'; }
    getChakraHealing() { return 'Continue current healing practices'; }
    analyzeAnimaAnimus() { return 'Healthy integration of masculine and feminine aspects'; }
    analyzeCollectiveUnconscious() { return 'Strong connection to archetypal healing wisdom'; }
    analyzePsychologicalPatterns() { return 'Pattern of growth through introspection and service'; }
}

// Initialize the application
const app = new TarotReader();