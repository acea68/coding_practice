// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

// const Queue = require('./queue');

// ------------------------------
// Attempt #1:
// function weave(sourceOne, sourceTwo) {

//   console.log(array)
//   if (sourceOne.data.length && sourceTwo.data.length) {
//     for (let i = 0; i < array.length; i += 2) {
//       array.data.splice(i, 0, sourceTwo.remove())
//     }
//   } else if (sourceOne.data.length && !sourceTwo.data.length) {
//     return sourceOne.data
//   } else if (!sourceOne.data.length && sourceTwo.data.length) {
//     return sourceTwo.data
//   }
//   return array;
// }

// ------------------------------
// Attempt #2:
function weave(sourceOne, sourceTwo) {
  let q = new Queue();
  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      q.add(sourceOne.remove());
    }
    if (sourceTwo.peek()) {
      q.add(sourceTwo.remove());
    }
  }
  return q;
}

// You should not need to make any changes to this class
class Queue { // FIFO
  constructor() {
    this.data = [];
  }
  add(record) {
    this.data.unshift(record); // add to beginning
  }
  remove() {
    return this.data.pop(); // remove last
  }
  peek() {
    return this.data[this.data.length - 1]; // look at last
  }
}

// TESTING
const queueOne = new Queue();
queueOne.add(1);
queueOne.add(2);
const queueTwo = new Queue();
queueTwo.add('Hi');
queueTwo.add('There');
const q = weave(queueOne, queueTwo);
console.log(q.remove()); // 1
console.log(q.remove()); // 'Hi'
console.log(q.remove()); // 2
console.log(q.remove()); // 'There'





// ------------------------------
// Solution
// function weave(sourceOne, sourceTwo) {
//   const q = new Queue();

//   while (sourceOne.peek() || sourceTwo.peek()) {
//     if (sourceOne.peek()) {
//       q.add(sourceOne.remove());
//     }

//     if (sourceTwo.peek()) {
//       q.add(sourceTwo.remove());
//     }
//   }

//   return q;
// }

module.exports = weave;