const amount = document.querySelector("#amount");
const payment = document.querySelector("#payment");
const boxes = document.querySelectorAll(".box");

const winAmount = document.querySelector("#winAmount");
const lostAmount = document.querySelector("#lostAmount");

const count = document.querySelector("#count");
const winCount = document.querySelector("#winCount");
const lostCount = document.querySelector("#lostCount");

let countN = 0;
let winCountN = 0;
let lostCountN = 0;
let amountN = 400;

const colors = ["red", "green", "blue"];

const game = () => {
  winAmount.style.display = "none";
  lostAmount.style.display = "none";
  if (payment.value > amountN) return;
  const boxesArr = Array.from(boxes);
  const boxesColors = boxesArr.map((box) => {
    box.style.backgroundColor = colors[parseInt(Math.random() * 3)];
    return box.style.backgroundColor;
  });

  if (
    boxesColors.filter((item, index, arr) => arr.indexOf(item) === index)
      .length == 1
  ) {
    amountN += parseInt(payment.value);
    winAmount.textContent = parseInt(payment.value);
    winAmount.style.display = "contents";
    countN++;
    winCountN++;
  } else {
    amountN -= parseInt(payment.value);
    lostAmount.textContent = parseInt(payment.value);
    lostAmount.style.display = "contents";
    countN++;
    lostCountN++;
  }

  amount.textContent = amountN;
  count.textContent = countN;
  winCount.textContent = winCountN;
  lostCount.textContent = lostCountN;
};
