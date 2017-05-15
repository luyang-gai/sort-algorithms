// All nodes along children pointers from root to leaf nodes form a path in a binary tree.
// Given a binary tree and a number, please print out all of paths where the sum of all nodes
// value is same as the given number. The node of binary tree is defined as:
var treeHelper = require('./helpers');
var root = treeHelper.createBasicTree();

function calculatePaths(root, sum) {
  if (root != null) {
    helper(root, [], sum);
  }
}

function helper(root, path, sum) {
  console.log('calling helper on root: ' + root.value);
  var copy = path.slice();
  copy.push(root.value);
  if (root.left === null && root.right === null) {
    checkSumOfPathAndPrint(copy, sum);
  }
  if (root.left) {
    helper(root.left, copy, sum);
  }
  if (root.right) {
    helper(root.right, copy, sum);
  }
}

function checkSumOfPathAndPrint(path, sum) {
  console.log('checking: ' + path);
  var arraySum = path.reduce(function(a, b) {
    return a + b;
  });
  if (sum === arraySum) {
    console.log(path);
  }
}

calculatePaths(root, 9);