# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        def in_order(node, arr):
            if node.left is not None:
                if in_order(node.left, arr) is not None:
                    return False
            
            if arr and node.val <= arr[-1]:
                return False
            
            if len(arr) == 0:
                arr.append(node.val)
            else:
                arr[0] = node.val

            if node.right is not None:
                if in_order(node.right, arr) is not None:
                    return False
        
        return in_order(root, []) is None
            


