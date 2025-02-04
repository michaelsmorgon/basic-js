const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(data) {
  return data.reduce((accumulator, value) => {
    accumulator += value.reduce((acc, val) => {
      if (val === '^^') {
        acc++;
      }
      return acc;
    }, 0);

    return accumulator;
  }, 0);
}

module.exports = {
  countCats
};