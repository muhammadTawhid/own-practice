class PenDrive {
    constructor(space, color, company) {
        this.space = space
        this.color = color
        this.company = company
    }
}

const sata = new PenDrive("33GB", "red", "intel")
console.log("🚀 ~ file: 59-3class.js ~ line 10 ~ sata", sata)




class MakingTruck {
    constructor(wheel, capacity, color) {
        this.wheel = wheel
        this.capacity = capacity
        this.color = color
    }
}

const bigTruck = new MakingTruck("8 wheel", "8 ton", "yellow")
console.log(bigTruck);