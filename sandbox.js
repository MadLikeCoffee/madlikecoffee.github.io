function updateClock(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);

    const timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById("clock").textContent = timeString;
}
updateClock();
setInterval(updateClock, 1000);

const paperbtn = document.getElementById("rps-hand");
const rockbtn = document.getElementById("rps-fist");
const scissorsbtn = document.getElementById("rps-scissors");
const playerpick = document.getElementById("player-pick");
const robotpick = document.getElementById("robot-pick");
const gamestate = document.getElementById("game-state");


var win = new Audio('Audio/win.wav');
var lose = new Audio('Audio/lose.wav');
var tie = new Audio('Audio/tie.wav');

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
 let randomas
 let pasirinkimas

function robotas(randomas){
    // Robotas ranka
    if (randomas === 1) {
        robotpick.classList.remove("fa-hand-fist");
        robotpick.classList.remove("fa-hand-scissors");
        robotpick.classList.add("fa-hand");
    }
    // Robotas akmuo
    if (randomas === 2){
        robotpick.classList.remove("fa-hand");
        robotpick.classList.remove("fa-hand-scissors");
        robotpick.classList.add("fa-hand-fist");
    }
    // Robotas žirklės
    if (randomas === 3){
        robotpick.classList.remove("fa-hand-fist");
        robotpick.classList.remove("fa-hand");
        robotpick.classList.add("fa-hand-scissors");
    }
}
function decider(randomas, pasirinkimas){
    if (pasirinkimas === randomas){
        gamestate.textContent="Lygiosios";
        tie.play();
    }
    if ((pasirinkimas === 1 && randomas === 2) || (pasirinkimas === 2 && randomas === 3) || (pasirinkimas === 3 && randomas === 1)){
        gamestate.textContent="Laimėjai!!";
        win.play();
    }
    if ((pasirinkimas === 1 && randomas === 3) || (pasirinkimas === 2 && randomas === 1) || (pasirinkimas === 3 && randomas === 2)){
        gamestate.textContent="Pralaimėjai!!";
        lose.play();
    }

}

paperbtn.addEventListener("click", () => {
  playerpick.classList.remove("fa-hand-fist");
  playerpick.classList.remove("fa-hand-scissors");
  playerpick.classList.add("fa-hand");
  randomas = randomIntFromInterval(1, 3);
  pasirinkimas = 1;
    robotas(randomas)
    decider(randomas, pasirinkimas)
})
rockbtn.addEventListener("click", () => {
  playerpick.classList.remove("fa-hand");
  playerpick.classList.remove("fa-hand-scissors");
  playerpick.classList.add("fa-hand-fist");
  randomas = randomIntFromInterval(1, 3);
  pasirinkimas = 2;
    robotas(randomas)
    decider(randomas, pasirinkimas)
})
scissorsbtn.addEventListener("click", () => {
  playerpick.classList.remove("fa-hand-fist");
  playerpick.classList.remove("fa-hand");
  playerpick.classList.add("fa-hand-scissors");
  randomas = randomIntFromInterval(1, 3);
  pasirinkimas = 3;
    robotas(randomas)
    decider(randomas, pasirinkimas)
})