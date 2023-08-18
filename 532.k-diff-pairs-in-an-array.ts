/*
 * @lc app=leetcode id=532 lang=typescript
 *
 * [532] K-diff Pairs in an Array
 */

// @lc code=start
function findPairs(nums: number[], k: number): number {
  const seen = new Set<number>()
  const uniquePairs = new Set<number>()

  for (const num of nums) {
    if (seen.has(num - k)) {
      uniquePairs.add(num - k)
    }

    if (seen.has(num + k)) {
      uniquePairs.add(num)
    }
    seen.add(num)
  }

  return uniquePairs.size
}
// @lc code=end

