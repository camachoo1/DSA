# You are given an m x n grid where each cell can have one of three values:

# 0 representing an empty cell,
# 1 representing a fresh orange, or
# 2 representing a rotten orange.
# Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

# Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        rows = len(grid)
        if rows == 0:
            return -1

        cols = len(grid[0])
        fresh_oranges = 0
        rotten_oranges = collections.deque()

        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == 2:
                    rotten_oranges.append((r, c))
                elif grid[r][c] == 1:
                    fresh_oranges += 1

        minutes = 0
        while rotten_oranges and fresh_oranges > 0:
            minutes += 1

            for _ in range(len(rotten_oranges)):
                r1, c1 = rotten_oranges.popleft()
                for x, y in [(1, 0), (0, 1), (-1, 0), (0, -1)]:
                    dx, dy = r1 + x, c1 + y
                    if dx < 0 or dx == rows or dy < 0 or dy == cols:
                        continue
                    if grid[dx][dy] == 0 or grid[dx][dy] == 2:
                        continue
                    fresh_oranges -= 1
                    grid[dx][dy] = 2
                    rotten_oranges.append((dx, dy))
        return minutes if fresh_oranges == 0 else -1
