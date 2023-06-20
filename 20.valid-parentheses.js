/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  const bracketStack = [];
  const openBrackets = ['{', '(', '['];

  for (let i = 0; i < s.length; i++) {
    if (openBrackets.includes(s[i])) {
      bracketStack.push(s[i]);
    } else {
      let last = bracketStack.pop();
      if (brackets[last] !== s[i]) return false;
    }
  }

  return bracketStack.length ? false : true;
};
// @lc code=end
