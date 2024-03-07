/*
 * @lc app=leetcode id=542 lang=typescript
 *
 * [542] 01 Matrix
 */

// @lc code=start
interface MatrixParams {
  row: number;
  col: number;
}
function updateMatrix(mat: number[][]): number[][] {
  const ROWS = mat.length;
  const COLS = mat[0].length;

  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  
  let queue: MatrixParams[] = [];
  let visited: boolean[][] = Array(ROWS)
    .fill(false)
    .map(() => Array(COLS).fill(false));

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (mat[row][col] === 0) {
        queue.push({ row, col });
        visited[row][col] = true;
      }
    }
  }

  while (queue.length) {
    const item = queue.shift();
    if (!item) break;

    const { row, col } = item;
    for (const dir of directions) {
      let newRow = row + dir[0];
      let newCol = col + dir[1];

      if (
        inBound(newRow, newCol, ROWS, COLS) &&
        !visited[newRow][newCol]
      ) {
        mat[newRow][newCol] = mat[row][col] + 1;
        visited[newRow][newCol] = true;
        queue.push({ row: newRow, col: newCol });
      }
    }
  }
  return mat;
}

const inBound = (
  row: number,
  col: number,
  ROWS: number,
  COLS: number
): boolean => {
  return row >= 0 && row < ROWS && col >= 0 && col < COLS;
};

// @lc code=end
