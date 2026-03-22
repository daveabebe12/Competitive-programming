/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freq = new Map();
    for (let num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    const maxFreq = Math.max(...freq.values());
    const buckets = Array.from({ length: maxFreq + 1 }, () => []);

    for (let [num, count] of freq) {
        buckets[count].push(num);
    }

    const result = [];
    for (let i = maxFreq; i > 0; i--) {
        for (let num of buckets[i]) {
            result.push(num);
            if (result.length === k) {
                return result;
            }
        }
    }
    return result;
};