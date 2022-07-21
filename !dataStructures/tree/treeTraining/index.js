// create Node class
// include insert method (iteratively & recursively)
// print tree using BFS
// iteratively & recursively
// print tree using DFS
// iteratively & recursively (in order, pre-order, post-order)

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }

  insert_i(num) { // iteratively
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
        this.left.insert_r(num);
      } else {
        this.left = new Node(num);
      }
    } else {
      if (this.right) {
        this.right.insert_r(num);
      } else {
        this.right = new Node(num);
      }
    }
  }

  printBFS_i() { // iteratively
    console.log('🚀 printBFS_iteratively: ');
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

  // printBFS_r(/* not advised */) { // recursively
  //   /* not advised */
  // }

  printDFS_iPre() { // iteratively: PRE-order
    console.log('🚀 printDFS_iPre: ');
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
    if (this) {
      console.log(this.data);
      if (this.left) this.left.printDFS_rPre();
      if (this.right) this.right.printDFS_rPre();
    }
  }

  printDFS_iIn() { // iteratively: IN-order
    console.log('🚀 printDFS_iIn: ', printDFS_iIn);
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
      if (!!this.left) this.left.printDFS_rIn();
      console.log(this.data);
      if (!!this.right) this.right.printDFS_rIn();
    }
  }

  printDFS_iPost() { // iteratively: POST-order
    console.log('🚀 printDFS_iPost: ');
    let stack = [];
    let outStack = [];
    let curr = this;
    stack.push(curr);
    while (!!stack.length) {
      curr = stack.pop();
      outStack.push(curr);
      if (!!curr.left) stack.push(curr.left);
      if (!!curr.right) stack.push(curr.right);
    }
    while (!!outStack.length) {
      console.log(outStack.pop().data);
    }
  }

  printDFS_rPost() { // recursively: POST-order
    if (!!this) {
      if (!!this.left) this.left.printDFS_rPost();
      if (!!this.right) this.right.printDFS_rPost();
      console.log(this.data);
    }
  }

}


let root = new Node(10);
root.insert_i(5);
root.insert_i(15);
root.insert_r(4);
root.insert_r(6);
root.insert_i(17);
root.insert_i(7);
root.insert_r(16);

// root.printBFS_i();
// // root.printBFS_r(); /* not advised */
// root.printDFS_iPre();
// root.printDFS_rPre();
// root.printDFS_iIn();
// root.printDFS_rIn();
// root.printDFS_iPost();
root.printDFS_rPost();


