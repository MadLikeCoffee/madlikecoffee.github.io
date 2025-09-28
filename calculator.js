const display = document.getElementById('display');
var click = new Audio('Audio/click.wav');
click.volume = 0.25;


function playClick(){
    click.load();
    click.play();
}

function appendToDisplay(input){
    display.value += input;
    playClick();
}

function clearDisplay(){
    display.value = "";
    playClick();
}
function calculate(){
    playClick();
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error";
    }
    
}