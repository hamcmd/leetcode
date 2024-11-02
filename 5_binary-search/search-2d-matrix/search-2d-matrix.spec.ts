import { searchMatrix } from "./search-2d-matrix";

test( "search-2d-matrix", () => {
  expect( searchMatrix( [
    [ 1, 3, 5, 7 ],
    [ 10, 11, 16, 20 ],
    [ 23, 30, 34, 60 ]
  ], 13 ) ).toBe( false );
  expect( searchMatrix( [
    [ 1, 3, 5, 7 ],
    [ 10, 11, 16, 20 ],
    [ 23, 30, 34, 60 ]
  ], 3 ) ).toBe( true );
  expect( searchMatrix( [
    [ 1, 3, 5, 7 ],
    [ 10, 11, 16, 20 ],
    [ 23, 30, 34, 60 ]
  ], 13 ) ).toBe( false );
  expect( searchMatrix( [
    [ 1, 3, 5, 7 ],
    [ 10, 11, 16, 20 ],
    [ 23, 30, 34, 60 ]
  ], 1 ) ).toBe( true );
  expect( searchMatrix( [
    [ 1, 3, 5, 7 ],
    [ 10, 11, 16, 20 ],
    [ 23, 30, 34, 60 ]
  ], 7 ) ).toBe( true );
  expect( searchMatrix( [
    [ 1, 3, 5, 7 ],
    [ 10, 11, 16, 20 ],
    [ 23, 30, 34, 60 ]
  ], 60 ) ).toBe( true );
  expect( searchMatrix( [
    [ 1, 3, 5, 7 ],
    [ 10, 11, 16, 20 ],
    [ 23, 30, 34, 60 ]
  ], 61 ) ).toBe( false );
  expect( searchMatrix( [
    [ 1, 3, 5, 7 ],
    [ 10, 11, 16, 20 ],
    [ 23, 30, 34, 60 ]
  ], 0 ) ).toBe( false );
  expect( searchMatrix( [
    [ 1, 3, 5, 7 ],
    [ 10, 11, 16, 20 ],
    [ 23, 30, 34, 60 ]
  ], 61 ) ).toBe( false );
  expect( searchMatrix( [
    [ 1, 3, 5, 7 ],
    [ 10, 11, 16, 20 ],
    [ 23, 30, 34, 60 ]
  ], 2 ) ).toBe( false );
  expect( searchMatrix( [
    [ 1 ]
  ], 1 ) ).toBe( true );
} );
