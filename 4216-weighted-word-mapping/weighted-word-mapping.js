/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function(words, weights) {
    let ans = ""
    for (let word of words){
        let s = 0;
        for(let c of word){
            s += weights[c.charCodeAt(0) - 97]
        }
        ans += String.fromCharCode(122 -(s % 26))
    }
    return ans;
};