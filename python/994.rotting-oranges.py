# You are given an m x n grid where each cell can have one of three values:

# 0 representing an empty cell,
# 1 representing a fresh orange, or
# 2 representing a rotten orange.
# Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

# Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        minutes, oranges = 0, 0
        queue = deque()
        dirs = [(1, 0), (0, 1), (-1, 0), (0, -1)]
        
        for row in range(len(grid)):
            for col in range(len(grid[0])):
                if grid[row][col] == 1:
                    oranges += 1
                elif grid[row][col] == 2:
                    queue.append({"row": row, "col": col, "minute": 0})
        
        while len(queue) > 0:
            item = queue.popleft()
            row, col, minute = item["row"], item["col"], item["minute"]
            minutes = max(minutes, minute)
            for x, y in dirs:
                dx, dy = row + x, col + y
                if self.inbounds(dx, dy, grid) and grid[dx][dy] == 1:
                    grid[dx][dy] = 2
                    oranges -= 1
                    queue.append({"row": dx, "col": dy, "minute": minute + 1})
        
        return -1 if oranges > 0 else minutes

    def inbounds(self, row, col, grid):
        return 0 <= row < len(grid) and 0 <= col < len(grid[0])
