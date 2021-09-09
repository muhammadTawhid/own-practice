// array destructure

const numbers = [ 2, 4];
// const x = numbers[0];
// const y = numbers[1];

// using destructure
// const [x, y] = [4, 5] //// x = 4, y = 5;
const [x, y] = numbers;
console.log(x, y);

function boxify(num1){
    return [num1, num1+1];
}

const box = boxify(5);
// console.log(box);

const [box1, box2] = boxify(5);
console.log("box1", box1, "box2", box2);

// object destructureing
const person = {name: "abir", id: 32, phone: 35255, };
const {phone, id, name} = person;
console.log(id);

// making object
const one = 4;
const two = 5;

const object = {one, two};
console.log(object);

//// new array using three dots
const newNumberArray = [...numbers, 8888];
console.log(newNumberArray);





