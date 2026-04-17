/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let numbers = [];
    let factorials = [1];
    
    // 1. Create a list of numbers [1, 2, ..., n] 
    // 2. Precompute factorials up to (n-1)
    for (let i = 1; i <= n; i++) {
        numbers.push(i);
        if (i < n) {
            factorials[i] = factorials[i - 1] * i;
        }
    }
    
    // Adjust k to be 0-indexed for easier math
    k--;
    
    let result = "";
    
    // 3. Build the permutation digit by digit
    for (let i = n - 1; i >= 0; i--) {
        // Determine the index of the next number
        // For n=3, k=3: index = 2 / 2! = 1
        let index = Math.floor(k / factorials[i]);
        
        // Append the number at that index to our result
        result += numbers[index];
        
        // Remove that number from the available pool
        numbers.splice(index, 1);
        
        // Update k for the next iteration
        k %= factorials[i];
    }
    
    return result;
};