import math

class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        if n <= 0:
            return False
        log_n = math.log2(n)
        return log_n.is_integer()