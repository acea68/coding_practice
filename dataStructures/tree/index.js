// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree
class Node {
  constructor(value) {
    this.data = value;
    this.children = [];
  }
  add(value) {
    this.children.push(new Node(value));
  }
  remove(value) {
    this.children = this.children.filter(child => child.data !== value)
  //   let index;
  //   this.children.forEach((child, position) => {
  //     if (child.data === value)
  //     index = position;
  //   })
  //   if (index) {
  //     this.children.splice(index, 1)
  //   }
  }
}
class Tree {
  constructor() {
    this.root = null;
  }
  traverseBF(fn) {
    let arr = [this.root];
    while(arr.length) {
      let node = arr.shift();
      arr.push(...node.children);
      fn(node);
    }
    // if (!this.root) return null
    // if (!this.root.children.length) return fn(this.root)
    // let node = this.root;
    // while (node.children.length) {
    //   node.children.forEach(child => {
    //     child.parent = node;
    //     fn(child)
    //     traverseBF(fn, child);
    //   })
    // }
  }
  traverseDF(fn) {
    let arr = [this.root];
    while(arr.length) {
      let node = arr.shift();
      arr.unshift(...node.children);
      fn(node);
    }
  }
}

module.exports = { Tree, Node };