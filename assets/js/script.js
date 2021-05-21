var timerEl = document.getElementById("timer");
var startButton = document.querySelector(".start-button");

var isWin = false;
var timer;
var timerCount;

                    
// // The startTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    var timeLeft= 60;
    
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            displayMessage();
        }
    }, 1000);
}

// TODO: Clear container text elements on button press
// Start Quiz with questions 

// Local Storage: High Scores

// Quiz Questions: 
// Commonly used data types DO NOT include: strings, booleans, *alerts*, numbers
// The condition in an if / else statement is enclosed within: quotes, *curly brackets*, paranthesis, square brackets
// Arrays in JavaScript can be used to store: numbers and strings, other arrays, booleans, *all of the above*
// String values must be enclosed within ___ when being assigned to variables: commas, curly brackets, *quotes*, paranthesis 
// A useful tool used during development and debugging for printing content to the debugger is: JavaScript, terminal/bash, for loops, *console.log*



// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startTimer);