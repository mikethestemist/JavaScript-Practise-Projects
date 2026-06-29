//largest palindromic number 


function isPalindrome(num) {
    revNum = num.toString().split('').reverse().join('');
    if (num == revNum) {
        return true;
    } else {
        return false;
    }
}
// console.log(isPalindrome(554));

let palindromes = {};
function queryNumbers(noOfIndependentDigits, countOfDigitLength = 2) { // enter either 2 or 3
    if (countOfDigitLength == 2) {
        for (let i = 0; i < 100; i++) {
            for (let j = 0; j < 100; j++) {

                if (noOfIndependentDigits == 2) {
                    let prod = i * j;
                    if (isPalindrome(prod)) {
                        palindromes[prod] = i + ', ' + j;
                    }

                } else if (noOfIndependentDigits == 3) {
                    for (let k = 0; k < 100; k++) {
                        let prod = i * j * k;
                        if (isPalindrome(prod)) {
                            palindromes[prod] = i + ', ' + j + ', ' + k;

                        }
                    }
                }
            }
        }
    } else if (countOfDigitLength == 3) {
        for (let i = 100; i < 1000; i++) {
            for (let j = 100; j < 1000; j++) {

                if (noOfIndependentDigits == 2) {
                    let prod = i * j;
                    if (isPalindrome(prod)) {
                        palindromes[prod] = i + ', ' + j;
                    }

                } else if (noOfIndependentDigits == 3) {
                    for (let k = 100; k < 1000; k++) {
                        let prod = i * j * k;
                        if (isPalindrome(prod)) {
                            palindromes[prod] = i + ', ' + j + ', ' + k;

                        }
                    }
                }
            }
        }
    }
}
// queryNumbers(2);
queryNumbers(2, 3);
console.log(palindromes);



// function findMaxPalindrome() {
//     return palindromes[palindromes.length - 1];
// }
// console.log(findMaxPalindrome());
