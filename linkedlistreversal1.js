var helpers = require('./helpers');

var one = helpers.createBasicLinkedList();

function reverse(front) {
  var current = front;
  var reversedFront = null;
  while (current != null) {
    var temp = current;
    current = current.next;
    var temp2 = reversedFront;
    temp.next = temp2;
    reversedFront = temp;
  }
  return reversedFront;
}

//helpers.printLinkedList(one);
var reversedList = reverse(one);
//helpers.printLinkedList(reversedList);
helpers.printLinkedList(one);