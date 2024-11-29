var convert = (s, numRows) => {
    if(numRows === 1 || s.length < numRows){
        return s;
    }
    let direction = false;
    let count = 0;
    
    let arr = new Array(numRows).fill("");
    for(i = 0; i < s.length; i++){
        let curr = s[i];
        arr[count] += curr;
        if(count === 0 || count >= numRows -1) direction =! direction;
        direction ? count ++ : count --;
    }
    return arr.join("");
};
let s = "PAYPALISHIRING";
let numRows = 3
console.log(convert(s,numRows));