// var num = 6;

// for(var i = 2; i < num; i++){
//     if(num%i == 0){
//         console.log('your number is not a prime number');
//         break;
//     }
// }

// console.log('this is a prime number');



function isPrime(n){
    for(var i = 2; i < n; i++){
        if(n%i == 0){
            return 'not a prime number'
        }
    }
    return 'this is a prime number'
}

var result = isPrime(6);
console.log(result);
