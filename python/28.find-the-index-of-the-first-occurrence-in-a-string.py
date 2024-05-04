class Solution:
    def strStr(self, haystack: str, needle: str,i=0) -> int:
        return i if haystack[i:i+len(needle)] == needle else self.strStr(haystack,needle,i+1) if i < len(haystack)-len(needle)+1 else -1 