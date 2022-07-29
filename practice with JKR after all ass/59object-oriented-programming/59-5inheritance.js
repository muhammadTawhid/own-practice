// code r repation kom korar jonno ai smart device class declare kora hoise aita hocche class inheritance

class SmartDevice {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    charging() {
        console.log("i am eating electrons");
    }
}




class Mobile extends SmartDevice {
    constructor(name, price, camera) {
        super(name, price)
        // this.name = name
        // this.price = price
        this.camera = camera
    }
    // charging() {
    //     console.log("i am eating electrons");
    // }
}


class Watch {
    constructor(name, price, distance) {
        // this.name = name
        // this.price = price
        super(name, price)
        this.distance = distance
    }
    // charging() {
    // console.log("i am eating electrons");
    // }
}

class Tablet {
    constructor(name, price, isWifi) {
        super(name, price)
        // this.name = name;
        // this.price = price;
        this.isWifi = isWifi;
    }
    // charging() {
    // console.log("i am eating electrons");
    // }
}

const phone = new Mobile("samsung", 3000, "34px")
console.log("🚀 ~ file: 59-5inheritance.js ~ line 46 ~ phone", phone)
phone.charging()