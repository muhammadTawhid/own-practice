class Stack {
    constructor () {
        this.stack =[];
    }
    add(item){
        this.stack.push(item);
    }
    remove(){
        if(this.stack.length){
            return this.stack.pop();
        }
    }
}

const guest = new Stack();
guest.add("tamim")
guest.add("sakib")
guest.add("mashrafi")
console.log("🚀 ~ file: stack.js ~ line 19 ~ guest", guest)

guest.remove()

console.log(guest.stack);
