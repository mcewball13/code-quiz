// global vars
let timeLeft = 90;
// store questions and answers in an object array
var questions = [
    {
        question: "What does === mean?",
        answer: {
            a: "Equal to data type and value",
            b: "Equal to data type",
            c: "Equal to value",
            d: "Equal to a variable",
        },
    },
    { question: "A Boolean is a Number.", answer: { a: false, b: true } },
    {
        question: "What data type is not Primitive",
        answer: { a: "integer", b: "variable", c: "string", d: "boolean" },
    },
    {
        question: "Contatination is achieved by the + symbol.",
        answer: { a: true, b: false },
    },
    {
        question: "A function always has these two symbols",
        answer: {
            a: ". and {}",
            b: "() and ''",
            c: "{} and ()",
            d: "if and else",
        },
    },
    {
        question:
            "When declaring a function what is the placeholder called when you want to pass in an argument",
        answer: { a: "variable", b: "integer", c: "Parameter", d: "Method" },
    },
    {
        question: "What denotes a comment in Javascript?",
        answer: { a: "<-- -->", b: "//", c: "/*", d: "./" },
    },
    {
        question: "If I were to use parseInt(), what whould I be converting?",
        answer: {
            a: "string to integer",
            b: "array to variable",
            c: "boolean to integer",
            d: "integer to string",
        },
    },
    {
        question: "What does NaN stand for?",
        answer: {
            a: "Not a Numeral",
            b: "Not a Node",
            c: "Not a Navigator",
            d: "Not a Number",
        },
    },
    {
        question: "Where does hoisting mean?",
        answer: {
            a: "Move to top",
            b: "Send out of function",
            c: "Saves it for last",
            d: "Move to Bottom",
        },
    },
];
let randomArrAnswerStrings = Object.values(questions[Math.floor(Math.random() * questions.length)].answer)
let randomArrAnswerletters = Object.keys(questions[Math.floor(Math.random() * questions.length)].answer)
console.log(randomArrAnswerletters);


// Capture DOM El
let modalEl = document.querySelector("#start-modal");
let currentLeaderEl = document.querySelector("#current-leader");
let currentScoreEl = document.querySelector("#current-score");
let timeLeftEl = document.querySelector("#countdown");
let timeLeftContainEl = document.querySelector("#time-left-container");
let questionEl = document.querySelector("#question");
let pa1El = document.querySelector("#pa1");
let pa2El = document.querySelector("#pa2");
let pa3El = document.querySelector("#pa3");
let pa4El = document.querySelector("#pa4");
let startGamebtn = document.querySelector("#start-game-btn");
let rightWrongEl = document.querySelector("#right-wrong");

// local storage
let currentLeader = localStorage.getItem("highScorer");
let currentScore = localStorage.getItem("highScore");

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
const randomSelection = () => {
    Object.keys(questions[Math.floor(Math.random() * questions.length)])
        .length - 1;
};
const populateQA = () => {};

const startGame = () => {
    // Hide the modal
    modalEl.style.display = "none";
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
