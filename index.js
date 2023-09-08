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
    el.innerHTML = `${listInput1El.value} <div><input type="button" value="usuń" onclick="listDelete()"><input type="text"></div>`;
    listOutputEl.appendChild(el);
  }
};
