const friends = [
    {name:"billal", money: 1},
    {name:"aillal", money: 1},
    {name:"killal", money: 1},
    {name:"dillal", money: 1},
]

// Using For loop
let total = 0;
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    total = total + friend.money
}
console.log(total);

// doing same thing using Reduce
const totalFriendsMoney = friends.reduce((total, friend) => total + friend.money, 0);
console.log(totalFriendsMoney);


// on this code we will understand reduce method using for loop
// here we declare a variable name "total" and that's initial value is "0" 
// and "friend" is an element of "friends" array;
// so the "total" and the "friend" already had on "for loop" and the "reduce method"