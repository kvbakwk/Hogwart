const countEl = document.querySelector("#counter");
const inputEl = document.querySelector(".input");
const outputEl = document.querySelector(".output");

const pass = "zaq1";

let counter = 1;

setInterval(() => {
  if (countEl) countEl.innerHTML = 11 - counter;
}, 30);

const handleClick = () => {
  if (inputEl.value == pass) {
    if (counter < 5)
      outputEl.innerHTML = `Zgadłeś za ${counter}x bez podpowiedzi.`;
    else outputEl.innerHTML = `Zgadłeś za ${counter}x z podpowiedzią.`;
    document.querySelector("span").innerHTML = "Gratulacje";
    document.querySelector(".button").style.display = "none";
  } else {
    if (counter < 5) outputEl.innerHTML = `Nie zgadłeś hasła.`;
    else outputEl.innerHTML = `Nie zgadłeś hasła. Hasło ma 4 litery.`;
  }

  if (counter == 10) {
    document.querySelector("span").innerHTML = ":(";
    document.querySelector(".button").style.display = "none";
    outputEl.innerHTML = `Nie zgadłeś hasła.`;
  }
  counter++;
};
