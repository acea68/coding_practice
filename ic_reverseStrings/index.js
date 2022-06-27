/*
Write a function that takes a list of characters and reverses the letters in place.
*/
function reverse(arr, start = 0, end = arr.length - 1) {
  if (!arr.length) return '';
  // let finalIndex = arr.length - 1
  for (let i = start; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[end];
    arr[end] = arr[i]
    arr[i] = temp;
    end--
  }
  return arr;
}

// function reverse(str) {
//   // return str.split('').reverse().join(''); // --- OR ---
//   if (!str.length) return '';
//   let arr = str.split('');
//   let finalIndex = arr.length - 1
//   for (let i = 0; i < Math.floor(arr.length/2); i++) {
//     let temp = arr[finalIndex];
//     arr[finalIndex] = arr[i]
//     arr[i] = temp;
//     finalIndex--
//   }
//   return arr.join('');
// }
// TESTING
// let result = reverse('abcd'); // dcba
// let result = reverse(''); // dcba
// let result = reverse('abcde'); // edcba

// let result = reverse('abcde'.split('')); // edcba
// console.log('🚀 ~ result', result);
// Tests

// let desc = 'empty string';
// let input = ''.split('');
// reverse(input);
// let actual = input.join('');
// let expected = '';
// assertEqual(actual, expected, desc);

// desc = 'single character string';
// input = 'A'.split('');
// reverse(input);
// actual = input.join('');
// expected = 'A';
// assertEqual(actual, expected, desc);

// desc = 'longer string';
// input = 'ABCDE'.split('');
// reverse(input);
// actual = input.join('');
// expected = 'EDCBA';
// assertEqual(actual, expected, desc);

// function assertEqual(a, b, desc) {
//   if (a === b) {
//     console.log(`${desc} ... PASS`);
//   } else {
//     console.log(`${desc} ... FAIL: ${a} != ${b}`);
//   }
// }

export { reverse };