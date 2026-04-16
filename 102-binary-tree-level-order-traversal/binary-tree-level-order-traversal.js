/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];

    const result = [];
    const queue = [root]; // Initialize queue with the root

    while (queue.length > 0) {
        const levelSize = queue.length; // Number of nodes at the current level
        const currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift(); // Remove the first element
            currentLevel.push(node.val);

            // 2. Push children to the queue for the next level
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        // 3. Add the processed level to our result array
        result.push(currentLevel);
    }

    return result;
};