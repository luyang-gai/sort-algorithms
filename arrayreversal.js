function reverseArray(arr) {
  var back = arr.length - 1;
  var front = 0;

  while (front < back) {
    var temp = arr[front];
    arr[front] = arr[back];
    arr[back] = temp;
    front++;
    back--;
  }
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8];
reverseArray(arr);
console.log(arr);