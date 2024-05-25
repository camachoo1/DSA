func searchInsert(nums []int, target int) int {
    for i := 0; i < len(nums); {
		if target > nums[i] {
			i++
		}else{
			return i
		}
	}
	return len(nums)
}