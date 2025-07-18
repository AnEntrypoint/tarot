# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a comprehensive tarot reading application built with vanilla JavaScript, featuring deep symbolic analysis and academic references. The application provides multiple reading spreads, advanced psychological and spiritual analysis, and a modular architecture for extensibility.

## Architecture

### Modular JavaScript Design
The application follows a modular architecture with distinct separation of concerns:

- **TarotAppController** (`js/tarot-app-controller.js`): Main orchestrator that manages application state, coordinates modules, and handles user interactions
- **CardRenderer** (`js/card-renderer.js`): Handles all card display logic, modal views, and UI rendering
- **AnalysisEngine** (`js/analysis-engine.js`): Provides multi-dimensional analysis including Jungian psychology, Kabbalistic correlations, and archetypal patterns
- **Spreads** (`js/spreads.js`): Defines spread configurations and position layouts
- **Enhanced Data** (`js/tarot-data-enhanced.js`): Comprehensive card database with academic references and cross-system correlations

### Data Architecture
- **Card Data**: Stored in `tarot-data.js` (basic) and `js/tarot-data-enhanced.js` (comprehensive with academic references)
- **Local Storage**: Readings are persisted to localStorage for reading history
- **Analysis Caching**: Complex analysis results are cached in memory for performance

## Key Features

### Reading System
- Multiple spread types: Single card, 3-card (Past-Present-Future), Relationship (4-card), Celtic Cross (10-card)
- Card drawing system with deck interaction
- Reversed card interpretations
- Modal detail views with comprehensive card information

### Analysis Engine
The analysis engine provides 8 different analytical perspectives:
- **Overview**: Elemental balance, suit distribution, energy patterns
- **Psychology**: Jungian archetypes, shadow work, anima/animus analysis
- **Spiritual**: Soul lessons, spiritual gifts, ascension indicators
- **Kabbalah**: Tree of Life positions, Hebrew letters, pathworking
- **Chakras**: Energy center alignment and flow patterns
- **Archetypes**: Mythological connections and hero's journey mapping
- **Timing**: Seasonal, lunar, and planetary influences
- **Karma**: Past-life influences, soul contracts, dharmic purpose

### Image Management
- Card images are stored locally in `img/big/` directory
- Two naming conventions: `maj##.jpg` for major arcana and `[suit]##.jpg` for minor arcana
- Alternative naming: `major_##_Name.jpg` format also available
- CSS handles responsive image sizing and reversed card rotations

## Development Commands

### Local Development
```bash
# Serve the application locally (recommended for development)
python -m http.server 8000
# or
npx serve .
```

### Git Workflow
```bash
# Always commit and push changes after modifications
git add .
git commit -m "Description of changes"
git push
```

### Testing
- No automated test framework - test manually by:
  1. Loading the application in browser
  2. Testing each spread type
  3. Verifying card drawing and display
  4. Checking analysis functionality
  5. Testing modal interactions and keyboard shortcuts

## Important Implementation Details

### Card Rendering
- Cards use CSS Grid for responsive layouts
- Reversed cards are handled with CSS transforms
- Card images have fallback placeholder system
- Modal system provides detailed card information

### Analysis Engine Caching
- Complex analysis results are cached using Map objects
- Cache keys based on card combinations and spread types
- Lazy loading for heavy computations

### Keyboard Shortcuts
- `Ctrl/Cmd + N`: New reading
- `Ctrl/Cmd + S`: Save reading  
- `Ctrl/Cmd + A`: Analyze reading
- `Escape`: Close modal

### Data Structure
Cards contain comprehensive metadata:
- Basic properties: name, number, suit, element, astrology
- Meanings: upright/reversed for general, love, career, spiritual contexts
- Advanced correlations: Jungian archetypes, Kabbalistic paths, chakra associations
- Academic references: Citations to foundational tarot literature

### CSS Architecture
- Uses CSS custom properties (variables) for theming
- Responsive design with mobile-first approach
- Comprehensive utility classes for spacing and layout
- Animation system for card interactions

## Common Development Patterns

### Adding New Spreads
1. Add spread configuration to `js/spreads.js`
2. Update HTML spread selection grid
3. Add corresponding CSS grid class (e.g., `.reading-grid-[spread-name]`)
4. Update controller to handle new spread type

### Extending Analysis
1. Add new analysis method to `AnalysisEngine` class
2. Create corresponding HTML tab and content area
3. Update tab switching logic in controller
4. Add CSS styling for new analysis sections

### Card Data Enhancement
- Primary data in `js/tarot-data-enhanced.js`
- Each card should include academic references
- Maintain consistency in data structure
- Add cross-references between related cards

## File Dependencies

### Critical Files
- `index.html`: Main application structure
- `styles.css`: Complete styling system
- `js/tarot-app-controller.js`: Application orchestration
- `js/tarot-data-enhanced.js`: Card database
- `img/big/`: Card image assets

### Module Loading Order
Scripts must be loaded in this order:
1. `js/spreads.js`
2. `js/tarot-data-enhanced.js`
3. `js/card-renderer.js`
4. `js/analysis-engine.js`
5. `js/tarot-app-controller.js`

## Performance Considerations

- Analysis computations are cached to prevent re-calculation
- DOM manipulation is batched for efficiency
- Images are loaded lazily and cached by browser
- LocalStorage is used judiciously to avoid size limits