/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let a = [...nums].sort((a,b)=>a-b);
    let x = 0;
    for(let i = 1; i < nums.length; i++){
        if(nums[i] < nums[i-1]){
            x = i;
        }
    }
    let rotated = [...nums.slice(x), ...nums.slice(0, x)];
    if(a.join(',') == rotated.join(',')){
        return true;
    }
    return false;
};