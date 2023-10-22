export function nextRound(currentBoard) {
  const nextBoard = blanckBoard();
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      nextBoard.rows[row][col] = celsConditions(currentBoard, row, col);
    }
  }

  return nextBoard;
}
