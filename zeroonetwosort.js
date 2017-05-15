// Sort an array in non-decreasing order for an array that only contains 0, 1 and 2.

// Input: [0,1,2,0,2,1]
// Output:[0,0,1,1,2,2]


function sortSimpleArray(arr) {
  var last0 = -1;
  var first2 = arr.length;

  var currentNum = 0;

  while (currentNum < first2) {
    if (arr[currentNum] === 0) {
      //increment last0
      //swap arr[currentNum] with arr[last0]
      last0++;
      console.log('found a 0!');
      if (currentNum > last0) {
        var temp = arr[last0];
        arr[last0] = arr[currentNum];
        arr[currentNum] = temp;
      }
    } else if (arr[currentNum] === 2) {
      first2--;
      console.log('found a 2!');
      if (currentNum < first2) {
        var temp = arr[first2];
        arr[first2] = arr[currentNum];
        arr[currentNum] = temp;

      }
    } else {
      console.log('found a 1!');
      //if we see a 1, leave it
    }
    currentNum++;
  }
  return arr;
}

console.log(sortSimpleArray([2,0,2,1,2,0]));
[2,0,1,2,0]
[0,0,1,2,2]
