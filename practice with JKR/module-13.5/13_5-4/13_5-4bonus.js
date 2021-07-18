// var numbers = [33, 34, 54, 43, 55,];

// for(var i = 0; i < numbers.length; i++){
//     var element = numbers[i];
//     console.log(element);
// }

// function add(number1, number2){
//     var total = number1 + number2;
//     return total;
// }

// var result1 = add(65, 54)
// console.log(result1);

// var result2 = add( 43, 55);
// console.log(result2);



function largestNumber(numbers){
    var larger = numbers[0];
    for(var i = 0; i < numbers.length; i++){
        var element = numbers[i];
        if(element > larger){
            larger = element
        }
    }
    return larger;
}
var numbers = [33, 34, 54, 43, 55];
var output = largestNumber(numbers);
console.log('output', output);