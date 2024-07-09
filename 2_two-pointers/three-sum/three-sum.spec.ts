import { threeSum } from "./three-sum";

test( "three-sum", () => {
  expect( threeSum( [] ) ).toEqual( [] );
  expect( threeSum( [ 0 ] ) ).toEqual( [] );
  expect( threeSum( [ 0, 0, 0 ] ) ).toEqual( [ [ 0, 0, 0 ] ] );
  expect( threeSum( [ 0, 0, 0, 0 ] ) ).toEqual( [ [ 0, 0, 0 ] ] );
  expect( threeSum( [ 1, 1, -2 ] ) ).toEqual( [ [ 1, 1, -2 ] ] );
  expect( threeSum( [ 1, 1, -2, 0, 0, 0 ] ) ).toEqual( [ [ 1, 1, -2 ], [ 0, 0, 0 ] ] );
} );

