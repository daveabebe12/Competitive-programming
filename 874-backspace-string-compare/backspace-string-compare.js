/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const processString = (str) => {
        let result = [];
        for (let char of str) {
            if (char === '#') {
                // Remove the last character added (the "backspace")
                result.pop();
            } else {
                // Add the character to our "stack"
                result.push(char);
            }
        }
        return result.join(''); // Convert back to string
    };

    return processString(s) === processString(t);
};