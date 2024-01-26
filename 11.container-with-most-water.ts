/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
function maxArea(height: number[]): number {
  let maxArea = -Infinity;

  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const currentHeight = Math.min(height[left], height[right]);
    const width = right - left;

    const area = currentHeight * width;

    maxArea = Math.max(maxArea, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}
// @lc code=end
