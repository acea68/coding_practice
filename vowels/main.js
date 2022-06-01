// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// ------------------------------------
// Method #1

// function vowels(str) {
//   let obj = { a: 'a', e: 'e', i: 'i', o: 'o', u: 'u' };
//   let count = 0;
//   str.toLowerCase().split('').forEach(char => {
//     obj[char] ? count++ : null;
//   })
//   return count;
// };

// ------------------------------------
// Method #2: iterative

// function vowels(str) {
//   let count = 0;
//   let verify = ['a', 'e', 'i', 'o', 'u'];
//   for (let char of str.toLowerCase()) {
//     verify.includes(char) ? count++ : null;
//   }
//   return count;
// };

// ------------------------------------
// Method #3: regex

function vowels(str) {
  let matches = str.match(/[aeiou]/gi); // g: don't stop after 1st instance (global), i: case-inseneitive
  // console.log(matches);
  return matches ? matches.length : 0;
};

// TESTING
var result = vowels('Hi There!'); // 3
console.log(result);
var result = vowels('Why do you ask?'); // 4
console.log(result);
var result = vowels('Why?'); // 0
console.log(result);
