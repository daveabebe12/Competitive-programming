/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function(num1, num2) {
    let totalSum = 0;
    
    for (let i = num1; i <= num2; i++) {
        totalSum += getWaviness(i);
    }
    
    return totalSum;
};

/**
 * Helper function to calculate the waviness of a single number
 * @param {number} num
 * @return {number}
 */
function getWaviness(num) {
    // Numbers with fewer than 3 digits have a waviness of 0
    if (num < 100) return 0;
    
    const str = num.toString();
    let waviness = 0;
    
    // Iterate from the second digit to the second-to-last digit
    for (let j = 1; j < str.length - 1; j++) {
        const prev = str[j - 1];
        const curr = str[j];
        const next = str[j + 1];
        
        // Check for Peak: strictly greater than both neighbors
        if (curr > prev && curr > next) {
            waviness++;
        } 
        // Check for Valley: strictly less than both neighbors
        else if (curr < prev && curr < next) {
            waviness++;
        }
    }
    
    return waviness;
};