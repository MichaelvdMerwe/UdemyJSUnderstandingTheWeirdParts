var greet = "Hello";
var greet = "Hola";

console.log(greet); // outputs Hola because it will overwrite the initial greet.

var english = {};
var spanish = {};

english.greet = "Hello";
spanish.greet = "Hola";

console.log(english);

// useful to fake namespaces and prevent overriding a variable in the global namespace