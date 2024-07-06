# Valid Anagram
**Question**: [242. Valid Anagram](https://leetcode.com/problems/valid-anagram/)
**Difficulty**: Easy
**Solution**: [NeetCode](https://www.youtube.com/watch?v=9UtInBqnCgA&ab_channel=NeetCode)

## Description
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


## Examples
**Input**: `s = "anagram"`, `t = "nagaram"`
**Output**: `true`

**Input**: `s = "rat"`, `t = "car"`
**Output**: `false`


## Constraints
`1 <= s.length, t.length <= 5 * 104`
`s` and `t` consist of lowercase English letters.

## Solution Notes
1. Sort both the strings and compare them. If they are equal, return true. This will take `O(nlogn)` time complexity.

2. **(Recommended)** Use a hash map to store the frequency of each character in the first string. Then iterate through the second string and decrement the frequency of each character. If frequency of any character turns out to be zero during the polling iteration, return false. This will take `O(n)` time complexity.

## Follow up:
What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
