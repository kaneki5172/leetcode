/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 * 
 * Example:
 * n = 3
 * [
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
 */

/**
 * @description 括号生成
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = n => {
  const ret = [];
  const backtrack = (ret, str, left, right, n) => {
    if (str.length === n * 2) {
      return ret.push(str);
    }
    if (left < n) {
      backtrack(ret, str + "(", left + 1, right, n);
    }
    if (right < left) {
      backtrack(ret, str + ")", left, right + 1, n);
    }
  }
  backtrack(ret, "", 0, 0, n);
  return ret;
};