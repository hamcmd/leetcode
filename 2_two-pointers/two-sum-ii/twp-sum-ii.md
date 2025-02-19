# Two Sum II - Input Array Is Sorted

__Question__: [LeetCode # 167](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)
__Difficulty__: Medium
__Solution__: [NeetCode](https://youtu.be/cQ1Oz4ckceM)

## Description

Given a __1-indexed array__ of integers numbers that is already sorted in __non-decreasing order__, find two numbers such that they add up to a specific target number. Let these two numbers be `numbers[index1]` and `numbers[index2]` where `1 <= index1 < index2 <= numbers.length`.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is __exactly one solution__. You may not use the same element twice.

___Your solution must use only constant extra space.___

## Examples

__Input__: `numbers = [2,7,11,15], target = 9`
__Output__: `[1,2]`
__Explanation__: `The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2]`.

__Input__: `numbers = [2,3,4], target = 6`
__Output__: `[1,3]`
__Explanation__: `The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3]`.

__Input__: `numbers = [-1,0], target = -1`
__Output__: `[1,2]`
__Explanation__: `The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2]`.

## Constraints

`2 <= numbers.length <= 3 * 104`
`-1000 <= numbers[i] <= 1000` numbers is sorted in non-decreasing order.
`-1000 <= target <= 1000`
The tests are generated such that there is exactly one solution.

## Solution Notes

1. We can use the two-pointer approach to solve this problem.
2. We use two pointers, one at the start of the array and the other at the end of the array.
3. We compare the sum of the elements at the start and end pointers with the target.
4. If the sum is equal to the target, we return the indices of the two elements.
5. If the sum is less than the target, we increment the start pointer.
6. If the sum is greater than the target, we decrement the end pointer.
7. We continue this process until the pointers cross each other or we find a solution(guaranteed in this problem's context).

The complexity of this approach would be O(n) since we are using two pointers to traverse the array only once.
