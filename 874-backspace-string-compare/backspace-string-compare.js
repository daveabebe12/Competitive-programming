/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let i = s.length - 1;
    let j = t.length - 1;

    while (i >= 0 || j >= 0) {
        // Find the next valid character in string S
        i = getNextValidIndex(s, i);
        // Find the next valid character in string T
        j = getNextValidIndex(t, j);

        // Compare the characters
        if (i >= 0 && j >= 0 && s[i] !== t[j]) return false;
        
        // If one string ends before the other
        if ((i >= 0) !== (j >= 0)) return false;

        i--;
        j--;
    }

    return true;
};

function getNextValidIndex(str, index) {
    let backspaces = 0;
    while (index >= 0) {
        if (str[index] === '#') {
            backspaces++;
            index--;
        } else if (backspaces > 0) {
            backspaces--;
            index--;
        } else {
            break;
        }
    }
    return index;
};