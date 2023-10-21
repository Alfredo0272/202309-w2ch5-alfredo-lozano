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

console.log(randomBoard());
