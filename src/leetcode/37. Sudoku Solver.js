/**
 * @description 37. 解数独
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = board => {
  // 三个布尔数组 表明 行, 列, 还有 3*3 的方格的数字是否被使用过
  const rowsMap = new Map();
  const columnsMap = new Map();
  const boxsMap = new Map();
  const len = board.length;
  let sudokuSolved = false;

  const fillNumber = (num, rows, columns) => {
    const boxIndex = Math.floor((rows / 3)) * 3 + Math.floor(columns / 3);
    rowsMap.set(rows + '-' + num, true);
    columnsMap.set(columns + '-' + num, true);
    boxsMap.set(boxIndex + '-' + num, true);
    board[rows][columns] = num + "";
  }

  const fillNextNumber = (rows, columns) => {
    if (columns !== len - 1) {
      backtrack(rows, columns + 1);
    } else {
      backtrack(rows + 1, 0);
    }
  }

  const removeNumber = (num, rows, columns) => {
    const boxIndex = Math.floor((rows / 3)) * 3 + Math.floor(columns / 3);
    rowsMap.set(rows + '-' + num, false);
    columnsMap.set(columns + '-' + num, false);
    boxsMap.set(boxIndex + '-' + num, false);
    board[rows][columns] = ".";
  }

  const canFill = (num, rows, columns) => {
    const boxIndex = Math.floor((rows / 3)) * 3 + Math.floor(columns / 3);
    return !(rowsMap.get(rows + '-' + num) || columnsMap.get(columns + '-' + num) || boxsMap.get(boxIndex + '-' + num));
  }

  for (let i = 0; i < len; i++) {
    const rows = board[i];
    for (let j = 0; j < len; j++) {
      const num = rows[j];
      if (1 <= num && num <= 9) {
        fillNumber(num, i, j)
      }
    }
  }

  const backtrack = (rows, columns) => {
    if (rows > len - 1 || columns > len - 1) {
      sudokuSolved = true
      return
    }
    const num = board[rows][columns];

    if (num === ".") {
      for (let d = 1; d < 10; d++) {
        if (canFill(d, rows, columns)) {
          fillNumber(d, rows, columns);
          fillNextNumber(rows, columns)
          if (!sudokuSolved) removeNumber(d, rows, columns);
        }
      }
    } else {
      fillNextNumber(rows, columns);
    }
  }

  backtrack(0, 0);
};