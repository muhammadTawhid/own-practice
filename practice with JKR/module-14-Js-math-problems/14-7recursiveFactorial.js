// 3! = 1*2*3
// 4! = 1*2*3*4
// 4! = 3! * 4
// 4! = (4-1)! * 4
// n! = (n-1)! * n
// n! = n * (n-1)!

// var i = 10;
// var factorial = 1;
// while(i >= 5){
//     factorial = factorial * i;
//     console.log(i, factorial);
//     i--;
// }
 

function factorial(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}

var result = factorial(10);
console.log(result);