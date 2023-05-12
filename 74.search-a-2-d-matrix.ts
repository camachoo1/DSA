/*
 * @lc app=leetcode id=74 lang=typescript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
  let row = matrix.length - 1
  let col = 0

  while (row >= 0 && col < matrix[0].length) {
    if (matrix[row][col] === target) {
      return true
    } else if (matrix[row][col] > target) {
      row--
    } else {
      col++
    }
  }
  return false
};
// @lc code=end

