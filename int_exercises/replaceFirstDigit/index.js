/* Exercise 3.5
Write a JavaScript prorgam to replace the first digit in a string (should contain at least one digit) with a $ character.
*/

let replaceFirstDigit = function (string){
    // return string.replace(/[0-9]/,'$')
    return string.replace(/\d/,'$') // same notation as line 6
}
// let replaceFirstDigit = function (string){
//     if (string.length<1){
//         return "Please provide a string with more than one character."
//     } else {
//         for (let char in string){
//             if (parseInt(char) !== 'number'){
//                 return string.slice(0,string[char]) + '$' + string.slice(string[char], string.length)
//             }
//         }
//     }
// }

console.log(replaceFirstDigit('He1lo, I am a dol1ar sign.'))
console.log(replaceFirstDigit('.'))
console.log(replaceFirstDigit(''))
// let replaceFirstDigit = function (string){
//     if (string.length<1){
//         return "Please provide a string with more than one character."
//     } else {
//         // let arr = string.split()
//         // let newStr = "$" + string.slice(1,string.length)    
//         return "$" + string.slice(1,string.length) 
//     }
// }