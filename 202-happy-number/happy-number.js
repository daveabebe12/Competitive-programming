/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const getNext = (num) => {
        let totalSum = 0;
        while (num > 0) {
            let digit = num % 10;
            totalSum += digit * digit;
            num = Math.floor(num / 10);
        }
        return totalSum;
    };
    
    // 1. Initialize our runners.
    // Slow starts at the beginning. Fast takes an immediate step forward.
    let slow = n;
    let fast = getNext(n);
    
    // 2. Keep running as long as Fast hasn't reached 1,
    // AND Fast hasn't lapped Slow (slow !== fast).
    while (fast !== 1 && slow !== fast) {
        slow = getNext(slow);         // Slow moves 1 step
        fast = getNext(getNext(fast)); // Fast moves 2 steps
    }
    
    // 3. If Fast managed to break out and reach 1, it's a happy number!
    // If they crashed into each other, fast !== 1, so it returns false.
    return fast === 1;
};