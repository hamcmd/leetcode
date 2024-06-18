import { containsDuplicate } from "./containts-duplicate"

test("contains-duplicate", function() {
  const arrays = [
    {arr: [1,2,3,1], isDuplicate: true},
    {arr: [1,2,3,4], isDuplicate: false},
    {arr: [1,1,1,3,3,4,3,2,4,2], isDuplicate: true},
  ]

  for( const data of arrays ) {
    expect(containsDuplicate(data.arr)).toEqual(data.isDuplicate)
  }
})
