/**
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 * 罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。
 * 例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。
 * 
 */


/**
 * @description 整数转罗马数字
 * @param {number} num 
 * @returns {number}
 */
const intToRoman = num => {
  if (1 > num || num > 3999) {
    return
  }
  // 把阿拉伯数字与罗马数字可能出现的所有情况和对应关系，放在两个数组中
  // 并且按照阿拉伯数字的大小降序排列，这是贪心选择思想
  const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let ret = "";
  const len = nums.length;
  let index = 0;

  while (index < len) {
    while (num >= nums[index]) {
      ret += romans[index];
      num -= nums[index];
    }
    index++;
  }
  return ret;
}