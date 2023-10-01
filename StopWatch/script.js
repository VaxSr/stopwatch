let [hours, minutes, seconds, millisecond] = [0, 0, 0, 0];

const h = document.querySelector(".hours");
const min = document.querySelector(".minutes");
const s = document.querySelector(".seconds");
const ms = document.querySelector(".milliseconds");

const resetBtn = document.querySelector(".resetButton");
const startBtn = document.querySelector(".startButton");
const pauseBtn = document.querySelector(".pauseButton");
const containerDisplay = document.querySelector(".containerDisplay");

let x;
let timer;

const text = function () {
  h.textContent = hours.toString().padStart(2, 0);
  min.textContent = minutes.toString().padStart(2, 0);
  s.textContent = seconds.toString().padStart(2, 0);
  ms.textContent = millisecond.toString().padStart(2, 0);
};

const repeatFunction = function () {
  if (!x) {
    timer = setInterval(addSeconds, 10);
    x = true;
  } else if (x) {
    clearInterval(timer);
    x = null;
  }
};

const addSeconds = function () {
  millisecond++;
  if (millisecond === 100) {
    seconds++;
    millisecond = 0;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
      if (minutes === 60) {
        hours++;
        minutes = 0;
      }
    }
  }
  text();
};

const resetFunction = function () {
  clearInterval(timer);
  [hours, minutes, seconds, millisecond] = [0, 0, 0, 0];
  x = null;
  text();
};

const pauseFunction = function () {
  clearInterval(timer);
  x = null;
};

startBtn.addEventListener("click", repeatFunction);
resetBtn.addEventListener("click", resetFunction);
pauseBtn.addEventListener("click", pauseFunction);
