// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  console.log('isequal: ',cleanString(stringA) === cleanString(stringB))
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  let s1 = str.replace(/[^\w]/g, '')
  console.log("reduce to only strings: ", s1)
  let s2 = s1.toLowerCase()
  console.log("lower case: ", s2)
  let s3 = s2.split('')
  console.log("split: ", s3)
  let s4 = s3.sort()
  console.log("sort: ", s4)
  let s5 = s4.join('');
  console.log("join: ", s5)
}
console.log(anagrams('RAIL! SAFETY!', 'fairy tales'))
module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   return cleanString(stringA) === cleanString(stringB);
// }

// function cleanString(str) {
//   return str
//     .replace(/[^\w]/g, '')
//     .toLowerCase()
//     .split('')
//     .sort()
//     .join('');
