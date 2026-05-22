// programme to find the available pythagorean triple within a specific range 

let triples = [];
function tripleLogic(range) {
    for (let a = 1; a < range - 3; a++) {
        for (let b = a + 1; b < range - 2; b++) {

            let c = Math.sqrt(a ** 2 + b ** 2);
            if (c % 1 == 0 && c <= range) {
                let triple = [a, b, c];
                triples.push(triple);
                // console.log(triple);

            }
        }
    }
}


let refinedTriples = triples;
let baseAndMultiple = [];

function removeMultiples() {
    for (let i = 0; i < refinedTriples.length - 1; i++) {
        let base = refinedTriples[i];
        let multiple = [];
        // if (base.indexOf(multiple) != -1) {
        // console.log(base);
        // }

        function multiplesForBase() {
            let multiples = [];
            for (let j = 1; j < refinedTriples.length; j++) {
                multiple = refinedTriples[j];
                let [a, b, c] = base;
                let [p, q, r] = multiple;

                let first = a / p;
                let second = b / q;
                let third = c / r;

                if (first == second && second == third &&
                    // first % 1 == 0 & & second % 1 == 0 && third % 1 == 0
                    first < 1 && second < 1 && third < 1
                ) {
                    refinedTriples.splice(j, 1);
                    // multiples.append(base.join('_').toString() {multiple});
                    multiples.push(multiple);
                    // console.log(multiple);
                }
            }
            return multiples;
        }
        // Customise outpu
        let currentMultiples = multiplesForBase() || [];
        console.log(base, currentMultiples, '\n');
    
    }
}


tripleLogic(5000);
removeMultiples();

