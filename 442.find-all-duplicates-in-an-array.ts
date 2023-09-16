/*
 * @lc app=leetcode id=442 lang=typescript
 *
 * [442] Find All Duplicates in an Array
 */

// @lc code=start
function findDuplicates(nums: number[]): number[] {
  const duplicates: { [key: number]: number } = {};

  for (let num of nums) {
    if (duplicates[num]) {
      duplicates[num]++;
    } else {
      duplicates[num] = 1;
    }
  }

  return Object.keys(duplicates)
    .filter((key) => duplicates[key] === 2)
    .map(Number);
}
// @lc code=end
