function bruteForceMaximumSubarray(arr) {
    var maxSum = -100000;
    var maxStart = -1;
    var maxEnd = -1;
    for (var i = 0; i < arr.length; i++) {
        var sum = 0;
        for (var j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum > maxSum) {
                maxSum = sum;
                maxStart = i;
                maxEnd = j;
            }
        }
    }
    console.log(`maxSum: ${maxSum}; maxStart: ${maxStart}; maxEnd: ${maxEnd}`);
}

var tinyArray = [1, 5, -3, 5];
var biggerArray = [-1, 5, -2, 6, -10, 3, 9, -5, -3, 8, 4, -2, 10, -8, 5];
bruteForceMaximumSubarray(biggerArray);