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
function queryNumbers(noOfTwoDigits) { // enter either 2 or 3
    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {

            if (noOfTwoDigits == 2) {
                let prod = i * j;
                if (isPalindrome(prod)) {
                    palindromes[prod] = i + ', ' + j;
                }

            } else if (noOfTwoDigits == 3) {
                for (let k = 0; k < 100; k++) {
                    let prod = i * j * k;
                    if (isPalindrome(prod)) {
                        palindromes[prod] = i + ', ' + j + ', ' + k;

                    }
                }
            }

        }
    }
}
queryNumbers(2);
console.log(palindromes);



// function findMaxPalindrome() {
//     return palindromes[palindromes.length - 1];
// }
// console.log(findMaxPalindrome());