/* 
Concatenation operator
*/

let strConcat;
strConcat = "Hello";
strConcat += ' ';
strConcat += "World!";
console.log(strConcat);

//Template literal - in ES6 we can declare string with backtick operator
var strLiteral = `This is string`;
console.log(strLiteral);

//multiline string with quotes
let strMultiLineWithQuotes = "This is multiline string. \n"+
                    "we are on second line." +
                    " This is third line.";
console.log(strMultiLineWithQuotes);


//Literal multiline string
let strMultiLineWithLiteral = `This is multiline string.
                    we are on second line.
                    This is third line.`;
console.log(strMultiLineWithLiteral);


let userName = "Deepak";
let userAge = 34;
console.log("My Name is "+userName + " and I am "+userAge + " Years old.");

let testbacktick = `My name is ${userName}`;

console.log(testbacktick);

let multiLineText = `My name is ${userName}
my age is ${userAge}
I am from Pune
I am developer`;
console.log(multiLineText);