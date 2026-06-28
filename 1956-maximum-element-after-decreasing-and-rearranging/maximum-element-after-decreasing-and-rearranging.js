/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function(arr) {
    // Step 1: Sort the array in ascending order
    arr.sort((a, b) => a - b);
    
    // Step 2: The first element must always be 1
    arr[0] = 1;
    
    // Step 3: Iterate through the array and enforce the condition
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1] + 1) {
            arr[i] = arr[i - 1] + 1;
        }
    }
    
    // The last element will hold the maximum possible value
    return arr[arr.length - 1];
};