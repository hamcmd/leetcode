import { search } from "./binary-search";

test( "binary-search", () => {
  expect( search( [ 1, 2, 3, 4, 5, 6, 7 ], 1 ) ).toBe( 0 );
  expect( search( [ 1, 2, 3, 4, 5, 6, 7 ], 2 ) ).toBe( 1 );
  expect( search( [ 1, 2, 3, 4, 5, 6, 7 ], 3 ) ).toBe( 2 );
  expect( search( [ 1, 2, 3, 4, 5, 6, 7 ], 4 ) ).toBe( 3 );
  expect( search( [ 1, 2, 3, 4, 5, 6, 7 ], 5 ) ).toBe( 4 );
  expect( search( [ 1, 2, 3, 4, 5, 6, 7 ], 6 ) ).toBe( 5 );
  expect( search( [ 1, 2, 3, 4, 5, 6, 7 ], 7 ) ).toBe( 6 );
  expect( search( [ 1, 2, 3, 4, 5, 6, 7 ], 8 ) ).toBe( -1 );
  expect( search( [ 1, 2, 3, 4, 5, 6, 7 ], 0 ) ).toBe( -1 );
  expect( search( [ 1, 2, 3, 4, 5, 6, 7 ], 3.5 ) ).toBe( -1 );
  expect( search( [ 1, 2, 3, 4, 5, 6, 7 ], 2.5 ) ).toBe( -1 );
  expect( search( [ 1, 2, 3, 4, 5, 6, 7 ], 4.5 ) ).toBe( -1 );
  expect( search( [ 1, 2, 3, 4, 5, 6, 7 ], 6.5 ) ).toBe( -1 );
  expect( search( [ 1, 2, 3, 4, 5, 6, 7 ], 1.5 ) ).toBe( -1 );
  expect( search( [ 1, 2, 3, 4, 5, 6, 7 ], 5.5 ) ).toBe( -1 );
} );
