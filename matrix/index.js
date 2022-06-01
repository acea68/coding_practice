// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[undefined, undefined],
//     [undefined, undefined]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// ------------------------------
// Method #1:

// function matrix(n) {
//   let results = [];
//   for (let i = 0; i < n; i++) {
//     results.push([]);
//   }
//   let count = 1;
//   let startColn = 0;
//   let endColn = n - 1;
//   let startRow = 0;
//   let endRow = n - 1;
//   while (startColn <= endColn && startRow <= endRow) {
//     // Top row
//     for (let i = startColn; i <= endColn; i++) {
//       results[startRow][i] = count;
//       count++;
//     }
//     startRow++;
//     // Right coln
//     for (let i = startRow; i <= endRow; i++) {
//       results[i][endColn] = count;
//       count++;
//     }
//     endColn--;
//     // Bottom row
//     for (let i = endColn; i >= startColn; i--) {
//       results[endRow][i] = count;
//       count++;
//     }
//     endRow--;
//     // Start coln
//     for (let i = endRow; i >= startRow; i--) {
//       results[i][startColn] = count;
//       count++;
//     }
//     startColn++;
//   }
//   return results;
// };

// ------------------------------
// Attempt #1: (unfinished)

// function matrix(n) {
// // iterate through top most available (first) subelem & fill with consecutive nums, l -> r (mark 'filled')
// // at end of subelem, iterate through elems & fill in only last avail subelem
// // at last avail elem, iterate backwards from end & continue to fill with consecutive nums, r -> l (mark 'filled')
// // when subelem filled, iterate backwards thru elems, filling in only first-most available subelems until you reach elem marked 'not filled'
// // repeat
//   let result = [];
//   for (let i = 0; i < n; i++) {
//     let elem = Array(n).fill(undefined, 0, n);
//     result.push(elem);
//     if (n <= 2) {
//       return result;
//     }
//   }
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       result[i][j] = j + 1;
//     }
//   }
//   return result;
// };

// ------------------------------
// Attempt #2:

function matrix(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push([]);
  }
  let counter = 1;
  let startR = 0;
  let endR = n - 1;
  let startC = 0;
  let endC = n - 1;
  while (startR <= endR && startC <= endC) {
    for (let i = startC; i <= endC; i++) {
      result[startR][i] = counter;
      counter++;
    }
    startR++;
    for (let i = startR; i <= endR; i++) {
      result[i][endC] = counter;
      counter++;
    }
    endC--;
    for (let i = endC; i >= startC; i--) {
      result[endR][i] = counter;
      counter++;
    }
    endR--;
    for (let i = endR; i >= startR; i--) {
      result[i][startC] = counter;
      counter++;
    }
    startC++;
  }
  return result;
};

// TESTING
// let result = matrix(2);
// [[undefined, undefined],
//   [undefined, undefined]]
// let result = matrix(3)
// [[1, 2, 3],
//  [8, 9, 4],
//  [7, 6, 5]]
let result = matrix(5)
// [[ 1,  2,  3, 4],
//  [12, 13, 14, 5],
//  [11, 16, 15, 6],
//  [10,  9,  8, 7]]
console.log(result);