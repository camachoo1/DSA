func lengthOfLastWord(s string) int {
    count:=0
    for i:= len(s)-1; i>= 0; i-- {
        if s[i]!=' ' {
            count++
        }else if s[i]==' ' && count>0 {
            return count
        }
    }
    return count
}