/**
 * @param {number} n
 * @param {number[][]} restrictions
 * @return {number}
 */
var maxBuilding = function(n, restrictions) {
    // Step 1: Add the boundary restrictions
    restrictions.push([1, 0]);
    restrictions.push([n, n - 1]);
    
    // Step 2: Sort the restrictions by building ID
    restrictions.sort((a, b) => a[0] - b[0]);
    
    const m = restrictions.length;
    
    // Step 3: Forward Pass (Left to Right)
    for (let i = 0; i < m - 1; i++) {
        const [id1, h1] = restrictions[i];
        const [id2, h2] = restrictions[i + 1];
        restrictions[i + 1][1] = Math.min(h2, h1 + (id2 - id1));
    }
    
    // Step 3: Backward Pass (Right to Left)
    for (let i = m - 2; i >= 0; i--) {
        const [id1, h1] = restrictions[i];
        const [id2, h2] = restrictions[i + 1];
        restrictions[i][1] = Math.min(h1, h2 + (id2 - id1));
    }
    
    // Step 4: Find the maximum peak between any two adjacent checkpoints
    let maxOverallHeight = 0;
    for (let i = 0; i < m - 1; i++) {
        const [id1, h1] = restrictions[i];
        const [id2, h2] = restrictions[i + 1];
        
        // Math.floor handles the integer division for the peak formula
        const peak = Math.floor((h1 + h2 + (id2 - id1)) / 2);
        maxOverallHeight = Math.max(maxOverallHeight, peak);
    }
    
    return maxOverallHeight;
};