class Animal {
    static category = 'Dog';
    location = "Dhaka";
    constructor(name, speed) {
        this.name = name
        this.speed = speed
    }
    static compare(animal1, animal2) {
        if (animal1.speed > animal2.speed) {
            return `${animal1.name} is faster`
        }
        return `${animal2.name} is faster`
    }
}

const myRat = new Animal("rat", 32)
console.log(myRat.category);
console.log(myRat.location);

console.log(Animal.category); //kono class property r age static likha mane aita sora-sori access kora jabe new animal create korte hobe na line 16 r moto
console.log(Animal.location);