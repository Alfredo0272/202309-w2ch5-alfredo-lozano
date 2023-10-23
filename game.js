import { randomBoard } from "./tools/create-board.js";
import { nextRound } from "./tools/blanck-board.js";

const numRows = 30;
const numGenerations = 100;

function game() {
  randomBoard();
  function calculateNexGenetation() {
    const nextBoard = nextRound(randomBoard);
    const currentBoard = nextBoard;
    console.clear();
    for (let row = 0; row < numRows; row++) {
      console.log(currentBoard.row[row].join(" "));
    }
  }

  const generateInterval = setInterval(calculateNexGenetation, 500);
  setTimeout(() => {
    clearInterval(generateInterval);
  }, numGenerations * 500);
}

game();
