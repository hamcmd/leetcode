import { twoSum } from "./twp-sum-ii";

test( "two-sum-ii", () => {
  expect( twoSum( [ 2, 7, 11, 15 ], 9 ) ).toEqual( [ 1, 2 ] );
  expect( twoSum( [ 2, 3, 4 ], 6 ) ).toEqual( [ 1, 3 ] );
  expect( twoSum( [ -1, 0 ], -1 ) ).toEqual( [ 1, 2 ] );
  expect( twoSum( [ 5, 25, 75 ], 100 ) ).toEqual( [ 2, 3 ] );
} );
