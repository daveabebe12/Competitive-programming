/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    
    const res = [];
    const quad = [];

    const kSum = (k, start, target) => {
        // Base Case: When k is 2, use the two-pointer Two Sum II approach
        if (k === 2) {
            let l = start;
            let r = nums.length - 1;

            while (l < r) {
                const sum = nums[l] + nums[r];
                if (sum < target) {
                    l++;
                } else if (sum > target) {
                    r--;
                } else {
                    res.push([...quad, nums[l], nums[r]]);
                    l++;
                    // Skip duplicates for the left pointer
                    while (l < r && nums[l] === nums[l - 1]) {
                        l++;
                    }
                }
            }
            return;
        }

        // Recursive Step: Reduce kSum to (k-1)Sum
        for (let i = start; i < nums.length - k + 1; i++) {
            // Skip duplicates for the current position
            if (i > start && nums[i] === nums[i - 1]) {
                continue;
            }

            quad.push(nums[i]);
            kSum(k - 1, i + 1, target - nums[i]);
            quad.pop(); // Backtrack
        }
    };

    kSum(4, 0, target);
    return res;
};