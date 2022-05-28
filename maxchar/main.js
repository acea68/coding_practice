// --- Directions
// Given a string, return the character that is most commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// ------------------------------
// Method #1:

// function maxChar(str) {
//   let obj = {};
//   let max = { char: '', val: 0 };
//   for (let char of str) {
//     if (obj[char]) {
//       obj[char]++;
//       continue;
//     }
//     obj[char] = 1;
//   }
//   for (let key in obj) {
//     if (obj[key] > max.val) {
//       max.char = key;
//       max.val = obj[key];
//     }
//   }
//   return max.char
// }

// ------------------------------
// Method #2:

function maxChar(str) {
  let obj = {};
  for(let char of str) {
    obj[char] = obj[char] + 1 || 1;
  }
  return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
}

console.log(maxChar("abcccccccd") === "c");
console.log(maxChar("apple 1231111") === "1");
