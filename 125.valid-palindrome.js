/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (!s) return '';
  
  const longStr = s.replace(/[^a-z0-9]/gi, '').toLowerCase()

  if (longStr === longStr.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
};
// @lc code=end