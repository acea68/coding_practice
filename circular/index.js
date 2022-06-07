// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true
let { Node, LinkedList } = require('./linkedlist.js');

// ---------------------------
// Attempt #1: adding prop (flag) to each node
// function circular(list) {
//   let node = list.head;
//   while (node) {
//     if (!node.seen) {
//       node.seen = true;
//       node = node.next;
//     } else {
//       return true
//     }
//   }
//   return false;
// }

// ---------------------------
// Solution: no new props added to nodes
function circular(list) {
  let slow = list.head;
  let fast = slow;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}

// --- Examples
const l = new LinkedList();
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
l.head = a;
a.next = b;
b.next = c;
c.next = b;
console.log(circular(l)); // true