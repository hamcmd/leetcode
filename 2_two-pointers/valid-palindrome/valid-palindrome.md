# Valid Palindrome
__Question__: [LeetCode # 125](https://leetcode.com/problems/valid-palindrome/)
__Difficulty__: Easy
__Solution__: [NeetCode](https://youtu.be/jJXJ16kPFWg)

## Description
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

## Examples
__Input__: `s = "A man, a plan, a canal: Panama"`
__Output__: `true`
__Explanation__: `"amanaplanacanalpanama"` is a palindrome.

__Input__: `s = "race a car"`
__Output__: `false`
__Explanation__: `"raceacar"` is not a palindrome.

__Input__: s = `" "`
__Output__: `true`
__Explanation__: s is an empty string `""` after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.

## Constraints
1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
