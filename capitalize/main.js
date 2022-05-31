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

// function capitalize(str) {
//   let arr = str.split(' ');
//   let result = '';
//   arr.forEach(word => {
//     result += word[0].toUpperCase() + word.slice(1, word.length) + ' ';
//   });
//   return result.slice(0, result.length - 1);
// };

// -----------------------
// Method #2

// function capitalize(str) {
//   let words = [];
//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//   return words.join(' ');
// };

// -----------------------
// Method #3

function capitalize(str) {
  let result = str[0].toUpperCase();
  for(let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
};

// console.log(capitalize('a short sentence')) //--> 'A Short Sentence'
// console.log(capitalize('a lazy fox')) //--> 'A Lazy Fox'
console.log(capitalize('look, it is working!')) //--> 'Look, It Is Working!'
