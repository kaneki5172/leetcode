/**
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 * 
 * Example:
 * Input: "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 */

/**
 * @description 电话号码的字母组合
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = digits => {
  if (typeof digits !== "string" || !digits) {
    return [];
  }

  const ret = [];
  const digitsMap = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
  }

  const backtrack = (retStr, restDigits) => {
    if (restDigits.length === 0) {
      ret.push(retStr);
      return;
    }
    const digit = restDigits.substring(0, 1);
    const wordList = digitsMap[digit].split("");
    for (let index = 0, len = wordList.length; index < len; index++) {
      const element = wordList[index];
      backtrack(retStr + wordList[index], restDigits.substring(1));
    }
  }
  backtrack("", digits)
  return ret;
};