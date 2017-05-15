//Implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string would not become smaller than
// the orig- inal string, your method should return the original string.

function stringCompressor(str) {
  var currentLetter = '';
  var currentLetterCount = 0;

  var currentString = '';

  for (var i = 0; i < str.length; i++) {
    var letter = str.charAt(i);
    if (letter === currentLetter) {
      currentLetterCount++;
    } else {
      if (currentLetterCount > 0) {
        currentString += currentLetter + currentLetterCount;
      }
      currentLetter = letter;
      currentLetterCount = 1;
    }
  }

  if (currentLetterCount > 0) {
    currentString += currentLetter + currentLetterCount;
  }

  if (currentString.length < str.length) {
    return currentString;
  }
  return str;
}

console.log(stringCompressor('abcdef'));
