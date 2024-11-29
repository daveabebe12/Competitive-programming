var maxProduct = (nums) =>{
    let prevMax = nums[0];
    let prevMin = nums[0];
    let result = nums[0];

    for(i = 1; i < nums.length; i++){
        let currMax = Math.max(nums[i], nums[i]*prevMax, nums[i]*prevMin);
        let currMin = Math.max(nums[i], nums[i]*prevMax, nums[i]*prevMin);

        prevMax = currMax;
        prevMin = currMin;

        result = Math.max(result,currMax)
    }
    return result;
}
let nums = [2,3,-2,4];
console.log(maxProduct(nums));