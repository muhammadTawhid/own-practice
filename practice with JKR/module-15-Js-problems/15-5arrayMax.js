// var marks = [12, 42, 54, 56, 66, 775, 454, 64];
// var max = marks[0];

// for(i = 0; i < marks.length; i ++){
//     var element = marks[i];
//     if(element > max){
//         max = element;
//     }
// }
// console.log("the largest num is", max);

var marks = [32, 53, 64, 22, 4, 54, 342, 56, 75];
var max = marks[0];

for (var i = 0; i < marks.length; i++){
    var element = marks[i];
    if( element > max){
        max = element;
    }
}
// console.log(max)


// function megaFriend(friendsName){
// var largestName = friendsName[0];
//     for(var i = 0; i < friendsName.length; i++){
//         var element = friendsName[i];
//         if(element.length > largestName.length){
//             largestName = element
//         }
//     }
//     return largestName;
// }


// var result = megaFriend(["a", "ab", "abc", "abcd", "ABCDEF", "abcde"]);
// console.log(result);

function megaFriend(array) {
    var bigName = array[0];
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        if (bigName.length < element.length) {
            bigName = element;
        }
    }
    if (bigName == undefined) {
        return 'please fill the box';
    }
    else if (typeof bigName == 'number') {
        return 'The valu cannot be number';
    }
        return bigName;
}

var result = megaFriend(4);
 console.log(result);
