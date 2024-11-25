function areAdjacentSubarraysIncreasing(nums, k) {
    const n = nums.length;

    // Helper function to check if a subarray is strictly increasing
    const isStrictlyIncreasing = (start, length) => {
        for (let i = start; i < start + length - 1; i++) {
            if (nums[i] >= nums[i + 1]) {
                return false;
            }
        }
        return true;
    };

    // Iterate through possible starting indices of the first subarray
    for (let i = 0; i <= n - 2 * k; i++) {
        if (isStrictlyIncreasing(i, k) && isStrictlyIncreasing(i + k, k)) {
            return true;
        }
    }

    return false;
}

// Example Usage
const nums1 = [2, 5, 7, 8, 9, 2, 3, 4, 3, 1];
const k1 = 3;
console.log(areAdjacentSubarraysIncreasing(nums1, k1)); // Output: true

const nums2 = [1, 2, 3, 4, 4, 4, 4, 5, 6, 7];
const k2 = 5;
console.log(areAdjacentSubarraysIncreasing(nums2, k2)); // Output: false
