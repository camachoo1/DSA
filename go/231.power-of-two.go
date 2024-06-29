func isPowerOfTwo(n int) bool {
    power := 1
    for power < n {
        power *= 2
    }
    if power == n {
        return true
    }
    return false
}