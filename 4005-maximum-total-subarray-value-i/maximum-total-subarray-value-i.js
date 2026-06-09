/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxTotalValue = function(nums, k) {
    let minVal = Infinity;
    let maxVal = -Infinity;
    
    // Find the global minimum and maximum elements in a single pass
    for (const num of nums) {
        if (num < minVal) minVal = num;
        if (num > maxVal) maxVal = num;
    }
    
    // The maximum single subarray value is (maxVal - minVal)
    // Multiply by k to get the accumulated maximum value
    return (maxVal - minVal) * k;
};