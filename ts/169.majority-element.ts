/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  const hash: { [key: number]: number } = {};

  for (const num of nums) {
    if (hash[num]) {
      hash[num]++;
    } else {
      hash[num] = 1;
    }
  }

  return Object.keys(hash).find(
    (key) => hash[key] > nums.length / 2
  ) as unknown as number;
}
// @lc code=end
