/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const result = [];
    // The deque will store indices of elements
    const deque = []; 
    
    for (let i = 0; i < nums.length; i++) {
        // 1. Remove indices that are out of the current window bounds
        if (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift(); // Remove from front
        }
        
        // 2. Remove elements from the back that are smaller than the current element
        while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
            deque.pop(); // Remove from back
        }
        
        // 3. Add the current element's index to the back of the deque
        deque.push(i);
        
        // 4. If the window has reached size k, append the maximum to the result
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }
    
    return result;
};