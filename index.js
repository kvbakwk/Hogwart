const h1 = document.querySelectorAll("div");

h1[0].addEventListener("mousemove", (e) => {
  e.target.textContent = `Współrzędne: X ${e.pageX} Y ${e.pageY}`;

  if (e.pageX == 800 && e.pageY == 40) e.target.style.display = "none";
  if (e.pageX > 1000) e.target.style.backgroundColor = "purple";
  if (e.pageX < 1001) e.target.style.backgroundColor = "blue";
});
h1[0].addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor = "blue";
});
h1[0].addEventListener("mouseout", (e) => {
  e.target.style.backgroundColor = "yellow";
});
h1[0].addEventListener("click", (e) => {
  alert("kliknąłeś w pasek");
});

h1[1].addEventListener("click", (e) => {
  switch (
    prompt("Wybierz 1-jeśli chcesz usunąć, 2-jeśli chcesz zmienić kolor")
  ) {
    case "1":
      e.target.style.display = "none";
      break;
    case "2":
      e.target.style.backgroundColor = prompt("Jaki kolor chcesz?");
      break;
    default:
      break;
  }
});
h1[2].addEventListener("click", (e) => {
  switch (
    prompt("Wybierz 1-jeśli chcesz usunąć, 2-jeśli chcesz zmienić kolor")
  ) {
    case "1":
      e.target.style.display = "none";
      break;
    case "2":
      e.target.style.backgroundColor = prompt("Jaki kolor chcesz?");
      break;
    default:
      break;
  }
});

h1[3].addEventListener("mouseover", (e) => {
  e.target.style.float = "left";
  e.target.style.backgroundColor = "green";
});
h1[4].addEventListener("mouseover", (e) => {
  e.target.style.float = "right";
  e.target.style.backgroundColor = "green";
});
h1[5].addEventListener("mouseover", (e) => {
  e.target.style.clear = "both";
  e.target.style.backgroundColor = "green";
});
