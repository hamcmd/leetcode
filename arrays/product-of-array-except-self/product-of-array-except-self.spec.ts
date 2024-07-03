import { productExceptSelf } from "./product-of-array-except-self";

test( "product-of-array-except-self", () => {
  expect( productExceptSelf( [ 1, 2, 3, 4 ] ) ).toEqual( [ 24, 12, 8, 6 ] );
  expect( productExceptSelf( [ 1, 2, 3, 4, 5 ] ) ).toEqual( [ 120, 60, 40, 30, 24 ] );
  expect( productExceptSelf( [ 1, 2, 3, 4, 5, 6 ] ) ).toEqual( [ 720, 360, 240, 180, 144, 120 ] );
  expect( productExceptSelf( [ 1, 2, 3, 4, 5, 6, 7 ] ) ).toEqual( [ 5040, 2520, 1680, 1260, 1008, 840, 720 ] );
  expect( productExceptSelf( [ 0, 1, 2, 3, 4, 5, 6, 7 ] ) ).toEqual( [ 5040, 0, 0, 0, 0, 0, 0, 0 ] );
  expect( productExceptSelf( [ 1, 2, 3, 4, 5, -6, 7 ] ) ).toEqual( [ -5040, -2520, -1680, -1260, -1008, 840, -720 ] );
  expect( productExceptSelf( [ 1, 2, 3, 4, 5, -6, -7 ] ) ).toEqual( [ 5040, 2520, 1680, 1260, 1008, -840, -720 ] );
} );
