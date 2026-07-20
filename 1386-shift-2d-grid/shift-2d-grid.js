/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;
    const total = m * n;
    
    // Reduce k by the total number of elements to avoid redundant shifts
    k = k % total;
    
    // Create a new grid to store the result
    const result = Array.from({ length: m }, () => Array(n).fill(0));
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // Calculate the 1D index and the new shifted 1D index
            let currentIdx = i * n + j;
            let newIdx = (currentIdx + k) % total;
            
            // Convert back to 2D coordinates
            let newRow = Math.floor(newIdx / n);
            let newCol = newIdx % n;
            
            result[newRow][newCol] = grid[i][j];
        }
    }
    
    return result;
};