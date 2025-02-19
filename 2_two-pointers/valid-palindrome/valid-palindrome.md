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

## Solution Notes

1. We can use the two-pointer approach to solve this problem.
2. First, we convert the string to lowercase and remove all non-alphanumeric characters.
3. We use two pointers, one at the start of the string and the other at the end of the string.
4. We compare the characters at the start and end pointers.
5. If the characters are equal, we increment the start pointer and decrement the end pointer.
6. If the characters are not equal, we return false.
7. If the pointers cross each other, we return true.
