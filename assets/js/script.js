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

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startTimer);