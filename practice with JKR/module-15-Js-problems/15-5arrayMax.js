var marks = [12, 42, 54, 56, 66, 775, 454, 64];
var max = marks[0];

for(i = 0; i < marks.length; i ++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}

console.log("the largest num is", max);