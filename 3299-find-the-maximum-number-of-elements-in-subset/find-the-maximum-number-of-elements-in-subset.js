/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function(nums) {
    const counts = new Map();
    for (const num of nums) {
        counts.set(num, (counts.get(num) || 0) + 1);
    }
    
    let maxLen = 1;
    
    // Handle special case for 1
    if (counts.has(1)) {
        const onesCount = counts.get(1);
        maxLen = onesCount % 2 === 0 ? onesCount - 1 : onesCount;
    }
    
    // Check for other numbers (excluding 1)
    for (const [num, count] of counts.entries()) {
        if (num === 1) continue;
        
        let current = num;
        let currentLen = 0;
        
        // Build the chain upwards: x -> x^2 -> x^4 ...
        while (counts.has(current) && counts.get(current) >= 2) {
            currentLen += 2;
            current = current * current;
        }
        
        // The loop stops when we either don't have current, or we have exactly 1 of it.
        // If we have at least 1, it can act as the peak of our sequence.
        if (counts.has(current) && counts.get(current) >= 1) {
            currentLen += 1;
        } else {
            // If we don't even have 1 of the peak element, 
            // the previous element must act as the peak instead.
            currentLen -= 1; 
        }
        
        maxLen = Math.max(maxLen, currentLen);
    }
    
    return maxLen;
};