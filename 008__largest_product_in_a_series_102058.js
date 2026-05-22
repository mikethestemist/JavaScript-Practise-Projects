// largest product in a series

const num = '45678961543456489486615564867815645878941516456789615648461515358477876484156348648796864156145648748687846315686485615645678961564846151535847787648415634864879686415614564874868784631315648678615615346878648561574';
let data = [];
// cycle through the numbers
// store the product of a given range of consecutive numbers, their index, and the numbers themselves.

function digitSift(range) {
    for (let i = 0; i <= num.length - range; i++) {

        let digits = [];
        for (let j = 0; j < range; j++) {
            digits.push(parseInt(num[i + j]));
        }

        let prod = 1;
        for (let k of digits) { prod *= k; }
        // console.log(prod, digits)

        data.push([prod, [...digits]]);

        // let key = prod + ' ' + Math.floor(Math.random() * num.length);
        // let value = i + ' => ' + digits.join(', ');
        // data[key] = value;
    }
    console.log(data);
}

function maxProduct() {
    let maxProd = [0, [], 'index: 0'];
    for (let i of data) {
        if (i[0] > maxProd[0]) maxProd = [...i, 'index: ' + data.indexOf(i)];
    }
    return maxProd;
}

digitSift(13);
console.log(maxProduct());