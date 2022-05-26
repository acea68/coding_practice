/* Exercise 2.4
Given two values, write a JavaScript program to find out which one is nearest to 100.
*/

function nearTo100(num1, num2){
    if (Math.abs(num1 - 100) === Math.abs(num2 - 100)){
        return [num1,num2]
    }
    return Math.abs(num1 - 100) < Math.abs(num2 - 100) ? num1 : num2
}

console.log(nearTo100(99,101))
console.log(nearTo100(200,98))
console.log(nearTo100(300,-100))