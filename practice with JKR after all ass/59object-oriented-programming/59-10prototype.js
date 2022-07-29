// js class aser age ai vabe likhte hoito

function Cat(name) {
    this.name = name;
}

Cat.prototype.talk = function () {
    console.log('mew mew');
}

const myCat = new Cat("tiger");
console.log(myCat);
myCat.talk();