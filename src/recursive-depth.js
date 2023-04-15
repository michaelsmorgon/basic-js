const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    if (Array.isArray(arr)) {
      depth++;
      depth += arr.reduce((acc, element) => {
        let tmpRes = this.calculateDepth(element);
        acc = tmpRes > acc ? tmpRes : acc;
        return acc;
      }, 0);
    }
    return depth;
  }
}

module.exports = {
  DepthCalculator
};
