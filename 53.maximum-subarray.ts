/*
 * @lc app=leetcode id=53 lang=typescript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  if (nums.length === 0) return 0

  let maxEnd = nums[0]
  let currentMax = nums[0]

  for (let i = 1; i < nums.length; i++) {
    maxEnd = Math.max(nums[i], maxEnd + nums[i])
    currentMax = Math.max(maxEnd, currentMax)
  }

  return currentMax
};
// @lc code=end

