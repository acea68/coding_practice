// --- Directions
// Given a string, return a new string with the reversed order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// ---------------------------------
// Method #1

// function reverse(str) {
//   // let result = '';
//   // for (let i = 0; i < str.length; i++){

//   // }
//   let switched = [];
//   let result = str.split('');
//   result.forEach(char => switched.unshift(char))
//   // console.log(switched);
//   return switched.join('');
// };

// ---------------------------------
// Method #2: use .reverse() on an array

// function reverse(str) {
//   // let arr = str.split('');
//   // arr.reverse();
//   // return arr.join(''); // OR use condensed syntax below
//   return str
//     .split('')
//     .reverse()
//     .join('')
// }

// ---------------------------------
// Method #3: append new char to beginning

// function reverse(str) {
//  let reversed = '';
//  for (let char of str) {
//    reversed = char + reversed;
//   }
//   return reversed;
// }

// ---------------------------------
// Method #4: use reduce helper

// function reverse(str) {
//   // return str.split('').reduce((reversed, char) => {
//   //   return char + reversed
//   // } , ''); // or cleaner version...
//   return str.split('').reduce((reversed, char) => char + reversed , '');
// }

// TESTING
// let result = reverse('apple'); // 'elppa'
// let result = reverse('hello'); //'olleh'
let result = reverse('Greetings!'); //'!sgniteerG'

console.log(result);