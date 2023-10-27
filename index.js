const pElements = document.querySelectorAll("p");
const button = document.querySelector("button");

const colors = ["red", "green", "yellow"];

pElements.forEach((pElement) => {
  pElement.style.width = "200px";
  pElement.style.height = "200px";
  pElement.style.backgroundColor = "gray";
});

button.onclick = (e) =>
  pElements.forEach(
    (pElement) =>
      (pElement.style.backgroundColor = colors[Math.floor(Math.random() * 3)])
  );
