/* Exercies #2.2
Write a JavaScript program to extract the first half of a string of even length. 
*/

// function firstHalf(str){
//     if (str.length % 2 === 0 ) {
//         let halfLen = str.length/2
//         return str.slice(0,halfLen)
//     } else {
//         console.log('entered error')
//         return Error('Please provide a string input with even letters and try again.') 
//     }
// }


// function firstHalf(str){
//     // console.log(str.length % 2)
//     // console.log(str.length % 2 !== 0)
//     if ((str.length % 2) !== 0){
//         console.log('entered error')
//         return Error('Please provide a string input with even letters and try again.')
//     }
//     else {
//         let newArray = str.split('')
//         let halfLen = newArray.length/2
//         return newArray.slice(0,halfLen)
//     }
// }

function firstHalf(str) {
    return str.length % 2 === 0 ?  str.slice(0,str.length/2) :  Error("Please provide a string input with even letters and try again.")
}

console.log(firstHalf("Hello"))
console.log(firstHalf("Goodbyes"))

// console.log("Hello".length % 2)
// console.log("Goodbyes".length % 2)

// console.log("Goodbyes".split('').length/2)
// console.log("Goodbyes".split('').slice(0,"Goodbyes".split('').length/2))
