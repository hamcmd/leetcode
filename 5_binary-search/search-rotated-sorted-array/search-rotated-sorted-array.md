# Search in Rotated Sorted Array

__Question__: [Leetcode 33](https://leetcode.com/problems/search-in-rotated-sorted-array/)
__Difficulty__: Medium
__Solution__: [NeetCode](https://youtu.be/U8XENwh8Oy8)

## Description

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

_You must write an algorithm with O(log n) runtime complexity._

## Examples

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Input: nums = [1], target = 0
Output: -1

## Constraints

- `1 <= nums.length <= 5000`
- `-104 <= nums[i] <= 104`
- All values of nums are unique.
- nums is an ascending array that is possibly rotated.
- `-104 <= target <= 104`

## Solution Notes

1. Save the left and right pointers as 0 and the length of the array respectively.
2. While the left pointer is less than or equal to the right pointer:
    - Calculate the mid index.
    - If the mid element is equal to the target, return the mid index.
    - If the left element is less than the mid element:
        - If the target is greater than the left element and less than the mid element, move the right pointer to the mid - 1.
        - Otherwise, move the left pointer to the mid + 1.
    - If the left element is greater than the mid element:
        - If the target is greater than the mid element and less than the right element, move the left pointer to the mid + 1.
        - Otherwise, move the right pointer to the mid - 1.
3. If the target is not found, return -1.
