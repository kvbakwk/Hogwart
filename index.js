const imageEl = document.querySelector("img");

document.querySelector("#mountains").onchange = (e) => {
  switch (parseInt(e.target.value)) {
    case 1:
      console.log("s");
      imageEl.src = "./img/tatry.jpg";
      imageEl.style.display = "block";
      break;
    case 2:
      imageEl.src = "./img/karkonosze.jpg";
      imageEl.style.display = "block";
      break;
    case 3:
      imageEl.src = "./img/beskidy.jpg";
      imageEl.style.display = "block";
      break;
    default:
      imageEl.src = "";
      imageEl.style.display = "none";
      break;
  }
};
