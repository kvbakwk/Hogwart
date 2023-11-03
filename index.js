const optionsElement = document.querySelector(".options");
const timerElement = document.querySelector(".timer");

const startButton = document.createElement("input");
startButton.type = "button";
startButton.value = "start";
const stopButton = document.createElement("input");
stopButton.type = "button";
stopButton.value = "pauza";
const restartButton = document.createElement("input");
restartButton.type = "button";
restartButton.value = "reset";

let isActive = false;
let hours = 0;
let minutes = 0;
let seconds = 0;

startButton.onclick = () => {
  isActive = true;
  optionsElement.innerHTML = "";
  optionsElement.appendChild(stopButton);
  optionsElement.appendChild(restartButton);
};
stopButton.onclick = () => {
  isActive = false;
  optionsElement.innerHTML = "";
  optionsElement.appendChild(startButton);
  optionsElement.appendChild(restartButton);
};
restartButton.onclick = () => {
  isActive = false;
  timerElement.textContent = 0;
  optionsElement.innerHTML = "";
  optionsElement.appendChild(startButton);
  optionsElement.appendChild(restartButton);
};

optionsElement.appendChild(startButton);
optionsElement.appendChild(restartButton);

setInterval(() => {
  if (isActive) seconds = (seconds + 0.01).toFixed(2);

  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }

  console.log(seconds == 60);
  timerElement.textContent = `${hours}:${minutes}:${seconds}`;
}, 10);
