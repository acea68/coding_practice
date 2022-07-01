/* You created a game that is more popular than Angry Birds.
Each round, players receive a score between 0 and 100, which you use to rank them from highest to lowest. So far you're using an algorithm that sorts in O(n*lg(n)) time, but players are complaining that their rankings aren't updated fast enough. You need a faster sorting algorithm.

Write a function that takes:
- an array of unsortedScores
- the highestPossibleScore in the game
and returns a sorted array of scores in less than O(n*lg(n)) time.
For example:
const unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;
sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE);
// returns [91, 89, 65, 53, 41, 37]
We’re defining nn as the number of unsortedScores because we’re expecting the number of players to keep climbing.
And, we'll treat highestPossibleScore as a constant instead of factoring it into our big O time and space costs because the highest possible score isn’t going to change. Even if we do redesign the game a little, the scores will stay around the same order of magnitude. */
function sortScores(unorderedScores, highestPossibleScore) {
  // Sort the scores in O(n) time
  let scoreCounts = new Array(highestPossibleScore + 1).fill(0);
  for (let i = 0; i < unorderedScores.length; i++) {
    scoreCounts[unorderedScores[i]]++;
  }
  let sortedScores = [];
  for (let j = highestPossibleScore; j >= 0; j--) {
    let count = scoreCounts[j];
    for (let k = 0; k < count; k++) { // filter: if map of scores' count = 0, nothing is pushed
      sortedScores.push(j);
    }
  }
  return sortedScores;
}
// function sortScores(unorderedScores, highestPossibleScore) {

//   // Array of 0s at indices 0..highestPossibleScore
//   const scoreCounts = new Array(highestPossibleScore + 1).fill(0);

//   // Populate scoreCounts
//   unorderedScores.forEach(score => {
//     scoreCounts[score]++;
//   });

//   // Populate the final sorted array
//   const sortedScores = [];

//   // For each item in scoreCounts
//   for (let score = highestPossibleScore; score >= 0; score--) {
//     const count = scoreCounts[score];

//     // For the number of times the item occurs
//     for (let time = 0; time < count; time++) {
//       sortedScores.push(score);
//     }
//   }

//   return sortedScores;
// }
// Tests

var desc = 'no scores';
var actual = sortScores([], 100);
var expected = [];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

var desc = 'one score';
var actual = sortScores([55], 100);
var expected = [55];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

var desc = 'two scores';
var actual = sortScores([30, 60], 100);
var expected = [60, 30];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

var desc = 'many scores';
var actual = sortScores([37, 89, 41, 65, 91, 53], 100);
var expected = [91, 89, 65, 53, 41, 37];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

var desc = 'repeated scores';
var actual = sortScores([20, 10, 30, 30, 10, 20], 40);
var expected = [30, 30, 20, 20, 10, 10];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}