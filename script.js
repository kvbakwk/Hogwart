document.querySelector("select").onchange = (e) =>
  (document.querySelector(".right").style.color = e.target.value);
document.querySelector("#fontSize").onblur = (e) =>
  (document.querySelector(".right").style.fontSize = e.target.value);
document.querySelector("#border").onchange = (e) => {
  console.log(e.target);
  e.target.checked
    ? (document.querySelector("img").style.borderWidth = "1px")
    : (document.querySelector("img").style.borderWidth = "0px");
};
document
  .querySelectorAll("button")
  .forEach(
    (bttn) =>
      (bttn.onclick = () =>
        (document.querySelector(".right").style.backgroundColor =
          bttn.textContent))
  );
document
  .querySelectorAll(".radio")
  .forEach(
    (i) =>
      (i.onchange = (e) =>
        i.type === "radio" &&
        e.target.checked &&
        (document.querySelector("ul").style.listStyleType = e.target.id))
  );
