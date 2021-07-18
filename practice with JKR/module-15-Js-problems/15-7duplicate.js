var numbers = [4, 5, 3, 5, 6, 7, 8, 3, 2, 6, 1, 2];
var uniqueName = [];

for(var i = 0; i < numbers.length; i++){
    var element = numbers[i];
    var index = uniqueName.indexOf(element); 
    if(index == -1){
        uniqueName.push(element);
    }
}

console.log(uniqueName);



