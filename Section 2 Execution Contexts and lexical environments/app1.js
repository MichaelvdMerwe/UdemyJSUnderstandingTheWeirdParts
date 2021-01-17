// NEVER DO THIS - RELYING ON HOISTING
// b();                     //OUTPUTS: called b
// console.log(a);          //OUTPUTS: undefined

var a = 'Hello World!';

function b() {
    console.log('called b');
}

// b();                     //OUTPUTS: called b
// console.log(a);          //OUTPUTS: hello world

//===============================================================================================================================================


var c;
console.log(c);

if(c === undefined){
    console.log('c is undefined');
} else {
    console.log('c is defined');
}

// c = undefined; NEVER DO THIS, undefined is used by javascript, if you want to void a value use null instead

//===============================================================================================================================================
d(); //outputs 'called d'

function d() {
    console.log('called d');
}

d(); //outputs 'called d'

console.log(e); //outputs undefined

var e = "some text"

console.log(e); //outputs "some text"

//===============================================================================================================================================

function f(){
}

function g(){
    f();
}

g();

// global execution context is created(this/window)
// attatches the functions to the global context during the creation phase
// during the execution phase it will invoke g
// this then creates a new execution context for g() (function call stack, will be done later)
// once that is done it will execute the context for g() and create a new execution context for f()

// EVERY FUNCTION IN JS WILL GO THROUGH A CREATION PHASE(which sets up the global execution context) and then execute the functions

// Once a funciton is finished with the execution phase the function is popped off the execution stack and execution of the next function will start
