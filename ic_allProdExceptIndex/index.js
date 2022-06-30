/* You have an array of integers, and for each index you want to find the product of every integer except the integer at that index. Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.
For example, given:
  [1, 7, 3, 4]
your function would return:
  [84, 12, 28, 21]
by calculating:
  [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]
Here's the catch: You can't use division in your solution! */
function getProductsOfAllIntsExceptAtIndex(intArray) {
  // Make a list of the products
  if (intArray.length < 2) {
    throw new Error('Need at least 2 numbers');
  }
  let prodArrWithoutCurrIndex = [];
  let prodBeforeIndex = 1;
  for (let i = 0; i < intArray.length; i++) {
    prodArrWithoutCurrIndex[i] = prodBeforeIndex;
    prodBeforeIndex *= intArray[i];
  }
  let prodAfterIndex = 1;
  for (let j = intArray.length - 1; j >= 0; j--) {
    prodArrWithoutCurrIndex[j] *= prodAfterIndex;
    prodAfterIndex *= intArray[j];
  }
  return prodArrWithoutCurrIndex;
}

// Tests

var desc = 'short array';
var actual = getProductsOfAllIntsExceptAtIndex([1, 2, 3]);
var expected = [6, 3, 2];
assertArrayEquals(actual, expected, desc);

var desc = 'longer array';
var actual = getProductsOfAllIntsExceptAtIndex([8, 2, 4, 3, 1, 5]);
var expected = [120, 480, 240, 320, 960, 192];
assertArrayEquals(actual, expected, desc);

var desc = 'array has one zero';
var actual = getProductsOfAllIntsExceptAtIndex([6, 2, 0, 3]);
var expected = [0, 0, 36, 0];
assertArrayEquals(actual, expected, desc);

var desc = 'array has two zeros';
var actual = getProductsOfAllIntsExceptAtIndex([4, 0, 9, 1, 0]);
var expected = [0, 0, 0, 0, 0];
assertArrayEquals(actual, expected, desc);

var desc = 'one negative number';
var actual = getProductsOfAllIntsExceptAtIndex([-3, 8, 4]);
var expected = [32, -12, -24];
assertArrayEquals(actual, expected, desc);

var desc = 'all negative numbers';
var actual = getProductsOfAllIntsExceptAtIndex([-7, -1, -4, -2]);
var expected = [-8, -56, -14, -28];
assertArrayEquals(actual, expected, desc);

var desc = 'error with empty array';
const emptyArray = () => (getProductsOfAllIntsExceptAtIndex([]));
assertThrowsError(emptyArray, desc);

var desc = 'error with one number';
const oneNumber = () => (getProductsOfAllIntsExceptAtIndex([1]));
assertThrowsError(oneNumber, desc);

function assertArrayEquals(a, b, desc) {
  const arrayA = JSON.stringify(a);
  const arrayB = JSON.stringify(b);
  if (arrayA !== arrayB) {
    console.log(`${desc} ... FAIL: ${arrayA} != ${arrayB}`)
  } else {
    console.log(`${desc} ... PASS`);
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}