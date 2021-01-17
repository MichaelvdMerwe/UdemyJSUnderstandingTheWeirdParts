// long running function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event!');   
}

// listen for the click event
document.addEventListener('click', clickHandler);


waitThreeSeconds();
console.log('finished execution');

// output
// finished function
// finished execution

// it will hit the waitThreeSeconds() and place it on the stack; then create a new execution context and execute that context. Once execution is complete it will pop it off the stack and continue from its previous place, executing the next console log

// if you click while the waitThreeSeconds(); is executing the clickhandler will be passed off to the event queue and wait for the function call stack to clear before invoking(global execution is also on the stack). Therefor the output will be:
// output
// finished function
// finished execution
// 'click event!'