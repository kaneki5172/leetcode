// Refs https://github.com/tinytot1/blog/issues/3

/**
 * @description 数字的千位分隔符表示法
 * @param {number} num - 输入数字
 * @returns {string}
 */
function numformat(num: number): string {
  return num.toString().replace(/(?!^)(?=(\d{3})+$)/g, ",")
}

console.log(numformat(10000000000));
console.log(numformat(100000000000));
console.log(numformat(100000000));
console.log(numformat(100000000));

// \d{3} -- 三个数为一组
// (?=\d{3}) -- (?=x) 匹配位置，匹配三个数字前面的位置
// (?=\d{3}$) -- 匹配最后三个数前面的位置
// (\d{3})+ -- 一组三个数出现一次或者多次
// (?=(\d{3})+$) -- 匹配多组三个数前面的位置
// (?!^) -- 匹配位置，匹配非 "^" 前面的位置，即此位置后面不匹配 "^"。


/**
 * @description 数字的千位分隔符表示法
 * @param {number} num - 输入数字
 * @returns {string}
 */
function numformat1(num: number): string {
  return num.toLocaleString();
}

console.log(numformat1(10000000000));
console.log(numformat1(100000000000));
console.log(numformat1(100000000));
console.log(numformat1(100000000));

/**
 * @description 数字的千位分隔符表示法
 * @param {number} num - 输入数字
 * @returns {string}
 */
function numformat2(num: number): string {
  const str = num.toString();
  const arr = [];
  for (let len = str.length, i = len - 1; i >= 0; i = i - 3) {
    let start = i - 2;
    if (start < 0) start = 0;
    arr.push(str.slice(start, i + 1));
  }
  return arr.reverse().join(',');
}
console.log(numformat2(10000000000));
console.log(numformat2(100000000000));
console.log(numformat2(100000000));
console.log(numformat2(100000000));