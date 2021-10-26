// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// ------------------------------

// Method #1

// function palindrome(str) {
//     return str.split('').every((char, i) => {
//       console.log(char, i)
//       return char === str[str.length - i - 1];
//     });
//   }
//   console.log(palindrome("han01nah"))
//   module.exports = palindrome;
  
// ------------------------------

// Method #2

function palindrome(str) {

  let split_str_list = str.split('')
  split_str_list.reverse()

  return str === split_str_list.join('');
}

console.log(palindrome("abcba"))
module.exports = palindrome;