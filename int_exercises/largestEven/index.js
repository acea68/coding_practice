/* Exercise 3.4
Write a JavaScript program to get the largest even number from an array of integers.
*/

let largestEven = function(array) {
    let maxEven = []
    for (let i=0; i < array.length-1; i++) {
        if (maxEven < array[i] && (array[i] % 2 === 0) ) {
            maxEven = array[i]
        }
        if (array[array.length-1] > maxEven && array[array.length-1] % 2 === 0) {
            maxEven = array[array.length-1]
        }
    } 
    return console.log(maxEven)
}

// let largestEven = function(array) {
//     for (let int of array) {
//         if (array[int] < array[int+1] && array[int] % 2 != 0) {
//             array.splice(int,1)
//         }
//     } 
//     return console.log(array)
// }
let arr = [1,0,6,-4,50,-25,200,11,5300]
largestEven(arr)