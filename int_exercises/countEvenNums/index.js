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

console.log(countEvenNums([3,2,4,5,2,3,4,-50]))