/* Exercise 5:
Write a JavaScript program to check a given string contains 2 to 4 occurences of a specified character. 
*/

let countChars = function(str, inputChar) {
    let strArray = str.split('')
    let counter = 0
    for (let element of strArray) {
        if ( element === inputChar ) {
            counter++
        }
    }
    // if (counter >= 2 && counter <= 4){
    //     return `${inputChar} is found in the string "${str}" ${counter} times.`
    // } else if (counter === 0 ) {
    //     return 'The character in question is not found in the string provided.'
    // } else {
    //     return "The charater in question is outside the 2-4 range."
    // }
  
    if (!counter){
        return 'The character in question is not found in the string provided.'
    } else {
        return counter >= 2 && counter <= 4 ? `${inputChar} is found in the string "${str}" ${counter} times.` : "The charater in question is outside the 2-4 range."
    }
}
   
console.log(countChars('Hello, my name is Alan.', '!'))