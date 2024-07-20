package main

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func deleteNode(root *TreeNode, key int) *TreeNode {
	if root == nil {
		return root
	}

	if key == root.Val {
		if root.Right == nil {
			root = root.Left
		} else {
			prev, cur := root.Right, root.Right
			for cur.Left != nil {
				cur, prev = cur.Left, cur
			}
			if prev == cur {
				root, root.Right.Left = root.Right, root.Left
			} else {
				prev.Left = cur.Right
				root, cur.Left, cur.Right = cur, root.Left, root.Right
			}
		}
		return root
	}

	if key > root.Val {
		root.Right = deleteNode(root.Right, key)
	} else {
		root.Left = deleteNode(root.Left, key)
	}
	return root
}