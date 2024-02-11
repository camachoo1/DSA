/*
 * @lc app=leetcode id=64 lang=typescript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
// get the length of both m x n and create a new array with the val of the top left element (to keep track of the sum)
// work through the columns and rows to get the vals
// fill out the remainder of the grid with the new vals
// final cell on bottom right should contain min sum
// return val at bottom right
function minPathSum(grid: number[][]): number {
  const m = grid.length
  const n = grid[0].length

  const sumGrid = Array.from({ length: m }, () => Array(n).fill(0))
  sumGrid[0][0] = grid[0][0]

  for (let i = 1; i < m; i++) {
    sumGrid[i][0] = sumGrid[i - 1][0] + grid[i][0]
  }

  for (let j = 1; j < n; j++) {
    sumGrid[0][j] = sumGrid[0][j - 1] + grid[0][j]
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      sumGrid[i][j] = grid[i][j] + Math.min(sumGrid[i - 1][j], sumGrid[i][j - 1])
    }
  }

  return sumGrid[m - 1][n - 1]
};
// @lc code=end

