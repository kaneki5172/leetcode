// Refs https://leetcode-cn.com/problems/add-two-numbers-ii/
// Refs https://leetcode-cn.com/problems/add-two-numbers/
/**
 * @description 两个字符串（数字可能超过安全数字）相加，可以假设字符串除了0之外，不会以0开头
 * @param {string} str1
 * @param {string} str2 
 * @returns {string}
 */
function addTowStrings(str1: string, str2: string): string {
  let str1Len = str1.length - 1;
  let str2Len = str2.length - 1;
  let ret = "";
  let carry = 0;
  while (str1Len >= 0 || str2Len >= 0) {
    const s1 = str1Len >= 0 ? str1[str1Len] : 0;
    const s2 = str2Len >= 0 ? str2[str2Len] : 0;
    const num = +s1 + +s2 + carry;
    carry = Math.floor(num / 10);
    ret = `${num % 10}${ret}`;
    str1Len--;
    str2Len--;
  }
  return carry === 1 ? `1${ret}` : ret;
}

console.log(addTowStrings("99", "1"))
console.log(addTowStrings("909", "1"))
console.log(addTowStrings("19", "1"))
console.log(addTowStrings("44", "56"))
console.log(addTowStrings("931", "189"))