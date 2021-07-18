// 10! = 1*2*3*4*5*6*7*8*9*10

// var factorial = 1;
// for(var i = 1; i <= 5; i++){
//     factorial = factorial * i
//     console.log(i, factorial);
// }

function factorial(n){
    var factorial = 1;
    for(var i = 1; i <= n; i++){
        factorial = factorial * i
    }
    return factorial
}

 var j = factorial(4);
console.log(j);

