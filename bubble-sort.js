function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j+1]) {
        var temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

var unsortedArray = [7, 10, 1, 5, 3, 2];
console.log('unsorted array: ' + unsortedArray);
bubbleSort(unsortedArray);
console.log('sortedArray: ' + unsortedArray);