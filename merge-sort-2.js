function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var middle = arr.length / 2;
  var front = [];
  var back = [];
  for (var i = 0; i < arr.length; i++) {
    if (i < middle) {
      front.push(arr[i]);
    } else {
      back.push(arr[i]);
    }
  }
  console.log('front: ' + front);
  console.log('back: ' + back);
  return merge(mergeSort(front), mergeSort(back));
}

//takes 2 sorted nondecreasing arrays and returns the sorted merge of them
function merge(arr1, arr2) {
  var arr1counter = 0;
  var arr2counter = 0;
  var currentArray = [];

  while (arr1counter < arr1.length || arr2counter < arr2.length) {
    if (arr1counter >= arr1.length || arr2[arr2counter] < arr1[arr1counter]) {
      currentArray.push(arr2[arr2counter]);
      arr2counter++;
    } else {
      currentArray.push(arr1[arr1counter]);
      arr1counter++;
    }
  }
  return currentArray;
}

console.log(mergeSort([1,5,7,3,2,8,9]));