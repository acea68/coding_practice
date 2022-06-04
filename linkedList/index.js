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
    return this.head;
  }
  getLast() {
    if (!this.head) return null;
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    if (!this.head) return null;
    this.head = this.head.next;
  }
  removeLast() {
    if (!this.head) return;
    if (!this.head.next) {
      return this.head = null;
    }
    let prevNode = this.head;
    let currNode = this.head.next;
    while (currNode.next) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    prevNode.next = null;
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
    if (!this.head) {
      this.head = new Node(data);
    }
    // let currNode = this.head;
    // while (currNode.next) {
    //   currNode = currNode.next;
    // }
    // currNode.next = new Node(data);
    this.getLast().next = new Node(data);
  }
  getAt(index) {
    // if (!this.head) return null
    // if (index >= this.size()) return null
    let counter = 0;
    let currNode = this.head;
    while (currNode) {
      if (index === counter) return currNode
      counter++;
      currNode = currNode.next;
    }
    return null;
  }
  removeAt(index) {
    if (!this.head) return;
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    let prevNode = this.getAt(index - 1);
    if (!prevNode || !previous.next) return;
    prevNode.next = prevNode.next.next;
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
    if (index === 0 || !this.head) {
      this.insertFirst(data);
      return;
    }
    
  }
}

let list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.insertFirst('c');
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

// module.exports = { Node, LinkedList };