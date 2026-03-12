/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    let concatenated = "";
    for (let i = 0; i < words.length && concatenated.length < s.length; i++) {
        concatenated += words[i];
        if (concatenated === s) {
            return true;
        }
    }
    return false;
};