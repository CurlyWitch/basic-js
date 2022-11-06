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
  let count = 1;
  let result = '';
  str.split('').reduce((prev, e, key) => {
    if(e === prev) {
      count++;
    } else {
      if(key !== 0) {
        result += (count > 1 ? count : '') + prev;
      }
      count = 1;
    }

    if(key === str.split('').length-1) {
      result += (count > 1 ? count : '') + e;
    }
    return e;
  }, 0);
  return result;
}

module.exports = {
  encodeLine
};
