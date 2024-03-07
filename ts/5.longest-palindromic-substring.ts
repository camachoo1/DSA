/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
function longestPalindrome(s: string): string {
  if (s.length <= 1) return s;
  let longestLength = 0;
  let longestStr = '';

  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currLength = right - left + 1;

      if (currLength > longestLength) {
        longestLength = currLength;
        longestStr = s.slice(left, right + 1);
      }
      left--;
      right++;
    }

    left = i;
    right = i + 1;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currLength = right - left + 1;

      if (currLength > longestLength) {
        longestLength = currLength;
        longestStr = s.slice(left, right + 1);
      }
      left--;
      right++;
    }
  }
  return longestStr;
}
// @lc code=end
