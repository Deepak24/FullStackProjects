/**
 * Read User Data from terminal
 */

const readLineSync = require("readline-sync");

const userName = readLineSync.question("May I know your name?");
const userAge = readLineSync.question("May I know your age?");

console.log("Welcomes ", userName);

var yourBirthYear = 2024 - userAge;
console.log(`Your are birth year is ${yourBirthYear}.`);
