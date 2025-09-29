var secret = new Audio('Audio/secret.mp3');
secret.volume = 0.25;

function fart(){
    secret.load();
    secret.play();
}

window.addEventListener('keyup', function(e){
    if (e.key === "f"){
        secret.load();
        secret.play();
    }
})