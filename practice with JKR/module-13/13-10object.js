var student = {id:121, address:2323, phn:213, name:"abir"};
var student2 = {id:332, address:434, phn:324, name:"mahi"};

// 1st way to acces object property's value
var phoneNumber = student.phn

// 2nd way to acces object property's value
var phoneNumber = student["phn"];

// 3rd way to acces object property's value
var getNumber = "phn";
var phoneNumber = student[getNumber];

// change object property's value
student2.phn = 43423;
// 2nd way
student2["phn"] = 3333;
// 3rd way
var setNumber = "phn";
student2[setNumber] = 88888;

// add new property 
student2.cinema = "ogni two";


console.log(phoneNumber);
console.log(student2);