// Lesson 3a: Basic user input using window.prompt(); includes explicit type conversion from String to Number.
let age = Number(window.prompt("Enter your age: "));

console.log(`The user is ${age} years old.`);
console.log(`Next year, the user will be ${age+1} years old.`);