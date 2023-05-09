/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const hash = {}
  
  for (let i = 0; i < nums.length; i++) { 
    if (nums[i] in hash) {
      hash[nums[i]]++
    } else {
      hash[nums[i]] = 1
    }
  }

  for (let num in hash) {
    if (hash[num] === 1) {
      return num
    }
  }
};
// @lc code=end

singleNumber([2,2,1])