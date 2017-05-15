var helpers = require('./helpers');

var basicTree = helpers.createBasicTree();
var front = null;

function convertTreeToList(root) {
  if (root != null) {
    convertTreeToList(root.left);

    var nodeToAdd = helpers.listNode(root.value);
    addToEndOfList(nodeToAdd);

    convertTreeToList(root.right);
  }
}

function addToEndOfList(node) {
  if (front === null) {
    front = node;
  } else {
    var current = front;
    while (current.next != null) {
      current = current.next;
    }
    current.next = node;
  }
}

convertTreeToList(basicTree);

helpers.printLinkedList(front);


