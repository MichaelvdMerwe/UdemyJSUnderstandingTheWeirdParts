// there are better ways to do this, just for reference purposes
var person = new Object();

person["firstname"] = "Tony";
person["lastname"] = "Ferguson";

// person = {
//     firstname: "Tony"
//     firstname: "Ferguson"
// }
// if the property does not exist it creates it

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);// bracket notation
console.log(person.firstname);// dot notation

person.address = new Object(); // creates a new object within the person object called address
person.address.street = "111 Main St."; // adds a new property to the address object
person.address.city = "New York";
person.address.state = "NY";

console.log(person.address.street);
console.log(person.address.city);
console.log(person['address']['state']);
