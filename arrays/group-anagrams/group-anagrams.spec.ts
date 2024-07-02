import { groupAnagrams } from "./group-anagrams";

test( "groupAnagrams", () => {
  expect( groupAnagrams( [ "eat", "tea", "tan", "ate", "nat", "bat" ] ) ).toStrictEqual( [
    [ "eat", "tea", "ate" ],
    [ "tan", "nat" ],
    [ "bat" ],
  ] );
} );
