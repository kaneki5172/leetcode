/**
 * Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * You may assume no duplicates in the array.
 * 你可以假设数组中无重复元素。
 * 
 * Example:
 * Input: [1,3,5,6], 5
 * Output: 2
 * 
 * Example:
 * Input: [1,3,5,6], 2
 * Output: 1
 */

/**
 * @description 35. 搜索插入位置
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  const len = nums.length;
  if (len === 0) {
    return 0;
  }
  let start = 0;
  let end = len - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else if (nums[mid] > target) {
      end = mid - 1;
    }
  }
  return start;
};