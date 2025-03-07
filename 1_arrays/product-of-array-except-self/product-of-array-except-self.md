# Product of Array Except Self

__Question__: [LeetCode 238](https://leetcode.com/problems/product-of-array-except-self/)
__Difficulty__: Medium
__Solutions__: [NeetCode](https://youtu.be/bNvIQI2wAjk)

## Description

Given an integer array nums, return an array answer such that `answer[i]` is equal to the product of all the elements of nums except `nums[i]`. The product of any prefix or suffix of nums is guaranteed to fit in a `32-bit integer`.

You must write an algorithm that runs in __O(n) time and without using the division operation__.

## Examples

__Input__: `nums = [1,2,3,4]`
__Output__: `[24,12,8,6]`

__Input__: `nums = [-1,1,0,-3,3]`
__Output__: `[0,0,9,0,0]`

## Constraints

`2 <= nums.length <= 105`
`-30 <= nums[i] <= 30`
The product of any prefix or suffix of nums is guaranteed to fit in a `32-bit integer`.

### Follow up

Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

## Solution Notes

1. We can solve this problem by using two arrays to store the prefix and postfix products of the elements in the array.
2. We initialize the prefix and postfix variables to 1.
3. We iterate through the array and store the prefix product of the elements in the output array.
4. We then iterate through the array in reverse and store the postfix product of the elements in the output array.
5. We return the output array.
