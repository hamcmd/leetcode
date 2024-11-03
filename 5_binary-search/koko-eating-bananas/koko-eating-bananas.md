# Koko Eating Bananas
__Question__: [Leetcode 875](https://leetcode.com/problems/koko-eating-bananas)
__Difficulty__: Medium
__Solution__: [NeetCode](https://youtu.be/U2SozAs9RzA)

# Description
Koko loves to eat bananas. There are `n` piles of bananas, the ith pile has `piles[i] `bananas. The guards have gone and will come back in `h` hours.

Koko can decide her bananas-per-hour eating speed of `k`. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than `k` bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

_Return the minimum integer `k` such that she can eat all the bananas within `h` hours._

## Examples
__Input__: `piles = [3,6,7,11]`, `h = 8`
__Output__: 4

__Input__: `piles = [30,11,23,4,20]`, `h = 5`
__Output__: 30

__Input__: `piles = [30,11,23,4,20]`, `h = 6`
__Output__: 23

## Constraints
`1 <= piles.length <= 104`
`piles.length <= h <= 109`
`1 <= piles[i] <= 109`

## Solution Notes
- We solve this problem using a binary search approach.
- We save the left and right pointers as 1 and the maximum pile of bananas respectively.
- While the left pointer is less than or equal to the right pointer:
    - Calculate the mid speed.
    - Calculate the hours it will take to eat all the bananas at the mid speed.
    - If the hours are less than or equal to the given hours, update the right pointer to the mid speed.
    - If the hours are greater than the given hours, update the left pointer to the mid speed + 1.
