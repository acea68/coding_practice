// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// -----------------------

// Method #1

 /* split phrase at each 'space'. 
 * store remaining portions in ordered array. 
 * ie. str.split(' ')
 * for each element in storedArray, take each char and .toUpperCase
 * store in new array firstLetterArray
 * join array
  */

// ---------------------------
// Method #1

// function capitalize(str) { 
//   let storedArray = [];

//   for (let word of str.split(' ')) {
//     storedArray.push(word[0].toUpperCase() + word.slice(1))
//   }  
// return storedArray.join(' ')
// }

// ---------------------------
// Method #2

function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    console.log('i: ', i)
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
      console.log('result: ', result)
    } else {
      result += str[i];
      console.log('result: ', result)
    }
  }

  return result;
}
// console.log(capitalize('a short sentence')) //--> 'A Short Sentence'
// console.log(capitalize('a lazy fox')) //--> 'A Lazy Fox'
console.log(capitalize('look, it is working!')) //--> 'Look, It Is Working!'

module.exports = capitalize;
