window.onload = function() {
    document.getElementById("startButton").onclick = ftimer;
    document.getElementById("stopButton").onclick = stop;
    document.getElementById("animation").onchange = animation;
    document.getElementById("scrSize").onchange = fsize;
    document.getElementById("chkturbo").onchange = turbo;
};

let animate = [];
let timer = null;
let i = 0;
let frame = null;

function start() {
    document.getElementById("mainTextArea").value = animate[i];
    if (i < animate.length - 1) {
        i++;
    } else {
        i = 0;
    }
    document.getElementById("stopButton").disabled = false;
    document.getElementById("startButton").disabled = true;
    document.getElementById("animation").disabled = true;    
    document.getElementById("chkturbo").disabled = false;    


}

function ftimer() {
    if (timer == null) {
        timer = setInterval(start, 250);
    }
}

function stop() {
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
    document.getElementById("animation").disabled = false;    
    clearInterval(timer);
    timer = null;
    document.getElementById("mainTextArea").value = frame;
    i = 0;
}

function animation(){
    document.getElementById("startButton").disabled = false;
    let animation = document.getElementById("animation").value;
    animate = ANIMATIONS[animation].split("=====\n");

    frame = ANIMATIONS[animation];

    document.getElementById("mainTextArea").value = ANIMATIONS[animation];



}

function fsize() {
   document.getElementById("mainTextArea").style.fontSize
  = document.getElementById("scrSize").value;

}

function turbo() {
    let check = document.getElementById("chkturbo").checked;
    clearInterval(timer);
    if (check){
        timer = setInterval(start, 50);
    }else{
        timer = setInterval(start, 250);      
    }
}