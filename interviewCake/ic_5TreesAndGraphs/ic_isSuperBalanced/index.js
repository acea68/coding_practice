/* Write a function to see if a binary tree is "superbalanced" (a new tree property we just made up).
A tree is "superbalanced" if the difference between the depths of any two leaf nodes is no greater than one.
A leaf node is a tree node with no children. It's the "end" of a path to the bottom, from the root. */
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

function isBalanced(treeRoot) { // SOLN
  // A tree with no nodes is superbalanced, since there are no leaves!
  if (!treeRoot) return true;
  const depths = []; // We short-circuit as soon as we find more than 2
  // Nodes will store pairs of a node and the node's depth
  const nodes = [];
  nodes.push([treeRoot, 0]);
  while (nodes.length) {
    // Pop a node and its depth from the top of our stack
    const nodePair = nodes.pop();
    const node = nodePair[0];
    const depth = nodePair[1];
    if (!node.left && !node.right) { // no node on left & right: leaf!
      // Сase: we found a leaf. We only care if it's a new depth.
      if (depths.indexOf(depth) < 0) {
        depths.push(depth);
        // Two ways we might now have an unbalanced tree:
        //   1) More than 2 different leaf depths
        //   2) 2 leaf depths that are more than 1 apart
        if (
          (depths.length > 2)
          || (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)
        ) {
          return false;
        }
      }
    } else {
      // Case: this isn't a leaf - keep stepping down
      if (node.left) {
        nodes.push([node.left, depth + 1]);
      }
      if (node.right) {
        nodes.push([node.right, depth + 1]);
      }
    }
  }
  return true;
}

// function isBalanced(treeRoot) {
//   if (!treeRoot) return true;
//   let heights = [];
//   let nodes = [];
//   nodes.push([treeRoot, 0]);
//   while (nodes.length) {
//     let nodePair = nodes.pop();
//     let node = nodePair[0];
//     let level = nodePair[1];
//     if (isLeaf(node)) {
//       if (heights.indexOf(level) < 0) {
//         heights.push(level);
//         if (
//           (heights.length > 2)
//           || (heights.length === 2 && Math.abs(heights[0] - heights[1]) > 1)
//         ) {
//           return false;
//         }
//       }
//     } else {
//       if (node.left) {
//         nodes.push([node.left, level + 1]);
//       }
//       if (node.right) {
//         nodes.push([node.right, level + 1]);
//       }
//     }
//   }
//   return true;
// }

// function isLeaf(node) {
//   // Determine if the node is a leaf
//   if (!node.left && !node.right) return true;
//   return false;
// }

// function isBalanced(treeRoot) {
//   // Determine if the tree is superbalanced
//   // use BFS to traverse tree and keep count of height
//   // track height of first leaf
//   // if next leaf height delta from first > 1, return false;
//   // finish traversing tree
//   // return true
//   let leafLevel = 0;
//   let height = 0;
//   if (isLeaf(treeNode)) throw new Error('Need more nodes in tree.')
//   while (treeRoot.left || treeRoot.right) {
//     height++;
//     if ((isLeaf(treeNode.left) || isLeaf(treeNode.right)) && !leafLevel) {
//       leafLevel = height;
//     } else if (isLeaf(treeNode.left) || isLeaf(treeNode.right)) {

//     }
//   }
//   return true;
// }















// Tests

var desc = 'full tree';
var treeRoot = new BinaryTreeNode(5);
var leftNode = treeRoot.insertLeft(8);
leftNode.insertLeft(1);
leftNode.insertRight(2);
var rightNode = treeRoot.insertRight(6);
rightNode.insertLeft(3);
rightNode.insertRight(4);
assertEquals(isBalanced(treeRoot), true, desc);

var desc = 'both leaves at the same depth';
var treeRoot = new BinaryTreeNode(3);
var leftNode = treeRoot.insertLeft(4);
leftNode.insertLeft(1);
var rightNode = treeRoot.insertRight(6);
rightNode.insertRight(9);
assertEquals(isBalanced(treeRoot), true, desc);

var desc = 'leaf heights differ by one';
var treeRoot = new BinaryTreeNode(6);
var leftNode = treeRoot.insertLeft(1);
var rightNode = treeRoot.insertRight(0);
rightNode.insertRight(7);
assertEquals(isBalanced(treeRoot), true, desc);

var desc = 'leaf heights differ by two';
var treeRoot = new BinaryTreeNode(6);
var leftNode = treeRoot.insertLeft(1);
var rightNode = treeRoot.insertRight(0);
rightNode.insertRight(7).insertRight(8);
assertEquals(isBalanced(treeRoot), false, desc);

var desc = 'three leaves total';
var treeRoot = new BinaryTreeNode(1);
var leftNode = treeRoot.insertLeft(5);
var rightNode = treeRoot.insertRight(9);
rightNode.insertLeft(8);
rightNode.insertRight(5);
assertEquals(isBalanced(treeRoot), true, desc);

var desc = 'both subtrees superbalanced';
var treeRoot = new BinaryTreeNode(1);
var leftNode = treeRoot.insertLeft(5);
var rightNode = treeRoot.insertRight(9);
rightNode.insertLeft(8).insertLeft(7);
rightNode.insertRight(5);
assertEquals(isBalanced(treeRoot), false, desc);

var desc = 'both subtrees superbalanced two';
var treeRoot = new BinaryTreeNode(1);
var leftNode = treeRoot.insertLeft(2);
leftNode.insertLeft(3);
leftNode.insertRight(7).insertRight(8);
treeRoot.insertRight(4).insertRight(5).insertRight(6).insertRight(9);
assertEquals(isBalanced(treeRoot), false, desc);

var desc = 'three leaves at different levels';
treeRoot = new BinaryTreeNode(1);
var leftNode = treeRoot.insertLeft(2);
var leftLeft = leftNode.insertLeft(3);
leftNode.insertRight(4);
leftLeft.insertLeft(5);
leftLeft.insertRight(6);
treeRoot.insertRight(7).insertRight(8).insertRight(9).insertRight(10);
assertEquals(isBalanced(treeRoot), false, desc);

var desc = 'only one node';
var treeRoot = new BinaryTreeNode(1);
assertEquals(isBalanced(treeRoot), true, desc);

var desc = 'linked list tree';
var treeRoot = new BinaryTreeNode(1);
treeRoot.insertRight(2).insertRight(3).insertRight(4);
assertEquals(isBalanced(treeRoot), true, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}