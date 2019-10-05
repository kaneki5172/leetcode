/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
 * 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * And then read line by line: "PAHNAPLSIIGYIR"
 * 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。
 * 
 * Example:
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 */

 /**
  * @description Z 字形变换
  * @param {string} s 
  * @param {number} numRows 
  * @returns {string}
  */
const convert = (s, numRows) => {
  if (typeof s !== 'string' || !s) {
    return ''
  }
  let len = s.length;
  if (numRows <= 1 || len <= numRows) {
    return s;
  }
  const ret = new Array(numRows);
  for (let i = 0; i < numRows; i++) {
    ret[i] = [];
  }
  let goDown = false;

  let i = 0;
  // 行
  let m = 0;
  while(i < len) {
    ret[m].push(s[i]);
    if (m === 0 || m === numRows - 1) {
      goDown = !goDown;
    }
    m += goDown ? 1 : -1;
    i++;
  }
  return ret.reduce((prev, next) => {
    return prev.concat(next)
  }, []).join("")
}

console.log(convert('PAYPALISHIRING', 3) === 'PAHNAPLSIIGYIR')

/**
 * 用二位数组存储
 * 行就是numRows
 * 行是0时候，向下存储，行是numRows-1时候，向上存储
 */