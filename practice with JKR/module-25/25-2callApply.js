const normalPerson = {
    firstName: "hellal",
    lastName: "uddin",
    title: "mr",
    salary: 2000,

    fullname: function(){
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

console.log(normalPerson.fullname());

normalPerson.chargeTax(500);
console.log(normalPerson.salary);