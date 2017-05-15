
var testString = 'string';

function reverseString(stringToReverse) {
  var reverseCounter = stringToReverse.length - 1;
  var reversedString = '';

  while (reverseCounter >= 0) {
    reversedString += stringToReverse.charAt(reverseCounter);
    reverseCounter--;
  }

  return reversedString;
}

var reversedString = reverseString(testString);

console.log(testString);
console.log(reversedString)