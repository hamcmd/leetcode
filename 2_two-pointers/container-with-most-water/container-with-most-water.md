# Container With Most Water

__Question__: [LeetCode # 11](https://leetcode.com/problems/container-with-most-water/)
__Difficulty__: Medium
__Solution__: [NeetCode](https://youtu.be/UuiTKBwPgAo)

## Description

You are given an integer array height of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `ith` line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

___Notice that you may not slant the container.___

## Examples

__Input__: height = [1,8,6,2,5,4,8,3,7]
__Output__: 49

__Input__: height = [1,1]
__Output__: 1

## Constraints

`n == height.length`
`2 <= n <= 105`
`0 <= height[i] <= 104`

## Solution Notes

1. We can use the two-pointer approach to solve this problem.
2. We use two pointers, one at the start of the array and the other at the end of the array.
3. We calculate the area between the two pointers.
4. The area is calculated as the minimum of the two heights multiplied by the distance between the two pointers.
5. We compare the area with the maximum area found so far.
6. If the area is greater than the maximum area found so far, we update the maximum area.
7. If the height at the start pointer is less than the height at the end pointer, we increment the start pointer.
8. If the height at the start pointer is greater than the height at the end pointer, we decrement the end pointer.
9. We continue this process until the pointers cross each other.
10. We return the maximum area found so far.

The complexity of this approach would be `O(n)` since we are using two pointers to traverse the array only once.
