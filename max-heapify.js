//max heapify with loop vs recursion
//Input, array and index i
//Output, array that is max heapified?
//[10,9,8,7,6,5,4]


function maxHeapify(arr, i) {
    //figure out largest element between A[i] A[left] A[right]
    //if largest element is A[left] or A[right], swap A[i] with A[left] or A[right]
    //now call maxHeapify on A[index] again
    while(true) {
        //calculate left and right values
        let left = (i+1) * 2 - 1;
        let right = (i+1) * 2;

        //determine which index has largest value
        let largestIndex = findLargest(arr, i, left, right);

        //if largest value is i, we are done
        if (largestIndex === i) {
            break;
        }
        //otherwise, move largest value to index i, then repeat on largestValue index
        else {
            swapValues(arr, largestIndex, i);
            i = largestIndex;
        }
    }
}

function swapValues(arr, one, two) {
    let temp = arr[one];
    arr[one] = arr[two];
    arr[two] = temp;
}

function findLargest(arr, i, left, right) {
    let largest = i;
    if (arr[left] > arr[largest]) {
        largest = left;
    }
    if (arr[right] > arr[largest]) {
        largest = right;
    }
    return largest;
}

let arr = [3,9,8,7,6,5,4];
console.log(`before maxHeapify: ${arr}`);
maxHeapify(arr, 0);
console.log(`after maxHeapfiy: ${arr}`);
//input: [3,9,8,7,6,5,4]