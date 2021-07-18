function doubleId(num){
    var result = num * 2;
    // console.log(result);
}

doubleId(5);
doubleId(50);


function doubleIt(num){
    var result = num * 2;
    return result;
}

var first = doubleId(5);
var second = doubleId(50);
var total = first + second;
// console.log( total);


function add(num1, num2){
   var result = num1 + num2;
   return result;
}

var sum = add(2, 3);
console.log(sum);