// ---------------------------
// ---------------------------
// Skeleton

// FUNCTION DEFINITION(S)
function findMaxRepeatCountInWord(word) {
    let obj = {}
    let counter = 0
    for(let char of word){
        if(obj[char]){
            obj[char] ++
        } else {
            obj[char] = 1
        }
        if(obj[char] > counter){
            counter = obj[char]
        }
    }
    return counter
}
  
function findFirstWordWithMostRepeatedChars(text) {
    var maxRepeatCountOverall = 0;
    var wordWithMaxRepeatCount = '';
    let wordsArray = text.split(' ')
    for (let word of wordsArray){
        var repeatCountForWord = findMaxRepeatCountInWord(word)
        // console.log(word + " : " + repeatCountForWord)
        if(repeatCountForWord > maxRepeatCountOverall){
            maxRepeatCountOverall = repeatCountForWord
            wordWithMaxRepeatCount = word
        }
    }
    return wordWithMaxRepeatCount;
}
  
// ASSERTION FUNCTION(S) TO BE USED
function assertEquals(actual, expected, testName){
    if(actual===expected){
        console.log('passed')
    } else {
        console.log(`FAILED [${testName}] Expected "${actual}" but got "${expected}"`)
    }
}

// TESTS CASES
let result = findFirstWordWithMostRepeatedChars('this is a sentence with words')
assertEquals(result, 'sentence','find word with higest character count in word')
console.log(findFirstWordWithMostRepeatedChars('this is a sentence with words'))
console.log(findMaxRepeatCountInWord('little'))