/*
 * @lc app=leetcode id=994 lang=typescript
 *
 * [994] Rotting Oranges
 */

// @lc code=start]
interface GridParams {
  row: number;
  col: number;
  min: number
}
function orangesRotting(grid: number[][]): number {
  const queue: GridParams[] = []
  let oranges: number = 0
  let minute: number = 0
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) oranges++
      else if (grid[row][col] === 2) queue.push({row:row, col:col, min:0})
    }
  }

  const inBound = (row: number, col: number): boolean => {
    const rowInbound = row >= 0 && row <= grid.length - 1
    const colInbound = col >= 0 && col <= grid[0].length - 1
    return rowInbound && colInbound
  }

  const directions = [[0,1], [1,0], [-1,0], [0, -1]]

  while (queue.length) {
    const {row, col, min} = queue.shift()
    minute = Math.max(minute, min)

    for (const dir of directions) {
      const newRow = row + dir[0]
      const newCol = col + dir[1]
      if (inBound(newRow, newCol) && grid[newRow][newCol] === 1) {
        grid[newRow][newCol] = 2
        oranges--
        queue.push({row: newRow, col: newCol, min: min + 1});
      }
    }
  }
  return oranges ? -1 : minute
};
// @lc code=end

