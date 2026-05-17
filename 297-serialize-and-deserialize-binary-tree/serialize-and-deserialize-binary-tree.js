/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (!root) return "";
    
    let result = [];
    let queue = [root];
    
    while (queue.length > 0) {
        let node = queue.shift();
        
        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push("null");
        }
    }
    
    // Trim trailing "null"s to keep the string compact, just like LeetCode
    while (result[result.length - 1] === "null") {
        result.pop();
    }
    
    return result.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (!data) return null;
    
    let values = data.split(",");
    let root = new TreeNode(parseInt(values[0]));
    let queue = [root];
    let i = 1;
    
    while (queue.length > 0 && i < values.length) {
        let current = queue.shift();
        
        // Process left child
        if (values[i] !== "null" && i < values.length) {
            current.left = new TreeNode(parseInt(values[i]));
            queue.push(current.left);
        }
        i++;
        
        // Process right child
        if (values[i] !== "null" && i < values.length) {
            current.right = new TreeNode(parseInt(values[i]));
            queue.push(current.right);
        }
        i++;
    }
    
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */