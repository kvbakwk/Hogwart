const calcInput1El = document.querySelector(".calc1");
const calcInput2El = document.querySelector(".calc2");
const calcSelectEl = document.querySelector(".calc3");
const calcOutputEl = document.querySelector(".calc");

const blockInput1El = document.querySelector(".block1");
const blockInput2El = document.querySelector(".block2");
const blockInput3El = document.querySelector(".block3");
const blockOutputEl = document.querySelector(".block");

const listInput1El = document.querySelector(".list1");
const listOutputEl = document.querySelector(".list");

const handleCalcClick = () => {
  if (
    !isNaN(parseInt(calcInput1El.value)) &&
    !isNaN(parseInt(calcInput2El.value))
  )
    calcOutputEl.innerHTML = eval(
      `${calcInput1El.value}${calcSelectEl.value}${calcInput2El.value}`
    );
};

const handleBlockClick = () => {
  blockOutputEl.style.width = blockInput2El.value + "px";
  blockOutputEl.style.height = blockInput3El.value + "px";
  blockOutputEl.style.backgroundColor = blockInput1El.value;
};

const handleListClick = () => {
  if (listInput1El.value.length > 0) {
    const el = document.createElement("div");
    el.innerHTML = `<span>${listInput1El.value}</span> <div><input class="list2" type="text"><input class="list3" type="button" value="zmień"></div> <input class="list4" type="button" value="usuń">`;
    listOutputEl.appendChild(el);

    for (let i = 0; i < listOutputEl.children.length; i++) {
      const element = listOutputEl.children[i];

      console.log(element.children[0]);
      element.children[1].children[1].addEventListener("click", (e) => {
        if (element.children[1].children[0].value.length > 0)
          element.children[0].textContent =
            element.children[1].children[0].value;
      });
      element.children[2].addEventListener("click", (e) => {
        element.remove();
      });
    }
  }
};
