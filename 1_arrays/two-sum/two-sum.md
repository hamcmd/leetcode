
# Two Sum

**Question**: [LeetCode # 1](https://leetcode.com/problems/two-sum/)
**Difficulty**: Easy
**Solution**: [NeetCode](https://www.youtube.com/watch?v=KLlXCFG5TnA&ab_channel=NeetCode)

## Description

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

## Examples

**Input**: `nums = [2,7,11,15]`, `target = 9`
**Output**: [0,1]
**Explanation**: Because `nums[0] + nums[1] == 9`, we return `[0, 1]`.

**Input**: `nums = [3,2,4]`, `target = 6`
**Output**: `[1,2]`

**Input**: `nums = [3,3]`, `target = 6`
**Output**: `[0,1]`

## Constraints

`2 <= nums.length <= 104`
`-109 <= nums[i] <= 109`
`-109 <= target <= 109`

Only one valid answer exists.

## Solution Notes

1. Brute force solution is to use two loops to compare each element with every other element. This will take `O(n^2)` time complexity.
2. **(Recommended)** Via the `One Pass Approach`, we can use a hashmap to store the difference between the target and the current element. If the difference is already in the hashmap, return the indices of the current element and the difference. This will take `O(n)` time complexity.
