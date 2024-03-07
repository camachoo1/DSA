/*
 * @lc app=leetcode id=58 lang=typescript
 *
 * [58] Length of Last Word
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
  let length = 0;
  let started = false;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') {
      length++;
      started = true;
    } else if (started) {
      break;
    }
  }

  return length;
}
// @lc code=end
