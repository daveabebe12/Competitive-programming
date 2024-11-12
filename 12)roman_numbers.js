function romanToInt(s) {
    // Define the values of each Roman numeral symbol
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    // Initialize result
    let total = 0;
    
    // Iterate through each character in the string
    for (let i = 0; i < s.length; i++) {
        // If we're not at the last character and the current symbol is smaller than the next symbol
        if (i < s.length - 1 && romanValues[s[i]] < romanValues[s[i + 1]]) {
            // Subtract the current symbol's value
            total -= romanValues[s[i]];
        } else {
            // Otherwise, add the current symbol's value
            total += romanValues[s[i]];
        }
    }
    
    return total;
}
console.log(romanToInt("III"));      // Output: 3
console.log(romanToInt("LVIII"));    // Output: 58
console.log(romanToInt("MCMXCIV"));  // Output: 1994
