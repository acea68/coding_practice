// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

// ------------------------------
// Attempt #1:

class Queue {
  constructor() {
    this.data = [];
  }
  add(record) {
    this.data.unshift(record);
  }
  remove() {
    return this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
}

// TESTING
const q = new Queue();
q.add(1);
q.add(2);
q.peek(); // 1



// ------------------------------
// Solution

// class Queue {
//   constructor() {
//     this.data = [];
//   }

//   add(record) {
//     this.data.unshift(record);
//   }

//   remove() {
//     return this.data.pop();
//   }

//   peek() {
//     return this.data[this.data.length - 1];
//   }
// }

module.exports = Queue;