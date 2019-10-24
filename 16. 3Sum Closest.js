/**
 * Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. 
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近
 * Return the sum of the three integers. 
 * 返回这三个数的和
 * You may assume that each input would have exactly one solution.
 * 假定每组输入只存在唯一答案
 * 
 * Example:
 * Given array nums = [-1, 2, 1, -4], and target = 1.
 * The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 */


/**
 * @description 最接近的三数之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
  if (!Array.isArray(nums) || nums.length < 3) {
    return 0;
  }
  nums.sort((a, b) => a - b);
  let result = Number.MAX_VALUE;
  for (let i = 0, len = nums.length; i < len; i++) {
    // 去重 [-1, -1, -1, 0, 0, 0, 1, 2]
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let l = i + 1;
    let r = len - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (Math.abs(target - sum) < Math.abs(target - result)) {
        result = sum;
      }
      if (sum === target) {
        return result;
      } else if (sum < target) {
        // 去重
        while (l < r && nums[l] === nums[l + 1]) {
          l++;
        }
        l++;
      } else {
        // 去重
        while (l < r && nums[r] === nums[r - 1]) {
          r--;
        }
        r--;
      }
    }
  }
  return result;
};