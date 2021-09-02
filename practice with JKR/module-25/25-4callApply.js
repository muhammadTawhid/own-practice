const normalPerson = {
    firstName: "hellal",
    lastName: "uddin",
    title: "mr",
    salary: 2000,

    fullName: function(){
        const firstName = this.firstName;
        const lastName = this.lastName;
        fullName = firstName +" "+ lastName;
        return fullName;
    },

    chargeTax: function(tax, amount, tip){
        this.salary = this.salary - tax
        return this.salary;
    }
}

// console.log(normalPerson.fullName());
// normalPerson.chargeTax(500);
// console.log(normalPerson.salary);

const heroPerson = {
    firstName: "hero",
    lastName: "alom",
    salary: 25000
}

const friendlyPerson = {
    firstName: "hero",
    lastName: "golam",
    fullName: "",
    salary: 2000,
}


const heroBillCharged = normalPerson.chargeTax.bind(heroPerson);
heroBillCharged(5000);  //// "heroBillCharged" var ta ekta function return kore that's why we call this like a function;
console.log("after minus 5000", heroPerson.salary);

// bind using for the fullName method on normalPerson;
const getFullName = normalPerson.fullName.bind(friendlyPerson);
console.log(getFullName());

// 25-4 start from here
// call method using
normalPerson.chargeTax.call(friendlyPerson, 200, 100, 150)
console.log("after minus tax tip amount", friendlyPerson.salary);

// apply method using 
// normalPerson.chargeTax.apply(heroPerson, [200, 100, 20])
// console.log(heroPerson.salary);

normalPerson.chargeTax.apply(friendlyPerson,  [200, 100, 300]);
console.log(friendlyPerson.salary);