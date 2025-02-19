# Valid Parentheses

__Question__: [LeetCode 20](https://leetcode.com/problems/valid-parentheses/)
__Difficulty__: Easy
__Solution__: [NeetCode](https://youtu.be/WTzjTskDFMg)

## Description

Given a string s containing just the characters `(`, `)`, `{`, `}`, `[` and `]`, determine if the input string is valid.

An input string is valid if:

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.

## Examples

__Input__: `s = "()"`
__Output__: `true`

__Input__: `s = "()[]{}"`
__Output__: `true`

__Input__: `s = "(]"`
__Output__: `false`

## Constraints

`1 <= s.length <= 104`
`s consists of parentheses only '()[]{}'.`

## Solution Notes

- We can use a stack to keep track of the opening brackets.
- If we encounter a closing bracket, we check if the stack is empty or if the top of the stack is not the corresponding opening bracket.
- If the stack is empty or the top of the stack is not the corresponding opening bracket, then the input string is not valid.
- Time Complexity: `O(n)`
- Space Complexity: `O(n)`
