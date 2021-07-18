// iterative way to do factorial

function factorial(num){
    var factorialNum = 1;
    for(var i = 1; i <= num; i++){
        factorialNum = factorialNum * i;
    }
    return factorialNum;
}

var result = factorial(5);
// console.log(result);


// recursion way to do factorial

function recursion(num){
    if( num == 0){
        return 1;
    }
    else{
        return num * recursion (num - 1);
    }
}

var result = recursion(0);
console.log(result);