const div = document.querySelectorAll("div")[1];
let list = document.querySelectorAll("li");

const increase = () => {
  div.style.fontSize =
    parseFloat(parseFloat(div.style.fontSize.replace("rem", "")) + 0.5) + "rem";
};
const decrease = () => {
  div.style.fontSize =
    parseFloat(parseFloat(div.style.fontSize.replace("rem", "")) - 0.5) + "rem";
};

const changecolor = () => {
  let num = prompt("Wybierz linijkę");
  let color = prompt("Na jaki kolor?");

  list[num - 1].style.color = color;
  list = document.querySelectorAll("li");
};
const changecontent = () => {
  let num = prompt("Wybierz linijkę");
  let content = prompt("Co ma być napisane?");

  list[num - 1].textContent = content;
  list = document.querySelectorAll("li");
};
const remove = () => {
  let num = prompt("Którą linijkę chcesz usunąć?");
  let valid = confirm("Czy na pewno chcesz usunąć?");

  if (valid) list[num - 1].remove();
  list = document.querySelectorAll("li");
};