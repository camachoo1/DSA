func strStr(haystack string, needle string) int {
    
    if len(needle) > len(haystack) {
        return -1
    }
    len_needle := len(needle)
    for i := 0 ; i< (len(haystack) - len_needle) + 1; i++ {

        subString  := haystack[i: i+ len_needle]

        if subString == needle {
            return i
        }

    }

    return -1

}