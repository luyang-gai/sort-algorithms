//1. Reverse words in a string. "This is a girl" becomes "girl a is This".

//iterate through each character of the string, keep track of starting point. when you find a space, take starting point to current point, add on new string

function reverseWords(str) {
    var stringToReturn = '';
    var currentString = '';
    for (var i = 0; i < str.length; i++) {
        if ((str.charAt(i) === ' ' || i === str.length - 1) && currentString.length > 0) {
            stringToReturn = currentString + ' ' + stringToReturn;
            currentString = '';
        } else {
            currentString += str.charAt(i);
        }
    }
    return stringToReturn;
}

console.log(reverseWords("This is a girl"));