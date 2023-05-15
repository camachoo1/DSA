/*
 * @lc app=leetcode id=200 lang=typescript
 *
 * [200] Number of Islands
 */

// @lc code=start
function numIslands(grid: string[][]): number {
  let count: number = 0

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === '1') {
        count++
        dfs(row, col, grid)
      }
    }
  }

  return count
};

const dfs = (row: number, col: number, grid: string[][]): void => {
  if (
    row < 0 ||
    col < 0 ||
    row >= grid.length ||
    col >= grid[row].length ||
    grid[row][col] === '0'
  ) {
    return
  }

  grid[row][col] = '0'

  dfs(row, col + 1, grid)
  dfs(row, col - 1, grid)
  dfs(row + 1, col, grid)
  dfs(row - 1, col, grid)
}
// @lc code=end

