/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  // set up a dummy node and set its next value to be the head of the linked list
  let dummy = new ListNode()
  dummy.next = head
  // set the current node to be the dummy node we created
  let current = dummy
  // while the next 2 node are not null perform the swaps
  while (current.next !== null && current.next.next !== null) {
    // set up the first node to be the next element for current (initially will be the head)
    let firstNode = current.next
    // second node will be the following node (initially the second node in the list)
    let secondNode = current.next.next
    // perform the swap - initially the next value for the head will be the next value for its succeeding node
    firstNode.next = secondNode.next
    // next node for the second node should now be the first node (i.e. the swap)
    secondNode.next = firstNode
    // now we change the next node of the current node to be the second node
    current.next = secondNode
    // update the current node to be the first node (which is now the second node)
    current = firstNode
  }
  // return the next value for the dummy node which is where our linked list starts
  return dummy.next
};
// @lc code=end

