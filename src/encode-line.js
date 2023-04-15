const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let letter = '';
  let counter = 1;
  let finishStr = '';
  str.split('').forEach(val => {
    if (letter === '') {
      letter = val;
      counter = 1;
    } else {
      if (letter === val) {
        counter++;
      } else {
        finishStr += (counter === 1 ? '' : counter) + letter;
        letter = val;
        counter = 1;
      }
    }
  });
  return finishStr += (counter === 1 ? '' : counter) + letter;
}

module.exports = {
  encodeLine
};
