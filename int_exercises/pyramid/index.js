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


function pyramid(n) {
  const midpoint = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let level = '';
    console.log('row:', row)
    console.log('level:', level)

    for (let column = 0; column < 2 * n - 1; column++) {
      console.log('column:', column)
      if (midpoint - row <= column && midpoint + row >= column) {
        level += '#';
        console.log('nested level:', level)
      } else {
        level += ' ';
        console.log('nested level:', level)

      }
    }

    console.log(level);
  }
}

pyramid(4)
module.exports = pyramid;
