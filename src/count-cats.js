const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 function countCats(array) {
  return array.reduce((sum, x) => sum + x.reduce((sub_sum, y) => y === '^^' ? ++sub_sum : sub_sum, 0), 0);
}

module.exports = {
  countCats
};
