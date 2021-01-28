// object literal
var Tony = {
    firstname: "tony",
    lastname: "ferguson",
    addres: {
        street: "111 Main St.",
        city: "New York",
        state: "NY"
    }
};
// console.log(person)

function greet(person){
    console.log("Hi " + person.firstname);
}

greet(Tony);

greet({firstname: "Mary", lastname: "Doe"});