/*
 * @lc app=leetcode id=240 lang=typescript
 *
 * [240] Search a 2D Matrix II
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
  let row: number = 0;
  let col: number = matrix[row].length - 1;

  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) {
      return true;
    }

    if (matrix[row][col] < target) {
      row++;
    } else {
      col--;
    }
  }
  return false;
};
// @lc code=end
