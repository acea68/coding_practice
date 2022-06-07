// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'
let { Node, LinkedList } = require('../circular/linkedlist.js');

// ---------------------------
// Attempt #1: using a for loop to set up fast node
// function fromLast(list, n) {
//   let slow = list.head;
//   let fast = list.getFirst(); // same as above
//   for (let i = 0; i < n; i++) {
//     fast = fast.next;
//   }
//   while(fast.next) {
//     slow = slow.next;
//     fast = fast.next;
//   }
//   return slow;
// }

// ---------------------------
// Attempt #1: using a while loop to set up fast node
function fromLast(list, n) {
  let slow = list.head;
  let fast = list.getFirst(); // same as above
  while (n > 0) {
    fast = fast.next;
    n--;
  }
  while(fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}

// --- Examples
const list = new LinkedList();
list.insertLast('a');
list.insertLast('b');
list.insertLast('c');
list.insertLast('d');
console.log(fromLast(list, 2).data); // 'b'