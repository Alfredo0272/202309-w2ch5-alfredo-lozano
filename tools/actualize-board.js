import { celsConditions } from "./tools/cells-live.js";
import { blanckBoard } from "./tools/blanck-board.js";

const numRows = 30;
const numCols = 30;

export function nextRound(currentBoard) {
  const nextBoard = blanckBoard();
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      nextBoard.rows[row][col] = celsConditions(currentBoard, row, col);
    }
  }

  return nextBoard;
}
