class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        maxans,summing=nums[0],0
        for n in nums:
            if summing<0:
                summing=0
            summing+=n
            maxans=max(maxans,summing)
        return maxans