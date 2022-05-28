// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// ------------------------------
// Method #1:

// function chunk(array, size) {
//   let chunked = [];
//   while (array.length > 0) {
//     if (array.length <= size) {
//       chunked.push(array.splice(0, array.length));
//     } else {
//       chunked.push(array.splice(0, size));
//     }
//   }
//   return chunked;
// }

// ------------------------------
// Method #2:

// function chunk(array, size) {
//   let chunked = [];
//   while (array.length > 0){
//     array.length <= size ?
//     chunked.push(array.splice(0, array.length)) :
//     chunked.push(array.splice(0, size));
//   }
//   return chunked;
// }

// ------------------------------
// Method #3:

// function chunk(array, size) {
//   let chunked = []; // declare arr of chunked arrs
//   for (let elem of array) {
//     let last = chunked[chunked.length - 1]; // retrieve last elem (subarr) in chunked
//     if (!last || last.length === size) { // if last elem DNE, or len === chunk size
//       chunked.push([elem]); // push a new chunk subarr w/curr elem
//     } else {
//       last.push(elem); // else add curr elem into chunk
//     }
//   }
//   return chunked;
// }

// ------------------------------
// Method #4:

function chunk(array, size) {
  let chunked = [];
  let index = 0;
  while(index < array.length) {
    chunked.push(array.slice(index, size + index));
    index += size;
  }
  return chunked;
}

// TESTING
// let result = chunk([1, 2, 3, 4], 2); // [[ 1, 2], [3, 4]]
// let result = chunk([1, 2, 3, 4, 5], 2); // [[ 1, 2], [3, 4], [5]]
let result = chunk([1, 2, 3, 4, 5, 6, 7, 8], 3); // [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// let result = chunk([1, 2, 3, 4, 5], 4); // [[ 1, 2, 3, 4], [5]]
// let result = chunk([1, 2, 3, 4, 5], 10); // [[ 1, 2, 3, 4, 5]]
console.log(result);