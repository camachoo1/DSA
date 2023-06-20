/*
 * @lc app=leetcode id=234 lang=typescript
 *
 * [234] Palindrome Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function isPalindrome(head: ListNode | null): boolean {
  if (head === null || (head.next === null && head.val !== null)) {
    return true
  }

  

  let slow = head
  let fast = head

  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }

  let secondHalf = reverseNodeList(slow.next)
  let firstHalf = head

  while (secondHalf !== null) {
    if (firstHalf.val !== secondHalf.val) {
      return false
    }

    firstHalf = firstHalf.next
    secondHalf = secondHalf.next
  }

  return true
};


function reverseNodeList(head: ListNode | null): ListNode | null {
  let prev = null
  let current = head

  while (current !== null) {
    let next = current.next
    current.next = prev
    prev = current
    current = next
  }

  return prev
}
// @lc code=end

