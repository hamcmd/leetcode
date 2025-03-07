import { dailyTemperatures } from "./daily-temperatures";

test( "daily-temperatures", () => {
  expect( dailyTemperatures( [ 73, 74, 75, 71, 69, 72, 76, 73 ] ) ).toStrictEqual( [ 1, 1, 4, 2, 1, 1, 0, 0 ] );
  expect( dailyTemperatures( [ 30, 40, 50, 60 ] ) ).toStrictEqual( [ 1, 1, 1, 0 ] );
  expect( dailyTemperatures( [ 30, 60, 90 ] ) ).toStrictEqual( [ 1, 1, 0 ] );
  expect( dailyTemperatures( [ 30, 30, 30 ] ) ).toStrictEqual( [ 0, 0, 0 ] );
  expect( dailyTemperatures( [ 30, 60, 30 ] ) ).toStrictEqual( [ 1, 0, 0 ] );
  expect( dailyTemperatures( [ 60, 30, 30 ] ) ).toStrictEqual( [ 0, 0, 0 ] );
  expect( dailyTemperatures( [ 60, 60, 30 ] ) ).toStrictEqual( [ 0, 0, 0 ] );
  expect( dailyTemperatures( [ 60, 60, 60 ] ) ).toStrictEqual( [ 0, 0, 0 ] );
  expect( dailyTemperatures( [ 60, 60, 90 ] ) ).toStrictEqual( [ 2, 1, 0 ] );
  expect( dailyTemperatures( [ 60, 90, 60 ] ) ).toStrictEqual( [ 1, 0, 0 ] );
  expect( dailyTemperatures( [ 60, 90, 90 ] ) ).toStrictEqual( [ 1, 0, 0 ] );
  expect( dailyTemperatures( [ 90, 60, 60 ] ) ).toStrictEqual( [ 0, 0, 0 ] );
  expect( dailyTemperatures( [ 90, 90, 60 ] ) ).toStrictEqual( [ 0, 0, 0 ] );
  expect( dailyTemperatures( [ 90, 90, 90 ] ) ).toStrictEqual( [ 0, 0, 0 ] );
} );
