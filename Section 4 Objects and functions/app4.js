var objectLiteral = {
    firstname: "Mary",
    isAProgrammer: true,
}

console.log(JSON.stringify(objectLiteral));

// JSON - requires the props to be in quotes
// {
//     "firstname": "Mary",
//     "isAProgrammer": true,
// }

var jsonValue = JSON.parse('{"firstname": "Mary","isAProgrammer": true,}');