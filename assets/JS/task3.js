
//task1

let result = 0;

for (let i = 1; i <= 100; i++) {
    console.log (i);
    console.log(result);
    result += i;
}

console.log(result);

//task2


let result2 = (2 + 2 * 2);
console.log(result2);

const enterEmount = function (param) {
if (param === result2) {
    return 'ok';
}else {
    return 'no';
    }
}

//task 3

const degree = function(num1, num2) {
    if (num2 === 0) {
        return 1;
    }
    
    let result3 = 1;
    const positiveNum2 = Math.abs(num2);

    for (let i = 0; i < positiveNum2; i++) {
      result3 *= num1;
    }

    if (num2 < 0) {
        return 1 / result33;
    } else {
        return result3;
    }
}

const num1 = 2;
const num2 = 3;
const result3 = degree(num1, num2);
console.log(result3);

//task 3

function degree1 (num11, num22) {
    return Math.pow(num11, num22);
}
const num11 = 2;    
const num22 = 3;    
const result4 = degree1(num11, num22);    
console.log(result4);    