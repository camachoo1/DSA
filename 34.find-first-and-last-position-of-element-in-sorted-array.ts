/*
 * @lc app=leetcode id=34 lang=typescript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  const firstElement = findFirstElement(nums, target);
  const lastElement = findLastElement(nums, target);
  return [firstElement, lastElement];
}

function findFirstElement(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  let res = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }

    if (nums[mid] === target) {
      res = mid;
    }
  }

  return res;
}

function findLastElement(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  let res = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    if (nums[mid] === target) {
      res = mid;
    }
  }

  return res;
}
// @lc code=end
