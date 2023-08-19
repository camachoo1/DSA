/*
 * @lc app=leetcode id=665 lang=typescript
 *
 * [665] Non-decreasing Array
 */

// @lc code=start
function checkPossibility(nums: number[]): boolean {
  let errors = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      errors++;

      if (errors > 1) {
        return false;
      }

      if (i > 0 && nums[i - 1] > nums[i + 1]) {
        nums[i + 1] = nums[i];
      } else {
        nums[i] = nums[i + 1];
      }
    }
  }

  return true;
}
// @lc code=end
