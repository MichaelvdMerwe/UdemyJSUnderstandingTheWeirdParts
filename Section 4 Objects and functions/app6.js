greet(); //outputs hi because the funciton is hoisted during creation

// function statement
function greet() {
    console.log("hi");
}

anonymousGreet(); // outputs undefined, this is because although anonymousGreet is hoisted, it gets set to undefined

// function expression
var anonymousGreet = function() {
    console.log("hi");
}

anonymousGreet(); // outputs hi

function log(a){
    a();
}

// passing an anonymous function to the log function and executing it inside
log(function() {
    console.log("hi");
});

