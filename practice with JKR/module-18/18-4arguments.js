// function arguments(num1, num2){
//     console.log(arguments);
//     var sum = num1 + num2;
//     return sum;
// }

// var result = arguments(1, 2, 5, 7);
// console.log(result);


function arguments(){
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const nums = arguments[i];
        sum = nums + sum;
    }
    return sum;
}

var result = arguments(1, 2, 5, 7, 1);
console.log(result);