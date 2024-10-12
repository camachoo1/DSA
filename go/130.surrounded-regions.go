
func solve(board [][]byte)  {

    m := len(board)
    n := len(board[0])
 
 /*
    print := func(){
        for _, subarr := range (board) {
            for _, elt := range (subarr) {
                fmt.Printf("%c ", elt)
            }
        fmt.Println()
        }
        fmt.Println()
    }
    */

   var dfs func(int, int)
    dfs = func(i, j int) {
        if i < 0 || j < 0 || i >= m || j >= n || board[i][j] == 'X' || board[i][j] == '*' {
            return
        }

        board[i][j] = '*'
        dfs(i-1, j)
        dfs(i+1, j)
        dfs(i, j-1)
        dfs(i, j+1)
    }

    for i := 0; i < m; i++ {
        for j := 0; j < n; j++ {
            if i == 0 || j == 0 || i == m - 1 || j == n - 1 {
                if board[i][j] == 'O' {
                    dfs(i, j)
                }
            }
        }
    }
    
    for i := 0; i < m; i++ {
        for j := 0; j < n; j++ {
            if board[i][j] == '*' {
                board[i][j] = 'O'
            } else if board[i][j] == 'O' {
                board[i][j] = 'X'
            }
        }
    }    
}