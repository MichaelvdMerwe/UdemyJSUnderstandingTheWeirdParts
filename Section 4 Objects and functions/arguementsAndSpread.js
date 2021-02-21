function greet(firstname, lastname, language, ...other){

    language = language || 'en';//using coersion to test the value and set a default

    if(arguments.length === 0){
        console.log('missing parameters');
        return;
    }

    console.log(firstname)
    console.log(lastname)
    console.log(language)
    console.log(arguments);// this is always available, creates an list(arraylike) of the parameters that you pass
    console.log(other[1]);// the ...other stores all variables entered into it into an array with that name
    console.log('==============')
}

greet();//can be called without params
greet('John'); // passed to the first var


//arguements will be deprecated and we will use the spread param, noted above