/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    const n = s.length;
    if (n < k) return 0;

    // Use a fixed-size array for memory efficiency (26 lowercase English letters)
    const count = new Array(26).fill(0);
    for (let i = 0; i < n; i++) {
        count[s.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i < n; i++) {
        const charCode = s.charCodeAt(i) - 97;
        
        // If this character appears less than k times, it's a "splitter"
        if (count[charCode] > 0 && count[charCode] < k) {
            // Split the string and check segments recursively
            const segments = s.split(s[i]);
            let maxLen = 0;
            
            for (const segment of segments) {
                maxLen = Math.max(maxLen, longestSubstring(segment, k));
            }
            return maxLen;
        }
    }

    // If no splitters were found, the entire string is valid
    return n;
};