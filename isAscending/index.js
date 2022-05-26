/* Exercise 3.3
Write a JavaScript program to check whether a given array of integers is sorted in ascending order.
*/

let isAcsending = function(array) {
    for (let isNum of array) {
        if (typeof isNum !== "number" ) {
            return Error("Please provide an array with numbers only.")
        }
    }
    for (let i of array) {
        if ( array[i+1] < array[i] ) {
            return false
        }    
        return true
    }
}

console.log(isAcsending([1,2,'three', 4]))
console.log(isAcsending([1,2,3,4,5,6]))
console.log(isAcsending([1,3,2,6,5,4]))