/**
 * Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 
 * Example：
 * Input: 121
 * Output: true
 * 
 * Example:
 * Input: -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 */

/**
 * @description 判断一个整数是否是回文数
 * @param {number} x 
 * @returns {boolen}
 */
const isPalindrome = x => {
  //  负数，10的倍数，且不为0
  if (x < 0 || x % 10 === 0 && x != 0) {
    return false;
  }
  let ret = 0;
  while (ret < x) {
    ret = ret * 10 + x % 10;
    x = Math.trunc(x / 10);
  }
  return ret === x || Math.trunc(ret / 10) === x; 
}

/**
 * 两种思路：
 * 1、类似判断最长回文子串，这里可以转换成数字，比较S[i] == S[len -1]、S[i+1] == S[len-2]
 * 
 * 2、7. Reverse Integer，整数反转，这里可以优化，反转一半
 */