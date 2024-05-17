/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isSymmetric(root *TreeNode) bool {
    if root == nil {
        return false
    }
    return check(root.Left, root.Right)   
}
func check(Left *TreeNode, Right *TreeNode) bool {
    if Left == nil && Right == nil {
        return true
    }
    if Left == nil || Right == nil {
        return false
    }
    if Left.Val != Right.Val {
        return false
    }
    return check(Left.Left,Right.Right) && check(Left.Right,Right.Left)
}