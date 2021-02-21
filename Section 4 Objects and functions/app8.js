//usage of this
//later sections of the course will show the more real world examples

// immediately available, this points to the global object, in this case window
console.log(this);

// when invoking this in the function here it points to the global object, in this case also window
function a() {
    console.log(this);
    //you can do weird things like this
    this.newVariable = 'hello';
}

// same here
var b = function() {
    console.log(this);
}

a();
//new variable now exists on the global variable
console.log(newVariable);
b();

//object literal
var c = {
    name: 'the c object',
    log: function(){
        this.name = 'updated c object'//it will mutate the name on the c object
        console.log(this);

        var setName = function (newName){
            this.name = newName;
        }
        setName('Updated Again! New Name in c object');
        console.log(this);//this is not refering to the c object but the global object instead, this needs to be accounted for or your behaviours will be weird
    }
}

// this will point to the object that the method is attatched to, so this refers to the c object in this case
c.log();

//this is how the problem is solved, however since ES6 the arrow functions provide better usage of this
var d = {
    name: 'the c object',
    log: function(){
        var self = this;//this is a reference value so it will point to the same object

        self.name = 'updated c object'
        console.log(self);

        var setName = function (newName){
            self.name = newName;
        }
        setName('Updated Again! New Name in c object');
        console.log(self);
    }
}

