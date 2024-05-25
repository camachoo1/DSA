func containsDuplicate(nums []int) bool {
    temp := make(map[int]bool)

    for _, i := range nums {
        if temp[i] {
            return true
        }

        temp[i] = true
    }

    return false
}