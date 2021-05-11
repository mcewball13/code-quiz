// Capture Elements
let currentLeaderEl = document.querySelectorAll(".current-leader");
let currentScoreEl = document.querySelectorAll(".current-score");
let inputNameContainerEl = document.querySelector("#name-input-container");
let inputNameEl = document.querySelector("#name-input");
let formEl = document.querySelector("form");
let alertWinLoseEl = document.querySelector("#alert-win-lose");
let tryAgainBtn = document.querySelector("#try-again-btn");
let currentLeaderScoreEl = document.querySelector("#end-modal-high-score");
let submitNameBtn = document.querySelector("#submit-name-btn");
let endMainHighSchool = document.querySelector("#end-modal-high-score");

// Capture Local storage
let currentLeader = localStorage.getItem("currentLeader");
let currentScore = localStorage.getItem("currentScore");
let currentHighScore = localStorage.getItem("currentHighScore");

// Display Current leader and Score
currentLeaderEl.forEach((el) => {
    el.textContent = currentLeader;
});
currentScoreEl.forEach((el) => {
    el.textContent = currentScore;
});

// populate current leader elements
if (!currentLeader) {
    alertWinLoseEl.textContent =
        "Congratulations! You are the New High Scorer!";
    currentLeaderEl.forEach((el) => {
        el.textContent = "Be The First!";
    });
    currentLeaderScoreEl.textContent = "No High Score Yet!";
    localStorage.setItem("currentHighScore", currentScore);
} else {
    endMainHighSchool.textContent = currentHighScore;
    currentLeaderEl.textContent = currentLeader + " - " + currentHighScore;
    // Check if they are the winner
    if (currentScore > currentHighScore) {
        currentLeaderEl.textContent = "Enter Name";
        alertWinLoseEl.textContent =
            "Congratulations! You are the New High Scorer!";
        localStorage.setItem("currentHighScore", currentScore);
    } else {
        alertWinLoseEl.textContent = "So close! Try again?";
        tryAgainBtn.style.display = "inherit";
        inputNameContainerEl.style.display = "none";
    }
}

// remove current score from database
removeCurrentScore = () => {
    localStorage.removeItem("currentScore");
};

// event listeners
submitNameBtn.addEventListener("click", () => {
    localStorage.setItem("currentLeader", inputNameEl.value);
    document.location.assign("./index.html");
});

tryAgainBtn.addEventListener("click", () => {
    removeCurrentScore();
    document.location.assign("./index.html");
});
