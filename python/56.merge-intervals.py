
class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        
        intervals.sort(key=lambda x: x[0])
        res = []
    
        for index, value in enumerate(intervals):
            start, end = value
            if len(res) > 0 and res[-1][1] >= start:
                prev_start, prev_end = res.pop()
                res.append([prev_start, max(end, prev_end)])
            else:
                res.append(value)
        
        return res
		