/**
 * @param {number[][]} edges
 * @param {number[][]} queries
 * @return {number[]}
 */
var assignEdgeWeights = function(edges, queries) {
    const MOD = 1000000007n;
    const n = edges.length + 1;

    const graph = Array.from({ length: n + 1 }, () => []);

    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    const LOG = 17 + 1; // enough for n <= 1e5

    const depth = Array(n + 1).fill(0);
    const up = Array.from({ length: LOG }, () => Array(n + 1).fill(0));

    // DFS/BFS to build depth and parent
    const stack = [[1, 0]];
    while (stack.length) {
        const [node, parent] = stack.pop();

        up[0][node] = parent;

        for (const nei of graph[node]) {
            if (nei === parent) continue;
            depth[nei] = depth[node] + 1;
            stack.push([nei, node]);
        }
    }

    // Binary lifting table
    for (let k = 1; k < LOG; k++) {
        for (let v = 1; v <= n; v++) {
            up[k][v] = up[k - 1][up[k - 1][v]];
        }
    }

    function lca(a, b) {
        if (depth[a] < depth[b]) {
            [a, b] = [b, a];
        }

        let diff = depth[a] - depth[b];

        for (let k = 0; k < LOG; k++) {
            if ((diff >> k) & 1) {
                a = up[k][a];
            }
        }

        if (a === b) return a;

        for (let k = LOG - 1; k >= 0; k--) {
            if (up[k][a] !== up[k][b]) {
                a = up[k][a];
                b = up[k][b];
            }
        }

        return up[0][a];
    }

    // Precompute powers of 2
    const pow2 = Array(n).fill(0n);
    pow2[0] = 1n;
    for (let i = 1; i < n; i++) {
        pow2[i] = (pow2[i - 1] * 2n) % MOD;
    }

    const ans = [];

    for (const [u, v] of queries) {
        const p = lca(u, v);
        const len = depth[u] + depth[v] - 2 * depth[p];

        if (len === 0) {
            ans.push(0);
        } else {
            ans.push(Number(pow2[len - 1]));
        }
    }

    return ans;
};