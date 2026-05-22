// 10001st Prime

let primeNumbers = [2];

// loops through all numbers before the number to try if it is divisible
function isPrimeNumber(num) {
    let testResults = new Set();
    // for (let i = 2; i < num; i++) {
    for (let i of primeNumbers) {
        if (num % i == 0) { testResults.add(false); }
        else { testResults.add(true); }
    }

    if (!testResults.has(false)) {
        primeNumbers.push(num);
        if (primeNumbers.length % 1000 == 0) console.log(num);
    }
}



// loops through numbers to find possible prime numbers
function primeNumberGenerator(range) {
    console.log(primeNumbers[0]);
    for (let currNum = 3; primeNumbers.length != range; currNum++) {
        isPrimeNumber(currNum);
    }
    console.log('\n' + primeNumbers[range - 1]);
}

primeNumberGenerator(10001);