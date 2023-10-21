const numRows = 30;
const numCols = 30;

export function randomBoard() {
  const boardRows = new Array(numRows).fill(0);
  const boardCols = new Array(numCols).fill(0);
  const fillRows = boardRows.map(() => (Math.random() > 0.5 ? 1 : 0));
  const fillCols = boardCols.map(() => (Math.random() > 0.5 ? 1 : 0));
  const fillMap = {
    rows: fillRows,
    cols: fillCols,
  };
  return fillMap;
}
let fillMap;
export function countAliveNeighbors(fillMap, row, col) {
  let count = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const newRow = row + i;
      const newCol = col + j;
      const isRowInRange = newRow >= 0 && newRow < numRows;
      const isColInRange = newCol >= 0 && newCol < numCols;
      const isNotSelf = !(i === 0 && j === 0);
      if (isRowInRange && isColInRange && isNotSelf) {
        count += board[newRow][newCol];
      }
    }
  }
}
