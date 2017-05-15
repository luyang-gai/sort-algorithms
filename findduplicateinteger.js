//Given a sorted list that has two of each integer except one, find the one integer that does not occur in the list twice

function findOneInteger(arr) {
    for (var i = 0; i < arr.length-1; i+=2) {
        if (arr[i] != arr[i+1]) {
            return arr[i];
        }
    }
    return -1;
}

var arr = [2,2, 3,3,4,4,6,6,1,5,5,7,7];

console.log(findOneInteger(arr));