// global vars
let timeLeft = 60;
let currentQuestion = {};
let score = 0;
let questionsPool = [];
let gameOver = false;
const correctAnswer = 10;
const timePenalty = 10;

// store questions and answers in an object array
var questions = [
    {
        question: "What does === mean?",
        a: "Equal to data type and value",
        b: "Equal to data type",
        c: "Equal to value",
        d: "Equal to a variable",
        answer: "a",
    },
    {
        question: "A Boolean is a Number.",
        a: true,
        b: false,
        answer: "b",
    },
    {
        question: "What is not a Primitive data type ",
        a: "integer",
        b: "variable",
        c: "string",
        d: "boolean",
        answer: "b",
    },
    {
        question: "Contatination is achieved by the + symbol.",
        a: true,
        b: false,
        answer: "a",
    },
    {
        question: "A function always has these two symbols",
        a: ". and {}",
        b: "() and ''",
        c: "{} and ()",
        d: "if and else",
        answer: "c",
    },
    {
        question:
            "When declaring a function what is the placeholder called when you want to pass in an argument",
        a: "variable",
        b: "integer",
        c: "Parameter",
        d: "Method",
        answer: "c",
    },
    {
        question: "What denotes a comment in Javascript?",
        a: "<-- -->",
        b: "//",
        c: "/*",
        d: "./",
        answer: "b",
    },
    {
        question: "If I were to use parseInt(), what whould I be converting?",
        a: "string to integer",
        b: "array to variable",
        c: "boolean to integer",
        d: "integer to string",
        answer: "a",
    },
    {
        question: "What does NaN stand for?",
        a: "Not a Numeral",
        b: "Not a Node",
        c: "Not a Navigator",
        d: "Not a Number",
        answer: "d",
    },
    {
        question: "What does hoisting mean?",
        a: "Move to top",
        b: "Send out of function",
        c: "Saves it for last",
        d: "Move to Bottom",
        answer: "a",
    },
];

//  Make sure lable letters match on the DOM

// Capture DOM El
let modalEl = document.querySelector("#start-modal");
let modalHighScoreEl = document.querySelector("#modal-high-score");
let currentLeaderEl = document.querySelectorAll(".current-leader");
let currentLeaderScoreEl = document.querySelector("#current-leader-score");
let currentScoreEl = document.querySelector("#current-score");
let timeLeftEl = document.querySelector("#countdown");
let timeLeftContainEl = document.querySelector("#time-left-container");
let questionEl = document.querySelector("#question");
let paBtns = document.querySelectorAll(".pa-btn");
let btns = document.querySelectorAll(".btn");
let startGamebtn = document.querySelector("#start-game-btn");
let rightWrongEl = document.querySelector("#right-wrong");
let highScoreLink = document.querySelector("#high-score-link");

// Initialize DOM element Content

// local storage
let currentLeader = localStorage.getItem("currentLeader");
let currentScore = localStorage.getItem("currentScore");
let currentHighScore = localStorage.getItem("currentHighScore");

// updates variables with current information
currentLeaderEl.forEach((el) => {
    el.textContent = currentLeader;
});

setLeader = () => {
    localStorage.setItem("currentLeader", currentScore);
};

// Set current leader in header on Page;
if (!currentLeader) {
    currentLeaderEl.forEach((el) => {
        el.textContent = "Be The First!";
    });
} else {
    currentScoreEl.textContent = currentLeader + " - " + currentHighScore;
    currentLeaderScoreEl.textContent = currentHighScore;
}

currentScoreEl.textContent = "No Score Yet!";

startGame = () => {
    currentScoreEl.textContent = "No Score Yet!";
    outOfTime = false;
    score = 0;
    questionsPool = [...questions];

    populateNextQuestion();
    // Hide the modal
    modalEl.style.display = "none";
};

checkGameOver = () => {
    // Check if there are more question and more time
    if (outOfTime) {
        gameOver = true;

        btns.forEach((btn) => {
            btn.style.display = "none";
        });
        // if no time, send to end page
        return setInterval(() => {
            location.assign("./end.html");
        }, 1000);
    }
    // if there are no more questions send to end page
    if (questionsPool.length === 0) {
        gameOver = true;
        return location.assign("./end.html");
    }
};
populateNextQuestion = () => {
    checkGameOver();
    // Get random number from the pool of questions
    let questionIndex = Math.floor(Math.random() * questionsPool.length);
    // display the current question based on the random index
    currentQuestion = questionsPool[questionIndex];
    questionEl.textContent = currentQuestion.question;
    // Check to see if there are les than 4 answers, if so hide the buttons that dont apply
    paBtns.forEach((paBtn) => {
        let property = paBtn.dataset["property"];
        paBtn.innerText = currentQuestion[property];
        if (paBtn.innerText === "undefined") {
            paBtn.parentElement.style.display = "none";
        } else {
            paBtn.parentElement.style.display = "inherit";
        }
    });
    // remove the questions from the available questions
    questionsPool.splice(questionIndex, 1);
};
// add a click event listener to all the anser buttons
paBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        // same the clicked button in a variable
        let selectedAnswer = e.target;
        // get the property value from the selected answer
        let selectedAnswerProperty = selectedAnswer.dataset["property"];
        rightWrongEl.style.display = "inherit";
        // check if the selected propert value equals the answer object property
        if (selectedAnswerProperty == currentQuestion.answer) {
            rightWrongEl.textContent = "Right!";
            score += correctAnswer;
            // increase score in localstorage
            localStorage.setItem("currentScore", score);
            // display score on DOM
            currentScoreEl.textContent = score;
        } else {
            rightWrongEl.textContent = "Wrong!";
            // if answered incorrectly, remove penalty from clock
            timeLeft -= timePenalty;
        }
        setTimeout(() => {
            rightWrongEl.style.display = "none";
        }, 1000);
        // call the next question
        populateNextQuestion();
    });
});

// set up a timer function when button is clicked and call the game start
startCountdown = () => {
    timeLeftEl.textContent = "Time Left: " + timeLeft;
    let timerCountdown = setInterval(() => {
        timeLeftEl.textContent = "Time Left: " + (timeLeft - 1);
        timeLeft--;
        if (timeLeft < 0) {
            timeLeftEl.textContent = "Times up!";
            clearInterval(timerCountdown);
            outOfTime = true;
            return checkGameOver();
        }
    }, 1000);
};
// listen for the start game click
startGamebtn.addEventListener("click", () => {
    startCountdown();
    startGame();
});
// listen for the view high scores link click and toggle modal showing info
highScoreLink.addEventListener("click", () => {
    modalHighScoreEl.classList.toggle("display-none");
});

// current leader append child with value of high scorer else Be the First!

// start button start the quiz
// <main> changes to show first question and possible answers

// Make sure to move all answers to all lower when compairing them

// store correct answer inside of object? or all the possible answers and select and if statement to see if it's correct.

// If user selects right answer increase store, and alert them they answered correctly and move on to the next question.
// If they answer incorrectly, then alert them they answered wrong, time is deducted from their time left and move on to the next question.
// once they answer all the questions it will show them their score and ask them to enter their initials.
// it their score is higher than the high score, then it will tell them they are the new high scorer and put their initials on the screen

// when the user clicks the high scores link it shows them the last 5 high scores
