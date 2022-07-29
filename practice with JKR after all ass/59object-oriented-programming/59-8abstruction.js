class Animal {
    constructor() {

    }
    talk() {
        console.log('make some noise');
        throw new Error("you must implement talk method")
    }
}

class Cat extends Animal {
    talk() {
        console.log('mew mew mew');
    }
}

class Dog extends Animal {
    talks() {
        console.log('ghew ghew ghew');
    }
    talk() {
        console.log("talk talk");
    }
}

const cat = new Cat();
cat.talk()
const dog = new Dog();
dog.talk()