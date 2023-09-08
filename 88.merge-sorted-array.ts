/*
 * @lc app=leetcode id=88 lang=typescript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  const index = nums1.length - n;

  for (let i = index; i < nums1.length; i++) {
    nums1[i] = nums2[i - index];
  }

  nums1.sort((a, b) => a - b);
}

// @lc code=end
