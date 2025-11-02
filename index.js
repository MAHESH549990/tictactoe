let boxes = document.querySelectorAll(".boxs");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#new-bu");
let msg_cont = document.querySelector(".msg-con");
let msg = document.querySelector("#msg");
let turnx = true; // true => X's turn, false => O's turn

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Function to reset the game
const resetgame = () => {
  turnx = true;
  enablebtn();
  msg_cont.classList.add("hide");
};

// Add click listeners to all boxes
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText !== "") return; // prevent overwriting a box

    if (turnx) {
      box.innerText = "X";
      turnx = false;
    } else {
      box.innerText = "O";
      turnx = true;
    }

    box.disabled = true;
    checkWinner();
  });
});

const disablebtn = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enablebtn = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showwinner = (Winner) => {
  msg.innerHTML = `🎉 Congratulations! Winner is ${Winner}`;
  msg_cont.classList.remove("hide");
  disablebtn();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log(`${pos1} is the Winner! 🎉`);
        showwinner(pos1);
        return;
      }
    }
  }
};

// Attach event listeners
newgame.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);
