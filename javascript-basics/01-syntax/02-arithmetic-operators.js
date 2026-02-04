// Lesson 2: Arithmetic Operators, Augmented Assignment, and Operator Precedence.
let score = 10;
let total = (10 + 2) * 3; 

score += 5;
score *= 2;
score++;
score--;

let isEven = (score % 2 === 0);

console.log(`Total Calculation: ${total}`);
console.log(`Final Score: ${score}`);
console.log(`Is the score even? ${isEven}`);