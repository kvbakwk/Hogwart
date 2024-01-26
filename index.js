document.querySelector("select").onchange = (e) =>
  (document.querySelector(".content").style.color = e.target.value);
document.querySelector('[type="text"]').onblur = (e) =>
  (document.querySelector(".content").style.fontSize = e.target.value);
document.querySelector('[type="checkbox"]').onclick = (e) =>
  e.target.checked
    ? (document.querySelector("img").style.border = "5px solid green")
    : (document.querySelector("img").style.border = 0);
document
  .querySelectorAll('[type="radio"]')
  .forEach(
    (input) =>
      (input.onclick = (e) =>
        e.target.checked &&
        (document.querySelector("ul").style.listStyleType = e.target.id))
  );
document
  .querySelectorAll("button")
  .forEach(
    (bttn) =>
      (bttn.onclick = (e) =>
        (document.querySelector("body").style.backgroundColor =
          e.target.textContent))
  );
