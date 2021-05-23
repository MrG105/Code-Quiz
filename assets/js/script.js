var timerEl = document.getElementById("timer");
var startButton = document.querySelector(".start-button");
var subTime = document.querySelector(".subtract-time")
var questioncontainer = document.getElementById("question-container")
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var submitButton = document.getElementById("submit");
var rightOrWrong = document.getElementById("rightOrWrong");
var h1 = document.getElementById("h1");
var timeLeft= 60;
var timeInterval;
var inputGroup = document.getElementById("input-group");
var initialsInput = document.querySelector("#initials");
var highScoresCard = document.querySelector(".highScores")

// Question and Answer Arrays
var question = document.getElementById("questions");
var correctAnswers = ["alerts", "parentheses", "all of the above", "quotes","console log"]
var currentQuestionIndex = 0;
var questions = [
    {
        "question": "Commonly used data types DO NOT include:", 
        "answers": ["strings","booleans","alerts","numbers"]
    },
    {
        "question": "The condition in an if / else statement is enclosed within:", 
        "answers": ["quotes","curly brackets","parentheses","square brackets"]
    },
    {
        "question": "Arrays in JavaScript can be used to store:", 
        "answers": ["numbers and strings","other arrays","booleans","all of the above"]
    },
    {
        "question": "String values must be enclosed within ___ when being assigned to variables:", 
        "answers": ["commas","curly brackets","quotes","parentheses"]
    },
    {
        "question": "A useful tool used during development and debugging for printing content to the debugger is:", 
        "answers": ["JavaScript","terminal/bash","for loops","console log"]
    }
]

// // The startTimer function starts and stops the timer
function startTimer() {
    
    timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            endGame();
        }
    }, 1000);
}

// Decrements the timer by 10
function subtractTime() {
    timeLeft -=10;
}

// TODO: 
// Local Storage: High Scores

function startGame() {
    h1.style.display = "none";
    timeLeft = 60;
    currentQuestionIndex = 0;
    startTimer();
    startButton.style.display= "none";
    showQuestions();
    questioncontainer.style.display ="block";
    question.style.display = "block";
    inputGroup.style.display = "none";
    highScoresCard.style.display = "none";

}

function fillAnswers() {
    button1.textContent = questions[currentQuestionIndex].answers[0];
    button2.textContent = questions[currentQuestionIndex].answers[1];
    button3.textContent = questions[currentQuestionIndex].answers[2];
    button4.textContent = questions[currentQuestionIndex].answers[3];
}

function showQuestions() {
    if (currentQuestionIndex > 4) {
        endGame();
    }else {    
    question.textContent = questions[currentQuestionIndex].question
    fillAnswers();
    }
}

// check for correct/incorrect click
function checkAnswer(event) {
    if (correctAnswers[currentQuestionIndex] === (event.currentTarget.innerText)) {
        rightOrWrong.style.color = "Green";
        rightOrWrong.textContent = "CORRECT";
        rightOrWrong.classList.add('show');
        setTimeout(function(){
            rightOrWrong.classList.remove('show');
        }, 1000);

    } else {
        rightOrWrong.style.color = "Red";
        rightOrWrong.textContent = "WRONG";
        rightOrWrong.classList.add('show');
        setTimeout(function(){
            rightOrWrong.classList.remove('show');
        }, 1000);
        subtractTime();
    }
    currentQuestionIndex++;
    showQuestions()
}

function endGame() {
    h1.style.display = "block";
    clearInterval(timeInterval);
    if (timeLeft>=1) {
        h1.textContent = "YOU WIN"
        question.textContent = "Enter your initials to save your high score!"
        inputGroup.style.display = "block";
    } else {
        h1.textContent = "TIME'S UP!"
        question.style.display = "none";
    } 
    questioncontainer.style.display = "none";
    startButton.style.display = "block";
    startButton.innerText = "Restart Quiz?";
    highScoresCard.style.display = "block";
    
}

function init() {
    var storedHighScores = JSON.parse(localStorage.getItem("highScores"));
    if (storedHighScores !== null) {
        highScores = storedHighScores;
    }
}
// Attach event listener to start button to call startGame function on click, checkAnswer function on quiz buttons
startButton.addEventListener("click", startGame);
button1.addEventListener("click", checkAnswer);
button2.addEventListener("click", checkAnswer);
button3.addEventListener("click", checkAnswer);
button4.addEventListener("click", checkAnswer);
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    var highScores = {
        initials: initialsInput.value,
        score: timeLeft
    };
    localStorage.setItem("highScores", JSON.stringify(highScores));
})

init()