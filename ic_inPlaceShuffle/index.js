/* Write a function for doing an in-place shuffle of an array.
The shuffle must be "uniform," meaning each item in the original array must have the same probability of ending up in each spot in the final array.
Assume that you have a function getRandom(floor, ceiling) for getting a random integer that is >= floor and <= ceiling. */
function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}
function shuffle(array) {
  // If it's 1 or 0 items, just return
  if (array.length <= 1) return;
  // Walk through from beginning to end
  for (let indexWeAreChoosingFor = 0;
    indexWeAreChoosingFor < array.length - 1; indexWeAreChoosingFor++) {
    // Choose a random not-yet-placed item to place there
    // (could also be the item currently in that spot)
    // must be an item AFTER the current item, because the stuff
    // before has all already been placed
    const randomChoiceIndex = getRandom(indexWeAreChoosingFor, array.length - 1);
    // Place our random choice in the spot by swapping
    if (randomChoiceIndex !== indexWeAreChoosingFor) {
      const valueAtIndexWeChoseFor = array[indexWeAreChoosingFor];
      array[indexWeAreChoosingFor] = array[randomChoiceIndex];
      array[randomChoiceIndex] = valueAtIndexWeChoseFor;
    }
  }
}
// function shuffle(array) {
//   // Shuffle the input in place
//   // iterate thru arr
//   // for each elem, store curr elem & choose randInd for it. store ind & value {newRandIndex: currElemVal}
//   // if randInd exists in map, choose new randInd
//   // before placing curr elem in new Index position, store replaced elem in temp obj with new randIndex {newRandIndx2: replacedElemVal}
//   // if randInd exists in map, choose new randInd
//   // repeat until all indexes are taken up
//   if (array.length <= 1) return;
//   let map = {};
//   let newIndex;
//   for (let i = 0; i < array.length; i++) {
//     if (Object.values(map).indexOf(array[i]) > 0) {
//       continue;
//     }
//     newIndex = getRandom(0, array.length - 1);
//     while (map[newIndex]) {
//       newIndex = getRandom(0, array.length - 1);
//     }
//     map[newIndex] = array[i];
//     if (newIndex !== i) {
//       if (Object.values(map).length === array.length) break;
//       let replacedVal = array[newIndex];
//       let replacedIndex = getRandom(0, array.length - 1);
//       while (map[replacedIndex]) {
//         replacedIndex = getRandom(0, array.length - 1);
//       }
//       map[replacedIndex] = replacedVal;
//     }
//   }
//   for (let j = 0; j < array.length; j++) {
//     array[j] = map[j];
//   }
//   return array
// }

// let result = getRandom(0, 6);
// console.log('🚀 ~ result', result);

const sample = [1, 2, 3, 4, 5];
console.log('Initial array: ', sample);
shuffle(sample);
console.log('Shuffled array: ', sample);