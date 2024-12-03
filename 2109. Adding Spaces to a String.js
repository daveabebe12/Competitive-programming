/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
function addSpaces(s, spaces) {
    const ans = [];
    let j = 0;
    for (let i = 0; i < s.length; i++) {
        if (i === spaces[j]) {
            ans.push(' ');
            j++;
        }
        ans.push(s[i]);
    }
    return ans.join('');
}