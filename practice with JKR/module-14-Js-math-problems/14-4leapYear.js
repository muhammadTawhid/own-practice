// var leapYear = 8858;
// var result = leapYear % 4;
// console.log(result == 0);

// if (result == 0) {
//   console.log("this is leapYer, cz aita 4 diye vaag jai");
// } else {
//   console.log(
//     "this is not a leapYear, cz aita 4 diye vaag jai na, mane vaag sesh 0 hoi na"
//   );
// }

// function isLeapYear(year) {

//   if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0) ) {
//       return true;
//   }
//     else {
//     return false;
//   }
// }

// var sum = isLeapYear(1700);
// console.log(sum);


function isLeapYear(year){
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        return true;
    }
    else{
        return false
    }
}

console.log(isLeapYear(2020));
//------------------------moduler test
var i = 1700
console.log(i % 100);