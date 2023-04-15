const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const ROWS = matrix.length;
  const COLS = matrix[0].length;
  
  let minesweeperArr = [];
  for (let i = 0; i < ROWS; i++) {
    let tmp = [];
    for (let j = 0; j < COLS; j++) {
      tmp.push(0);
    }
    minesweeperArr.push(tmp);
  }

  
  matrix.forEach((row, indexRow) => {
    row.forEach((valCol, indCol) => {
      if (valCol) {
        minesweeperArr[indexRow][indCol] = -1;
        for (let i = indexRow - 1; i <= indexRow + 1; i++) {
          for (let j = indCol - 1; j <= indCol + 1; j++) {
            addMineCount(i, j, minesweeperArr);
          }
        }
      }
    });
  });

  minesweeperArr = minesweeperArr.map(val => {
    return val.map(val2 => {
      if (val2 === -1) {
        return 1;
      }
      return val2;
    });
  });
  return minesweeperArr;
}

function addMineCount (x, y, minesweeperArr) {
  if (minesweeperArr[x] !== undefined && minesweeperArr[x][y] !== undefined) {
    if (minesweeperArr[x][y] !== -1) {
      minesweeperArr[x][y]++;
    }
  }
}

module.exports = {
  minesweeper
};
