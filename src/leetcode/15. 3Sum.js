/**
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0?
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？
 * Find all unique triplets in the array which gives the sum of zero.
 * 找出所有满足条件且不重复的三元组。
 *
 * Note: The solution set must not contain duplicate triplets.
 * 注意：答案中不可以包含重复的三元组。
 *
 * Example:
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 * A solution set is:
 * [
 *  [-1, 0, 1],
 *  [-1, -1, 2]
 * ]
 */

/**
 * @description 三数之和
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = nums => {
  if (!Array.isArray(nums) || nums.length < 3) {
    return [];
  }
  const ret = [];
  nums.sort((a, b) => a - b);
  for (let i = 0, len = nums.length; i < len; i++) {
    // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
    if (nums[i] > 0) {
      return ret;
    }
    // 去重 [-1, -1, -1, 0, 0, 0, 1, 2]
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let l = i + 1;
    let r = len - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum === 0) {
        ret.push([nums[i], nums[l], nums[r]]);
        // 去重
        while (l < r && nums[l] === nums[l + 1]) {
          l++;
        }
        // 去重
        while (l < r && nums[r] === nums[r - 1]) {
          r--;
        }
        l++;
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        r--;
      }
    }
  }
  return ret;
};

console.log(threeSum([-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0]))

/**
 * 标签：数组遍历
 * 首先对数组进行排序，排序后固定一个数 nums[i]，再使用左右指针指向 nums[i]后面的两端，数字分别为 nums[L] 和 nums[R]，计算三个数的和 sum 判断是否满足为 0，满足则添加进结果集
 * 如果 nums[i]大于 0，则三数之和必然无法等于 0，结束循环
 * 如果 nums[i] == nums[i-1]，则说明该数字重复，会导致结果重复，所以应该跳过
 * 当 sum == 0 时，nums[L] == nums[L+1] 则会导致结果重复，应该跳过，L++
 * 当 sum == 0 时，nums[R] == nums[R−1] 则会导致结果重复，应该跳过，R-−
 * 时间复杂度：O(n^2)O(n^2)，n 为数组长度
 */