/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let count = new Map();
    let left = 0;
    let maxFreq = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        // Update the frequency of the current character
        const char = s[right];
        count.set(char, (count.get(char) || 0) + 1);
        
        // Keep track of the most frequent character in the current window
        maxFreq = Math.max(maxFreq, count.get(char));

        // Window size is (right - left + 1)
        // If (window size - maxFreq) > k, we have too many replacements to make
        while ((right - left + 1) - maxFreq > k) {
            const leftChar = s[left];
            count.set(leftChar, count.get(leftChar) - 1);
            left++;
        }

        // Update the global maximum length found
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};