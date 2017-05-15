function mergeSort(arr) {
  if (arr.length === 1) {
    console.log('base case / sorted');
    return arr;
  } else if (arr.length >= 2) {
    var mid = arr.length / 2;
    //create 2 arrays
    var firstHalf = [];
    var secondHalf = [];
    for (var i = 0; i < arr.length; i++) {
      if (i < mid) {
        console.log('pushingon first half' + arr[i]);
        firstHalf.push(arr[i]);
      } else {
        console.log('pushingon second half' + arr[i]);
        secondHalf.push(arr[i]);
      }
    }
    console.log('firsthalf' + firstHalf);
    console.log('secondhalf' + secondHalf);

    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  } else {
    console.log('problems');
  }
}

//take 2 sorted arrays and merge them
function merge(arrA, arrB) {
  console.log('merge was called wiht' + arrA + arrB);
  var aCounter = 0;
  var bCounter = 0;
  var sortedArray = [];
  while (aCounter < arrA.length || bCounter < arrB.length) {
    if (arrA[aCounter] <= arrB[bCounter] || bCounter >= arrB.length) {
      sortedArray.push(arrA[aCounter]);
      aCounter++;
    } else if (arrA[aCounter] > arrB[bCounter] || aCounter >= arrA.length) {
      sortedArray.push(arrB[bCounter]);
      bCounter++;
    } else {
      console.log('we have problems');
    }
  }
  return sortedArray;
}

//console.log(merge([7,10], [1]));

var unsortedArray = [7, 10, 1, 5, 3, 2];
console.log('unsorted array: ' + unsortedArray);
var sortedArray = mergeSort(unsortedArray);
console.log('sortedArray: ' + sortedArray);
