/* Find a duplicate, Space Edition™ BEAST MODE
In Find a duplicate, Space Edition™, we were given a list of integers where:
1. the integers are in the range 1...n
2. the list has a length of n+1
These properties mean the list must have at least 1 duplicate. Our challenge was to find a duplicate number without modifying the input and optimizing for space. We used a divide and conquer approach, iteratively cutting the list in half to find a duplicate integer in O(nlg{n}) time and O(1) space (sort of a modified binary search).
But we can actually do better. We can find a duplicate integer in O(n) time while keeping our space cost at O(1).

This is a tricky one to derive (unless you have a strong background in graph theory), so we'll get you started:
Imagine each item in the list as a node in a linked list. In any linked list, each node has a value and a "next" pointer. In this case:
-The value is the integer from the list.
-The "next" pointer points to the value-eth node in the list (numbered starting from 1). For example, if our value was 3, the "next" node would be the third node.
Here’s a full example:
A list [2, 3, 1, 3], so 2 is in the first position and points to 3 in the second position.
Notice we're using "positions" and not "indices." For this problem, we'll use the word "position" to mean something like "index," but different: indices start at 0, while positions start at 1. More rigorously: position = index + 1.
Using this, find a duplicate integer in O(n) time while keeping our space cost at O(1). Just like before, don't modify the input.
Drawing pictures will help a lot with this one. Grab some paper and pencil (or a whiteboard, if you have one). */

function findDuplicate(intArray) {
  // Find a number that appears more than once ... in O(n) time
  // look for loop
    // start at the end of the array (since it has no arrows pointing to it, aka. no node's '.next' exists that points to it => head)
  // identify loop when you visit a node that you've already seen
  // identify length of loop (count number of steps to get back to this same node)
  // identify first node that starts loop
  // return that node's value
  return 0;
}

// function findDuplicate(intArray) {

//   const n = intArray.length - 1;

//   // STEP 1: GET INSIDE A CYCLE
//   // Start at position n+1 and walk n steps to
//   // find a position guaranteed to be in a cycle
//   let positionInCycle = n + 1;
//   for (let i = 0; i < n; i++) {

//     // We subtract 1 from the current position to step ahead:
//     // the 2nd *position* in an array is *index* 1
//     positionInCycle = intArray[positionInCycle - 1];
//   }

//   // STEP 2: FIND THE LENGTH OF THE CYCLE
//   // Find the length of the cycle by remembering a position in the cycle
//   // and counting the steps it takes to get back to that position
//   const rememberedPositionInCycle = positionInCycle;
//   let currentPositionInCycle = intArray[positionInCycle - 1];  // 1 step ahead
//   let cycleStepCount = 1;

//   while (currentPositionInCycle !== rememberedPositionInCycle) {
//     currentPositionInCycle = intArray[currentPositionInCycle - 1];
//     cycleStepCount += 1;
//   }

//   // STEP 3: FIND THE FIRST NODE OF THE CYCLE
//   // Start two pointers
//   //   (1) at position n+1
//   //   (2) ahead of position n+1 as many steps as the cycle's length
//   let pointerStart = n + 1;
//   let pointerAhead = n + 1;
//   for (let i = 0; i < cycleStepCount; i++) {
//     pointerAhead = intArray[pointerAhead - 1];
//   }

//   // Advance until the pointers are in the same position
//   // which is the first node in the cycle
//   while (pointerStart !== pointerAhead) {
//     pointerStart = intArray[pointerStart - 1];
//     pointerAhead = intArray[pointerAhead - 1];
//   }

//   // Since there are multiple values pointing to the first node
//   // in the cycle, its position is a duplicate in our array
//   return pointerStart;
// }

















// Tests

let desc = 'just the repeated number';
let actual = findDuplicate([1, 1]);
let expected = 1;
assertEqual(actual, expected, desc);

desc = 'short array';
actual = findDuplicate([1, 2, 3, 2]);
expected = 2;
assertEqual(actual, expected, desc);

desc = 'medium array';
actual = findDuplicate([1, 2, 5, 5, 5, 5]);
expected = 5;
assertEqual(actual, expected, desc);

desc = 'long array';
actual = findDuplicate([4, 1, 4, 8, 3, 2, 7, 6, 5]);
expected = 4;
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}