//1.3 Given two strings, write a method to decide if one is a permutation of the other.
function checkPermutation(str1, str2) {
  var permHash = {};
  for (var i = 0; i < str1.length; i++) {
    var currentChar = str1.charAt(i);
    if (permHash[currentChar]) {
      permHash[currentChar]++;
    } else {
      permHash[currentChar] = 1;
    }
  }
  for (i = 0; i < str2.length; i++) {
    currentChar = str1.charAt(i);
    if (permHash[currentChar] && permHash[currentChar] >= 0) {
      permHash[currentChar]--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(checkPermutation('adbfec', 'cbadef'));
console.log(checkPermutation('abfecs', 'cbadefz'));
console.log(checkPermutation('abdfecabfec', 'cbadefabfec'));