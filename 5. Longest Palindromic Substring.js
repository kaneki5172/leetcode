/**
 * Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 
 * Example:
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 * 
 * Example:
 * Input: "cbbd"
 * Output: "bb"
 */


/**
 * @description 最长回文子串
 * @param {string} s 
 * @returns {string}
 */
const longestPalindrome = (s) => {
  if (typeof s !== 'string' || !s) {
    return '';
  }
  const len = s.length;
  const P = new Array(len);
  let start = 0;
  let end = 0;

  for (let i = 0; i < len; i++) {
    P[i] = [];
    P[i][i] = true;

    for (let j = 0; j < i; j++) {
      // 两个字符串 直接比较s[j] === s[i]，大于2个 s[j] === s[i]&&P[j + 1][i - 1]
      P[j][i] = s[j] === s[i] && (i - j < 2 || P[j + 1][i - 1]);

      if (P[j][i] && (end - start <= i - j)) {
        start = j;
        end = i;
      }
    }
  }
  return s.substring(start, end + 1);
}

console.log(longestPalindrome("babad"))

/**
 * 动态规划
 * 当P[i+1, j-1] 是回文时，并且S[i] == S[j]，则 P[i,j]是回文
 * 即：P[i,j]=(P[i+1,j−1] and S[i]==S[j])
 * 单个字符是回文：P[i,i]=true
 * 两个字符：P[i,i+1]=(S[i]==S[i+1])
 * 三个及其以上：P[i,j]=(P[i+1,j−1] and S[i]==S[j])
 * 
 * Example: "babad"
 * P[0,0] = true; P[1,1] = true; P[2,2] = true; P[3,3] = true; P[4,4] = true;
 * P[0,1] = (S[0]==S[1]) = false; P[1,2] = false; P[2,3] = false; P[3,4] = false;
 * P[0,2] = (P[1]==P[1] && S[0]==S[2]) = true; P[1,3] = (P[1]==P[1] && S[0]==S[2]) = true;
 * ...
 */