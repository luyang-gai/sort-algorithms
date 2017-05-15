//Implement a function to check if a binary tree is balanced. For the purposes of this question, a balanced
// tree is defined to be a tree such that the heights of the two subtrees of any node never differ by more than one.
var helpers = require('./helpers');

var tree = helpers.createUnbalancedTree();

function balanced(root) {
  if (root === null) {
    return true;
  } else if (Math.abs(treeHeight(root.left) - treeHeight(root.right)) > 1) {
    return false;
  } else {
    return balanced(root.left) && balanced(root.right);
  }
}

function treeHeight(root) {
  if (root != null) {
    return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));
  } else {
    return 0;
  }
}

console.log(balanced(tree));