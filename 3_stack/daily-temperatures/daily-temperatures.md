# Daily Temperatures
__Question__: [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)
__Difficulty__: Medium
__Solution__: [NeetCode](https://www.youtube.com/watch?v=cTBiBSnjO3c&ab_channel=NeetCode)

## Description
Given an array of integers temperatures represents the daily temperatures, return an array answer such that `answer[i]` is the number of days you have to wait after the `ith` day to get a warmer temperature. If there is no future day for which this is possible, keep `answer[i] == 0` instead.

## Examples

__Input__: `temperatures = [73,74,75,71,69,72,76,73]`
__Output__: `[1,1,4,2,1,1,0,0]`

__Input__: `temperatures = [30,40,50,60]`
__Output__: `[1,1,1,0]`

__Input__: `temperatures = [30,60,90]`
__Output__: [1,1,0]`


## Constraints:
`1 <= temperatures.length <= 105`
`30 <= temperatures[i] <= 100`
