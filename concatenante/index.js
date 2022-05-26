/* Exercise 2.3
Write a JavaScript program to concatenante two strings except their first character.
*/

function concatenate(str1, str2){
    // return str1.slice(1,str1.length) + str2.slice(1, str2.length)
    return str1.slice(1) + str2.slice(2)
}
console.log(concatenate('Happy', 'birthday'))