# Contains Duplicate:
Question [Leetcode # 217](https://leetcode.com/problems/contains-duplicate)

## Description
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

## Examples

Input: `nums = [1,2,3,1]`
Output: `true`

Input: `nums = [1,2,3,4]`
Output: `false`

Input: `nums = [1,1,1,3,3,4,3,2,4,2]`
Output: `true`


## Constraints
`1 <= nums.length <= 105`
`-109 <= nums[i] <= 109`

## Solution Notes
1. Brute force solution is to use two loops to compare each element with every other element. This will take `O(n^2)` time complexity.
2. A better solution is to sort the array and then compare each element with the next element. This will take `O(nlogn)` time complexity.
3. A better solution is to use a hash set to store the elements as we iterate through the array. If we find an element that is already in the hash set, we return true. This will take `O(n)` time complexity.
