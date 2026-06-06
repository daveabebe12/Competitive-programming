/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let n = nums.length;
    let ans = new Array(n);

    let rightSum = nums.reduce((acc,curr)=> acc+curr, 0);
    let leftSum = 0;
    for(let i = 0; i < n; i++){
        rightSum -= nums[i];

        ans[i] = Math.abs(leftSum - rightSum);
        leftSum += nums[i];
    }
    return ans;
};