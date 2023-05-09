/*
 * @lc app=leetcode id=153 lang=typescript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
function findMin(nums: number[]): number {
  let start = 0
  let end = nums.length - 1

  if (nums[start] < nums[end]) { 
    return nums[start]
  }

  while (start < end) {
    const mid = Math.floor((start + end) / 2)

    if (nums[mid] > nums[end]) {
      start = mid + 1
    } else {
      end = mid
    }
  }

  return nums[start]
};
// @lc code=end

