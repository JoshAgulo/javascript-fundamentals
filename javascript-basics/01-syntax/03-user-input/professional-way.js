// Lesson 3b: User Input via HTML and the DOM for capturing data without blocking the browser interface.
let username;

document.getElementById("submitButton").onclick = function() {
    username = document.getElementById("userName").value;
    console.log(username);
};