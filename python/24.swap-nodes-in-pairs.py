# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode()
        dummy.next = head
        current = dummy

        while current.next is not None and current.next.next is not None:
            first_node, second_node = current.next, current.next.next

            first_node.next, second_node.next = second_node.next, first_node

            current.next = second_node
            current = first_node
        
        return dummy.next