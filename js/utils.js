/**
 * Utility Functions
 */

/**
 * Extracts the text from a data field, which could be a string or a citation object.
 * @param {string|Object} dataField - The data field to process.
 * @returns {string} The text content.
 */
function getText(dataField) {
    if (typeof dataField === 'string') {
        return dataField;
    }
    if (dataField && typeof dataField === 'object' && dataField.hasOwnProperty('text')) {
        return dataField.text;
    }
    // Return a default or empty string if the format is unexpected or the field is null/undefined
    return '';
}

/**
 * Gets the citation key from a data field.
 * @param {string|Object} dataField - The data field to process.
 * @returns {string|null} The citation key, or null if not available.
 */
function getCitationKey(dataField) {
    if (dataField && typeof dataField === 'object' && dataField.hasOwnProperty('citation_key')) {
        return dataField.citation_key;
    }
    return null;
}

/**
 * Renders a text string with a citation marker if a citation is available.
 * @param {string|Object} dataField - The data field, which could be a string or a citation object.
 * @param {string} text - The text content to display.
 * @returns {string} The HTML string with the text and citation marker.
 */
function renderTextWithCitation(dataField, text) {
    if (!text) {
        return '';
    }

    let citationKey = getCitationKey(dataField);

    if (!citationKey && window.citationMap) {
        // Fallback to searching the text in the citation map
        citationKey = window.citationMap[text];
    }

    if (citationKey && window.bookIndex) {
        const book = window.bookIndex[citationKey];
        if (book) {
            const citationText = `${book.author}, ${book.title}`;
            // Using a unicode book symbol as the citation marker
            return `${text} <sup title="${citationText}" class="citation-marker" style="cursor: help;">&#128214;</sup>`;
        }
    }

    return text;
}
