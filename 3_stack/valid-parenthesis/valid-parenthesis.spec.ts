import { isValid } from "./valid-parenthesis";

test( "valid-parenthesis", () => {
  expect( isValid( "()" ) ).toBe( true );
  expect( isValid( "()[]{}" ) ).toBe( true );
  expect( isValid( "(]" ) ).toBe( false );
  expect( isValid( "([)]" ) ).toBe( false );
  expect( isValid( "{[]}" ) ).toBe( true );
  expect( isValid( "" ) ).toBe( true );
  expect( isValid( "]" ) ).toBe( false );
  expect( isValid( "[" ) ).toBe( false );
} );
