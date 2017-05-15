//A unsorted array of integers is given; you need to find the max product formed my multiplying three numbers.
//(You cannot sort the array, watch out when there are negative numbers)

function highestProduct(arr) {
  var hash = {
    p1: 0,
    p2: 0,
    p3: 0,
    n1: 0,
    n2: 0
  };

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      if (!hash.p1 || hash.p1 < arr[i]) {
        var temp = hash.p1;
        hash.p1 = arr[i];
        hash.p3 = hash.p2;
        hash.p2 = temp;
      } else if (!hash.p2 || hash.p2 < arr[i]) {
        hash.p3 = hash.p2;
        hash.p2 = arr[i];
      } else if (!hash.p3 || hash.p3 < arr[i]) {
        hash.p3 = arr[i]
      }
    } else {
      if (!hash.n1 || hash.n1 > arr[i]) {
        hash.n2 = hash.n1;
        hash.n1 = arr[i];
      } else if (!hash.n2 || hash.n2 > arr[i]) {
        hash.n2 = arr[i];
      }
    }
  }
  var allPositiveSum = hash.p1 * hash.p2 * hash.p3;
  var positiveNegativeSum = hash.p1 * hash.n1 * hash.n2;

  if (allPositiveSum > positiveNegativeSum) {
    return allPositiveSum;
  } else {
    return positiveNegativeSum;
  }
}

var arr = [13, -15, 1, 2, 3, 4, 5, 6, 7, -8, -9, 10, 12, 100, -200, 300];
console.log(highestProduct(arr));