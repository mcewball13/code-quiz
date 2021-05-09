// global vars
let timeLeft = 90;
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
        a: false,
        b: true,
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

startGame = () => {
    shuffleArray(questions);
    // Hide the modal
    modalEl.style.display = "none";
    for (var i = 0; i < questions.length; i++) {
        questionEl.textContent = questions[i].question;
        pa1El.textContent = questions[i].answer.a;
        pa2El.textContent = questions[i].answer.b;
        pa3El.textContent = questions[i].answer.c;
        pa4El.textContent = questions[i].answer.d;
    }
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
