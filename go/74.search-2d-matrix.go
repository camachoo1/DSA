func searchMatrix(matrix [][]int, target int) bool {
    if len(matrix) == 0 {
        return false
    }
    m, n := len(matrix), len(matrix[0])
    left, right := 0, m*n-1

    for left <= right {
        mid := left + (right-left)/2
        mid_row := mid / n
        mid_col := mid - mid_row*n

        if matrix[mid_row][mid_col] == target {
            return true
        } else if matrix[mid_row][mid_col] < target {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return false
}