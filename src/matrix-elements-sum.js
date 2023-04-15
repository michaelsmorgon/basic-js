const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const ROWS = matrix.length;
  const COLS = matrix[0].length;

  let sum = 0;
  for (let j = 0; j < COLS; j++) {
    let isZero = false;
    for (let i = 0; i < ROWS; i++) {
      if (!isZero && matrix[i][j] !== 0) {
        sum += matrix[i][j];
      } else {
        isZero = true;
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};

console.log(getMatrixElementsSum([
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
]));