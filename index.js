let homeScore = document.getElementById("home-score").textContent;
let awayScore = document.getElementById("away-score").textContent;

function addOnePoint(value) {
  console.log(homeScore);
  if (value === "home") {
    homeScore = Number(homeScore) + 1;
    document.getElementById("home-score").textContent = homeScore;
  } else {
    awayScore = Number(awayScore) + 1;
    document.getElementById("away-score").textContent = awayScore;
  }
}

function addTwoPoint(value) {
  console.log(homeScore);
  if (value === "home") {
    homeScore = Number(homeScore) + 2;
    document.getElementById("home-score").textContent = homeScore;
  } else {
    awayScore = Number(awayScore) + 2;
    document.getElementById("away-score").textContent = awayScore;
  }
}

function addThreePoint(value) {
  console.log(homeScore);
  if (value === "home") {
    homeScore = Number(homeScore) + 3;
    document.getElementById("home-score").textContent = homeScore;
  } else {
    awayScore = Number(awayScore) + 3;
    document.getElementById("away-score").textContent = awayScore;
  }
}

function newGame() {
  document.getElementById("home-score").textContent = "0";
  homeScore = 0;
  document.getElementById("away-score").textContent = "0";
  awayScore = 0;
}
