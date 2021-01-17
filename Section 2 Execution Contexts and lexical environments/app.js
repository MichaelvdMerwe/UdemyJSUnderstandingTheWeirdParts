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
