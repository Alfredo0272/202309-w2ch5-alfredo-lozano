import { celsConditions } from "./cells-live.js";

const numRows = 30;
const numCols = 30;

export function blanckBoard() {
  const boardRows = new Array(numRows).fill(0);
  const boardCols = new Array(numCols).fill(0);
  const boardTo0 = {
    rows: boardRows,
    cols: boardCols,
  };
  return boardTo0;
}

export function nextRound(currentBoard) {
  const nextBoard = blanckBoard();
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      nextBoard.rows[row][col] = celsConditions(currentBoard, row, col);
    }
  }

  return nextBoard;
}
