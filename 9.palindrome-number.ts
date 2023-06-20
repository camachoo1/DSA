/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  if (x < 0 || (x != 0 && x % 10 == 0)) return false

    let s: string = x.toString()
    let l = 0, r = s.length - 1

    while (l < r) {
      if (s[l] !== s[r]) {
        return false
      }
        l++, r--
    }

    return true
};
// @lc code=end

