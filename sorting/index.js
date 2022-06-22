// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j + 1]) {
        lesser = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = lesser;
      }
    }
  }
  return arr;
}
// // TESTING
// let result = bubbleSort([10, 0, -30, 90, 0, 5]);
// console.log(result);

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let lesser = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}
// // TESTING
// let result = selectionSort([10, 0, -30, 90, 0, 5]);
// console.log(result);

function mergeSort(arr) {
  if (arr.length == 1) {
    return arr;
  }
  let left = arr.splice(0, Math.floor(arr.length/2));
  return merge(mergeSort(left), mergeSort(arr));
}

function merge(left, right) {
  let merged = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }
  return [...merged, ...left, ...right];
}
// TESTING
// let result = mergeSort([10, 0, -30, 90, 0, 5]);
// console.log(result);

module.exports = { bubbleSort, selectionSort, mergeSort, merge };