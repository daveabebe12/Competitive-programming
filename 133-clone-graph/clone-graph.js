/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
   // If the graph is empty
    if (!node) return null;

    // Map to keep track of already visited/cloned nodes
    // Key: Original Node, Value: Cloned Node
    const visited = new Map();

    const dfs = (currNode) => {
        // If we have already cloned this node, return the clone
        if (visited.has(currNode)) {
            return visited.get(currNode);
        }

        // Create the clone (empty neighbors for now)
        const clone = new Node(currNode.val);
        
        // Map the original node to its clone BEFORE recursing
        // This handles cycles (e.g., 1 -> 2 -> 1)
        visited.set(currNode, clone);

        // Iterate through original neighbors and clone them
        for (let neighbor of currNode.neighbors) {
            clone.neighbors.push(dfs(neighbor));
        }

        return clone;
    };

    return dfs(node); 
};