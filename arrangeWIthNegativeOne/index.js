/* Given an array of elements of length N, ranging from 0 to N-1. All elements may not be present in the array. If the element is not present, then there will be a -1 present in the array. Rearrange the array such that A[i] = i, and if i is not present, display -1 in that place.
*/
function arrangeWithNegativeOne(arr) {

}
// TESTING
// let result = arrangeWithNegativeOne([-1, -1, 6, 1, 9, 3, 2, -1, 4, -1]);
// console.log(result);

// --------------------------
// ATTEMPT #1:
// function arrangeWithNegativeOne(arr) {
//   let result = new Array(arr.length).fill(-1);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.indexOf(i) !== -1) {
//       result[i] = i;
//     }
//   }
//   return result;
// }

// array such that arr[i] = i.
function fix(A, len) {
  for (let i = 0; i < len; i++) {
    // if there exists a value at A[i], but wrong value
    if (A[i] != -1 && A[i] != i) {
      // store current value to x
      let x = A[i];
      // check if desired place has an incorrect value
      while (A[x] != -1 && A[x] != x) {
        // store the value from desired place
        let y = A[x];
        // place the x to its correct position
        A[x] = x;
        // now y will become x,
        // now search the place for x
        // (set x to y, and start search again)
        x = y;
      }
      // place the x to its correct position
      A[x] = x;
      // check if while loop hasn't set the correct value at current spot
      if (A[i] != i) {
        // if not then put -1 at the vacated place
        A[i] = -1;
      }
    }
  }
}
// Driver Code
let A = new Array(-1, -1, 6, 1, 9, 3, 2, -1, 4, -1);
let len = A.length;
// TESTING
let result = fix(A, len);
console.log(result);