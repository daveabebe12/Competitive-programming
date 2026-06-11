/**
 * @param {number[][]} edges
 * @return {number}
 */
var assignEdgeWeights = function(edges) {
    const MOD = 1_000_000_007n;
    const n = edges.length + 1;
    
    // Step 1: Build the adjacency list
    const adj = Array.from({ length: n + 1 }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }
    
    // Step 2: BFS to find the maximum depth (number of edges from root)
    let maxDepth = 0;
    const queue = [[1, 0]]; // [currentNode, currentDepth]
    const visited = new Uint8Array(n + 1);
    visited[1] = 1;
    
    let head = 0;
    while (head < queue.length) {
        const [curr, depth] = queue[head++];
        maxDepth = Math.max(maxDepth, depth);
        
        for (const neighbor of adj[curr]) {
            if (!visited[neighbor]) {
                visited[neighbor] = 1;
                queue.push([neighbor, depth + 1]);
            }
        }
    }
    
    // Step 3: Compute 2^(maxDepth - 1) % MOD using modular exponentiation
    // If maxDepth is 0 (though constraints say n >= 2, so maxDepth >= 1), 2^(-1) won't occur.
    return Number(power(2n, BigInt(maxDepth - 1), MOD));
};

// Helper function for efficient binary exponentiation
function power(base, exp, mod) {
    let res = 1n;
    base = base % mod;
    while (exp > 0n) {
        if (exp % 2n === 1n) {
            res = (res * base) % mod;
        }
        base = (base * base) % mod;
        exp = exp / 2n;
    }
    return res;
}