class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        ROWS, COLS = len(board), len(board[0])
        DIRECTIONS = [(1, 0), (-1, 0), (0, 1), (0, -1)]

        def dfs_explore(r, c):
            if (r < 0 or r >= ROWS or 
                c < 0 or c >= COLS or 
                board[r][c] != 'O'):
                return 
            
            board[r][c] = 'D'
            for dr, dc in DIRECTIONS:
                dfs_explore(r + dr, c + dc)

        for r in range(ROWS):
            if board[r][0] == 'O':  
                dfs_explore(r, 0)
            if board[r][COLS - 1] == 'O':  
                dfs_explore(r, COLS - 1)

        for c in range(COLS):
            if board[0][c] == 'O':  
                dfs_explore(0, c)
            if board[ROWS - 1][c] == 'O':  
                dfs_explore(ROWS - 1, c)

        for row in range(ROWS):
            for col in range(COLS):
                if board[row][col] == 'O':
                    board[row][col] = 'X' 
                    
                elif board[row][col] == 'D':
                    board[row][col] = 'O' 