var checkIfExist = (arr) =>{
    for(i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(j !== i && arr[i] === arr[j]*2){
                return true;
            }
        }
    }
    return false;
}
arr = [3,1,7,11];
console.log(checkIfExist(arr));