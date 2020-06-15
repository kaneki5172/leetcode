/**
 * @description 字符串转换整数 (atoi)
 * @param {string} str 
 * @returns {number}
 */
const myAtoi = str => {
  if (typeof str !== 'string' || !str) {
    return 0;
  }

  const MAX = Math.pow(2, 31) - 1;
  const MIN = -Math.pow(2, 31);
  
  str = str.replace(/^\s*|\s*$/, '');
  const ret = str.match(/^[-+]??\d+/)
  if (ret) {
    return ret > MAX ? MAX : (ret < MIN ? MIN : +ret);
  }
  return 0;
}

console.log(myAtoi("+1"));
console.log(myAtoi("++1"));
console.log(myAtoi("-1"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("words and 987"));