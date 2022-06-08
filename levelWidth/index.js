// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]
let Node = require('./node.js');

function levelWidth(root) {
  let arr = [root, 'stop']; // Solution
  let counters = [0];
  while (arr.length > 1) {
    let node = arr.shift();
    if (node === 'stop') {
      counters.push(0);
      arr.push('stop');
    } else {
      arr.push(...node.children);
      counters[counters.length - 1]++
    }
  }
  return counters; // OR...
  // let result = []; // Attempt #1
  // let arr = [root, 'stop'];
  // let count = 0;
  // while (arr.length > 1) {
  //   let node = arr.shift();
  //   if (node === 'stop') {
  //     arr.push('stop');
  //     result.push(count);
  //     count = 0;
  //   } else {
  //     arr.push(...node.children);
  //     count++;
  //   }
  // }
  // result.push(count);
  // return result;
}

let root = new Node(0);
root.add(1);
root.add(2);
root.add(3);
root.children[0].add(4);
root.children[2].add(5);
// console.log(root)
console.log(levelWidth(root)); // [1, 3, 2]