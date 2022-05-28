// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// ------------------------------
// Method #1:

// function palindrome(str) {
//   let reversed = '';
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   if (str === reversed) return true;
//   return false;
// };

// ------------------------------
// Method #2: direct

// function palindrome(str) {
//  let reversed = str.split('').reverse().join('');
//  return reversed === str;
// };

// ------------------------------
// Method #3: every (note: this apporach is not the most efficient soln, since it doubles the amount of work needed)

function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  })
};

// TESTING
let results = palindrome("abcba"); // true
// let results = palindrome("abcdefg"); // false
console.log(results);