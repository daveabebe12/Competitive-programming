/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const map = new Map();
    
    // Base case: a prefix sum of 0 has occurred once (for subarrays starting at index 0)
    map.set(0, 1);
    
    let count = 0;
    let currentSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
        
        // If (currentSum - k) exists in the map, it means there is a 
        // subarray that sums to k ending at the current index.
        if (map.has(currentSum - k)) {
            count += map.get(currentSum - k);
        }
        
        // Update the map with the currentSum
        map.set(currentSum, (map.get(currentSum) || 0) + 1);
    }
    
    return count;
};