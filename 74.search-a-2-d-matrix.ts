/*
 * @lc app=leetcode id=74 lang=typescript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
  let left = 0;
  let right = matrix.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const first = matrix[mid][0];
    const last = matrix[mid][matrix[mid].length - 1];
    if (target === first || target === last) return true;
    if (target > first && target < last)
      return binarySearch(matrix[mid], target);
    if (target < first) right = mid - 1;
    else left = mid + 1;
  }
  return false;
}

const binarySearch = (nums: number[], target: number): boolean => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return true;
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return false;
};
// @lc code=end

