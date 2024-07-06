import { Solution } from "./encode-and-decode-string";

test( "encode-and-decode-string", () => {
  expect( new Solution().encode( [ "we", "say", ":", "yes", "!@#$%^&*()" ] ) ).toBe( "2;we3;say1;:3;yes10;!@#$%^&*()" );
  expect( new Solution().decode( "2;we3;say1;:3;yes10;!@#$%^&*()" ) ).toEqual( [ "we", "say", ":", "yes", "!@#$%^&*()" ] );

  expect( new Solution().encode( [] ) ).toBe( "" );
  expect( new Solution().decode( "" ) ).toEqual( [] );

  expect( new Solution().encode( [ "" ] ) ).toBe( "0;" );
  expect( new Solution().decode( "0;" ) ).toEqual( [ "" ] );

  expect( new Solution().encode( [ "hello", "world" ] ) ).toBe( "5;hello5;world" );
  expect( new Solution().decode( "5;hello5;world" ) ).toEqual( [ "hello", "world" ] );

  expect( new Solution().encode( [ "123", "456", "789" ] ) ).toBe( "3;1233;4563;789" );
  expect( new Solution().decode( "3;1233;4563;789" ) ).toEqual( [ "123", "456", "789" ] );

  expect( new Solution().encode( [ "apple", "banana", "cherry", "date" ] ) ).toBe( "5;apple6;banana6;cherry4;date" );
  expect( new Solution().decode( "5;apple6;banana6;cherry4;date" ) ).toEqual( [ "apple", "banana", "cherry", "date" ] );

  expect( new Solution().encode( [ "hello", "world", "!" ] ) ).toBe( "5;hello5;world1;!" );
  expect( new Solution().decode( "5;hello5;world1;!" ) ).toEqual( [ "hello", "world", "!" ] );
} );
