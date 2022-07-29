class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(item) {
        this.queue.push(item);
    }
    dequeue() {
        if (this.queue.length) {
            return this.queue.shift();
        }
    }
}

const friends = new Queue();
friends.enqueue("asik")
friends.enqueue("pasik")
friends.enqueue("sasik")

console.log(friends.enqueue);

friends.dequeue();
console.log(friends.enqueue);
