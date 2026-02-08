/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let l = 0;
    let r = nums.length - 1;
    let i = 0;

    while (i <= r) {
        if (nums[i] === 0) {
            // Swap elements at l and i
            [nums[l], nums[i]] = [nums[i], nums[l]];
            l++;
        } else if (nums[i] === 2) {
            // Swap elements at i and r
            [nums[i], nums[r]] = [nums[r], nums[i]];
            r--;
            // Decrement i to re-check the new value moved to this position
            i--;
        }
        i++;
    }
};