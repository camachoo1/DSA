class Solution:
    def checkPossibility(self, nums: List[int]) -> bool:
        if len(nums) <= 2:
            return True
        flag = False
        for i in range(1, len(nums)):
            if nums[i] < nums[i - 1]:
                if flag:
                    return False
                flag = True
                if i > 1 and nums[i] < nums[i - 2]:
                    nums[i] = nums[i - 1]
        return True