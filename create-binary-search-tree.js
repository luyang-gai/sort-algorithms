//Given a sorted (increasingorder) array with unique integer elements, write an algorithm to create
// a binary search tree with minimal height.

//binary tree with height n has 2^n - 1 total nodes
var helpers = require('./helpers');


function treeNode(value) {
  return {
    value: value,
    left: null,
    right: null
  }
}

function inorderTraversal(root) {
  if (root != null) {
    inorderTraversal(root.left);
    console.log(root.value);
    inorderTraversal(root.right);
  }
}

function createBinaryTree(arr) {
  if (arr.length === 0) {
    return null;
  } else if (arr.length === 1) {
    return treeNode(arr[0]);
  }

  var middle = Math.round(arr.length / 2);
  var front = [];
  var back = [];
  for (var i = 0; i < arr.length; i ++) {
    if (i < middle) {
      front.push(arr[i]);
    } else if (i > middle) {
      back.push(arr[i]);
    }
  }
  var root = treeNode(arr[middle]);
  root.left = createBinaryTree(front);
  root.right = createBinaryTree(back);

  return root;
}

inorderTraversal(helpers.createBasicTree());
inorderTraversal(createBinaryTree([1,2,3,4,5,6,7]));