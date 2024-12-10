const isPalendrome = (s) =>{
    s = String(s);
    let j = s.length - 1;
    for(i = 0; i < s.length/2; i++){
        if(s[i] !== s[j]){
            return false;
        }
        j--;
    }
    return true;
}
console.log(isPalendrome(1232));