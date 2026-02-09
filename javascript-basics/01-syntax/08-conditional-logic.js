// Lesson 8: Implementing control flow via conditional branching and logical operators to drive dynamic program behavior.

// 1. Basic If-Else
const temperature = 25;

if (temperature > 30) {
    console.log("It is hot outside.");
} else {
    console.log("It is not hot outside.");
}

// 2. Else If Chain
const score = 85;
let grade;

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else {
    grade = "F";
}

console.log(`Grade assigned: ${grade}`);

// 3. Logical Operators (&& and ||)
const hasAccount = true;
const balance = 150.00;
const itemPrice = 50.00;

if (hasAccount && balance >= itemPrice) {
    console.log("Transaction approved.");
} else {
    console.log("Transaction denied.");
}

// 4. Nested If Statements
const userAge = 20;
const isCitizen = true;

if (userAge >= 18) {
    if (isCitizen) {
        console.log("Eligible to vote.");
    } else {
        console.log("Must be a citizen to vote.");
    }
} else {
    console.log("Too young to vote.");
}

// 5. Multiple Conditions Example
const guestAge = 10;
let ticketPrice;

if (guestAge < 5) {
    ticketPrice = 0;
} else if (guestAge >= 5 && guestAge <= 12) {
    ticketPrice = 10;
} else if (guestAge >= 65) {
    ticketPrice = 12;
} else {
    ticketPrice = 20;
}

console.log(`Ticket price: $${ticketPrice}`);