/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        // Identify which side is sorted
        // Left side is sorted
        if (nums[left] <= nums[mid]) {
            if (target >= nums[left] && target < nums[mid]) {
                // Target is in the sorted left half
                right = mid - 1;
            } else {
                // Target must be in the right half
                left = mid + 1;
            }
        } 
        // Right side is sorted
        else {
            if (target > nums[mid] && target <= nums[right]) {
                // Target is in the sorted right half
                left = mid + 1;
            } else {
                // Target must be in the left half
                right = mid - 1;
            }
        }
    }

    return -1;
};