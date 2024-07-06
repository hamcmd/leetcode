# Top K Frequent Elements
__Question__: [LeetCode # 347](https://leetcode.com/problems/top-k-frequent-elements)
__Difficulty__: Medium
__Solutions__: [NeetCode](https://www.youtube.com/watch?v=YPTqKIgVk-k&ab_channel=NeetCode)

## Description
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

## Examples
Input: `nums = [1,1,1,2,2,3], k = 2`
Output: `[1,2]`

Input: `nums = [1], k = 1`
Output: `[1]`

## Constraints:
`1 <= nums.length <= 105`
`-104 <= nums[i] <= 104`
`k` is in the range `[1, the number of unique elements in the array]`.
It is __guaranteed__ that the answer is __unique__.

## Solution Notes:
- We can use a `hashmap` to store the frequency of each element in the array. The key will be the element and the value will be the frequency.
  - Sorting the hashmap by value will give us the elements in descending order of frequency and last k elements can be selected. This would take `O(nlogn)` time.
  - A better approach would be to use `bucket sort`. We can create a `list of lists` where the index of the list will represent the frequency of the element. The element will be added to the list at the index equal to its frequency. This list can be filled in `O(n)` time and then we can iterate from the end of the list to get the `k most frequent` elements.
