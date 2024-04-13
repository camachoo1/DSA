class Solution:
    def maxArea(self, height: List[int]) -> int:
        max_area = 0
        l, r = 0, len(height) - 1

        while l < r:
          lh, rh = height[l], height[r]
          current_area = (r - l) * min(lh,rh)

          max_area = max(max_area, current_area)

          if lh < lr:
            l += 1
          else:
            r -= 1

        return max_area