// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class. Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
  insert(data) { // Solution
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
    // let node = this; // Attempt #2
    // while(node.left || node.right) {
    //   if (data > node.value) {
    //     node = node.right;
    //   } else {
    //     node = node.left;
    //   }
    // }
    // data > this.value ? this.right = new Node(data) : this.left = new Node(data); // Attempt #1
  }
  contains(data) {
    if (this.data === data) {
      return this;
    } else if (this.data < data && this.right) {
      return this.right.contains(data);
    } else if (this.data > data && this.left) {
      return this.left.contains(data);
    }
    return null;
  }
}

module.exports = Node;