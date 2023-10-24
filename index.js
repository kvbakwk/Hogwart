const input = document.querySelector("#input");
const output = document.querySelector("#output");

const add = () => {
  if (input.value === "") return;
  const divE = document.createElement("div");
  const spanE = document.createElement("span");
  const inputE = document.createElement("input");
  const buttonE = document.createElement("input");

  divE.classList.add("element");
  inputE.type = "text";
  inputE.onkeyup = (e) => {
    if (e.key == "Enter" && e.target.value !== "")
      e.target.parentElement.children[0].textContent = e.target.value;
  };
  spanE.textContent = input.value;
  buttonE.type = "submit";
  buttonE.value = "Usuń";
  buttonE.onclick = (e) => e.target.parentElement.remove();
  divE.appendChild(spanE);
  divE.appendChild(inputE);
  divE.appendChild(buttonE);
  output.appendChild(divE);
};
