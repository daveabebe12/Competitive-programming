var productExceptSelf = (nums) =>{
    let res = [];
    let start = 1;
    for(i = 0; i < nums.length; i++){
        res.push(start);
        start = start*nums[i];
    }
    let start2 = 1;
    for(i = nums.length - 1; i >= 0; i--){
        res[i] = res[i]*start2;
        start2 = start2*nums[i];
    }
    return res;
}
let nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));
