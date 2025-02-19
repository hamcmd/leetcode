# Generate Parentheses

__Question__: [LeetCode 22](https://leetcode.com/problems/generate-parentheses/)
__Difficulty__: Medium
__Solution__: [NeetCode](https://youtu.be/s9fokUqJ76A)

## Explanation

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

## Examples

__Input__: `n = 3`
__Output__: `["((()))","(()())","(())()","()(())","()()()"]`

__Input__: `n = 1`
__Output__: `["()"]`

## Constraints

`1 <= n <= 8`

## Solution Notes

1. We can solve this problem by using a recursive approach.
2. We create a helper function that takes the current string, the number of open parentheses, the number of close parentheses, and the maximum number of parentheses.
3. If the length of the current string is equal to `2 * n`, we add the current string to the result list.
4. If the number of open parentheses is less than `n`, we add an open parenthesis to the current string and call the helper function recursively.
5. If the number of close parentheses is less than the number of open parentheses, we add a close parenthesis to the current string and call the helper function recursively.
6. We call the helper function with an empty string, 0 open parentheses, 0 close parentheses, and n.
7. We return the result list.
