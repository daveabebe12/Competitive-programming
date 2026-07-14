/**
 * @param {number[]} nums
 * @return {number}
 */
var subsequencePairCount = function(nums) {
    const MOD = 1e9 + 7;
    const maxNum = Math.max(...nums);
    const limit = maxNum + 1;
    
    // dp[x][y] represents the number of disjoint pairs (seq1, seq2)
    // where gcd(seq1) = x and gcd(seq2) = y.
    // Using a flat Int32Array of size limit * limit for optimal performance.
    let dp = new Int32Array(limit * limit);
    
    // Base case: both subsequences are empty
    dp[0] = 1; 
    
    // Helper function to calculate Greatest Common Divisor
    const gcd = (a, b) => {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };
    
    for (const num of nums) {
        // Create a copy of dp representing the "skip" choice
        let nextDp = new Int32Array(dp);
        
        for (let x = 0; x < limit; x++) {
            for (let y = 0; y < limit; y++) {
                const count = dp[x * limit + y];
                if (count === 0) continue;
                
                // Choice 1: Include 'num' in seq1
                const nextX = (x === 0) ? num : gcd(x, num);
                const idx1 = nextX * limit + y;
                nextDp[idx1] = (nextDp[idx1] + count) % MOD;
                
                // Choice 2: Include 'num' in seq2
                const nextY = (y === 0) ? num : gcd(y, num);
                const idx2 = x * limit + nextY;
                nextDp[idx2] = (nextDp[idx2] + count) % MOD;
            }
        }
        dp = nextDp;
    }
    
    // Sum up all pairs where gcd(seq1) == gcd(seq2) and they are non-empty (> 0)
    let totalPairs = 0;
    for (let g = 1; g <= maxNum; g++) {
        totalPairs = (totalPairs + dp[g * limit + g]) % MOD;
    }
    
    return totalPairs;
};