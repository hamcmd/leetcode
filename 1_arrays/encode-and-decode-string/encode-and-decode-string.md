# String Encode and Decode

__Question__: [NeetCode](https://neetcode.io/problems/string-encode-and-decode)
__Difficulty__: Medium
__Solutions__: [NeetCode](https://www.youtube.com/watch?v=B1k_sxOSgv8&ab_channel=NeetCode)

## Description

Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

Please implement encode and decode

## Examples

`Input: ["neet","code","love","you"]`
`Output:["neet","code","love","you"]`

`Input: ["we","say",":","yes"]`
`Output: ["we","say",":","yes"]`

## Constraints

`0 <= strs.length < 100`
`0 <= strs[i].length < 200`
`strs[i] contains only UTF-8 characters.`

## Solution Notes

- The idea is to encode the list of strings into a single string by concatenating the strings with a delimiter. But the `string can have any character`. We can use a `combination of the length of the string and a special character` as a delimiter in the encoding function.
- While decoding, we can use the length of the string to extract the string from the encoded string. The trick is to `remember that the length of the string can be more than one digit`, so we need to handle that case as well.
- Both encode and decode operations take `O(n)` time complexity, `where n is the number of strings in the list`.
