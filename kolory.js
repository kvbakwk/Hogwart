const inputNum = document.querySelector('input[type="number"]');
const bottomRow = document.querySelector("tr:nth-child(2)").children;

document.querySelector("form").onsubmit = (e) => {
  e.preventDefault();
  document.querySelector(
    "tr:nth-child(1)>td"
  ).style.backgroundColor = `hsl(${inputNum.value} 50% 100%)`;
  bottomRow[0].style.backgroundColor = `hsl(${inputNum.value} 50% 80%)`;
  bottomRow[1].style.backgroundColor = `hsl(${inputNum.value} 50% 60%)`;
  bottomRow[2].style.backgroundColor = `hsl(${inputNum.value} 50% 40%)`;
  bottomRow[3].style.backgroundColor = `hsl(${inputNum.value} 50% 20%)`;
};
