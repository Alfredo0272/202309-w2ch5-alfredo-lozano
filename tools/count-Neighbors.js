export function countAliveNeighbors(board, row, col) {
  let count = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const newRow = row + i;
      const newCol = col + j;
      const isRowInRange = newRow >= 0 && newRow < numRows;
      const isColInRange = newCol >= 0 && newCol < numCols;
      const isNotSelf = !(i === 0 && j === 0);
      if (isRowInRange && isColInRange && isNotSelf) {
        count += board.rows[newRow][newCol];
      }
    }
  }

  return count;
}
