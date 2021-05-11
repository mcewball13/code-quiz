// Capture Elements
let currentLeaderEl = document.querySelector("#current-leader");
let currentLeaderMainEl = document.querySelector("#current-leader-main");
let currentScoreEl = document.querySelector("#current-score");
let inputNameEl = document.querySelector("#name-input");
let endCurrentScoreEl = document.querySelector("#end-current-score");
let alertWinLoseEl = document.querySelector("#alert-win-lose");
let tryAgainBtn = document.querySelector("#try-again-btn");

// Capture Local storage
let currentLeader = localStorage.getItem("currentLeader");
let currentScore = localStorage.getItem("currentScore");
let currentHighScore = localStorage.getItem("currentHighScore");

// Display Current Score
endCurrentScoreEl.textContent = currentScore;
currentScoreEl.textContent = currentScore;
// populate current leader elements
debugger;
if (!currentLeader) {
    currentLeaderEl.textContent = "You're the Leader";
    currentLeaderMainEl.textContent = "You're the Leader";
    localStorage.setItem("currentHighScore", currentScore);
} else {
    currentLeaderEl.textContent = currentLeader + " - " + currentHighScore;
    currentLeaderMainEl.textContent = currentLeader + " - " + currentHighScore;
    if (currentScore > currentHighScore) {
        // currentLeaderEl.textContent = "Enter Name";
        alertWinLoseEl.textContent =
            "Congratulations! You are the High Scorer!";
        localStorage.setItem("currentHighScore", currentScore);
    } else {
        alertWinLoseEl.textContent = "So close! Try again?";
        tryAgainBtn.style.display = "inherit";
        inputNameEl.style.display = "none";
    }
}
// remove current score from database
removeCurrentScore = () => {
    localStorage.removeItem("currentScore");
};
// if there is a current leader or if there isn't

tryAgainBtn.addEventListener("click", () => {
    removeCurrentScore();
    location.assign("/index.html");
});
