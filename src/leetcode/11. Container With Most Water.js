/**
 * 盛最多水的容器
 */

 /**
  * @description 盛最多水的容器
  * @param {number[]} height 
  * @returns {number}
  */
const maxArea = height => {
  if (height.length < 2) {
    return 0;
  }
  let left = 0;
  let right = height.length - 1;
  let area = 0;
  while(left < right) {
    const leftValue = height[left];
    const rightValue = height[right];
    if (leftValue < rightValue) {
      area = Math.max(leftValue * (right - left), area);
      left++;
    } else {
      area = Math.max(rightValue * (right - left), area);
      right--;
    }
  }
  return area;
}

/**
 * 双指针，一个指向left，一个指向right
 * 木桶原理，值小的乘以(right - left)
 * 值小的指针像对方移动
 */