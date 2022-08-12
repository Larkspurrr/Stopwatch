let Start = document.getElementById("Start");
let Stop = document.getElementById("Stop");
let Reset = document.getElementById("Reset");
let timer = document.getElementById("timer");

let seconds = 00;
let minutes = 00;
let hours = 00;

let active = false;

let turnOnTimer;
let isClickable;

function activeTimer() {
    if (active == true) {
        seconds += 1;
        if (seconds == 60) {
            seconds = 00;
            minutes += 1;
        }
        if (minutes == 60) {
            minutes = 00;
            hours += 1;
        }
        timer.innerText = hours + " : " + minutes + " : " + seconds;
    }
}

Start.addEventListener("click", () => {
    active = true;
    isClickable = Start.style.pointerEvents = "none";
    turnOnTimer = setInterval(activeTimer, 1000);
})

Stop.addEventListener("click", () => {
    active = false;
    isClickable = Start.style.pointerEvents = "auto";
    clearInterval(turnOnTimer);
})

Reset.addEventListener("click", () => {
    isClickable = Start.style.pointerEvents = "auto";
    active = false;
    clearInterval(turnOnTimer);
    seconds = 00;
    minutes = 00;
    hours = 00;
    timer.innerText = "0 : 0 : 0";
})