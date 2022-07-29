class Dictionary {
    constructor(){
        this.dictionary = {};
    }

    add(key, value){
        this.dictionary[key] = value;
    }

    get(key){
        return this.dictionary[key];
    }
}

const friends = new Dictionary();
friends.add("biri", "0130334844")
friends.add("siri", "0134334844")
friends.add("chiri", "01303324844")

console.log(friends.dictionary)

const abir = friends.get("biri")
console.log(abir)