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
const volumedialrps = document.getElementById("volumedialrps");


let volumedialrpschanged = localStorage.getItem('volume')
let volumedialmemory = localStorage.getItem('volumememory')



var win = new Audio('Audio/win.wav');
var lose = new Audio('Audio/lose.wav');
var tie = new Audio('Audio/tie.wav');

/*if(volumedialmemory == null){
    volumedialrps.setAttribute("value", 25);
}
else {
volumedialrps.setAttribute("value", volumedialmemory);
}
if(volumedialrpschanged == null){
    win.volume = 0.25;
    lose.volume = 0.25;
    tie.volume = 0.25;
}
else {
    win.volume = volumedialrpschanged;
    lose.volume = volumedialrpschanged;
    tie.volume = volumedialrpschanged;
}
*/
// ??= operator is used if value is null or undefined set value
    volumedialmemory ??= 25;
    volumedialrps.setAttribute("value", volumedialmemory);
    volumedialrpschanged ??= 0.25;

    //console.log(volumedialrpschanged);
    //console.log(volumedialrps.getAttribute("value"));

    win.volume = volumedialrpschanged;
    lose.volume = volumedialrpschanged;
    tie.volume = volumedialrpschanged;

volumedialrps.oninput = function() {
    let volumedialrpschanged = this.value / 100;
    let volumedialmemory = this.value;
    //console.log(volumedialrpschanged);

    win.volume = volumedialrpschanged;
    lose.volume = volumedialrpschanged;
    tie.volume = volumedialrpschanged;
    
    localStorage.setItem('volume', volumedialrpschanged);
    
    localStorage.setItem('volumememory', volumedialmemory);
}


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