// by value(primitives)
var a = 3;
var b;

b = a; // copies the primitive value for b from a

a = 2;

console.log(a); // 2
console.log(b); // 3 // unaffected

// by reference (objects)
var c = {greeting: "hi"};
var d;

d = c;
c.greeting = 'hello'

console.log(c); // outputs hello
console.log(d); // outputs hello
// pointing to the same memory location

function changeGreeting(obj){
    obj.greeting = 'Hola'; // mutate
}

changeGreeting(d);
console.log(c); // Hola
console.log(d); // Hola

c = {greeting: 'howdy'}; // = operator creates a new object in memory, so they are no longer pointing to the same memory location
console.log(c); // howdy
console.log(d); // Hola
