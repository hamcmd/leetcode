import { search } from "./search-rotated-sorted-array";

test( "search-rotated-sorted-array", () => {
  expect( search( [ 4, 5, 6, 7, 0, 1, 2 ], 0 ) ).toBe( 4 );
  expect( search( [ 4, 5, 6, 7, 0, 1, 2 ], 3 ) ).toBe( -1 );
  expect( search( [ 1 ], 0 ) ).toBe( -1 );
  expect( search( [ 1 ], 1 ) ).toBe( 0 );
  expect( search( [ 1, 3 ], 1 ) ).toBe( 0 );
  expect( search( [ 1, 3 ], 3 ) ).toBe( 1 );
  expect( search( [ 3, 1 ], 1 ) ).toBe( 1 );
  expect( search( [ 3, 1 ], 3 ) ).toBe( 0 );
  expect( search( [ 3, 4, 5, 1, 2 ], 1 ) ).toBe( 3 );
  expect( search( [ 3, 4, 5, 1, 2 ], 2 ) ).toBe( 4 );
  expect( search( [ 3, 4, 5, 1, 2 ], 3 ) ).toBe( 0 );
  expect( search( [ 3, 4, 5, 1, 2 ], 4 ) ).toBe( 1 );
  expect( search( [ 3, 4, 5, 1, 2 ], 5 ) ).toBe( 2 );
  expect( search( [ 3, 4, 5, 1, 2 ], 6 ) ).toBe( -1 );
} );
