import { topKFrequent } from "./top-k-frequent-elements";

test( "top-k-frequent-elements", () => {
  expect( topKFrequent( [ 1, 1, 1, 2, 2, 3 ], 2 ) ).toEqual( [ 1, 2 ] );
  expect( topKFrequent( [ 1 ], 1 ) ).toEqual( [ 1 ] );
  expect( topKFrequent( [ 1, 2 ], 2 ) ).toEqual( [ 1, 2 ] );
  expect( topKFrequent( [ 4, 1, -1, 2, -1, 2, 3 ], 2 ) ).toEqual( [ -1, 2 ] );
} );
