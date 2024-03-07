/*
 * @lc app=leetcode id=448 lang=typescript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
function findDisappearedNumbers(nums: number[]): number[] {
  const notInNums = [];
  const numSet = new Set(nums);

  for (let i = 1; i <= nums.length; i++) {
    if (!numSet.has(i)) {
      notInNums.push(i);
    }
  }

  return notInNums;
}
// @lc code=end
