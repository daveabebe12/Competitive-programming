/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let a = -1;
    for (let i = 0; i < word.length; i++) {
        if (word[i] == ch) {
        a = i;
        break;
        }
    }
    if( a === 0) return word;
    let first = word.slice(0, a+1).split("").reverse().join("");
    let second = word.slice(a +1);
    return first + second;
};