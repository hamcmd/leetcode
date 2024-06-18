import { isAnagram } from "./valid-anagram";

test( "valid-anagram", function() {
  expect( isAnagram( "anagram", "nagaram" ) ).toEqual( true );
  expect( isAnagram( "cat", "car" ) ).toEqual( false );
  expect( isAnagram( "cat", "cat" ) ).toEqual( true );
} );
