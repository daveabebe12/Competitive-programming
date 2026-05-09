/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // If we hit the end of a branch or find p or q, return this node
    if (root === null || root === p || root === q) {
        return root;
    }

    // Search the left and right branches
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    // If both sides return a non-null value, the current root is the LCA
    if (left !== null && right !== null) {
        return root;
    }

    // Otherwise, return whichever side found p or q
    return left !== null ? left : right;
};