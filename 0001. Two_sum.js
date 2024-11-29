var twosum = (nums,target) =>{
    let storage = {};
    for(let[index,num] of nums.entries()){
        if(storage[num] !== undefined){
            return [storage[num],index];
        }else;
        storage[target-num] = index;
    }
}   
let nums = [2, 7, 11, 15];
let target = 9;

console.log(twosum(nums, target)); // Output: [0, 1]
