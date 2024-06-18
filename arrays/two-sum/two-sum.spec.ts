import { twoSum } from "./two-sum";

test( "two-sum", function() {
  expect( twoSum( [ 2, 7, 11, 15 ], 9 ) ).toEqual( [ 0, 1 ] );
  expect( twoSum( [ 2, 7, 11, 15 ], 26 ) ).toEqual( [ 2, 3 ] );
  expect( twoSum( [ 3, 2, 4 ], 6 ) ).toEqual( [ 1, 2 ] );
  expect( twoSum( [ 3, 3, ], 6 ) ).toEqual( [ 0, 1 ] );
} );
