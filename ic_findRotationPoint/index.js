/* I want to learn some big words so people think I'm smart.
I opened up a dictionary to a page in the middle and started flipping through, looking for words I didn't know. I put each word I didn't know at increasing indices in a huge array I created in memory. When I reached the end of the dictionary, I started from the beginning and did the same thing until I reached the page I started at.
Now I have an array of words that are mostly alphabetical, except they start somewhere in the middle of the alphabet, reach the end, and then start from the beginning of the alphabet. In other words, this is an alphabetically ordered array that has been "rotated."
For example:
  const words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote',  // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];
Write a function for finding the index of the "rotation point," which is where I started working from the beginning of the dictionary. This array is huge (there are lots of words I don't know) so we want to be efficient here.
To keep things simple, you can assume all words are lowercase.
*/
// function findRotationPoint(words) {
//   const firstWord = words[0];
//   let floorIndex = 0;
//   let ceilingIndex = words.length - 1;
//   while (floorIndex < ceilingIndex) {
//     // Guess a point halfway between floor and ceiling
//     const guessIndex = Math.floor(floorIndex + ((ceilingIndex - floorIndex) / 2));
//     // If guess comes after first word or is the first word
//     if (words[guessIndex] >= firstWord) {
//       // Go right
//       floorIndex = guessIndex;
//     } else {
//       // Go left
//       ceilingIndex = guessIndex;
//     }
//     // If floor and ceiling have converged
//     if (floorIndex + 1 === ceilingIndex) {
//       // Between floor and ceiling is where we flipped to the beginning
//       // so ceiling is alphabetically first
//       break;
//     }
//   }
//   return ceilingIndex;
// }

function findRotationPoint(words) {
  let firstWord = words[0];
  let floorInd = 0;
  let ceilInd = words.length - 1;
  while (floorInd < ceilInd) {
    let midInd =  Math.floor(floorInd + ((ceilInd - floorInd) / 2));
    let midWord = words[midInd];
    if (midWord >= firstWord) {
      floorInd = midInd;
    } else {
      ceilInd = midInd;
    }
    if (ceilInd - floorInd === 1) {
      break;
    }
  }
  return ceilInd;
}


















// Tests

var desc = 'small array';
var actual = findRotationPoint(['cape', 'cake']);
var expected = 1;
assertEquals(actual, expected, desc);

var desc = 'medium array';
var actual = findRotationPoint(['grape', 'orange', 'plum', 'radish', 'apple']);
var expected = 4;
assertEquals(actual, expected, desc);

var desc = 'large array';
var actual = findRotationPoint(['ptolemaic', 'retrograde', 'supplant',
  'undulate', 'xenoepist', 'asymptote',
  'babka', 'banoffee', 'engender',
  'karpatka', 'othellolagkage']);
var expected = 5;
assertEquals(actual, expected, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}