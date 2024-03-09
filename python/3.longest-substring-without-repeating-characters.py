class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        start, max_size = 0, 0
        count = set()

        for i in range(len(s)):
            while s[i] in count:
                count.remove(s[start])
                start += 1

            count.add(s[i])
            max_size = max(max_size, i - start + 1)
        return max_size