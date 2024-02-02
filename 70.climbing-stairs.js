/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // recursively solve using fibonacci sequence
  // if (n <= 2) return n;
  // return climbStairs(n - 1) + climbStairs(n - 2);

  // dynamic programming approach
  if (n <= 2) return n

  let allWaysToReachTop = 0
  let oneStepBeforeTop = 2
  let twoStepsBeforeTop = 1

  for (let i = 2; i < n; i++) {
    allWaysToReachTop = oneStepBeforeTop + twoStepsBeforeTop
    twoStepsBeforeTop = oneStepBeforeTop
    oneStepBeforeTop = allWaysToReachTop
  }

  return allWaysToReachTop
};
// @lc code=end

