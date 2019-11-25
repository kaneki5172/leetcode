/**
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
 * ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
 * You are given a target value to search. If found in the array return its index, otherwise return -1.
 * 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。
 * You may assume no duplicate exists in the array.
 * 你可以假设数组中不存在重复的元素。
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * 你的算法时间复杂度必须是 O(log n) 级别。
 * 
 * Example:
 * Input: nums = [4,5,6,7,0,1,2], target = 0
 * Output: 4
 */

/**
 * @description 33. 搜索旋转排序数组
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  const len = nums.length;
  if (len === 0) {
    return -1;
  }
  let start = 0;
  let end = len - 1;
  let mid = 0;
  while (start <= end) {
    mid = Math.floor((end + start) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    //前半部分有序,注意此处用小于等于
    if (nums[start] <= nums[mid]) {
      //target在前半部分
      if (target >= nums[start] && target < nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (target <= nums[end] && target > nums[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};