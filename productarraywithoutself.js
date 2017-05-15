//Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of
// all the elements of nums except nums[i]. Solve it without division and in O(n).


//input: [2, 3, 5, 10]
//output [150, 100, 60, 30]

//arr[0] = 1 * arr[1] * arr[2] * arr[3]
//arr[1] = arr[0] * 1 * arr[2] * arr[3]
//arr[2] = arr[0] * arr[1] * 1 * arr[3]
//arr[3] = arr[0] * arr[1] * arr[2] * 1

//arr[before] = [1,                        arr[0],           arr[0] * arr[1], arr[0] * arr[1] * arr[2]];
//arr[after]  = [arr[1] * arr[2] * arr[3], arr[2] * arr[3],  arr[3],          1                       ];

function productArray(arr) {
  var output = [];
  var valuesBefore = [];
  var valuesAfter = [];

  for (var i = 0; i < arr.length; i++) {
    if (i === 0) {
      valuesBefore[i] = 1;
    } else {
      valuesBefore[i] = valuesBefore[i-1] * arr[i-1];
    }
  }

  for (var j = arr.length - 1; j >= 0; j--) {
    if (j === arr.length - 1) {
      valuesAfter[j] = 1;
    } else {
      valuesAfter[j] = valuesAfter[j+1] * arr[j+1];
    }
  }

  for (var k = 0; k < arr.length; k++) {
    output[k] = valuesBefore[k] * valuesAfter[k];
  }

  //console.log(valuesBefore);
  //console.log(valuesAfter);
  console.log(output);
}

productArray([2,3,5,10]);