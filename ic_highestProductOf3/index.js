/* Given an array of integers, find the highest product you can get from three of the integers.
The input arrayOfInts will always have at least three integers. */
function highestProductOf3(arrayOfInts) {
  // Calculate the highest product of three numbers
  // iterate thru array
  // recorde three highest numbers & indexes. consider sorting
  // keep track of negative numbers
  // if (arrayOfInts.length < 3) throw new Error('Must provide at least three numbers.')
  // arrayOfInts.sort((a, b) => b - a);
  // let largest1 = arrayOfInts[0];
  // let largest2 = arrayOfInts[1];
  // let largest3 = arrayOfInts[2];
  // return largest1 * largest2 * largest3;
  if (arrayOfInts.length < 3) throw new Error('Must provide at least three numbers.')
  let high = Math.max(arrayOfInts[0], arrayOfInts[1]);
  let low = Math.min(arrayOfInts[0], arrayOfInts[1]);
  let high2 = arrayOfInts[0] * arrayOfInts[1];
  let low2 = arrayOfInts[0] * arrayOfInts[1];
  let prod3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];
  for (let i = 2; i < arrayOfInts.length; i++) {
    let curr = arrayOfInts[i];
    prod3 = Math.max(
      prod3,
      curr * high2,
      curr * low2
    );
    high2 = Math.max(
      high2,
      curr * high,
      curr * low
    );
    low2 = Math.min(
      low2,
      curr * high,
      curr * low
    );
    high = Math.max(curr, high);
    low = Math.min(curr, low);
  }
  return prod3
}


















// Tests

let desc = 'short array';
let actual = highestProductOf3([1, 2, 3, 4]);
let expected = 24;
assertEqual(actual, expected, desc);

desc = 'longer array';
actual = highestProductOf3([6, 1, 3, 5, 7, 8, 2]);
expected = 336;
assertEqual(actual, expected, desc);

desc = 'array has one negative';
actual = highestProductOf3([-5, 4, 8, 2, 3]);
expected = 96;
assertEqual(actual, expected, desc);

desc = 'array has two negatives';
actual = highestProductOf3([-10, 1, 3, 2, -10]);
expected = 300;
assertEqual(actual, expected, desc);

desc = 'array is all negatives';
actual = highestProductOf3([-5, -1, -3, -2]);
expected = -6;
assertEqual(actual, expected, desc);

desc = 'error with empty array';
const emptyArray = () => (highestProductOf3([]));
assertThrowsError(emptyArray, desc);

desc = 'error with one number';
const oneNumber = () => (highestProductOf3([1]));
assertThrowsError(oneNumber, desc);

desc = 'error with two numbers';
const twoNumber = () => (highestProductOf3([1, 1]));
assertThrowsError(twoNumber, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
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