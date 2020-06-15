const execa = require('execa');
const fs = require("fs");
const path = require("path");

(async () => {
  const fileName = process.argv.slice(2)[0];
  let file = ""
  if (fs.existsSync(path.join(__dirname, "../src/code", fileName))) {
    file = path.join(__dirname, "../src/code", fileName);
  } else if (fs.existsSync(path.join(__dirname, "../src/leetcode", fileName))) {
    file = path.join(__dirname, "../src/leetcode", fileName);
  } else {
    throw "文件不存在";
  }
  await execa('tsc', [file, "--outFile", path.join(__dirname, "../dist/index.js")]);
  const { stdout } = await execa('node', [path.join(__dirname, "../dist/index.js")]);
  //=> 'unicorns'
  console.log(stdout)
})();