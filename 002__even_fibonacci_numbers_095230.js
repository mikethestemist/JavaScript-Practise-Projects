// Even Fibonacci Numbers

// generate the fibonacci numbers with number of terms or maximum number
// the required fibonacci sequence starts from 1 and 2

let fibonacciSequence = [1, 2];
function generateFibonacciSequence(numOfTermsBool, value) {
    // numOfTermsBool: true = number of terms && false = max value
    if (numOfTermsBool == true) {
        for (let i = 2; i < value; i++) {
            let prevNumber = fibonacciSequence[fibonacciSequence.length - 2];
            let currNumber = fibonacciSequence[fibonacciSequence.length - 1];
            let nextNumber = prevNumber + currNumber;
            fibonacciSequence.push(nextNumber);
        }
    } else if (numOfTermsBool == false) {

        // for (let i = 2; fibonacciSequence[fibonacciSequence.indexOf(i) - 1] < value; i++) {
        //     let prevNumber = fibonacciSequence[fibonacciSequence.length - 2];
        //     let currNumber = fibonacciSequence[fibonacciSequence.length - 1];
        //     let nextNumber = prevNumber + currNumber;

        //     fibonacciSequence.push(nextNumber);
        // }
        while (true) {
            let prevNumber = fibonacciSequence[fibonacciSequence.length - 2];
            let currNumber = fibonacciSequence[fibonacciSequence.length - 1];
            let nextNumber = prevNumber + currNumber;
            if (nextNumber < value) {
                fibonacciSequence.push(nextNumber);
            } else {
                break;
            }
        }
    }
}


// filter even numbers and output the sum
let evenValues = [];
function sumOfEvenValues() {
    let sum = 0;
    for (let i of fibonacciSequence) {
        if (i % 2 == 0) {
            evenValues.push(i);
            sum += i;
        }
    }
    return sum;
}

// true = number of terms && false = max value
generateFibonacciSequence(false, 10000000000000000000000000000000000000000000);
// console.log(fibonacciSequence);


let sum = sumOfEvenValues(); 
console.log(sum);
// console.log(evenValues)
