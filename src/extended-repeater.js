const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (typeof str === 'boolean') {
    str = new Boolean(str).toString();
  }

  if (str === null) {
    str = 'null';
  }

  if (typeof str === 'object') {
    str = `${str}`;
  } else {


  str = str.toString();
  }
  
  let repeatTimes = 1;
  if (options.hasOwnProperty('repeatTimes')) {
    repeatTimes = options.repeatTimes;
  }
  let separator = '+';
  if (options.hasOwnProperty('separator')) {
    separator = options.separator;
  }
  let addition = '';
  if (options.hasOwnProperty('addition')) {
    if (typeof options.addition === 'boolean') {
      addition = new Boolean(options.addition).toString();
    } else if (options.addition === null) {
      addition = 'null';
    } else {
      addition = options.addition;
    }
  }
  let additionRepeatTimes = '';
  if (options.hasOwnProperty('additionRepeatTimes')) {
    additionRepeatTimes = options.additionRepeatTimes;
  }
  let additionSeparator = '|';
  if (options.hasOwnProperty('additionSeparator')) {
    additionSeparator = options.additionSeparator;
  }

  let addStr = ''
  if (addition && additionRepeatTimes) {
    addStr = Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  } else if (addition) {
    addStr = addition;
  }

  str += addStr;
  if (str && repeatTimes) {
    str = Array(repeatTimes).fill(str).join(separator);
  }
  
  return str;
}

module.exports = {
  repeater
};
