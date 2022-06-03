class Stack { // FILO
  constructor() {
    this.data = [];
  }
  add(record) {
    this.data.push(record); // add to end
  }
  remove() {
    return this.data.pop(); // remove last
  }
  peek() {
    return this.data[this.data.length - 1]; // look at last
  }
}

module.exports = Stack;