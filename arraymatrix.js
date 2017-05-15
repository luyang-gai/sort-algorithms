//Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

//function zeroMatrix()
var arr = [];

for (var i = 0; i < 5; i++) {
  arr[i] = [i+1,i+2,i-1, i-2];
}


function printDoubleArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    var currentRow = '';
    for (var j = 0; j < arr[i].length; j++) {
      currentRow += arr[i][j];
    }
    console.log(currentRow);
  }
}

function fixDoubleArray(arr) {
  var zeroHash = {
    'i': {},
    'j': {}
  };
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {

      if (arr[i][j] === 0) {
        zeroHash['i'][i] = true;
        zeroHash['j'][j] = true;
      }
    }
  }


  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (zeroHash['i'][i] || zeroHash['j'][j]) {
        arr[i][j] = 0;
      }
    }
  }

  return arr;

}

printDoubleArray(arr);
console.log('--------------')

printDoubleArray(fixDoubleArray(arr));