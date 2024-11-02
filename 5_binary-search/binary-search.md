# Binary Search
__Question__: [Leetcode 704](https://leetcode.com/problems/binary-search/)
__Difficulty__: Easy
__Solution__: [NeetCode](https://www.youtube.com/watch?v=s4DPM8ct1pI)

## Description
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

## Examples
__Input__: `nums = [-1,0,3,5,9,12]`, `target = 9`
__Output__: 4
__Explanation__: 9 exists in nums and its index is 4

__Input__: `nums = [-1,0,3,5,9,12]`, `target = 2`
__Output__: -1
__Explanation__: 2 does not exist in nums so return -1


## Constraints:
1. `1 <= nums.length <= 104`
2. `-104 < nums[i], target < 104`
3. All the integers in nums are unique.
4. nums is sorted in ascending order.

## Solution Notes
1. Save the left and right pointers as 0 and the length of the array respectively.
2. While the left pointer is less than or equal to the right pointer:
    - Calculate the mid index.
    - If the mid element is equal to the target, return the mid index.
    - If the mid element is less than the target, move the left pointer to mid + 1.
    - If the mid element is greater than the target, move the right pointer to mid - 1.
3. If the target is not found, return -1.
