const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  if(s1.length < s2.length) {
    var short = s1.split('');
    var long = s2.split('');
  } else {
    var short = s2.split('');
    var long = s1.split('');
  }

  return short.reduce((sum, e) => {
    let index = long.indexOf(e);
    if(index !== -1) {
      sum++;
      long.splice(index, 1);
    }
    return sum;
  }, 0);
}

module.exports = {
  getCommonCharacterCount
};
