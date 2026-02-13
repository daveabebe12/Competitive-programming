/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let min = Infinity;
    let max = -Infinity;
    let flag = false;

    // Find the minimum element that is out of order (scanning left to right)
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            flag = true;
        }
        if (flag) {
            min = Math.min(min, nums[i]);
        }
    }

    flag = false;
    // Find the maximum element that is out of order (scanning right to left)
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] > nums[i + 1]) {
            flag = true;
        }
        if (flag) {
            max = Math.max(max, nums[i]);
        }
    }

    let l, r;
    // Find the first index from the left where an element is greater than the 'min' out-of-order element
    for (l = 0; l < nums.length; l++) {
        if (min < nums[l]) {
            break;
        }
    }

    // Find the first index from the right where an element is smaller than the 'max' out-of-order element
    for (r = nums.length - 1; r >= 0; r--) {
        if (max > nums[r]) {
            break;
        }
    }

    // If r - l is less than 0, it means the array was already sorted
    return r - l < 0 ? 0 : r - l + 1;
};