const money = 140;

// let food;
// if (money > 100) {
//     food = 'biriyani'
// }
// else{
//     'alur vorta'
// }
// console.log(food);

let food = money > 100 ?  "biriyani" : "alur vorta"
console.log(food);


//// jodi ekta option thake tahole
const active = true;
const x = active  && "user active";  //// active === true && "user active"

const y = active || "user inactive"; 

// string to number
const num = +"5"; //// string ar age "+" dile oita number hoye jai;
console.log(num);

// number to string
const numText = 5 + "";
console.log(numText);


// default parameter
function sum(num, num2 = 1){
    return num + num2
}

const result = sum(3);
console.log(result);