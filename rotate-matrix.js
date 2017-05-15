//INPUT:
// 1, 2, 3
// 4, 5, 6
// 7, 8, 9

//OUTPUT:
//7, 4, 1
//8, 5, 2
//9, 6, 3

//INPUT:
//01, 02, 03, 04
//05, 06, 07, 08
//09, 10, 11, 12
//13, 14, 15, 16

//(0,0) (0,1) (0,2) (0,3)
//(1,0) (1,1) (1,2) (1,3)
//(2,0) (2,1) (2,2) (2,3)
//(3,0) (3,1) (3,2) (3,3)

//OUTPUT:
//13 09 05 01
//14 10 06 02
//15 11 07 03
//16 12 08 04


//INPUT
//1 2 3 4
//4 5 6 7

//OUTPUT
//4 1
//5 2
//6 3
//7 4

let A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let C = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8]
];

//Create new Array and return
function rotateMatrix(A) {
    let B = [];
    let rowLength = A[0].length - 1; //1
    let columnLength = A.length - 1; //2
    for (let i = 0; i <= rowLength; i++) {
        B[i] = [];
        for (let j = 0; j <= columnLength; j++) {
            B[i][j] = A[columnLength-j][i];
        }
    }
    return B;
}

function printDoubleMatrix(A) {
    for (let i = 0; i < A.length; i++) {
        let rowString = '';
        for (let j = 0; j < A[i].length; j++) {
            rowString += `${A[i][j]} `;
        }
        console.log(rowString);
        rowString = '';
    }
}

printDoubleMatrix(rotateMatrix(C));