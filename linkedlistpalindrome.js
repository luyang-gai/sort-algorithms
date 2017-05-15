var helpers = require('./helpers');

function isPalindrome(head) {
  var current = head;
  var counter = 0;
  while (current != null && current.next != null) {
    counter++;
    current = current.next;
  }

  if (counter <= 1) {
    return true;
  } else {
    var midpoint = counter / 2;
    var counterEven = 0;
    var currentEven = head;

    while (counterEven < midpoint) {
      currentEven = currentEven.next;
      counterEven++;
    }

    var reversedSecondHalf = reverse(currentEven);
    var normalFirstHalf = head;
    while (reversedSecondHalf.next != null) {
      if (normalFirstHalf.value != reversedSecondHalf.value) {
        return false;
      }
      reversedSecondHalf = reversedSecondHalf.next;
      normalFirstHalf = normalFirstHalf.next;
    }
    return true;
  }
}

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

var simpleLinkedList = helpers.createPalindromeLinkedList();

console.log(isPalindrome(simpleLinkedList));