/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
    let char = s.split("");
    let i = 0;
    let j = char.length - 1;
    while(i < j){
        if(!vowels.has(char[i])){
            i++;
        }else if(!vowels.has(char[j])){
            j--;
        }else{
            [char[i],char[j]] = [char[j],char[i]]
        i++;
        j--;
        };
    }
    return char.join("");
};