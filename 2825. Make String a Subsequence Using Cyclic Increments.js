function canMakeSubsequence(str1, str2) {
    let i = 0;
    const n = str2.length;
    for (const c of str1) {
        const d = c === 'z' ? 'a' : String.fromCharCode(c.charCodeAt(0) + 1);
        if (i < n && (str2[i] === c || str2[i] === d)) {
            ++i;
        }
    }
    return i === n;
}

// Example usage:
console.log(canMakeSubsequence("abc", "acd")); // true
console.log(canMakeSubsequence("abz", "acd")); // false
