// --- Directions
// Implement a Queue data structure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

// ------------------------------
// Attempt #1:

class Queue { // FIFO (LILO)
  constructor() {
    this.first = new Stack(); // LIFO (FILO)
    this.second = new Stack(); // LIFO (FILO)
  }
  enqueue(record) {
    this.first.add(record);
  }
  dequeue() {
    while (this.first.peek()) { // cannot use forEach bc of dynamically changing length due to removal of end at each iteration
      this.second.add(this.first.remove());
    }
    let dequeue = this.second.remove();
    while (this.second.peek()) {
      this.first.add(this.second.remove());
    }
    return dequeue;
  }
  see() {
    while (this.first.peek()) {
      this.second.add(this.first.remove());
    }
    let last = this.second.peek();
    while (this.second.peek()) {
      this.first.add(this.second.remove());
    }
    return last;
  }
}

// TESTING
const q = new Queue();
q.enqueue(1);
q.enqueue(2);
console.log(q.see());  // returns 1
console.log(q.dequeue()); // returns 1
console.log(q.dequeue()); // returns 2

// ------------------------------
// Method #1:

// class Queue { // FIFO
//   constructor() {
//     this.first = new Stack();
//     this.second = new Stack();
//   }
//   add(record) {
//     this.first.add(record); // push
//   }
//   remove() {
//     while (this.first.peek()) {
//       let record = this.first.remove(); // pop
//       this.second.add(record); // push
//     }
//     let record = this.second.remove();
//     while (this.second.peek()) {
//       this.first.add(this.second.remove());  // push(pop)
//     }
//     return record;
//   }
//   peek() {
//     while (this.first.peek()) {
//       this.second.add(this.first.remove()); // push(pop)
//     }
//     let record = this.second.peek();
//     while (this.second.peek()) {
//       this.first.add(this.second.remove()); // push(pop)
//     }
//     return record;
//   }
// }

// // TESTING
// const q = new Queue();
// q.add(1);
// q.add(2);
// console.log(q.peek());  // returns 1
// console.log(q.remove()); // returns 1
// console.log(q.remove()); // returns 2






// ------------------------------
// Solution
// class Queue {
//   constructor() {
//     this.first = new Stack();
//     this.second = new Stack();
//   }

//   add(record) {
//     this.first.push(record);
//   }

//   remove() {
//     while (this.first.peek()) {
//       this.second.push(this.first.pop());
//     }

//     const record = this.second.pop();

//     while (this.second.peek()) {
//       this.first.push(this.second.pop());
//     }

//     return record;
//   }

//   peek() {
//     while (this.first.peek()) {
//       this.second.push(this.first.pop());
//     }

//     const record = this.second.peek();

//     while (this.second.peek()) {
//       this.first.push(this.second.pop());
//     }

//     return record;
//   }
// }

module.exports = Queue;