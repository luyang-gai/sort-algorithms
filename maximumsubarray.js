//Given an array of numbers, find the maximum subarray (subarray where the values in the array add up to the highest number)
//[1, 5, -2, 6, -10, 3, 9, -5, -3, 8, 4, -2, 10, -8, 5]
function maximumsubarray(arr) {
    if (arr.length === 1) {
        return [0, 0, arr[0]];
    } else {
        return maximumSubarrayHelper(arr, 0, arr.length-1);
    }
}

function maximumSubarrayHelper(arr, low, high) {
    console.log(`low: ${low} high: ${high}`);
    if (high === low) {
        return [low, high, arr[low]];
    }
    var mid = Math.floor((high + low) / 2);

    var [lowLow, lowHigh, lowSum] = maximumSubarrayHelper(arr, low, mid);
    var [highLow, highHigh, highSum] = maximumSubarrayHelper(arr, mid+1, high);
    var [crossLow, crossHigh, crossSum] = maximumCrossoverSubarrayHelper(arr, low, mid, high);

    if (lowSum >= highSum && lowSum >= crossSum) {
        console.log('returning low');
        return [lowLow, lowHigh, lowSum];
    }
    else if (highSum >= lowSum && highSum >= crossSum) {
        console.log('returning high');
        return [highLow, highHigh, highSum];
    }
    else {
        console.log('returning cross');
        console.log(`crossLow: ${crossLow}; crossHigh: ${crossHigh}; crossSum: ${crossSum}`);
        return [crossLow, crossHigh, crossSum]
    }
}

//find maximum subarray that crosses over middle
function maximumCrossoverSubarrayHelper(arr, low, middle, high) {
    console.log(`low: ${low} middle: ${middle} high: ${high}`);
    var lowSum = -100000;
    var lowIndex = 0;
    var sum = 0;

    for (var i = middle; i >= low; i--) {
        sum += arr[i];

        if (sum > lowSum) {
            lowSum = sum;
            lowIndex = i;
        }
    }

    var highSum = -100000;
    var highIndex = 0;
    sum = 0;

    for (var i = middle+1; i <= high; i++) {
        sum += arr[i];

        if (sum > highSum) {
            highSum = sum;
            highIndex = i;
        }
    }

    return [lowIndex, highIndex, lowSum+highSum];
}


var tinyArray = [1, 5, -3, 5];
var biggerArray = [-1, 5, -2, 6, -10, 3, 9, -5, -3, 8, 4, -2, 10, -8, 5];
var [lowIndex, highIndex, totalSum] = maximumsubarray(biggerArray);
console.log(`lowIndex: ${lowIndex}; highIndex: ${highIndex}; totalSum: ${totalSum}`);