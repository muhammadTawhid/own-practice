var number1 = 25
var number2 = 25.5
console.log(number1 + number2);

var number3 = "25";
var number4 = 25.5;
console.log(number3 + number4);


var number5 = 10
var number6 = "10.5";
number6 = parseFloat(number6);
console.log(number5 + number6);

var number8 = 10
var number9 = "10.5";
number9 = parseInt(number9);
console.log(number8 + number9);

var number1 = 2;
var number2 = "3.2";
number2 = + number2;
console.log(number1 + number2);

var number3 = 2
var number4 = 3
number4 = '' + number4
console.log( number4); 
console.log(typeof number4); 

var number5 = 0.2;
var number6 = 0.3;
var total = number5 + number6
total = total.toFixed(5);
console.log(total);