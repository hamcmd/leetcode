import { isAnagram } from "./valid-anagram";

test( "valid-anagram", () => {
  expect( isAnagram( "anagram", "nagaram" ) ).toEqual( true );
  expect( isAnagram( "cat", "car" ) ).toEqual( false );
  expect( isAnagram( "cat", "cat" ) ).toEqual( true );
} );
