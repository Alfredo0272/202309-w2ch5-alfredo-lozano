export function celsConditions(board, row, col) {
  const cell = board.rows[row][col];
  const aliveNeighbors = countAliveNeighbors(board, row, col);
  let newCell = cell;
  switch (cell) {
    case 1:
      if (aliveNeighbors < 2 || aliveNeighbors > 3) {
        newCell = 0;
      }
      break;
    case 0:
      if (aliveNeighbors === 3) {
        newCell = 1;
      }
      break;
  }
  return newCell;
}
