/**
 * Given a string, find the length of the longest substring without repeating characters.
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 * Example:
 * Input: "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 * Example:
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 * Example:
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

 /**
  * @description 无重复字符的最长子串的长度
  * @param {string} s n
  * @returns {number}
  */
const lengthOfLongestSubstring = (s) => {
  if (typeof s !== "string" || !s) {
    return 0
  }
  
  let ans = 0;
  let start = 0;
  const map = new Map();
  for(let i = 0, len = s.length; i < len; i++) {
    const item = s[i];
    if (map.has(item)) {
      start = Math.max(map.get(item) + 1, start)
    }
    ans = Math.max(i - start + 1, ans);
    map.set(item, i);
  }
  return ans;
}

console.log(lengthOfLongestSubstring("abba"))

/**
 * 滑动窗口是数组/字符串问题中常用的抽象概念。 
 * 窗口通常是在数组/字符串中由开始和结束索引定义的一系列元素的集合，即 [i, j)（左闭，右开）。
 * 而滑动窗口是可以将两个边界向某一方向“滑动”的窗口。例如，我们将 [i, j) 向右滑动 1 个元素，则它将变为 [i+1, j+1)（左闭，右开）。
 * 
 * 回到我们的问题，我们使用 HashMap 将字符存储在当前窗口 [i, j)（最初 j = i）中。
 * 然后我们向右侧滑动索引 j，如果它不在 HashMap 中，则把当前元素和位置存入到HashMap， 我们会继续滑动 j。直到 s[j] 已经存在于 HashMap 中。
 * 此时，我们找到的没有重复字符的最长子字符串将会以索引 i与 HashMap中的s[j]索引最大值开头

 * 1、终止位置是当前位置
 * 2、开始位置是字符最大的位置
 * 2-1、abba
 * 2-2、start: a, index: 0; end: 0; ans: end - start + 1 = 1
 * 2-3、start: a, index: 0; end: 1; ans: end - start + 1 = 2
 * 注意当end在2的时候，字符b已经在Map里面了。开始位置:，Math.max(firstBIndex + 1, startIndex)
 * 2-4、start: b, index: 2; end: 2; ans: end - start + 1 = 1
 * 注意当end在3的时候，字符a已经在Map里面了。开始位置: Math.max(firstAIndex + 1, startIndex)
 * 2-5、start: b, index: 2; end: 3; ans: end - start + 1 = 2
 */