// Special Pythagorean Triplet


function tripleGenerator() {
    for (let a = 1; a < 999; a++) {
        for (let b = 2; b < 1000; b++) {

            let c = Math.sqrt(a ** 2 + b ** 2);
            let sum = a + b + c;
            if (sum % 100 == 0) console.log(a, b, c);

            if (c % 1 == 0 && sum == 1000) {
                // console.log('\n' + a, b, c);

                let prod = a * b * c;
                // console.log(prod);
                return [a, b, c, prod];
            }

        }
    }
}

let [a, b, c, prod] = tripleGenerator();
console.log('\n' + a, b, c, '\n' + prod);