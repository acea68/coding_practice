/* Exercies 3.1
Write a JavaScript program to find the number of even digits in an array of intergers.
*/

let countEvenNums = function (array) {
    let evenNumCount = 0 
    for (let num of array) {
        num % 2 === 0 ? evenNumCount++ : evenNumCount 
    }
    return evenNumCount
}
// let inputArray = [3,2,444,50,-2,333,4,-50]

// console.log(countEvenNums(inputArray))

/* Exercise 3.2
Write a JavaScript program to find the number of even values up to a given number. 
*/

let createArray = function(numLim) {
    let newArray = []
    for (let i = 1; i <= numLim; i++) { // if you want to include '0' as part of the count, set i=0
        newArray.push(i)
    }
    return newArray
}
console.log(countEvenNums(createArray(10)))


// let evenNumLimit = function (array, limit) {
//     let evenNumCount = 0 
//     for (let num of array) {
//         num % 2 === 0 && num <= limit ? evenNumCount++ : evenNumCount 
//     }
//     return evenNumCount
// }
// let inputArray = [3,2,444,50,-2,333,4,-50]
// console.log(evenNumLimit(inputArray, 100)) 

// let countLimit = function (arr, limit) {
//     return countEvenNums(arr) <= limit ? countEvenNums(arr) : limit
// }
// console.log(countLimit(inputArray, 4))