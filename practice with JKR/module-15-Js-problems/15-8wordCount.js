var speech = "hi i'm tawhid. i     have some friends";
var spaceCount = 0

for(var i = 0; i < speech.length; i++){
    var chr = speech[i];
    if(chr == " " && speech[i-1] != " "){
        spaceCount++;
    }
}
console.log(spaceCount);