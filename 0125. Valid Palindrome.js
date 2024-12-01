var isPalindrome = (s) =>{
    s = s.toLowerCase();
    let str = s.replace(/[\s.,!?;:'"()\-]/g, '')
    let revstr = str.split('').reverse().join('');
    if(str === revstr){
        return true;
    }return false;
}

let s = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s));