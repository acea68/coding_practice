// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// ------------------------

// Method #1

// function chunk(array, size) {
//   const chunked = [];
//   let index = 0;

//   while (index < array.length) {
//     chunked.push(array.slice(index, index + size));
//     console.log("Current chuncked: ",chunked)
//     index += size;
//     console.log("current index: ",index)
//   }

//   return chunked;
// }

// console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3))
// console.log(chunk([1, 2, 3, 4, 5], 1))

// ------------------------

// Method #2

function chunk(array, size) {
  const chunked = [];

  for (let element of array) {
    const last = chunked[chunked.length - 1];
    console.log("last element of chunked: ",last)

    if (!last || last.length === size) {
      chunked.push([element]);
      console.log("chunked in if loop: ", chunked)
    } else {
      last.push(element);
      console.log("last if else: ", last) 
    }
  }

  return chunked;
}
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3))

module.exports = chunk;