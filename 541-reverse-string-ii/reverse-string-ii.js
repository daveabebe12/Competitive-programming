/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let res = "";
    for(let i = 0; i < s.length; i++){
        res += s.slice(i,i + k).split("").reverse().join("");
        res += s.slice(i + k, i + 2*k);
        i = i + k * 2-1
    }
    return res;
};