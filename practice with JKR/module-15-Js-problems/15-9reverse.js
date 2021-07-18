
// function reverseString(str){
//     var reverse = "";
//     for (var i = 0; i < str.length; i++){
//         var chr = str[i];
//         reverse = chr + reverse;
//     }
//     return reverse;
// }

// var talk = "hello i'm from planet earth"
// console.log(reverseString(talk));


function reverseText(str){
    var reverse = "";
    for(var i = 0; i < str.length; i++){
        var chr = str[i];
        reverse = chr + reverse;
    }
    return reverse;
}

var sentence = reverseText("this is me. form planet earth");
// console.log(sentence);

var text = "this reverse by for loop";
var reverse = "";

for(var i = 0; i < text.length; i++){
    var chr = text[i];
    reverse = chr + reverse;
}

console.log(reverse);
