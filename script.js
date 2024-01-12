let counter = 0;

document.querySelectorAll("#update").forEach((button, i) => {
  button.onclick = () => {
    document.querySelectorAll("#count")[i].innerHTML = prompt(
      "Ile chcesz zamówić?"
    );
    document
      .querySelectorAll("#count")
      .forEach(
        (countEl) =>
          (countEl.style.backgroundColor =
            countEl.textContent == 0
              ? "red"
              : countEl.textContent <= 5
              ? "yellow"
              : "green")
      );
  };
});
document.querySelectorAll("#order").forEach((button, i) => {
  button.onclick = () => {
    counter++;
    alert(
      `Zamówienie nr: ${counter} Produkt: ${
        document.querySelectorAll("#name")[i].textContent
      }`
    );
  };
});
