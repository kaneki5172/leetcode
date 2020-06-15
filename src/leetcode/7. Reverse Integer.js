/**
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 
 * Example:
 * Input: 123
 * Output: 321
 * 
 * Example:
 * Input: -123
 * Output: -321
 * 
 * Example:
 * Input: 120
 * Output: 21
 */

/**
 * @description 整数反转
 * @param {number} x 
 * @returns {number}
 */
const reverse = x => {
  const MAX = Math.pow(2, 31) - 1;
  const MIN = -Math.pow(2, 31);

  if (MAX < x || MIN > x) {
    return 0;
  }

  let ret = 0;
  let remainder = 0;

  while (x !== 0) {
    remainder = x % 10;
    // 判断ret 在这次运算中是否在 MIN～MAX之间
    if (ret > MAX / 10 || (ret == Math.trunc(MAX / 10) && remainder > 7) || ret < MIN / 10 || (ret == Math.trunc(MIN / 10) && remainder < -8)) {
      return 0;
    }
    x = Math.trunc(x / 10);
    ret = ret * 10 + remainder;
  }

  return ret;
}