# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
          return head

        n1, n2 = head, head.next
        head, prev = n2, n1

        while n2:
          n1.next, n2.next = n2.next, n1

          if n2 != head:
            prev.next, prev = n2, n1
            n1 = n1.next

          if not n1:
            return head
          n2 = n1.next
        return head