const products = [
    {id:1, name:"laptop", price: 20},
    {id:2, name:"phone", price: 60},
    {id:3, name:"watch", price: 80},
    {id:4, name:"tablet", price: 100}
];

// map   ////this give result in a array like [ 'laptop', 'phone', 'tab', 'tablet' ]
// const names = products.map(product => product.name);

const names = products.map(product => {
    return product.name
});        ////[ undefined, undefined, undefined, undefined ] 2nd bracket dile return kore dite hoi

// console.log(names);

// foreach
products.forEach(product => console.log(product.name));

// filter
const cheaper = products.filter(product => product.price < 80)
console.log("filter", cheaper);


// remove item using filter
const remaining = products.filter(product => product.id != 3);
console.log("remaining after filter" , remaining);

//find
const hasWatch = products.find(product => product.name === "watch");
console.log(hasWatch);

// reduce

// includes

// push

// pop

// length

//indexOf