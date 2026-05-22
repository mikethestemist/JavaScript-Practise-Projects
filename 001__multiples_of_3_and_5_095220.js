// programme that generates the multiples of 3 and 5 in a given range

let multiples = [];

function multipleGenerator(range) {
    for (let i = 1; i < range; i++) {
        if (i % 3 == 0 || i % 5 == 0) multiples.push(i);
    }
    return multiples.toLocaleString();
}

let sum = 0;
function sumOfMultiples() {
    for (let i of multiples) {
        sum += i;
    }
    return sum.toLocaleString();
}

// multipleGenerator(10);
// console.log(multipleGenerator(10));
multipleGenerator(1000);
console.log(sumOfMultiples());