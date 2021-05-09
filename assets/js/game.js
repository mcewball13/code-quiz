// global vars
let timeLeft = 90;
let currentQuestion = {};
let currentQuestionIndex = 0;
let score = 0;
let questionsPool = [];
const correctAnswer = 10;

// store questions and answers in an object array
var questions = [
    {
        question: "What does === mean?",
        a: "Equal to data type and value",
        b: "Equal to data type",
        c: "Equal to value",
        d: "Equal to a variable",
        answer: 1,
    },
    {
        question: "A Boolean is a Number.",
        a: true,
        b: false,
        answer: 1,
    },
    {
        question: "What is not a Primitive data type ",
        a: "integer",
        b: "variable",
        c: "string",
        d: "boolean",
        answer: 2,
    },
    {
        question: "Contatination is achieved by the + symbol.",
        a: true,
        b: false,
        answer: 1,
    },
    {
        question: "A function always has these two symbols",
        a: ". and {}",
        b: "() and ''",
        c: "{} and ()",
        d: "if and else",
        answer: 3,
    },
    {
        question:
            "When declaring a function what is the placeholder called when you want to pass in an argument",
        a: "variable",
        b: "integer",
        c: "Parameter",
        d: "Method",
        answer: 3,
    },
    {
        question: "What denotes a comment in Javascript?",
        a: "<-- -->",
        b: "//",
        c: "/*",
        d: "./",
        answer: 2,
    },
    {
        question: "If I were to use parseInt(), what whould I be converting?",
        a: "string to integer",
        b: "array to variable",
        c: "boolean to integer",
        d: "integer to string",
        answer: 1,
    },
    {
        question: "What does NaN stand for?",
        a: "Not a Numeral",
        b: "Not a Node",
        c: "Not a Navigator",
        d: "Not a Number",
        answer: 4,
    },
    {
        question: "What does hoisting mean?",
        a: "Move to top",
        b: "Send out of function",
        c: "Saves it for last",
        d: "Move to Bottom",
        answer: 1,
    },
];

//  Make sure lable letters match on the DOM

// Capture DOM El
let modalEl = document.querySelector("#start-modal");
let currentLeaderEl = document.querySelector("#current-leader");
let currentScoreEl = document.querySelector("#current-score");
let timeLeftEl = document.querySelector("#countdown");
let timeLeftContainEl = document.querySelector("#time-left-container");
let questionEl = document.querySelector("#question");
let paBtns = document.querySelectorAll(".pa-btn");
let startGamebtn = document.querySelector("#start-game-btn");
let rightWrongEl = document.querySelector("#right-wrong");
// local storage
let currentLeader = localStorage.getItem("highScorer");
let currentScore = localStorage.getItem("highScore");
console.log(paBtns);

// Set current leader in header on Page
if (currentLeader === null) {
    currentLeaderEl.textContent = "Be The First!";
} else {
    currentLeaderEl.textContent = currentLeader;
}
if (currentScore === null) {
    currentScoreEl.textContent = "No Score Yet!";
} else {
    currentScoreEl.textContent = currentScore;
}

startGame = () => {
    currentQuestionIndex = 0;
    score = 0;
    questionsPool = [...questions];
    console.log(questionsPool);
    populateNextQuestion();
    // Hide the modal
    modalEl.style.display = "none";
};

populateNextQuestion = () => {
    currentQuestionIndex++;
    let questionIndex = Math.floor(Math.random() * questionsPool.length);
    currentQuestion = questionsPool[questionIndex];
    questionEl.textContent = currentQuestion.question;

    paBtns.forEach((paBtn) => {
        let property = paBtn.dataset["property"];
        console.log(property);
        paBtn.innerText = currentQuestion[property];
        if (paBtn.innerText === "undefined") {
            paBtn.parentElement.style.display = "none";
        }
    });
    questionsPool.splice(questionIndex, 1);
};
// set up a timer function when button is clicked and call the game start

startGamebtn.addEventListener("click", () => {
    timeLeftEl.textContent = "Time Left: " + timeLeft;
    let timerCountdown = setInterval(() => {
        timeLeftEl.textContent = "Time Left: " + (timeLeft - 1);
        timeLeft--;
        if (timeLeft < 0) {
            // timeLeftEl.textContent = "Time Left: " + timeLeft;
            timeLeftEl.textContent = "Times up!";
            clearInterval(timerCountdown);
        }
    }, 1000);
    startGame();
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
