// aikhane # use kore privet variable declare kora hoise jeita bahir theke access kora ba set kora jabe na mane capsule r moto

class Tiger {
    #speed = 100
    constructor(name) {
        this.name = name;
    }
    run() {
        console.log(`i am ${this.name}. i am running at ${this.#speed}`);
    }
}

const royal = new Tiger("royal bengal tiger")
console.log(royal);
royal.run()