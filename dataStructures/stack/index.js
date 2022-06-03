// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack { // FILO
  constructor() {
    this.data = [];
  }
  push(record) {
    this.data.push(record); // add at end
  }
  pop() {
    return this.data.pop(); // remove last
  }
  peek() {
    return this.data[this.data.length - 1]; // look at last
  }
}

// TESTING
const s = new Stack();
s.push(1);
s.push(2);
console.log(s.pop()); // returns 2
console.log(s.pop()); // returns 1
s.push(3);
console.log(s.peek()); // returns 3
