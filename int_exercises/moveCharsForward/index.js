/* 
Exercise 3:
Write a JavaScript program to replace every character in a given string with the character following it in the alphabet. 

moveCharFwd('abcd') = 'bcde'

*/

function moveCharsFwd(str) {
    return str.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
}
console.log(moveCharsFwd("abcd"))