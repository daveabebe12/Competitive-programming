/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length === 0) return 0;

    // 'tails' will store the smallest tail of all increasing subsequences 
    // of length i+1 at index i.
    const tails = [];

    for (let num of nums) {
        let left = 0;
        let right = tails.length;

        // Binary search to find the insertion point
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (tails[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        // If 'left' is equal to the current length, it means 'num' 
        // is larger than any tail we've seen, extending the LIS.
        if (left === tails.length) {
            tails.push(num);
        } else {
            // Otherwise, replace the existing tail to keep the subsequence 
            // values as small as possible.
            tails[left] = num;
        }
    }

    return tails.length;
};