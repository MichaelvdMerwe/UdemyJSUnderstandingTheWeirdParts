// the lexical environment matters, when executing JS will go through the scope chain to determine the value of a variable. Due to b() being lexically on the outside of function a upon execution the value of myVar will be = 1 due to the lexical environment of function b and the declaration of the value for myvar
function b() {
    console.log(myVar);
}

function a() {
    var myVar = 2;
    b();
}

var myVar = 1;
a();
//both functions have the global execution context as their outer scope

//===============================================================================================================================================


function a() {
    
    function b() {
        console.log(myVar);
    }
    var myVar = 2;
    
	b();
}

var myVar = 1;
a();
// b(); cannot be called outside of the function a() as it doesnt exist on the global execution context

//due to the lexical environment of b, its outer reference is now a() and a is global. So when its looking for the value for myVar when invoking b it will find it in a
//===============================================================================================================================================
