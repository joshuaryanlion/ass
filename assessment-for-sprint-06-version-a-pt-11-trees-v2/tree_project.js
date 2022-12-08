class TreeNode {
  constructor(value, left, right, level) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.level = level
  }
}

// Given a tree, find the first (left-most) node at each
// level of the tree and return it in an array, with the root at the
// 0th index, and the left-most node in the deepest level of the tree
// in the last index.

//        5
//       / \
//      4   7
//     / \   \
//    1   3   2
//       /    / \
//      8    4   9
//              / \
//             2   4

// Expected Output -> [ 5, 4, 1, 8, 2 ]

function findFirstNodes(root) {
  const stack = [root];

  root.level = 0;
  const firsts = [];
  

  while (stack.length > 0) {
      const curr = stack.shift();
      
      

      if (!firsts[curr.level]) {
          firsts.push(curr.value);
          
      }

      if (curr.left) {
        curr.left.level = curr.level+1;
          stack.push(curr.left);
          
      }

      if (curr.right) {
        curr.right.level = curr.level+1;
        stack.push(curr.right)
      }
  }

  return firsts;
}

// Uncomment the code below for local testing.

// // // Build a tree for testing

//   const simpleTree = new TreeNode(4, null, null);
//   simpleTree.right = new TreeNode(8, null, null);
//   simpleTree.left = new TreeNode(3, null, null);
//   simpleTree.right.right = new TreeNode(2, null, null);

// // Test the function with the debug tree
// console.log(findFirstNodes(simpleTree)); // -> [ 4, 3, 2 ]

/*******************************************************************************
 * Do not change the code after this line.
 */

try {
  exports.TreeNode = TreeNode;
  exports.findFirstNodes = findFirstNodes;
} catch (e) {
  module.exports = null;
}