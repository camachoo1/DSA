/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let start = 0;
  let maxSize = 0;

  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[start]);
      start++;
    }

    set.add(s[i]);
    maxSize = Math.max(maxSize, i - start + 1);
  }

  return maxSize;
};
// @lc code=end
