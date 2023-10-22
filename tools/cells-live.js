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

export function blanckBoard() {
  const boardRows = new Array(numRows).fill(0);
  const boardCols = new Array(numCols).fill(0);
  const boardTo0 = {
    rows: boardRows,
    cols: boardCols,
  };
  return boardTo0;
}

export function nextRound1(currentBoard) {
  const nextBoard = blanckBoard();
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      nextBoard.rows[row][col] = celsConditions(currentBoard, row, col);
    }
  }

  return nextBoard;
}
