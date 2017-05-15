//Given a list of N coins, their values (V1, V2, … , VN), and the total sum S. Find the minimum number of coins the sum of
//which is S (we can use as many coins of one type as we want), or report that it’s not possible to select coins in such
//a way that they sum up to S.

//N = [1,3,5]
//S[i] = number of coins necessary to get sum of coins equal to i

function dpSolution(coinArray) {
    var finalSum = 20;
    var sumArray = createSumArrayToInfinite(finalSum);

    for (var i = 0; i < coinArray.length; i++) {
        var currentCoin = coinArray[i];
        for (var j = 0; j < finalSum; j++) {
            if (j === 0) {
                sumArray[j] = 0;
            } else {
                if (currentCoin <= j) {
                    var temp = j - currentCoin;
                    if (temp >= 0) {

                    }
                }
            }
        }
    }
}

function fn(coinArray, sumToCalculate) {
    var sumArray = createSumArrayToInfinite(sumToCalculate);
    sumArray[0] = 0;

    //iterate over sumArray i representing sum[i]
    for (var i = 1; i <= sumToCalculate; i++) {
        //iterate through coin Array, coinArray[j] representing the jth coin
        for (var j = 0; j < coinArray.length; j++) {
            var currentCoin = coinArray[j];
            //calculate sum minus coin to determine if currentCoin can fit into current sum
            var sumMinusCoin = i-currentCoin;
            if (currentCoin <= i && sumArray[sumMinusCoin] + 1 < sumArray[i]) {
                sumArray[i] = sumArray[sumMinusCoin] + 1;
            }
        }
    }

    console.log(sumArray);
}

function createSumArrayToInfinite(value) {
    var array = [];
    for (var i = 0; i <= value; i++) {
        array.push(999999999);
    }
    return array;
}

fn([1,3,5], 11);