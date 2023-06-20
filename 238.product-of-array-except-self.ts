/*
 * @lc app=leetcode id=238 lang=typescript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const left: number[] = new Array(n);
  const right: number[] = new Array(n);
  const answer: number[] = new Array(n);

  left[0] = 1
  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * nums[i - 1]
  };

  right[n - 1] = 1
  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1]
  };

  for (let i = 0; i < n; i++) {
    answer[i] = left[i] * right[i]
  };

  return answer
};
// @lc code=end

