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

    chargeTax: function(tax){
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
console.log(heroPerson.salary);

// bind use for friendlyPerson var
const friendlyPersonTax = normalPerson.chargeTax.bind(friendlyPerson);
friendlyPersonTax(50);
console.log(friendlyPerson.salary);

// bind using for the fullName method on normalPerson;
const getFullName = normalPerson.fullName.bind(friendlyPerson);
console.log(getFullName());