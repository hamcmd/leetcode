# Find Minimum in Rotated Sorted Array
__Question:__ [Leetcode 153](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)
__Difficulty:__ Medium
__Solution:__ [NeetCode](https://youtu.be/nIVW4P8b1VA)

## Description
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array `nums = [0,1,2,4,5,6,7]` might become:

`[4,5,6,7,0,1,2]` if it was rotated 4 times.
`[0,1,2,4,5,6,7]` if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

_You must write an algorithm that runs in O(log n) time._

## Examples
__Input__: `nums = [3,4,5,1,2]`
__Output__: 1
__Explanation__: The original array was `[1,2,3,4,5]` rotated 3 times.

__Input__: `nums = [4,5,6,7,0,1,2]`
__Output__: 0
__Explanation__: The original array was `[0,1,2,4,5,6,7]` and it was rotated 4 times.

__Input__: `nums = [11,13,15,17]`
__Output__: 11
__Explanation__: The original array was `[11,13,15,17]` and it was rotated 4 times.

# Constraints:
- `n == nums.length`
- `1 <= n <= 5000`
- `-5000 <= nums[i] <= 5000`
- All the integers of nums are unique.
- nums is sorted and rotated between 1 and n times.

## Solution Notes
1. Save the left and right pointers as 0 and the length of the array respectively.
2. Set min to the maximum integer value.
4. If the midpoint is greater than the right pointer, move the left pointer to the midpoint + 1.
5. If the midpoint is less than the right pointer, move the right pointer to the midpoint and update min to be the midpoint.
6. Continue this process until the left pointer is less than the right pointer.
7. Return the minimum element.
