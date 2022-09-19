let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
const displayMsg = (message) => {
  document.querySelector(".message").innerText = message;
};

const checkBtn = document
  .querySelector(".check")
  .addEventListener("click", () => {
    let guessNumber = Number(document.querySelector(".guess").value);

    if (!guessNumber) {
      displayMsg("⛔️ No number!");
    } else if (guessNumber === secretNumber) {
      displayMsg("🥳 You won!");
      document.querySelector("body").style.backgroundColor = "lightgreen";
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").innerText = highscore;
      }
    } else if (guessNumber !== secretNumber) {
      if (score > 1) {
        displayMsg(guessNumber < secretNumber ? "📉 Too low!" : "📈 Too high!");
        score--;
        document.querySelector(".score").innerText = score;
      } else {
        displayMsg("💥 You lost the game!");
        score = 0;
        document.querySelector(".score").innerText = score;
      }
    }
  });

const againBtn = document
  .querySelector(".again")
  .addEventListener("click", () => {
    score = 20;
    document.querySelector(".score").innerText = score;
    secretNumber = Math.floor(Math.random() * 20 + 1);
    displayMsg("🤔 Start guessing ...");
    document.querySelector("body").style.backgroundColor = "rgb(109, 106, 106)";
    document.querySelector(".guess").value = "";
  });
