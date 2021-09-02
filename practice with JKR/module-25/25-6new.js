class Person{
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person("hero", "balam", 25000);
console.log(heroPerson);
const friendlyPerson = new Person("friendly", "blam", 20000);
console.log(friendlyPerson);