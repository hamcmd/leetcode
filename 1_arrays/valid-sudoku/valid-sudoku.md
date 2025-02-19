# Valid Sudoku

__Question__: [LeetCode # 36](https://leetcode.com/problems/valid-sudoku/)
__Difficulty__: Medium
__Solution__: [NeetCode](https://www.youtube.com/watch?v=TjFXEUCMqI8&ab_channel=NeetCode)

## Description

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

- Each row must contain the digits 1-9 without repetition.
- Each column must contain the digits 1-9 without repetition.
- Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

__Note__: _A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules._

## Examples

__Input__: `board =
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]`
__Output__: `true`

__Input__: `board =
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]`
__Output__: `false`

__Explanation__: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

## Solution Notes

1. We can use a hashmap (or a set) to store the values of each row, column, and sub-box. If the value is already in the hashmap, return false.
2. We loop over the board by using two indexed loops and check the values of each row, column, and sub-box.
3. Looping over rows and columns is trivial. We can use the formula `box_index = Math.floor(row / 3) * 3 + Math.floor(column / 3)` to get the index of the sub-box. `Math.floor(row / 3) * 3` returns the row index of the sub-box, and `Math.floor(column / 3)` returns the column index of the sub-box. The sum of these gives us a unique index for each sub-box.
4. If the value is found in any of the above hashsets, return false. Otherwise, return true.
