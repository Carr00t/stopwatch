let secs = 0;
let mins = 0;
let hrs = 0;
let displaySecs = 0;
let displayMins = 0;
let displayHrs = 0;
let interval;
let stopwatch = document.getElementById("stopwatch");
let startBtn = document.getElementById("start-btn");
let pauseBtn = document.getElementById("pause-btn");
let resetBtn = document.getElementById("reset-btn");

pauseBtn.disabled = true;
startBtn.innerHTML = "Start"

function stopWatch() {
  secs++;
  if (secs / 60 === 1) {
    secs = 0;
    mins++;
  }
  if (mins / 60 === 1) {
    mins = 0;
    hrs++;
  }

  if (secs < 10) {
    displaySecs = '0' + secs.toString();
  } else {
    displaySecs = secs;
  }

  if (mins < 10) {
    displayMins = '0' + mins.toString();
  } else {
    displayMins = mins;
  }

  if (hrs < 10) {
    displayHrs = '0' + hrs.toString();
  } else {
    displayHrs = hrs.toString();
  }

  stopwatch.innerHTML = displayHrs + ':' + displayMins + ':' + displaySecs;
}

function startStopwatch() {
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  startBtn.innerHTML = "Resume";
  interval = setInterval(stopWatch, 1000);
}

function pauseStopwatch() {
  clearInterval(interval);
  pauseBtn.disabled = true;
  startBtn.disabled = false;
}

function resetStopwatch() {
  displayHrs = "00";
  displayMins = "00";
  displaySecs = "00";
  secs = 0;
  mins = 0;
  hrs = 0;
  stopwatch.innerHTML = displayHrs + ':' + displayMins + ':' + displaySecs;
  clearInterval(interval);
  startBtn.disabled = false;
  startBtn.innerHTML = "Start";
  pauseBtn.disabled = true;
}

