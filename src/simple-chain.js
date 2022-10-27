const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(new String(value));
    return this;
  },
  removeLink(position) {
    if(Number.isInteger(position) && (position-1 > 0) && typeof this.chain[position-1] != "undefined") {
      this.chain.splice(position-1, 1);
      return this;
    } else {
      this.chain = [];
      throw new NotImplementedError('You can\'t remove incorrect link!');
    }
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let tmp = this.chain.join(' )~~( ');
    this.chain = [];
    return `( ${tmp} )`
  }
};

module.exports = {
  chainMaker
};
