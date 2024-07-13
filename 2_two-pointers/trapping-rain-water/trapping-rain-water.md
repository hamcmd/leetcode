# Trapping Rain Water
__Problem__: [LeetCode](https://leetcode.com/problems/trapping-rain-water/)
__Difficulty__: Hard
__Solution__: [NeetCode](https://www.youtube.com/watch?v=ZI2z5pq0TqA&t=615s&ab_channel=NeetCode)

## Description
Given n non-negative integers representing an elevation map where the width of each bar is __1__, compute how much water it can trap after raining.

## Examples
__Input__: `height = [0,1,0,2,1,0,1,3,2,1,2,1]`
__Output__: `6`
__Explanation__: The above elevation map (black section) is represented by array `[0,1,0,2,1,0,1,3,2,1,2,1]`. In this case, __6__ units of rain water (blue section) are being trapped.

__Input__: `height = [4,2,0,3,2,5]`
__Output__: `9`

## Constraints:
`n == height.length`
`1 <= n <= 2 * 104`
`0 <= height[i] <= 105`

## Solution Notes
- The idea is to find the maximum height of a bar to the left and right of the current bar.
- The amount of water that can be trapped on top of the current bar is the minimum of the maximum height of bars to the left and right minus the height of the current bar.
- The total amount of water that can be trapped is the sum of the amount of water that can be trapped on top of each bar.
- We can use two pointers to keep track of the maximum height of bars to the left and right of the current bar.
- Why Two Pointers work? Because the amount of water that can be trapped on top of the current bar is determined by the minimum of the maximum height of bars to the left and right of the current bar. If the maximum height of bars to the left is less than the maximum height of bars to the right, then the amount of water that can be trapped on top of the current bar is determined by the maximum height of bars to the left. If the maximum height of bars to the left is greater than the maximum height of bars to the right, then the amount of water that can be trapped on top of the current bar is determined by the maximum height of bars to the right.
- Time Complexity: `O(n)`
- Space Complexity: `O(1)`
