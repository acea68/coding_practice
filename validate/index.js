// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

// let { Node } = require('./node.js');

function validate(node, min = null, max = null) {
  if (min && node.data < min || max && node.data > max) return false;
  if (node.left) return validate(node.left, min, node.data);
  if (node.right) return validate(node.right, node.data, max);
  return true;
  // if (max !== null & node.data > max) { // Solution
  //   return false;
  // }
  // if (min !== null && node.data < min) {
  //   return false;
  // }
  // if (node.left && !validate(node.left, min, node.data)) {
  //   return false;
  // }
  // if (node.right && !validate(node.right, node.data, max)) {
  //   return false;
  // }
  // return true;
  // Attempt #1
  // const min = min || node.data;
  // const max = max;
  // if (node.left.data < node.data) {
  //   max = node.data;
  //   validate(node.left, min, max);
  // } else if (node.right.data > node.data) {
  //   min = node.data;
  //   validate(node.right, min, max);
  // } else {
  //   return false;
  // }
}

module.exports = validate;