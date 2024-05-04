func reverseWords(s string) string {
    arr := strings.Fields(s)
		for i := 0; i < len(arr)/2; i++ {
			arr[i], arr[len(arr)-i-1] = arr[len(arr)-i-1], arr[i]
		}
		return strings.Join(arr, " ")
}