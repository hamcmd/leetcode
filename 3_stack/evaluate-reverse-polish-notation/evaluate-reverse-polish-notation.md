# Evaluate Reverse Polish Notation

__Question__: [LeetCode 150](https://leetcode.com/problems/evaluate-reverse-polish-notation/)
__Difficulty__: Medium
__Solution__: [NeetCode](https://www.youtube.com/watch?v=iu0082c4HDE&ab_channel=NeetCode)

## Description

You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

### Note that

- The valid operators are `+`, `-`, `*`, and `/`.
- Each operand may be an integer or another expression.
- The division between two integers always __truncates toward zero__.
- There will not be any division by zero.
- The input represents a valid arithmetic expression in a reverse polish notation.
- The answer and all the intermediate calculations can be represented in a __32-bit integer__.

## Examples

__Input__: `tokens = ["2","1","+","3","*"]`
__Output__: `9`
__Explanation__: `((2 + 1) * 3) = 9`

__Input__: `tokens = ["4","13","5","/","+"]`
__Output__: `6`
__Explanation__: `(4 + (13 / 5)) = 6`

__Input__: `tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]`
__Output__: `22`
__Explanation__:
`((10 * (6 / ((9 + 3) * -11))) + 17) + 5`
`= ((10 * (6 / (12 * -11))) + 17) + 5`
`= ((10 * (6 / -132)) + 17) + 5`
`= ((10 * 0) + 17) + 5`
`= (0 + 17) + 5`
`= 17 + 5`
`= 22`

## Constraints

`1 <= tokens.length <= 104`
`tokens[i]` is either an operator: `+`, `-`, `*`, or `/`, or an integer in the range `[-200, 200]`.

## Solution Notes

- We can use a stack to keep track of the operands.
- If we encounter an operator, we pop the top two operands from the stack, perform the operation, and push the result back onto the stack.
- We continue this process until we have processed all the tokens. The result will be the __only element left in the stack__ that we pop and return.
- Time Complexity: `O(n)`
- Space Complexity: `O(n)`
