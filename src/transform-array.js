const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  let newArr = [];
  let isDiscardNext = false;
  arr.forEach((val, ind) => {
    switch(val) {
      case '--discard-next':
        if (ind < arr.length - 1) {
          isDiscardNext = true;
        }
        break;
      case '--discard-prev':
        if (ind > 0 && arr[ind - 2] !== '--discard-next') {
          newArr.pop();
        }
        break;
      case '--double-next':
        if (ind < arr.length - 1) {
          newArr.push(arr[ind + 1]);
        }
        break;
      case '--double-prev':
        if (ind > 0 && arr[ind - 2] !== '--discard-next') {
          newArr.push(arr[ind - 1]);
        }
        break;
      default:
        if (!isDiscardNext) {
          newArr.push(val);
        } else {
          isDiscardNext = false;
        }
        break;
    }
  });
  return newArr;
}

module.exports = {
  transform
};
