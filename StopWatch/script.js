let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");
let display = document.getElementById("stopwatch");

let startTime;
let updatedTime;
let difference;
let timerInterval;
let running = false;

startButton.addEventListener('click', startFun);
stopButton.addEventListener('click', stopFun);
resetButton.addEventListener('click', resetFun);

function startFun() {
    if (!running) {
        running = true;
        startTime = new Date().getTime() - (difference || 0);
        timerInterval = setInterval(updateTime, 1000);
    }
}

function stopFun() {
    if (running) {
        running = false;
        clearInterval(timerInterval);
        difference = new Date().getTime() - startTime;
    }
}

function resetFun() {
    running = false;
    clearInterval(timerInterval);
    startTime = 0;
    difference = 0;
    display.innerHTML = "00:00:00";
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    display.innerHTML = hours + ":" + minutes + ":" + seconds;
}
