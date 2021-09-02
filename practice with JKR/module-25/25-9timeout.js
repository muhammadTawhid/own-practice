function doSome(){
    console.log("this is will be call ager 2 sec");
}

console.log(1111);
console.log(2222);
setTimeout(doSome, 2000)
console.log(3333);
setTimeout(() => {
    console.log("this will be call after 3sec");
}, 3000);
console.log(4444);
console.log(6666);

setTimeout(function(){
    console.log("this will be called after 4sec");    
}, 4000)

////////////////set interval
setInterval(() => {
    console.log("this will be call repeat again and again after 1sec");
}, 1000)