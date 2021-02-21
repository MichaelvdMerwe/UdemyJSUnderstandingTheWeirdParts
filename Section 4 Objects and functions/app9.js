// var arr = new Array()
//array literal syntax
var arr = [
    1, 
    true, 
    {
        name: 'test',
        address: 'my patience',
    },
    function(name){
        var greeting = 'hello ';
        console.log(greeting + name)
    },
    'hello',
];

console.log(arr);

arr[3](arr[2].name);

//zero based arrays

// js is a little different, because js is dynamically typed it can store anything in it, different types allowed;
// you can even add objects, uncluding functions to the array
// i dont like this behaviour, it is unpredictable, use objects instead
