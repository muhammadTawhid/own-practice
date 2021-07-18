// var numbers = [43, 53, 52, 56, 67, 75, 64, 34];
// var i = numbers[0];
// var sum = 0;

// for(var i = 0; i < numbers.length; i++){
//     var element = numbers[i];
//     var sum = sum + element;
// }
// console.log( sum)


function arraySum(numbers){
    var sum = 0;
    for(var i = 0; i < numbers.length; i++){
        var element = numbers[i];
        var sum = element + sum
    }
    return sum;
}

var numbers = [43, 53, 52, 56, 67, 75, 64, 31];
var result = arraySum(numbers);
// console.log(result);

var friends = ["Alu", "Bulu", "culu", "dulu", "fulu"];

var allNames = "";

for(var i = 0; i< friends.length;i++){

    var name = friends[i];

    allNames =allNames + name;

}

console.log(allNames)