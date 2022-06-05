// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
// // TESTING
// const n = new Node('Hi');
// console.log(n.data); // 'Hi'
// console.log(n.next); // null
// const n2 = new Node('There', n);
// console.log(n2.next); // returns n
class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    // this.insertAt(data, 0);
    this.head = new Node(data, this.head);
  }
  size() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }
  getFirst() {
    return this.getAt(0);
    // return this.head;
  }
  getLast() {
    return this.getAt(this.size() - 1);
    // if (!this.head) return null;
    // let currentNode = this.head;
    // while (currentNode.next) {
    //   currentNode = currentNode.next;
    // }
    // return currentNode;
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    this.removeAt(0);
    // if (!this.head) return null;
    // this.head = this.head.next;
  }
  removeLast() {
    this.removeAt(this.size() - 1);
    // if (!this.head) return;
    // if (!this.head.next) {
    //   return this.head = null;
    // }
    // let prevNode = this.head;
    // let currNode = this.head.next;
    // while (currNode.next) {
    //   prevNode = currNode;
    //   currNode = currNode.next;
    // }
    // prevNode.next = null; // OR...

    // while (currNode) {
    //   if (currNode.next) {
    //     prevNode = currNode;
    //     currNode = currNode.next;
    //   } else {
    //     prevNode.next = null;
    //     currNode = null;
    //   }
    // }
  }
  insertLast(data) {
    // this.insertAt(data, this.size() - 1);
    // if (!this.head) {
    //   this.head = new Node(data);
    // }
    // this.getLast().next = new Node(data); // OR ...

    let currNode = this.head;
    while (currNode.next) {
      currNode = currNode.next;
    }
    currNode.next = new Node(data);
  }
  getAt(index) {
    let counter = 0;
    let currNode = this.head;
    while (currNode) {
      if (index === counter) return currNode
      counter++;
      currNode = currNode.next;
    }
    return null; // OR ...
    // if (!this.head) return null
    // if (index >= this.size()) return null;
  }
  removeAt(index) {
    if (!this.head) return;
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    let prevNode = this.getAt(index - 1);
    if (!prevNode || !prevNode.next) return;
    prevNode.next = prevNode.next.next; // OR ...
    // let size = this.size();
    // if (index >= size) return null
    // if (index === size - 1) {
    //   return this.removeLast();
    // }
    // let counter = 0;
    // let prevNode = this.head;
    // let currNode = prevNode.next;
    // let nextNode = currNode.next;
    // while (currNode) {
    //   if (counter === index && counter === 0) {
    //     this.head = null;
    //   } else if (counter === index) {
    //     prevNode.next = nextNode;
    //     return;
    //   }
    // }
  }
  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    // if (index === 0 || !this.head) {
    //   this.head = new Node(data, this.head);
    //   // this.insertFirst(data);
    //   return;
    // }
    let previous = this.getAt(index - 1) || this.getLast();
    let node = new Node(data, previous.next);
    previous.next = node;
    // let counter = 1;
    // let prevNode = this.head;
    // let currNode = prevNode.next;
    // let nextNode = currNode.next;
    // while (currNode) {
    //   if (counter === index) {
    //     currNode = new Node(data, nextNode);
    //     return;
    //   }
    //   counter++;
    //   prevNode = currNode;
    //   currNode = nextNode;
    //   nextNode = nextNode.next;
    // }
    // this.insertLast(data);
  }
}

// let list = new LinkedList();
// list.insertFirst('a');
// list.insertFirst('b');
// list.insertFirst('c');
// module.exports = { Node, LinkedList };
// console.log(list.size()); // 3
// console.log(list.getFirst()); // node with value '3'
// console.log('n1: ', list.getLast()); // node with val '1'
// list.clear();
// console.log(list.size()); // 0
// list.removeFirst();
// console.log(list.getFirst()); // returns node with data '2'
// list.removeLast();
// console.log('n2: ', list.getLast()); // node with val '2'
// list.removeLast();
// list.removeLast();
// console.log('null: ', list.getLast()); // node with val '2'
// list.insertLast('c');
// console.log('nc: ', list.getLast()); // returns node with data 'C'
// list.insertFirst('d');
// console.log(list.size());
// console.log('na: ', list.getAt(4)); // returns node with data '2'
// list.removeAt(1);
// console.log('na: ', list.getAt(1)); // returns node with data 'a'
// list.insertAt('Hi', 1)
// console.log('Hi: ', list.getAt(1)); // returns node with data 'Hi'
const list = new List();

list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);

list.forEach((node, index) => {
node.data += 10;
});
console.log(list.getAt(0)); // Returns node with data '11'
