/*
Javascript Operators
*/

//Addition
let resAdd = 3+5;
console.log(resAdd);

let numberAddString = 3 + "Hello";
console.log(numberAddString);

//Subtraction

let subNum = 90-34;
console.log(subNum);

//subtract number from string
let subString = "hello" - 30;
console.log(subString);

//Multiplication

let multiNum = 4*6;
console.log(multiNum);
let minusMulti = -5 * 6;
console.log(minusMulti);
let zeroMulti = 0 * 6;
console.log(zeroMulti);


//Division

let divNum = 6/3;
console.log(divNum);
let divFloat = 5.2 / 3.1;
console.log(divFloat);
let divIntWithZero = 8/0;
console.log(divIntWithZero);

//Displaying different operators with example


let x = 14;
let y = 5;

console.log("Addition " + (x + y));
console.log("Subtraction " + (x - y));
console.log("Multiplication " + (x * y));
console.log("Division " + (x / y));
console.log("Modulus or remainder operator " + (x % y));
console.log("Exponentiation operator " + (x ** y));

console.log("Increment operator " + (++x));
console.log("Increment operator " + (x++));
console.log("Value after increment operator ", x);

console.log("Decrement operator " + (--x));
console.log("Decrement operator " + (x--));
console.log("Value after Decrement operator ", x);

console.log("Unary minus operator ", (x - "3"));
console.log("Unary minus operator " + (x - '2'));
console.log("Unary minus operator " + (2-true));
console.log("Unary minus operator " + (2-false));

console.log("Unary plus operator ", (y + "3"));
console.log("Unary plus operator " + (x + '2'));
console.log("Unary plus operator " + (2+true));
console.log("Unary plus operator " + (2+false));


let intX = "14";
let intY = 5;

console.log("Addition " + (intX + intY));
console.log("Subtraction " + (intX - intY));
console.log("Multiplication " + (intX * intY));
console.log("Division " + (intX / intY));
console.log("Modulus or remainder operator " + (intX % intY));
console.log("Exponentiation operator " + (intX ** intY));

var strX = "14";
var strY = 5;
var strYNum = Number(strX);
console.log(strX);
console.log(strY);

console.log(strYNum);

const a = 3;
const b = 6;

const c = String(a);
const d = String(b);

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);

let num = 123.45;
console.log(typeof(num));