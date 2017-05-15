function listNode(value) {
  return {
    value: value,
    next: null
  }
}

function treeNode(value) {
  return {
    value: value,
    left: null,
    right: null
  }
}

function createBasicTree() {
  var root = treeNode(4);
  var rootLeft = treeNode(2);
  var rootRight = treeNode(6);
  rootLeft.left = treeNode(1);
  rootLeft.right = treeNode(3);
  rootRight.left = treeNode(5);
  rootRight.right = treeNode(7);
  root.left = rootLeft;
  root.right = rootRight;

  return root;
}

function createUnbalancedTree() {
  var root = treeNode(4);
  var rootLeft = treeNode(2);
  var rootRight = treeNode(6);
  rootLeft.left = treeNode(1);
  rootLeft.right = treeNode(3);
  var rootRightRight = treeNode(7);
  rootRight.right = rootRightRight;
  rootRightRight.right = treeNode(8);
  root.left = rootLeft;
  root.right = rootRight;

  return root;
}

function createBasicLinkedList() {
  var one = listNode(1);
  var two = listNode(2);
  var three = listNode(3);
  var four = listNode(4);

  one.next = two;
  two.next = three;
  three.next = four;

  return one;
}

function createPalindromeLinkedList() {
  var one = listNode(1);
  var two = listNode(2);
  var five = listNode(3);
  var three = listNode(3);
  var four = listNode(1);

  one.next = two;
  two.next = five;
  five.next = three;
  three.next = four;

  return one;
}

function printLinkedList(front) {
  var current = front;
  while (current != null) {
    console.log(current.value);
    current = current.next;
  }
}

module.exports = {
  listNode: listNode,
  treeNode: treeNode,
  createBasicTree: createBasicTree,
  createBasicLinkedList: createBasicLinkedList,
  printLinkedList: printLinkedList,
  createPalindromeLinkedList: createPalindromeLinkedList,
  createUnbalancedTree: createUnbalancedTree
}