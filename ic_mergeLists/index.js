/* In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit. Each order is represented by an "order id"(an integer). We have our lists of orders sorted numerically already, in lists. Write a function to merge our lists of orders into one sorted list.
For example:
const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];
console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19] */
function mergeArrays(myArray, alicesArray) {
  // Combine the sorted arrays into one large sorted array
  let resultArr = [];
  while (myArray.length || alicesArray.length) {
    if (myArray[0] && !alicesArray[0] || myArray[0] < alicesArray[0]) {
      resultArr.push(myArray[0])
      myArray.shift()
    } else {
      resultArr.push(alicesArray[0])
      alicesArray.shift()
    }
  }
  return resultArr;
}

// Tests
let desc = 'both arrays are empty';
let actual = mergeArrays([], []);
let expected = [];
assertDeepEqual(actual, expected, desc);

desc = 'first array is empty';
actual = mergeArrays([], [1, 2, 3]);
expected = [1, 2, 3];
assertDeepEqual(actual, expected, desc);

desc = 'second array is empty';
actual = mergeArrays([5, 6, 7], []);
expected = [5, 6, 7];
assertDeepEqual(actual, expected, desc);

desc = 'both arrays have some numbers';
actual = mergeArrays([2, 4, 6], [1, 3, 7]);
expected = [1, 2, 3, 4, 6, 7];
assertDeepEqual(actual, expected, desc);

desc = 'arrays are different lengths';
actual = mergeArrays([2, 4, 6, 8], [1, 7]);
expected = [1, 2, 4, 6, 7, 8];
assertDeepEqual(actual, expected, desc);

desc = 'example test';
let my_list = [3, 4, 6, 10, 11, 15];
let alices_list = [1, 5, 8, 12, 14, 19];
actual = mergeArrays(my_list, alices_list);
expected = [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19];
assertDeepEqual(actual, expected, desc);

function assertDeepEqual(a, b, desc) {
  const aStr = JSON.stringify(a);
  const bStr = JSON.stringify(b);
  if (aStr !== bStr) {
    console.log(`${desc} ... FAIL: ${aStr} != ${bStr}`);
  } else {
    console.log(`${desc} ... PASS`);
  }
}