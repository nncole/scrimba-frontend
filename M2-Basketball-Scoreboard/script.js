// TODO: refactor js (if I have more time)

const homeScore = document.getElementById("home-score");
const guestScore = document.getElementById("guest-score");

const homeServing = document.getElementById("home-serving");
const guestServing = document.getElementById("guest-serving");

let homePoints = 0;
let guestPoints = 0;

function updateScore(team, points) {
  if (team === "home") {
    homePoints += points;
    homeScore.textContent = homePoints;
    homeServing.textContent = "Serving";
    guestServing.textContent = "";
  } else if (team === "guest") {
    guestPoints += points;
    guestScore.textContent = guestPoints;
    document.getElementById("guest-serving").textContent = "Serving";
    homeServing.textContent = "";
  }
  highlightLeading()
}

function highlightLeading(){
  if (homePoints > guestPoints) {
    homeScore.classList.add("leading")
    guestScore.classList.remove("leading")
  } else if (guestPoints > homePoints) {
    guestScore.classList.add("leading")
    homeScore.classList.remove("leading")
  } else {
    homeScore.classList.remove("leading")
    guestScore.classList.remove("leading")
  }
}

function resetGame(){
  homePoints = 0;
  guestPoints = 0;

  homeScore.textContent = 0;
  guestScore.textContent = 0;

  homeScore.classList.remove("leading")
  guestScore.classList.remove("leading")

  homeServing.textContent = "";
  guestServing.textContent = "";
}