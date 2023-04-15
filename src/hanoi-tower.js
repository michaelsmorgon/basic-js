const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {console.log(typeof disksNumber);
  if (typeof disksNumber !== 'number' && typeof turnsSpeed !== 'number' || turnsSpeed <= 0 || disksNumber <= 0) {
    return null;
  }

  let turnsSpeedInSec = 3600 / turnsSpeed;
  let turns = Math.pow(2, disksNumber) - 1;
  let seconds = Math.floor(turns * turnsSpeedInSec);

  return {turns, seconds};
}

module.exports = {
  calculateHanoi
};
