/**
 * Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 * 
 * Example:
 * 给定数组 nums = [1,1,2],函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。
 * 你不需要考虑数组中超出新长度后面的元素。
 */

/**
 * @description 26. 删除排序数组中的重复项
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = nums => {
  const len = nums.length
  if (len <= 1) {
    return len;
  }
  let i = 0;
  for (let j = 1; j < len; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};