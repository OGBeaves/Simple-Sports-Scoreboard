let homeScoreBtnOne = document.getElementById("home-score-btn-1");
let homeStoreEl = document.getElementById("home-score");
let homeScore = 0;

let awayScoreBtnOne = document.getElementById("away-score-btn-1");
let awayStoreEl = document.getElementById("away-score");
let awayScore = 0;

let gameOver = false;

let resetScore = document.getElementById("score-reset-btn");

function increaseHomeScoreOne() {
    if (gameOver) return;
    homeScore += 1; 
    homeStoreEl.textContent = homeScore;
    scoreCap();
}

function increaseHomeScoreTwo() {
    if (gameOver) return;
    homeScore += 2; 
    homeStoreEl.textContent = homeScore;
    scoreCap();
}

function increaseHomeScoreThree() {
    if (gameOver) return;
    homeScore += 3; 
    homeStoreEl.textContent = homeScore;
    scoreCap();
}

function increaseAwayScoreOne() {
    if (gameOver) return;
    awayScore += 1;
    awayStoreEl.textContent = awayScore;
    scoreCap();
}

function increaseAwayScoreTwo() {
    if (gameOver) return;
    awayScore += 2;
    awayStoreEl.textContent = awayScore;
    scoreCap();
}

function increaseAwayScoreThree() {
    if (gameOver) return;
    awayScore += 3;
    awayStoreEl.textContent = awayScore;
    scoreCap();
}

function resetScoreboard() {
    awayScore = 0;
    awayStoreEl.textContent = awayScore;
    homeScore = 0;
    homeStoreEl.textContent = homeScore;
    gameOver = false;
}

function scoreCap() {
    if (awayScore >= 99) {
        alert("Game Over: Away Team Wins!");
        gameOver = true;
    }

    else if (homeScore >= 99) {
        alert("Game Over: Home Team Wins!");
        gameOver = true;
    }
}