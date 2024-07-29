# Best Time to Buy and Sell Stock
__Question__: [Leetcode 121](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
__Difficulty__: Easy
__Solution__: [NeetCode](https://youtu.be/1pkOgXD63yU)

## Description
You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

## Examples
__Input__: `prices = [7,1,5,3,6,4]`
__Output__: __5__
__Explanation__: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = `6-1 = 5`.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

__Input__: `prices = [7,6,4,3,1]`
__Output__: __0__
__Explanation__: In this case, no transactions are done and the max profit = 0.


## Constraints
`1 <= prices.length <= 105`
`0 <= prices[i] <= 104`

## Solution Notes
- We solve this problem using a sliding window approach.
- We keep track of the minimum price we have seen so far and the maximum profit we can make.
- We iterate through the array while starting with the left pointer at 0 and right pointer at 1 index.
- We calculate the profit by subtracting the minimum price from the current price.
- If the profit is greater than the maximum profit, we update the maximum profit and move the right pointer.
- If the profit is less than the maximum profit, we move the left pointer to the right pointer and increment the right pointer.
- We continue this process until we reach the end of the array.


