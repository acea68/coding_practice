// create Node class
// include insert & print node methods
// print tree using BFS
// iteratively & recursively
// implement DFS
// iteratively & recursively (in order, pre-order, post-order)


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

  printBFS_r(/* not advised */) { // recursively
    /* not advised */
  }

  printDFS_iPre() { // iteratively: PRE-order
    // Create an empty stack nodeStack and push root node to stack.
    // while nodeStack is not empty:
    // Pop an item from the stack and print it.
    // Push right child of a popped item to stack
    // Push left child of a popped item to stack
    // The right child is pushed before the left child to make sure that the left subtree is processed first.
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

  printDFS_rPre() { // recursively: PRE-order
    // if current is not null (curr exists?)
    // print curr
    // recurse on left child
    // recurse on right child
    if (this) {
      console.log(this.data);
      if (this.left) this.left.printDFS_();
      if (this.right) this.right.printDFS_();
    }
  }

  printDFS_iIn() { // iteratively: IN-order
    let stack = [];
    let curr = this;
    while (true) {
      if (!!curr) {
        stack.push(curr);
        curr = curr.left;
      } else if (stack.length) {
        curr = stack.pop();
        console.log(curr.data);
        curr = curr.right;
      } else {
        break;
      }
    }
  }

  printDFS_rIn() { // recursively: IN-order
    if (!!this) {
      if (!!this.left) this.left.printDFS_();
      console.log(this.data);
      if (!!this.right) this.right.printDFS_();
    }
  }

  printDFS_() { // iteratively: POST-order
    let stack = [];
    let curr = this;
    stack.push(curr);
    while (!!stack.length) {
      curr = stack.pop();
      if (!!curr.right) stack.push(curr.right);
      if (!!curr.left) stack.push(curr.left);
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
