// Sum square difference 

let squareOfSum = [];
let sumOfSquares = [];

// function that cycles through the numbers
function numLoop(range) {
    for (let i = 1; i <= range; i++) {
        squareOfSum.push(i);
        sumOfSquares.push(i ** 2);
    }
} 

// function that evaluates for sum of the arrays and finds their difference
function sum(list) {
    let total = 0;
    for (let i of list) {total += i;}
    return total;
}

function simplification() {
    let resultOf_squareOfSum = sum(squareOfSum) ** 2;
    let resultOf_sumOfSquares = sum(sumOfSquares);
    console.log(resultOf_squareOfSum, resultOf_sumOfSquares);

    let diff = resultOf_squareOfSum - resultOf_sumOfSquares;
    console.log(diff);
}



numLoop(100000);
// console.log(squareOfSum, sumOfSquares);
simplification();
