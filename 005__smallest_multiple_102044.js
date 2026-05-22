// smallest multiple 
// smallest number where 1 - n can divide it without remainder  

const divisionLimit = 20;

// dividing loop of 1 - n
function dividingLoop(num) {
    let isDivisible = new Set();
    for (let i = 1; i <= divisionLimit; i++) {
        isDivisible.add(num % i == 0);
    }
    if (isDivisible.has(false)) {
        return false;
    } else return true;
}
// console.log(dividingLoop(2520));


// loop for checking through all numbers
function searchingLoop() {
    let i = 1;
    while (true) {
        if (i % 10000000 == 0) console.log(i.toLocaleString());
        if (dividingLoop(i)) {
            console.log('\n' + i);
            break;
        }
        i++;
    }
}
searchingLoop();