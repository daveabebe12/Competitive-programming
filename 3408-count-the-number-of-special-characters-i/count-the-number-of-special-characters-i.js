/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    const charSet = new Set(word);
    let count = 0;

    // We only need to check unique lowercase letters to see if their uppercase match exists
    const uniqueLowercases = new Set(word.toLowerCase());

    for (let char of uniqueLowercases) {
        // If the original word contains both the lowercase and uppercase version
        if (charSet.has(char) && charSet.has(char.toUpperCase())) {
            count++;
        }
    }

    return count;
};