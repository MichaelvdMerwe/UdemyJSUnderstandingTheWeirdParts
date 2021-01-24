console.log(1 < 2 < 3); //returns true
console.log(3 < 2 < 1); //returns true

// this is due to associativity
//less than has left to right

console.log(3 < 2 < 1); //it runs 3 < 2 first and returns false
console.log(false < 1) //coerces the value false to number 0, which is less than 1 and returns true

Boolean(undefined)
Boolean(null)
Boolean("")

// all return false, anything that indicates non existence is false
// very useful for null checking

//Setting defaults with operators

var name = undefined || "hello"
console.log(name);// hello

// Using && and || will either return true or false, or a value that can be coerced into true