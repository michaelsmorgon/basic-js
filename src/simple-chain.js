const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  listOfChain: [],
  getLength() {
    return this.listOfChain.length;
  },
  addLink(value) {
    if (value === null) {
      this.listOfChain.push('( null )');
    } else if (Number.isNaN(value)) {
      this.listOfChain.push('( NaN )');
    } else if (value === false) {
      this.listOfChain.push('( false )');
    } else {
      this.listOfChain.push('( ' + value.toString() + ' )');
    }

    return this;
  },
  removeLink(position) {
    if (position < 1 || typeof position !== 'number' || position > this.getLength()) {
      this.listOfChain = [];
      throw new Error (`You can't remove incorrect link!`);
    }
    this.listOfChain.splice(position - 1, 1);

    return this;
  },
  reverseChain() {
    this.listOfChain.reverse();

    return this;
  },
  finishChain() {
    let arrRes = this.listOfChain.slice();
    this.listOfChain = [];
    
    return arrRes.join('~~');
  }
};

module.exports = {
  chainMaker
};

