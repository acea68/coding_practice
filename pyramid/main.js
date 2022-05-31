// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// -----------------------------------
// Method #1

// function pyramid(n) {
//   if (!n) return;
//   let space = new Array(n).join(' ');
//   let hash = '#';
//   for (let i = 1; i < n + 1; i++) {
//     console.log(space + hash + space);
//     hash += '##';
//     space = space.substring(1);
//   }
// };

// -----------------------------------
// Method #2: iterative across colns

// function pyramid(n) {
//   let midpoint = Math.floor((2 * n - 1) / 2);
//   for (let row = 0; row < n; row++) {
//     let level = '';
//     for (let coln = 0; coln < 2 * n - 1; coln++) {
//       if (midpoint - row <= coln && midpoint + row >= coln) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// };

// -----------------------------------
// Method #3: recursion

function pyramid(n, row = 0, level = '') {
  if (row === n) {
    return; // end recursion
  }
  if (level.length === (2 * n - 1)) {
    console.log(level);
    return pyramid(n, row + 1); // recurse @ end of row
  }
  // build new row & recurse
  let midpoint = Math.floor((2 * n - 1) / 2);
  if (level.length >= midpoint - row && level.length <= midpoint + row) {
    level += '#';
  } else {
    level += ' ';
  }
  pyramid(n, row, level);
};

// TESTING
// pyramid(1)
//  '#'
// pyramid(2)
//  ' # '
//  '###'
pyramid(3)
//  '  #  '
//  ' ### '
//  '#####'
// pyramid(10)
// '         #         '
// '        ###        '
// '       #####       '
// '      #######      '
// '     #########     '
// '    ###########    '
// '   #############   '
// '  ###############  '
// ' ################# '
// '###################'
