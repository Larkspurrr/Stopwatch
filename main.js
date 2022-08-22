let buttons = Array.from(document.getElementsByClassName("button"));
let stopwatch = document.getElementById("stopwatch");

let seconds = 0, minutes = 0, hours = 0;

let active = false;

let turnOnstopwatch, isClickable;

function activestopwatch() {
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
        stopwatch.innerText = hours + " : " + minutes + " : " + seconds;
    }
}

buttons.map(button => {
    button.addEventListener("click", (e) => {
        switch(e.target.innerText) {
            case "Start":
                active = true;
                isClickable = Start.style.pointerEvents = "none";
                turnOnstopwatch = setInterval(activestopwatch, 1000);
                break;
            case "Reset":
                seconds = 0;
                minutes = 0;
                hours = 0;
                stopwatch.innerText = "0 : 0 : 0";
            default:
                active = false;
                isClickable = Start.style.pointerEvents = "auto";
                clearInterval(turnOnstopwatch);
                
        }
    })
})
