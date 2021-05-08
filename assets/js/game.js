// global vars
let timeLeft = 5;
// store questions and answers in an object array
var questions = [
    {q: "What does === mean?", a: "Equal to data type and value"},
    {q: "A Boolean is a Number.", a: false},
    {q: "What data type is not Primitive", a: "Variable"},
    {q: "Contatination is achieved by the + symbol.", a: true},
    {q: "A function always has these two symbols", a: "() and {}"},
    {q: "When declaring a function what is the placeholder called when you want to pass in an argument", a: "Parameter"},
    {q: "What denotes a comment in Javascript?", a: "//"},
    {q: "If I were to use parseInt(), what whould I be doing?", a: "Turning a string into a number"},
    {q: "What does NaN stand for?", a: "Not a Number"},
    {q: "Where do hoisted functions go?", a: "To the top"},
]
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
    currentLeaderEl.textContent = currentLeader
}
if (currentScore === null) {
    currentScoreEl.textContent = "No Score Yet!"
} else {
    currentScoreEl.textContent = currentScore;
}

// set up a timer function
let timerCountdown = () => {
    setInterval(() => {
        if (timeLeft <= 0) {
            timeLeftEl.textContent = "Times up!";
            clearInterval(timerCountdown);
        } else {
            timeLeftEl.textContent = "Time Left: " + timeLeft;
            timeLeft--;
        }
    }, 1000);
}

var startGame = () => {
    modalEl.style.display = "none";
}

startGamebtn.addEventListener("click", () => {
    startGame();
})



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
