#
# @lc app=leetcode id=58 lang=python3
#
# [58] Length of Last Word
#

# @lc code=start
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        count = 0
        length = len(s)

        while length > 0 and s[length - 1] == ' ':
            length -= 1

        while length > 0 and s[length - 1] != ' ':
            count += 1
            length -=1
        
        return count

# @lc code=end

