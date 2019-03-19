import { checkRow } from './../src/sudoku.js';
import { checkColumn } from './../src/sudoku.js';
import { checkBox } from './../src/sudoku.js';

describe('Sudoku', function() {

  it('should check row has no repeated numgbers', function() {
    var sudokuBoard = [
    // 0  1  2  3  4  5  6  7  8  i  j
      [7, 3, 5, 6, 1, 4, 8, 9, 2], //0
      [8, 4, 2, 9, 7, 3, 5, 6, 1], //1
      [9, 6, 1, 2, 8, 5, 3, 7, 4], //2
      [2, 8, 6, 3, 4, 9, 1, 5, 7], //3
      [4, 1, 3, 8, 5, 7, 9, 2, 6], //4
      [5, 7, 9, 1, 2, 6, 4, 3, 8], //5
      [1, 5, 7, 4, 9, 2, 6, 8, 3], //6
      [6, 9, 4, 7, 3, 8, 2, 1, 5], //7
      [3, 2, 8, 5, 6, 1, 7, 4, 9]  //8
    ];
    expect(checkRow(sudokuBoard)).toEqual(true);
  });

  it('should check column has no repeated numgbers', function() {
    var sudokuBoard = [
    // 0  1  2  3  4  5  6  7  8  i  j
      [7, 3, 5, 6, 1, 4, 8, 9, 2], //0
      [8, 4, 2, 9, 7, 3, 5, 6, 1], //1
      [9, 6, 1, 2, 8, 5, 3, 7, 4], //2
      [2, 8, 6, 3, 4, 9, 1, 5, 7], //3
      [4, 1, 3, 8, 5, 7, 9, 2, 6], //4
      [5, 7, 9, 1, 2, 6, 4, 3, 8], //5
      [1, 5, 7, 4, 9, 2, 6, 8, 3], //6
      [6, 9, 4, 7, 3, 8, 2, 1, 5], //7
      [3, 2, 8, 5, 6, 1, 7, 4, 9]  //8
    ];
    expect(checkColumn(sudokuBoard)).toEqual(true);
  });

  it('should check box has no repeated numgbers', function() {
    var sudokuBoard = [
    // 0  1  2  3  4  5  6  7  8  i  j
      [7, 3, 5, 6, 1, 4, 8, 9, 2], //0
      [8, 4, 2, 9, 7, 3, 5, 6, 1], //1
      [9, 6, 1, 2, 8, 5, 3, 7, 4], //2
      [2, 8, 6, 3, 4, 9, 1, 5, 7], //3
      [4, 1, 3, 8, 5, 7, 9, 2, 6], //4
      [5, 7, 9, 1, 2, 6, 4, 3, 8], //5
      [1, 5, 7, 4, 9, 2, 6, 8, 3], //6
      [6, 9, 4, 7, 3, 8, 2, 1, 5], //7
      [3, 2, 8, 5, 6, 1, 7, 4, 9]  //8
    ];
    expect(checkBox(sudokuBoard)).toEqual(true);
  });

});
