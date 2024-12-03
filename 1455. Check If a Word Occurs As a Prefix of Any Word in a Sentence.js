var isPrefixOfWord = (sentence, searchWord) =>{
    let wordList = sentence.split(" ");
    for(i = 0; i < wordList.length; i++){
        if(wordList[i].startsWith(searchWord)){
            return i + 1;
        }
    }
    return -1;
}
sentence = "i love eating burger";
searchWord = "eat";
console.log(isPrefixOfWord(sentence,searchWord));