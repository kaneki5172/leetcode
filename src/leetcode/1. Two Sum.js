/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */

/**
 * @description 两数之和
 * @param {number[]} nums
 * @param {number} target 
 * @returns {number[]}
 */
const twoSum = (nums, target) => {
  if (Array.isArray(nums) && nums.length > 1 && typeof target === 'number') {
    const map = new Map();
    for (let i = 0, len = nums.length; i < len; i++) {
      const item = nums[i];
      const ret = target - item;
      if (!map.has(ret)) {
        map.set(item, i);
      } else {
        return [map.get(ret), i]
      }
    }
  }
  return [];
};

/**
 * 用map存储数据，key是数组里面某个元素，value是这个元素下标。
 * 每次遍历数组时候在map里面查找是否有当前元素对应的另一个元素的key。
 * 如果有则返回这个key对应的下标和当前元素的下标。
 * 如果没有则set这个元素，和这个元素下标。
 * 
 * Example:
 * nums: [1, 2, 5, 9]  target: 7  map: {}
 * 遍历第一个元素1： 查找map里面key为6，没有则set
 * map: {1: 0}
 * 遍历第二个元素2： 查找map里面key为5，没有则set
 * map: {1: 0, 2: 1}
 * 遍历第三个元素5： 查找map里面key为2，return
 * map: {1: 0, 2: 1}
 * return [1, 2]
 */