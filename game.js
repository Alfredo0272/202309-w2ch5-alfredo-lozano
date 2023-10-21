import { randomBoard } from "./tools/create-board";
import { celsConditions } from "./tools/cells-live";
import { blanckBoard } from "./tools/blanck-board";
import { countAliveNeighbors } from "./tools/count-Neighbors";
import { nextRound } from "./tools/actualize-board";

const numRows = 30;
const numCols = 30;
const numGenerations = 100;

function game() {
  const currentBoard = randomBoard();
  function calculateNexGenetation() {
    const nextBoard = nextRound(randomBoard);
    currentBoard = nextBoard;
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
console.log(game());
