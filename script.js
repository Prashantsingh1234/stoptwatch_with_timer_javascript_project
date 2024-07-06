let startTime;
let elapsedTime = 0;
let timerInterval;

const timeDisplay = document.getElementById('time-display');
const timeLog = document.getElementById('time-log');

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let formattedHH = hh.toString().padStart(2, '0');
    let formattedMM = mm.toString().padStart(2, '0');
    let formattedSS = ss.toString().padStart(2, '0');

    return `${formattedHH}:${formattedMM}:${formattedSS}`;
}

function print(txt) {
    timeDisplay.innerText = txt;
}

function start() {
    if (timerInterval) return; // Prevent multiple intervals from starting
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 1000);
}

function stop() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function reset() {
    clearInterval(timerInterval);
    timerInterval = null;
    print("00:00:00");
    elapsedTime = 0;
}

function getTime() {
    const timeString = timeToString(elapsedTime);
    const logItem = document.createElement('div');
    logItem.innerText = timeString;
    timeLog.appendChild(logItem);
}

function clearTime() {
    timeLog.innerHTML = '';
}

document.getElementById('start-btn').addEventListener('click', start);
document.getElementById('stop-btn').addEventListener('click', stop);
document.getElementById('reset-btn').addEventListener('click', reset);
document.getElementById('get-time-btn').addEventListener('click', getTime);
document.getElementById('clear-time-btn').addEventListener('click', clearTime);
