func longestConsecutive(nums []int) int {
    if len(nums) == 0 {
        return 0
    }
    sort.Ints(nums)
    mx, curr := 1, 1
    for i := 1; i < len(nums); i++ {
        if nums[i] != nums[i-1] {
            if nums[i] == nums[i-1]+1 { 
                curr++
            } else {
                mx = max(mx, curr)
                curr = 1 
            }
        }
    }
    return max(mx, curr)
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}