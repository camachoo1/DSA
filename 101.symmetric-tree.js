/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;
  return dfs(root.left, root.right);
};

const dfs = (root, target) => {
  if (!root && !target) return true;
  if (!root || !target) return false;
  if (root.val !== target.val) return false;

  return dfs(root.left, target.right) && dfs(root.right, target.left)
};
// @lc code=end
