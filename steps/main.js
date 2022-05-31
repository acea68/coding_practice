// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape with N levels using the # character.
// Make sure the step has spaces on the right hand side!
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

// function steps(n) {
//   if (!n) return;
//   let ans = '#';
//   let space = new Array(n).join(' ');
//   for (let i = 1; i < n + 1; i++) {
//     console.log(ans + space);
//     ans += '#';
//     space = space.substring(1);
//   }
// };

// ----------------------------------------
// Method #2: each row, by coln

// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';
//     for (let coln = 0; coln < n; coln++) {
//       if (coln <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//     console.log(stair);
//   }
// };

// ----------------------------------------
// Method #3: recursion

function steps(n, row = 0, stair = '') {
  // base case: reached last row
  if (n === row) {
    return;
  };
  // base case: reached end of row
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  };
  // assemble stair:
  // if (stair.length <= row) {
  //    stair += '#';
  // } else {
  //   stair += ' ';
  // }
  // steps(n, row, stair); //  OR ...
  let add = stair.length <= row ? '#' : ' ';
  steps(n, row, stair + add);
};

// TESTING
// steps(2)
// '# '
// '##'
// steps(3)
// '#  '
// '## '
// '###'
steps(4)
  // '#   '
  // '##  '
  // '### '
  // '####'