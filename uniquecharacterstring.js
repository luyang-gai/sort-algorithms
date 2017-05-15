function allUnique(str) {
  var characterMap = {};
  for (var i = 0; i < str.length; i++) {
    if (characterMap[(str.charAt(i))]) {
      return false;
    } else {
      characterMap[str.charAt(i)] = true;
    }
  }
  return true;
}

console.log(allUnique('chicken'));
console.log(allUnique('ancdefg'));