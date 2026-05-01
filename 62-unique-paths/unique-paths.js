/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // Initialize a row of size n with 1s
    let row = new Array(n).fill(1);

    // Iterate through m-1 rows (skipping the first row which is all 1s)
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            // The new value is the sum of the current value (above) 
            // and the value to the left
            row[j] = row[j] + row[j - 1];
        }
    }

    return row[n - 1];
};