var timerEl = document.getElementById("timer");
var startButton = document.querySelector(".start-button");
var subTime = document.querySelector(".subtract-time")
var questioncontainer = document.getElementById("question-container")
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");

// Question and Answer Arrays
var question = document.getElementById("questions");
var correctAnswers = ["alerts", "curly brackets", "all of the above", "quotes","console.log"]
var currentQuestionIndex = 0;
var timeLeft= 60;

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
        "answers": ["JavaScript","terminal/bash","for loops","console.log"]
    }
]

// // The startTimer function starts and stops the timer
function startTimer() {
    
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

// Decrements the timer by 10
function subtractTime() {
    timeLeft -=10;
}


// TODO: 
// Local Storage: High Scores
// function of losing: call them a bitch
// restart button
// right/wrong indicator text after each answer


function startGame() {
    startTimer();
    startButton.style.display= "none";
    showQuestions();
    questioncontainer.style.display ="block";
    
}

function fillAnswers() {
    button1.textContent = questions[currentQuestionIndex].answers[0];
    button2.textContent = questions[currentQuestionIndex].answers[1];
    button3.textContent = questions[currentQuestionIndex].answers[2];
    button4.textContent = questions[currentQuestionIndex].answers[3];
}


function showQuestions() {
    question.textContent = questions[currentQuestionIndex].question
    fillAnswers();
}

// check for correct/incorrect click
function checkAnswer(event) {
    if (correctAnswers[currentQuestionIndex] === (event.currentTarget.innerText)) {

    } else {
        subtractTime();
    }
    currentQuestionIndex++;
    showQuestions()
}

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);
button1.addEventListener("click", checkAnswer);
button2.addEventListener("click", checkAnswer);
button3.addEventListener("click", checkAnswer);
button4.addEventListener("click", checkAnswer);

