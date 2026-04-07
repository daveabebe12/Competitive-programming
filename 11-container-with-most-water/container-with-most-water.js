/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let res = 0;
    let l = 0;
    let r = height.length - 1;

    while (l < r) {
        // Calculate the current area
        const currentHeight = Math.min(height[l], height[r]);
        const width = r - l;
        const area = currentHeight * width;

        // Update the maximum area found so far
        res = Math.max(res, area);

        // Move the pointer pointing to the shorter line
        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }

    return res;
};