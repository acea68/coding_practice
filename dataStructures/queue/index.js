// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue { // FIFO
  constructor() {
    this.data = [];
  }
  add(record) {
    this.data.unshift(record); // add to beginning
  }
  remove(record) {
    return this.data.pop(record); // remove last
  }
  // peek() {
  //   return this.data[this.data.length - 1]; // look at last
  // }
}

// TESTING
const q = new Queue();
q.add(1);
console.log(q.remove()); // returns 1;