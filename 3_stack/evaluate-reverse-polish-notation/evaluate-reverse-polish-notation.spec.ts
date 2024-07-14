import { evalRPN } from "./evaluate-reverse-polish-notation";

test( "evaluate-reverse-polish-notation", () => {
  expect( evalRPN( [ "2", "1", "+", "3", "*" ] ) ).toBe( 9 );
  expect( evalRPN( [ "4", "13", "5", "/", "+" ] ) ).toBe( 6 );
  expect( evalRPN( [ "10", "6", "9", "3", "/", "-11", "*", "/", "*", "17", "+", "5", "+" ] ) ).toBe( 22 );
  expect( evalRPN( [ "4", "3", "-" ] ) ).toBe( 1 );
  expect( evalRPN( [ "4", "3", "+" ] ) ).toBe( 7 );
  expect( evalRPN( [ "4", "3", "*" ] ) ).toBe( 12 );
  expect( evalRPN( [ "4", "3", "/" ] ) ).toBe( 1 );
  expect( evalRPN( [ "4", "3", "2", "+", "*" ] ) ).toBe( 20 );
  expect( evalRPN( [ "4", "3", "2", "-", "*" ] ) ).toBe( 4 );
  expect( evalRPN( [ "4", "3", "2", "*", "+" ] ) ).toBe( 10 );
  expect( evalRPN( [ "4", "3", "2", "/", "*" ] ) ).toBe( 4 );
  expect( evalRPN( [ "4", "3", "2", "/", "+" ] ) ).toBe( 5 );
} );
