/*
 * @lc app=leetcode id=128 lang=typescript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);
  let longestStreak = 0;

  for (const num of set) {
    if (!set.has(num - 1)) {
      let currentNumber = num;
      let currentStreak = 1;

      while (set.has(currentNumber + 1)) {
        currentNumber++;
        currentStreak++;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
}
// @lc code=end
