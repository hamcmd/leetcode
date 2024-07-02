# Group Anagrams
__Question__: [LeetCode # 49](https://leetcode.com/problems/group-anagrams)
__Difficulty__: Medium
__Solutions__: [NeetCode](https://www.youtube.com/watch?v=vzdNOK2oB2E)

## Description
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

## Examples
__Input__: `strs = ["eat","tea","tan","ate","nat","bat"]`
__Output__: `[["bat"],["nat","tan"],["ate","eat","tea"]]`

__Input__: `strs = [""]`
__Output__: `[[""]]`

__input__: `strs = ["a"]`
__Output__: `[["a"]]`

__Input__: `strs = ["a"]`
__Output__: `[["a"]]`

## Constraints:
`1 <= strs.length <= 104`
`0 <= strs[i].length <= 100`
`strs[i]` consists of lowercase English letters.

## Solution Notes
1. We can use a hash map to store the sorted version of each string. If the sorted version is already in the hash map, we add the string to the list of anagrams. Otherwise, we create a new list of anagrams. The complexity of this solution is `O(n * k * 26)` where `n` is the number of strings, `k` is the average length of the strings, and `26` is the number of letters in the alphabet.
2. We can also sort all the strings in the array and then sort the array. This will group all the anagrams together.
