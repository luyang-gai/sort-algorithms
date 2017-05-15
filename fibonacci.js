//2. Calculate nth Fibonacci number. Optimize it.

function nthFibonacciNumber(n) {
    var fibArray = [];

    for (var i = 0; i < n; i++) {
        if (i === 0 || i === 1) {
            fibArray[i] = 1;
        } else {
            fibArray[i] = fibArray[i-1] + fibArray[i-2];
        }
    }

    return fibArray[n-1];
}

function recurisveFibonacciNumber(n) {
    if (n === 1 || n === 2) {
        return 1;
    } else {
        return recurisveFibonacciNumber(n-1) + recurisveFibonacciNumber(n-2);
    }
}

console.log(recurisveFibonacciNumber(4));