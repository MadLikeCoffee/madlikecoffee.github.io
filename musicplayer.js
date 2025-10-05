let progress = document.getElementById('progress')
let song = document.getElementById('song')
let ctrlicon = document.getElementById('ctrlicon')

const musicvolumedial = document.getElementById('musicvolume')

var musicvolume = localStorage.getItem("musicvolume");
var musicvolumememory = localStorage.getItem("musicvolumememory");

musicvolumememory ??= 25;
musicvolumedial.setAttribute("value", musicvolumememory);
musicvolume ??= 0.25;

if(musicvolumememory == 0){
    document.querySelector('.volumebar > i').classList.remove("fa-volume-high")
    document.querySelector('.volumebar > i').classList.add("fa-volume-xmark")
}


song.volume = musicvolume

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;

}

function playPause(){
    if(ctrlicon.classList.contains("fa-pause")){
        song.pause();
        ctrlicon.classList.remove("fa-pause")
        ctrlicon.classList.add("fa-play")
    }
    else{
        song.play();
        ctrlicon.classList.add("fa-pause")
        ctrlicon.classList.remove("fa-play")
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    }, 500)
}
else{}
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlicon.classList.add("fa-pause")
    ctrlicon.classList.remove("fa-play")
}

musicvolumedial.oninput = function () {
  musicvolumememory = this.value;

  song.volume = musicvolumememory / 100;

  localStorage.setItem("musicvolume", musicvolumememory / 100);

  localStorage.setItem("musicvolumememory", musicvolumememory);
  if(this.value == 0){
    document.querySelector('.volumebar > i').classList.remove("fa-volume-high")
    document.querySelector('.volumebar > i').classList.add("fa-volume-xmark")
  }
  else{
    document.querySelector('.volumebar > i').classList.add("fa-volume-high")
    document.querySelector('.volumebar > i').classList.remove("fa-volume-xmark")
  }
}