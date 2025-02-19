# Longest Consecutive Sequence

__Question__: [LeetCode # 128](https://leetcode.com/problems/longest-consecutive-sequence/)
__Difficulty__: Medium
__Solution__:

## Description

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.

## Examples

__Input__: `nums = [100,4,200,1,3,2]`
__Output__:`4`
__Explanation__: The longest consecutive elements sequence is `[1, 2, 3, 4]`. Therefore its length is `4`.

__Input__: `nums = [0,3,7,2,5,8,4,6,0,1]`
__Output__: `9`

## Constraints

`0 <= nums.length <= 105`
`-109 <= nums[i] <= 109`

## Solution Notes

1. We can use a hashmap or a set(used in this solution) to store the values of each element in the array.
2. We check if `currentElement + 1` is in the set. If it is, we continue to the next element.
3. If `currentElement + 1` is not in the set, we start counting the length of the sequence from the current element backwards.
4. While counting, we check if the `currentElement - 1` is in the set. If it is, we continue counting and increment the counter.
5. If `currentElement - 1` is not in the set, we stop counting and update the maximum length of the sequence.
6. We continue this process for all elements in the array and return the maximum length of the sequence.
