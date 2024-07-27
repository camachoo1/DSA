func search(nums []int, target int) int {
    left := 0
    right := len(nums) - 1
    if nums[left] == target {
        return left
    }
    if nums[right] == target {
        return right
    }
    for left <= right {
        mid := (right + left) / 2
        if nums[mid] == target {
            return mid
        } else if nums[mid] >= nums[left] {
            if target >= nums[left] && target <= nums[mid] {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            if target >= nums[mid] && target <= nums[right] {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return -1
}