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
  if(!Array.isArray(arr)) {
    throw new NotImplementedError('\'arr\' parameter must be an instance of the Array!');
  }
  let discard = false;
  let discardPrev = false;
  let double = false;
  const controlSequences = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  
  return arr.reduce((sum, a) => {
    if(!controlSequences.includes(a)) {
      discardPrev = false;
      if(discard) {
        discard = false;
        discardPrev = true;
        return sum;
      }
      if(double) {
        double = false;
        return [].concat(sum, a, a);  
      }
      return [].concat(sum, a);
    }
    
    switch(a) {
      case controlSequences[0]:
        discard = true;
        break;
      case controlSequences[1]:
        !discardPrev && sum.pop();
        break;
      case controlSequences[2]:
        double = true;
        break;
      case controlSequences[3]:
        if(!discardPrev) {
          sum = sum.length ? sum.concat(sum.slice(-1)[0]) : sum;
        }
        break;
    }
    
    discardPrev = false;

    return sum;
  }, [])
}

module.exports = {
  transform
};
