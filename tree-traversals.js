var treeHelper = require('./helpers');

function preorderTraversal(root) {
  if (root != null) {
    console.log(root.value);
    preorderTraversal(root.left);
    preorderTraversal(root.right);
  }
}

function inorderTraversal(root) {
  if (root != null) {
    inorderTraversal(root.left);
    console.log(root.value);
    inorderTraversal(root.right);
  }
}

function postorderTraversal(root) {
  if (root != null) {
    postorderTraversal(root.right);
    console.log(root.value);
    postorderTraversal(root.left);
  }
}

var root = treeHelper.createBasicTree();

postorderTraversal(root);