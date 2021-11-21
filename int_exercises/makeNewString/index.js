/* Exercise 2.1
Write a JavaScript program to create a new string from a given string, taking the first 3 characters and the last 3 characters of a string and adding them together. The string length must be 3 or more. If not, the original string is returned.
*/

// function makeNewString(str) {
//     if (str.length < 3){
//         return str
//     }
//     else if  (str.length > 3) {
//         return str.slice(0,3) + str.slice(-3)
//     }
// }

// Ternary form:

function makeNewString(str){
   return str.length < 3 ? str : str.slice(0,3) + str.slice(-3)
}
console.log(makeNewString('Hi'))
console.log(makeNewString('Hello'))

// let str = 'hi'
// console.log(str.length)
// console.log(str.length <= 1)