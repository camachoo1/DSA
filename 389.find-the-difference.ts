/*
 * @lc app=leetcode id=389 lang=typescript
 *
 * [389] Find the Difference
 */

// @lc code=start
function findTheDifference(s: string, t: string): string {
  const hash = new Map()

  for (let i = 0; i < s.length; i++) {
    hash.set(s[i], (hash.get(s[i]) ?? 0) + 1)
  }

  for (let i = 0; i < t.length; i++) {
    if (hash.has(t[i])) {
      const value = hash.get(t[i])
      if (value > 1) {
        hash.set(t[i], value - 1)
      } else {
        hash.delete(t[i])
      }
    } else {
      return t[i]
    }
  }
};
// @lc code=end

