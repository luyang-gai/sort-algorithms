var helpers = require('./helpers');
//
//function LCA(root, left, right) {
//  if (root.value === left || root.value === right) {
//    return root.value;
//  } else {
//    if (subTreeContains(root.left, left, right) === subTreeContains(root.right, left, right)) {
//      return root.value;
//    } else if (subTreeContains(root.left, left, right) === 2) {
//      return LCA(root.left, left, right);
//    } else {
//      return LCA(root.right, left, right);
//    }
//  }
//}
//
//function subTreeContains(root, left, right) {
//  if (root != null) {
//    if (root.value === left || root.value === right) {
//      return 1;
//    } else {
//      return subTreeContains(root.left, left, right) + subTreeContains(root.right, left, right);
//    }
//  } else {
//    return 0;
//  }
//}





























//input 2 node values
function LCA(root, value1, value2) {
  //if root.value is either left or right, then LCA is root
  //if root.left's subtree has 1 value, and root.right's subtree has 1 value, root is LCA
  //if root.left's subtree has 2 values, run LCA(root.left, left, right)
  //if root.right's subtree has 2 values, run LCA(root.right, left, right)
  if (root.value === value1 || root.value === value2) {
    return root.value;
  } else if (subtreeContains(root.left, value1, value2) === 2) {
    return LCA(root.left, value1, value2);
  } else if (subtreeContains(root.right, value1, value2) === 2) {
    return LCA(root.right, value1, value2)
  } else {
    return root.value;
  }
}

function subtreeContains(root, left, right) {
  if (root === null) {
    return 0;
  }
  return (root.value === left || root.value === right) ? 1 : 0 + subtreeContains(root.left, left, right) + subtreeContains(root.right, left, right);
}

var root = helpers.createBasicTree();
console.log(LCA(root, 5, 7));