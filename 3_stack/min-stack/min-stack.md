# Min Stack

__Question__: [LeetCode 155](https://leetcode.com/problems/min-stack/)
__Difficulty__: Medium
__Solution__: [NeetCode](https://youtu.be/qkLl7nAwDPo)

## Description

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

- `MinStack()` initializes the stack object.
- void `push(int val)` pushes the element val onto the stack.
- void `pop()` removes the element on the top of the stack.
- int `top()` gets the top element of the stack.
- int `getMin()` retrieves the minimum element in the stack.
- You must implement a solution with `O(1)` time complexity for each function.

## Examples

__Input__: `["MinStack","push","push","push","getMin","pop","top","getMin"]`
`[[],[-2],[0],[-3],[],[],[],[]]`

__Output__: `[null,null,null,null,-3,null,0,-2]`

__Explanation__:
`MinStack minStack = new MinStack();`
`minStack.push(-2);`
`minStack.push(0);`
`minStack.push(-3);`
`minStack.getMin(); // return -3`
`minStack.pop();`
`minStack.top();    // return 0`
`minStack.getMin(); // return -2`

## Constraints

`-231 <= val <= 231 - 1`
Methods pop, top and getMin operations will always be called on non-empty stacks
At most `3 * 104` calls will be made to `push`, `pop`, `top`, and `getMin`.

## Solution Notes

- We can use two stacks to keep track of the elements and the minimum element.
- When we push an element onto the stack, we also push the minimum element onto the minimum stack.
- When we pop an element from the stack, we also pop the minimum element from the minimum stack.
- Time Complexity: `O(1)`
- Space Complexity: `O(n)`
