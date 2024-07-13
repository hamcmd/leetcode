import { trap } from "./trapping-rain-water";

test( "trapping-rain-water", () => {
  // Test case 1
  let height = [ 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 ];
  let result = trap( height );

  expect( result ).toBe( 6 );

  // Test case 2
  height = [ 4, 2, 0, 3, 2, 5 ];
  result = trap( height );
  expect( result ).toBe( 9 );

  // Test case 3
  height = [ 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 ];
  result = trap( height );
  expect( result ).toBe( 6 );

  // Test case 4
  height = [ 4, 2, 0, 3, 2, 5 ];
  result = trap( height );
  expect( result ).toBe( 9 );
} );
