import { minEatingSpeed } from "./koko-eating-bananas";

test( "koko-eating-bananas", () => {
  expect( minEatingSpeed( [ 3, 6, 7, 11 ], 8 ) ).toBe( 4 );
} );
