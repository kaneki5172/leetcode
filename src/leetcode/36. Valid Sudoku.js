/**
 * @description 36. 有效的数独
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = board => {
  const len = board.length
  const rows = new Map();
  const columns = new Map();
  const boxes = new Map();

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const num = board[i][j];
      if (num !== ".") {
        // 子数独序号
        let boxIndex = Math.floor((i / 3)) * 3 + Math.floor(j / 3);
        if (rows.has(i + '-' + num) || columns.has(j + '-' + num) || boxes.has(boxIndex + '-' + num)) {
          return false;
        }
        rows.set(i + '-' + num, true);
        columns.set(j + '-' + num, true);
        boxes.set(boxIndex + '-' + num, true);
      }
    }
  }
  return true;
};

console.log(isValidSudoku([["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]))