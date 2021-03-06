// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


// ----------------------------------------
// Method #1

function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += '#';   
  } else {
    stair += ' ';
  }
  steps(n, row, stair);
}

steps(10)

// // ----------------------------------------
// // Method #2


// let numSteps = 3
// console.log("steps:")

// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     // console.log('row: ', row)
//     let stair = '';
//     // console.log('1st stair:', stair)

//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         // console.log('column: ', column)
//         stair += '#';
//         // console.log('2nd stair:', stair)

//       } else {
//         stair += ' ';
//         // console.log('3rd stair:', stair)
//       }
//     }

//     console.log(stair);
//   }
// }
// steps(numSteps)

module.exports = steps;
