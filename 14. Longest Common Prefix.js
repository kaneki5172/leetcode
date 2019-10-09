/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * If there is no common prefix, return an empty string "".
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * Example 1:
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 * 
 * Example 2:
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 */


 /**
  * @description 最长公共前缀
  * @param {string[]} strs 
  * @returns {string}
  */
const longestCommonPrefix = strs => {
  if (!Array.isArray(strs) || strs.length < 1) {
    return "";
  }
  const str = strs[0];
  for (let j = 0, l = str.length; j < l; j++) {
    const s = str.codePointAt(j);
    for (let i = 1, len = strs.length; i < len; i++) {
      if (j === strs[i].length || s !== strs[i].codePointAt(j)) {
        return str.substring(0, j);
      }
    }
  }
  return str;
}