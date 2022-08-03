// 1 remove falsy values from array
const friends = ["tanjim", "", "roni", undefined, "ski", 0, "nojruler put"];
const trueFriend = friends.filter(Boolean);
console.log(trueFriend);  //  ['tanjim', 'roni', 'ski', 'nojruler put' ]


// 2 convert any value to boolean
console.log(!! "name"); //true
console.log(!!0); //false
console.log(!!1); //true
console.log(Boolean("rakib")); // true


// 3 Resizing any array
const friends1 = ["abir", "sakib", "goru", "sagol", "bolod", "mohis"];
friends1.length = 3
console.log(friends1);


// 4 flat multi dimensional array
const numbers = [1, 2, 4, 5, [5, 6,], 6, 7, 8]
console.log(numbers.flat()); //[ 1, 2, 4, 5, 5, 6, 6, 7, 8 ]

// flat multi level array
const numbers1 = [1, 2, [3, [4, 5, 6], 7], 8, 9]
console.log(numbers1.flat(Infinity));



// 5 Short Conditionals
const leader = "Elon";

// Instead of doing this
if (leader === "Elon") {
    console.log("Elon is leader");
}

// We use &&
leader === "Elon" && console.log("Elon is leader");

// Again
if (leader !== "Elon") {
    console.log("Elon is not leader");
}

// We use &&
leader === "Elon" || console.log("Elon is not leader");


// 6 Replace word in a string
const quote = "React is a js framework. This is a front-end framework. ";
console.log(quote.replace(/framework/g, "library"));



// 7 console log values with variable smartly
const person = "Martin";
console.log(person); // Martin
console.log({ person }); //{ person: 'Martin' }



// 8 Know performance Time of a task 
const startTime = performance.now();
for (let i = 0; i <= 50; i++) {
    console.log(i);
}
const endTime = performance.now();
console.log(`Call to for loop took ${endTime - startTime} milliseconds.`); //keno jani error dey :( 
// sumit da r repo link https://github.com/learnwithsumit/jspt-1/blob/main/example-8/eight.js

