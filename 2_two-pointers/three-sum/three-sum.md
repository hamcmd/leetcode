# 3Sum

__Question__: [LeetCode # 15](https://leetcode.com/problems/3sum/)
__Difficulty__: Medium
__Solution__: [NeetCode](https://youtu.be/jzZsG8n2R9A)

## Description

Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

___Notice that the solution set must not contain duplicate triplets.___

## Examples

__Input__: `nums = [-1,0,1,2,-1,-4]`
__Output__: `[[-1,-1,2],[-1,0,1]]`
__Explanation__:
`nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0`
`nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0`
`nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0`
The distinct triplets are `[-1,0,1]` and `[-1,-1,2]`.
___Notice that the order of the output and the order of the triplets does not matter.___

__Input__: `nums = [0,1,1]`
__Output__: `[]`
__Explanation__: The only possible triplet does not sum up to 0.

__Input__: `nums = [0,0,0]`
__Output__: `[[0,0,0]]`
__Explanation__: The only possible triplet sums up to 0.

## Constraints

`3 <= nums.length <= 3000`
`-105 <= nums[i] <= 105`

## Solution Notes

1. If we lock the first element of the triplet, the problem reduces to finding two numbers that sum up to the negative of the first element. Which is exactly the problem we solved in Two Sum II/Two Sum.
2. We can use the two-pointer approach to solve this problem.
3. We sort the array and iterate over the array.
4. For each element, we set the left pointer to the next element and the right pointer to the last element.
5. We compare the sum of the elements at the left and right pointers with the negative of the current element.
6. If the sum is equal to the negative of the current element, we add the triplet to the result.
    - Increment the left pointer and decrement the right pointer to avoid duplicates.
7. If the sum is less than the negative of the current element, we increment the left pointer.
8. If the sum is greater than the negative of the current element, we decrement the right pointer.
9. We continue this process until the pointers cross each other or we find a solution(guaranteed in this problem's context).
