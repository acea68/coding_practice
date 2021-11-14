/* Exercise #1:
Write a JavaScript program to check two numbers and return true if one of the numbers is 100 or if the sum of the two numbers is 100
*/

let isEqualTo100 = (a,b) => a === 100 || b === 100 || (a + b) === 100;

console.log(isEqualTo100(100,0))
console.log(isEqualTo100(50,50))
