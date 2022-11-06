const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  n = n.toString();
  return n.split('').reduce((max, e, key) => {
    let arr = n.split('');
    arr.splice(key, 1);
    return Math.max(+arr.join(''), max);
  }, 0);
}

module.exports = {
  deleteDigit
};
