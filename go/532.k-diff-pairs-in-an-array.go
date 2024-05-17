func findPairs(nums []int, k int) int {
    pairs := make(map[int]int)
    result := 0
    for _, v := range nums {
        pairs[v] += 1
    }
    for key, v := range pairs {
        if k == 0  {
            if v >= 2{
                result += 1
            }
        } else {
            _, ok := pairs[key + k]
            if ok {
                result += 1
            }
        }
    }
    return result
}