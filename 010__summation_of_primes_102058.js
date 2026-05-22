// Summation of Primes

let primes = [2];

function primeGenerator(limit) {
    for (let i = 3; i < limit; i++) {

        let isPrime = new Set();
        for (let j of primes) {
            if (i % j == 0) isPrime.add(false)
            else isPrime.add(true);
        }

        if (!isPrime.has(false)) {
            primes.push(i);
            if (primes.length % 100000 == 0) console.log(primes[primes.length - 1]);
        }

    }
}

let sum = 0;
function sumOfPrimes() {
    for (let i of primes) {
        sum += i;
    }
    return sum;
}

primeGenerator(2000000);
// console.log(primes);
console.log('\n' + sumOfPrimes());
