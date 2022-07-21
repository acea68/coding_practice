// create Node class
// include insert & print node
// print tree using BFS
// iteratively & recursively
// implement DFS
// iteratively & recursively


class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }

  insert_(num) { // iteratively
    let parent = null;
    let current = this; // root
    while (current !== null) {
      parent = current;
      if (current.data <= num) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    if (parent.data <= num) {
      parent.right = new Node(num);
    } else {
      parent.left = new Node(num);
    }
  }

  insert_r(num) { // recursively
    if (num <= this.data) {
      if (this.left) {
        this.left.insert_(num);
      } else {
        this.left = new Node(num);
      }
    } else {
      if (this.right) {
        this.right.insert_(num);
      } else {
        this.right = new Node(num);
      }
    }
  }

  printBFS_i() { // iteratively
    let queue = [];
    queue.push(this);
    while (queue.length) {
      let current = queue.shift();
      console.log(current.data);
      if (current.left) {
        queue.push(current.left)
      }
      if (current.right) {
        queue.push(current.right)
      }
    }
  }

  printBFS_r() {/* not advised */ } // recursively

  // Create an empty stack nodeStack and push root node to stack.
  // while nodeStack is not empty:
  // Pop an item from the stack and print it.
  // Push right child of a popped item to stack
  // Push left child of a popped item to stack
  // The right child is pushed before the left child to make sure that the left subtree is processed first.
  printDFS_i() { // iteratively: pre-order
    let stack = [];
    let curr = this;
    stack.push(curr);
    while (stack.length) {
      let curr = stack.pop();
      console.log(curr.data);
      if (curr.right) stack.push(curr.right);
      if (curr.left) stack.push(curr.left);
    }
  }

  printDFS_() { // recursively: pre-order
    if (this) {
      console.log(this.data);
      if (this.left) this.left.printDFS_();
      if (this.right) this.right.printDFS_();
    }
  }
}

let root = new Node(10);
root.insert_(5);
root.insert_(15);
root.insert_(4);
root.insert_(6);
root.insert_(17);
root.insert_(7);
root.insert_(16);

// root.printBFS_();
root.printDFS_();
