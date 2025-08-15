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
