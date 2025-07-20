// Card Rendering Module
// Handles all card display and visualization logic

class CardRenderer {
    constructor() {
        this.cardElements = new Map();
    }

    // Create card HTML element
    createCardElement(card, position = null) {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'tarot-card image-only';
        cardDiv.setAttribute('data-card-id', `${card.name}-${card.positionIndex || 0}`);
        
        if (card.isReversed) {
            cardDiv.classList.add('reversed');
        }

        const cardContent = `
            <div class="card-content">
                ${position ? `<div class="card-position">${position.positionIndex + 1}</div>` : ''}
                <div class="card-image-container">
                    <img src="${card.image}" alt="${card.name}" class="card-image ${card.isReversed ? 'reversed' : ''}" 
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                    <div class="card-placeholder" style="display: none;">
                        <span class="card-suit-symbol">${this.getSuitSymbol(card.suit)}</span>
                        <span class="card-number">${card.number !== null ? card.number : ''}</span>
                    </div>
                </div>
                <div class="card-info" style="display: none;">
                    <h4 class="card-name">${card.name}${card.isReversed ? ' (Reversed)' : ''}</h4>
                    ${position ? `<p class="card-position-name">${position.name}</p>` : ''}
                    <div class="card-metadata">
                        <div class="element-badge element-${card.element?.toLowerCase() || 'unknown'}">
                            ${card.element || 'Unknown'}
                        </div>
                        ${card.astrology ? `<span class="astro-symbol">${this.getAstroSymbol(card.astrology)}</span>` : ''}
                    </div>
                    <div class="keywords">
                        ${this.renderKeywords(card, card.isReversed)}
                    </div>
                    <div class="card-meaning">
                        ${this.renderBasicMeaning(card, card.isReversed)}
                    </div>
                </div>
            </div>
        `;

        cardDiv.innerHTML = cardContent;
        
        // Add click handler to toggle between image-only and full view
        cardDiv.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleCardView(cardDiv, card);
        });
        
        this.cardElements.set(card, cardDiv);
        return cardDiv;
    }

    // Render keywords as badges
    renderKeywords(card, isReversed) {
        const keywords = isReversed ? card.keywords.reversed : card.keywords.upright;
        return keywords.map(keyword => `<span class="keyword">${keyword}</span>`).join('');
    }

    // Render basic meaning
    renderBasicMeaning(card, isReversed) {
        const meaning = isReversed ? card.meanings.reversed.general : card.meanings.upright.general;
        return `<p class="meaning-text">${meaning.substring(0, 150)}...</p>`;
    }

    // Get suit symbol
    getSuitSymbol(suit) {
        const symbols = {
            'Wands': '🔥',
            'Cups': '💧',
            'Swords': '💨',
            'Pentacles': '🌍',
            'Major Arcana': '✨'
        };
        return symbols[suit] || '?';
    }

    // Get astrological symbol
    getAstroSymbol(astrology) {
        const symbols = {
            'Aries': '♈', 'Taurus': '♉', 'Gemini': '♊', 'Cancer': '♋',
            'Leo': '♌', 'Virgo': '♍', 'Libra': '♎', 'Scorpio': '♏',
            'Sagittarius': '♐', 'Capricorn': '♑', 'Aquarius': '♒', 'Pisces': '♓',
            'Sun': '☉', 'Moon': '☽', 'Mercury': '☿', 'Venus': '♀',
            'Mars': '♂', 'Jupiter': '♃', 'Saturn': '♄', 'Uranus': '♅',
            'Neptune': '♆', 'Pluto': '♇'
        };
        return symbols[astrology] || astrology;
    }

    // Show detailed card information in modal
    showCardDetails(card) {
        const modal = document.getElementById('cardModal');
        const modalContent = document.getElementById('modalCardContent');
        const modalTitle = document.getElementById('modalCardName');

        modalTitle.textContent = `${card.name}${card.isReversed ? ' (Reversed)' : ''}`;
        
        modalContent.innerHTML = `
            <div class="modal-card-details">
                <div class="modal-card-header">
                    <div class="modal-card-image">
                        <img src="${card.image}" alt="${card.name}" class="${card.isReversed ? 'reversed' : ''}" 
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                        <div class="card-placeholder" style="display: none;">
                            <span class="card-suit-symbol">${this.getSuitSymbol(card.suit)}</span>
                        </div>
                    </div>
                    <div class="modal-card-meta">
                        <div class="meta-item">
                            <strong>Suit:</strong> ${card.suit}
                        </div>
                        <div class="meta-item">
                            <strong>Number:</strong> ${card.number !== null ? card.number : 'N/A'}
                        </div>
                        <div class="meta-item">
                            <strong>Element:</strong> ${card.element || 'Unknown'}
                        </div>
                        <div class="meta-item">
                            <strong>Astrology:</strong> ${card.astrology ? `${card.astrology} ${this.getAstroSymbol(card.astrology)}` : 'N/A'}
                        </div>
                        <div class="meta-item">
                            <strong>Numerology:</strong> ${card.numerology !== null ? card.numerology : 'N/A'}
                        </div>
                    </div>
                </div>
                
                <div class="modal-meanings">
                    <div class="meaning-section">
                        <h4>General Meaning</h4>
                        <p>${card.isReversed ? card.meanings.reversed.general : card.meanings.upright.general}</p>
                    </div>
                    
                    <div class="meaning-section">
                        <h4>Love & Relationships</h4>
                        <p>${card.isReversed ? card.meanings.reversed.love : card.meanings.upright.love}</p>
                    </div>
                    
                    <div class="meaning-section">
                        <h4>Career & Finance</h4>
                        <p>${card.isReversed ? card.meanings.reversed.career : card.meanings.upright.career}</p>
                    </div>
                    
                    <div class="meaning-section">
                        <h4>Spiritual Guidance</h4>
                        <p>${card.isReversed ? card.meanings.reversed.spiritual : card.meanings.upright.spiritual}</p>
                    </div>
                </div>
                
                <div class="modal-keywords">
                    <h4>Keywords</h4>
                    <div class="keywords-grid">
                        <div class="keywords-column">
                            <h5>Upright</h5>
                            <div class="keywords">
                                ${card.keywords.upright.map(k => `<span class="keyword">${k}</span>`).join('')}
                            </div>
                        </div>
                        <div class="keywords-column">
                            <h5>Reversed</h5>
                            <div class="keywords">
                                ${card.keywords.reversed.map(k => `<span class="keyword reversed">${k}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }

    // Create spread layout
    createSpreadLayout(spreadType, cards) {
        const container = document.createElement('div');
        container.className = `reading-grid reading-grid-${spreadType}`;
        
        cards.forEach((card, index) => {
            const cardElement = this.createCardElement(card, {
                name: card.position.name,
                positionIndex: index
            });
            container.appendChild(cardElement);
        });
        
        return container;
    }

    // Animate card appearance
    animateCardAppearance(cardElement) {
        cardElement.style.opacity = '0';
        cardElement.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            cardElement.style.transition = 'all 0.5s ease';
            cardElement.style.opacity = '1';
            cardElement.style.transform = 'translateY(0)';
        }, 100);
    }

    // Toggle between image-only and full card view
    toggleCardView(cardDiv, card) {
        const isImageOnly = cardDiv.classList.contains('image-only');
        const cardInfo = cardDiv.querySelector('.card-info');
        
        if (isImageOnly) {
            // Show full card info
            cardDiv.classList.remove('image-only');
            cardDiv.classList.add('expanded');
            if (cardInfo) cardInfo.style.display = 'block';
        } else {
            // Show only image
            cardDiv.classList.add('image-only');
            cardDiv.classList.remove('expanded');
            if (cardInfo) cardInfo.style.display = 'none';
        }
    }

    // Update card element with new data
    updateCardElement(card, newData) {
        const element = this.cardElements.get(card);
        if (element) {
            // Update the card with new data and re-render
            Object.assign(card, newData);
            const parent = element.parentNode;
            const newElement = this.createCardElement(card);
            parent.replaceChild(newElement, element);
            return newElement;
        }
        return null;
    }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CardRenderer;
}