# Search a 2D Matrix
__Question__: [Leetcode 74](https://leetcode.com/problems/search-a-2d-matrix/)
__Difficulty__: Medium
__Solution__: [NeetCode](https://www.youtube.com/watch?v=FOa55B9Ikfg)

## Description
You are given an m x n integer matrix matrix with the following two properties:

1. Each row is sorted in non-decreasing order.
2. The first integer of each row is greater than the last integer of the previous row.
3. Given an integer target, return true if target is in matrix or false otherwise.

__You must write a solution in O(log(m * n)) time complexity.__

## Examples
__Input__: `matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]`, `target = 3`
__Output__: `true`

__Input__: `matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]`, `target = 13`
__Output__: `false`

## Solution Notes
1. Save the left and right pointers as 0 and the length of the matrix respectively.
2. We calculate the rowIndex and colIndex using the formula `rowIndex = floor( mid / n )` and `colIndex = mid % n`.
3. If the element at the rowIndex and colIndex is equal to the target, return true.
4. If not, run the normal binary search algorithm to find the target using the rowIndex and colIndex to calculate the new midPoint.
