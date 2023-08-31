/*
 * @lc app=leetcode id=283 lang=typescript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let count = 0;
  for (const num of nums) {
    if (num !== 0) {
      nums[count++] = num;
    }
  }

  for (let i = count; i < nums.length; i++) {
    nums[i] = 0;
  }
}
// @lc code=end
