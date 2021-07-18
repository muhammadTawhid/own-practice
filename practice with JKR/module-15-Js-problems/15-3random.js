var num = 2.49;
var floor = Math.floor(num);
// console.log(floor);
var ceil = Math.ceil(num);
// console.log(ceil);
var rounded = Math.round(num);
// console.log(rounded);

var random = Math.random() ;

var randomDice = Math.random();
var calculate = randomDice * 6;
var result = Math.round(calculate);
// console.log(result);

for(var i = 0; i <= 6; i++){
    var randomDice = Math.random();
    var calculate = randomDice * 6;
    var result = Math.round(calculate);
    console.log(result);    
}
