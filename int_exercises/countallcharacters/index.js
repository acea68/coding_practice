// Use an Object to count things
// 19
// Use an Object to count things
// Submitted on Today at 12:32 AM
// Complete a function called countAllCharacters. 
// Given a string, your function returns an object where 
// each key is a character in the given string. The value of 
// each key should be how many times each character appeared in the given string.

// Notes:

// If given an empty string, countAllCharacters should return an empty object.
// var output = countAllCharacters('banana');
// console.log(output); // --> {b: 1, a: 3, n: 2}

function countAllCharacters(str) {

    let obj = {}
    
    for(let char of str) {
        obj[char] = obj[char] + 1 || 1
    }
    return obj
  }

  console.log(countAllCharacters("parangaricutirimicuaro"))