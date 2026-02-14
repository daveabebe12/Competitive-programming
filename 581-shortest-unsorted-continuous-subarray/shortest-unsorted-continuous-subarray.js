/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let n = nums.length;

    let start = 0;
    let end = -1;

    let min = nums[n - 1];
    let max = nums[0];
    
    for(let i = 1; i < n; i++){
        max = Math.max(max, nums[i]);
        if(max > nums[i]) end = i;
    }
    for(let i = n-2; i >= 0; i--){
        min = Math.min(min, nums[i])
        if(min < nums[i]) start = i;
    }
    if(end === -1){
        return 0;
    }else{
        return end - start + 1;
    }
};