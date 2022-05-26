/* Exercise #5:

Write a JavaScript program to create a new string adding "New!" in front of a given string. If the given string begins with "New!" already, then return the original string.
*/

function addNew (str) {
    // if (str.indexOf('New!') == 0) {
    //     return str
    // }
    // return 'New! ' + str
    
    return str.indexOf('New!') === 0 ? str : `New! ${str}`
}

// const addNew = (str) => 
//     str.indexOf('New!') === 0 ? str : `New! ${str}`

console.log(addNew('New! Offers'))
console.log(addNew('Offers'))

// const alanVar = 1
// alanVar == true ? console.log('Yay') : console.log('Nay')