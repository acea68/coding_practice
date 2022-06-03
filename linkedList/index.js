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

  }
}

let list = new LinkedList();
list.insertFirst(1);
list.insertFirst(2);
list.insertFirst(3);
// console.log(list.size()); // 3
// console.log(list.getFirst()); // node with value '3'
// console.log(list.getLast()); // node with val '1'
// list.clear();
// console.log(list.size()); // 0
list.removeFirst();
console.log(list.getFirst()); // returns node with data '2'



// module.exports = { Node, LinkedList };