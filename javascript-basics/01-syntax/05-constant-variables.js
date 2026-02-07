// Lesson 5: Using 'const' for immutable values to prevent accidental reassignment and improve code security.
const PI = 3.14159;
let radius;
let circumference;

radius = Number(window.prompt("Enter Radius: "));
circumference = 2 * PI * radius;

console.log(`Circumference: ${circumference}`);