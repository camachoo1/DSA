func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	list := new(ListNode)
	list2 := list
	a := 0
	for l1 != nil && l2 != nil {
		list.Next = new(ListNode)
		list = list.Next
		a += l1.Val + l2.Val
		list.Val = a % 10
		a /= 10
		l1 = l1.Next
		l2 = l2.Next
	}
	for l1 != nil {
		list.Next = new(ListNode)
		list = list.Next
		a += l1.Val
		list.Val = a % 10
		a /= 10
		l1 = l1.Next
	}
	for l2 != nil {
		list.Next = new(ListNode)
		list = list.Next
		a += l2.Val
		list.Val = a % 10
		a /= 10
		l2 = l2.Next
	}
	if a > 0 {
		list.Next = new(ListNode)
		list = list.Next
		list.Val = a
	}
	return list2.Next
}