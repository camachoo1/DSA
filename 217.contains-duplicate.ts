/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  const numMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (numMap.has(nums[i])) {
      return true;
    }
    numMap.set(nums[i], 1);
  }

  return false;
}

// @lc code=end
