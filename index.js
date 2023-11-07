const optionsElement = document.querySelector(".options");
const timerElement = document.querySelector(".timer");

const buttons = [
  document.createElement("input"),
  document.createElement("input"),
  document.createElement("input"),
];
buttons.forEach((button) => (button.type = "button"));
buttons[0].value = "start";
buttons[1].value = "pauza";
buttons[2].value = "reset";

let isActive = false;
let hours = 0;
let minutes = 0;
let seconds = 0;

buttons[0].onclick = () => {
  isActive = true;
  optionsElement.innerHTML = "";
  optionsElement.appendChild(buttons[1]);
  optionsElement.appendChild(buttons[2]);
};
buttons[1].onclick = () => {
  isActive = false;
  optionsElement.innerHTML = "";
  optionsElement.appendChild(buttons[0]);
  optionsElement.appendChild(buttons[2]);
};
buttons[2].onclick = () => {
  isActive = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  optionsElement.innerHTML = "";
  optionsElement.appendChild(buttons[0]);
  optionsElement.appendChild(buttons[2]);
};

optionsElement.appendChild(buttons[0]);
optionsElement.appendChild(buttons[2]);

setInterval(() => {
  if (isActive) seconds = (parseFloat(seconds) + 0.01).toFixed(2);

  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }

  timerElement.textContent = `${pretty(hours)}:${pretty(minutes)}:${pretty(
    seconds
  )}`;

  document.querySelector(".clock-of-seconds").style.transform = `rotate(${
    (parseFloat(seconds) / 60) * 360
  }deg)`;
  document.querySelector(".clock-of-minutes").style.transform = `rotate(${
    ((parseFloat(minutes) * 60 + parseFloat(seconds)) / 60 / 60) * 360
  }deg)`;
  document.querySelector(".clock-of-hours").style.transform = `rotate(${
    ((parseFloat(hours) * 60 * 60 +
      parseFloat(minutes) * 60 +
      parseFloat(seconds)) /
      60 /
      60 /
      12) *
    360
  }deg)`;
}, 10);

const pretty = (time) => {
  if (parseFloat(time) < 10) return "0" + parseFloat(time);
  return time;
};
