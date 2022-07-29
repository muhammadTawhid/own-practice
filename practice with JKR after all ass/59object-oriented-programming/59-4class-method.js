class Hero {
    constructor(name, power) {
        this.name = name
        this.power = power
    }
    getPower() {
        if (this.power) {
            return this.power
        }
        else {
            return "i have no power"
        }
    }

    goForGrocery(budget) {
        if (this.power) {
            console.log(this.getPower());
        }
        return budget + " is low i can't buy anything"
    }
}

const catman = new Hero("catman", "lathi dewa")
// console.log(catman.power);
console.log(catman.goForGrocery(100));