const buttons = document.querySelectorAll("button");
const inputs = document.querySelectorAll("input");
const output = document.querySelector("#output");

buttons[0].onclick = () =>
  (output.innerHTML = parseInt(inputs[0].value) + parseInt(inputs[1].value));
buttons[1].onclick = () =>
  (output.innerHTML = parseInt(inputs[0].value) - parseInt(inputs[1].value));
buttons[2].onclick = () =>
  (output.innerHTML = parseInt(inputs[0].value) * parseInt(inputs[1].value));
buttons[3].onclick = () =>
  (output.innerHTML = parseInt(inputs[0].value) / parseInt(inputs[1].value));
buttons[4].onclick = () =>
  (output.innerHTML = Math.pow(
    parseInt(inputs[0].value),
    parseInt(inputs[1].value)
  ));
