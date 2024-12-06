function canChange(start, target) {
    const n = start.length;
    let i = 0, j = 0;
    while (true) {
        // Skip underscores in start
        while (i < n && start[i] === '_') {
            i++;
        }
        // Skip underscores in target
        while (j < n && target[j] === '_') {
            j++;
        }
        // Check if both pointers are out of bounds
        if (i >= n && j >= n) {
            return true;
        }
        // Check for mismatch or out of bounds
        if (i >= n || j >= n || start[i] !== target[j]) {
            return false;
        }
        // Check for invalid movements
        if (start[i] === 'L' && i < j) {
            return false;
        }
        if (start[i] === 'R' && i > j){
            return false;
        }
        // Move both pointers forward
        i++;
        j++;
    }
}
start = "_L__R__R_";
target = "L______RR";
console.log(canChange(start, target));