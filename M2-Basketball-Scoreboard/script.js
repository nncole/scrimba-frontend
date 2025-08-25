const homeScore = document.getElementById("home-score");
const guestScore = document.getElementById("guest-score");

let homePoints = 0;
let guestPoints = 0;


function updateScore(team, points) {
  if (team === "home") {
    homePoints += points;
    homeScore.textContent = homePoints;
  } else if (team === "guest") {
    guestPoints += points;
    guestScore.textContent = guestPoints;
  }
}

function resetGame(){
  homePoints = 0;
  guestPoints = 0;

  homeScore.textContent = 0;
  guestScore.textContent = 0;
}