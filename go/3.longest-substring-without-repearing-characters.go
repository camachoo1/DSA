func lengthOfLongestSubstring(s string) int {
    var charSet = make(map[byte]bool)
    var l = 0
    var result = 0

    for r :=0; r < len(s); r++ {
        for charSet[s[r]] {
            delete(charSet, s[l])
            l++
        }

        charSet[s[r]] = true
        result = max(result, r - l +1)
    }

  return result
}

func max(a, b int) int {
    if a > b {
        return a
    }

  return b
}