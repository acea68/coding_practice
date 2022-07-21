/* Find a duplicate, Space Edition™.
We have an array of integers, where:
- The integers are in the range 1...n
- The array has a length of n+1
It follows that our array has at least one integer which appears at least twice. But it may have several duplicates, and each duplicate may appear more than twice.

Write a function which finds an integer that appears more than once in our array. Don't modify the input! (If there are multiple duplicates, you only need to find one of them.)
We're going to run this function on our new, super-hip MacBook Pro With Retina Display™. Thing is, the damn thing came with the RAM soldered right to the motherboard, so we can't upgrade our RAM. So we need to optimize for space! */
function findRepeat(numbers) {
  // Find a number that appears more than once
  for (let i = numbers.length - 1; i >= 0; i--) {
    let numToFind = numbers.indexOf(numbers[i]);
    if (numToFind !== i) return numbers[numToFind];
  }
  throw new Error('No duplicates found.')
}
// function findRepeat(numbers) {
//   let floor = 1;
//   let ceiling = numbers.length - 1;
//   while (floor < ceiling) {
//     // Divide our range 1..n into an upper range and lower range (such that they don't overlap)
//     // lower range is floor..midpoint
//     // upper range is midpoint+1..ceiling
//     const midpoint = Math.floor(floor + ((ceiling - floor) / 2));
//     const lowerRangeFloor = floor;
//     const lowerRangeCeiling = midpoint;
//     const upperRangeFloor = midpoint + 1;
//     const upperRangeCeiling = ceiling;
//     const distinctPossibleIntegersInLowerRange = lowerRangeCeiling - lowerRangeFloor + 1;
//     // Count number of items in lower range
//     let itemsInLowerRange = 0;
//     numbers.forEach(item => {
//       // Is it in the lower range?
//       if (item >= lowerRangeFloor && item <= lowerRangeCeiling) {
//         itemsInLowerRange += 1;
//       }
//     });
//     if (itemsInLowerRange > distinctPossibleIntegersInLowerRange) {
//       // There must be a duplicate in the lower range
//       // so use the same approach iteratively on that range
//       floor = lowerRangeFloor;
//       ceiling = lowerRangeCeiling;
//     } else {
//       // There must be a duplicate in the upper range
//       // so use the same approach iteratively on that range
//       floor = upperRangeFloor;
//       ceiling = upperRangeCeiling;
//     }
//   }
//   // Floor and ceiling have converged
//   // We found a number that repeats!
//   return floor;
// }

















// Tests

var desc = 'just the repeated number';
var actual = findRepeat([1, 1]);
var expected = 1;
assertEqual(actual, expected, desc);

var desc = 'short array';
var actual = findRepeat([1, 2, 3, 2]);
var expected = 2;
assertEqual(actual, expected, desc);

var desc = 'medium array';
var actual = findRepeat([1, 2, 5, 5, 5, 5]);
var expected = 5;
assertEqual(actual, expected, desc);

var desc = 'long array';
var actual = findRepeat([4, 1, 4, 8, 3, 2, 7, 6, 5]);
var expected = 4;
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}