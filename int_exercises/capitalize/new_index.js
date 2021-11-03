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


function capitalize(str) { 
  let storedArray = [];

  for (let word of str.split(' ')) {
    storedArray.push(word[0].toUpperCase() + word.slice(1))
  }  
return storedArray.join(' ')
}

capitalize('a short sentence') //--> 'A Short Sentence'
capitalize('a lazy fox') //--> 'A Lazy Fox'
capitalize('look, it is working!') //--> 'Look, It Is Working!'

module.exports = capitalize;
