//1) Find the longest palindromic substring from the given string. No need of DP solution.

//How do we want to handle multiple strings of max length? For instance, abcd, a, b, c, and d are all the longest palindromic substring
//'abcd'
//a, ab, abc, abcd
function bruteForceLongestPalindromeSubstring(str) {
  var currentLongest = '';

  for (var i = 0; i < str.length; i++) {
    for (var j = i + 1; j <= str.length; j++) {
      var currentString = str.substring(i, j);
      if (isPalindrome(currentString) && currentString.length > currentLongest.length) {
        currentLongest = currentString;
      }
    }
  }
  return currentLongest;
}

function longestPalindromeSubstring(str) {
  for (var i = str.length; i > 0; i--) {
    for (var j = 0; i + j <= str.length; j++) {
      var currentString = str.substring(j, i+j);
      console.log(`currentString: ${currentString} i: ${i} j: ${j}`);
      if (isPalindrome(currentString)) {
        return currentString;
      }
    }
  }
}

function isPalindrome(str) {
  var endOfStringCounter = str.length - 1;
  var begOfStringCounter = 0;

  while (begOfStringCounter < endOfStringCounter) {
    if (str.charAt(begOfStringCounter) != str.charAt(endOfStringCounter)) {
      return false;
    }
    begOfStringCounter++;
    endOfStringCounter--;
  }
  return true;
}

var str1 = 'zdabcdefgfedcbad';
console.log(`${str1}: ${longestPalindromeSubstring(str1)}`);