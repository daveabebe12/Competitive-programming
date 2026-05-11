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
 * @return {boolean}
 */
var isValidBST = function(root) {
    /**
     * Helper function to validate constraints
     * @param {TreeNode} node 
     * @param {number|null} min
     * @param {number|null} max
     */
    function validate(node, min, max) {
        // An empty tree is a valid BST
        if (!node) {
            return true;
        }

        // The current node's value must be strictly within (min, max)
        if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
            return false;
        }

        // Recursively check subtrees:
        // Left: update the upper bound (max) to current node's value
        // Right: update the lower bound (min) to current node's value
        return validate(node.left, min, node.val) && 
               validate(node.right, node.val, max);
    }

    return validate(root, null, null);
};