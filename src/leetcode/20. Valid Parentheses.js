/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * Example:
 * Input: "{[]}"
 * Output: true
 */

/**
 * @description 有效的括号
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  if (typeof s !== 'string') {
    return false;
  }
  if (s.length % 2 === 1) {
    return false;
  }
  const result = [];
  for (let i = 0, len = s.length; i < len; i++) {
    if (s[i] === '(') {
      result.push(')');
    } else if (s[i] === '{') {
      result.push('}');
    } else if (s[i] === '[') {
      result.push(']');
    } else if (result.pop() !== s[i]) {
      return false;
    }
  }
  return result.length === 0;
};

/**
 * 栈先入后出特点恰好与本题括号排序特点一致，即若遇到左括号入栈，遇到右括号时将对应栈顶左括号出栈，则遍历完所有括号后 stack 仍然为空；
 */