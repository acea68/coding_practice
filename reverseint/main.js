// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// ------------------------------
// Method #1:

// function reverseInt(n) {
  // let rev = Number(Math.abs(n).toString().split('').reverse().join(''));
  // return n < 0 ? rev * -1 : rev;
// }

// ------------------------------
// Method #2: parseInt, toString, Math.sign()

function reverseInt(n) {
  let rev = Number(Math.abs(n).toString().split('').reverse().join(''));
  return rev * Math.sign(n);
}

// TESTING
// let result = reverseInt(-981) === -189;
// let ans = reverseInt(15);
// console.log('ans:', ans)
// let result = ans === 51;
// console.log(result);
// let result = reverseInt(500) === 5;
// let result = reverseInt(-15) === -51;
let result = reverseInt(-90) === -9;
console.log(reverseInt(15) === 51);
