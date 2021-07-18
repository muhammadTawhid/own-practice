var a = 1;
var b = 2;

console.log("before swap: a=", a, ", b=", b )

var temp = a;
a = b;
b = temp;

console.log("after swap: a=", a, ", b=", b )

// -----another option to swap var value

var x = 1;
var y = 2;
console.log("before swap: x=", x, ", y=", y )

x = x + y;  //x er new value hobe 3
y = x - y   // y r new value hobe 3 - 2 = 1
x = x - y   // x r new value hobe 3 - 1 = 2

console.log("after swap: x=", x, ", y=", y )

// // another way to swap var value, and this is called language specification.this is only for Js, 

var p = 1;
var q = 2;

[p, q] = [q, p];
console.log("after swap: p=", p, ", q=", q )




