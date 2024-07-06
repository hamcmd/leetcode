import { isPalindrome } from "./valid-palindrome";

test( "valid-palindrome", () => {
  expect( isPalindrome( "0P" ) ).toBe( false );
  expect( isPalindrome( "A man, a plan, a canal: Panama" ) ).toBe( true );
  expect( isPalindrome( "race a car" ) ).toBe( false );
  expect( isPalindrome( " " ) ).toBe( true );
  expect( isPalindrome( "No 'x' in Nixon" ) ).toBe( true );
  expect( isPalindrome( "Madam, in Eden, I'm Adam" ) ).toBe( true );
  expect( isPalindrome( "!@#$%^&*()" ) ).toBe( true );
  expect( isPalindrome( "Able was I, ere I saw Elba!" ) ).toBe( true );
  expect( isPalindrome( "Was it a car or a cat I saw?" ) ).toBe( true );
  expect( isPalindrome( "Mr. Owl ate my metal worm" ) ).toBe( true );
  expect( isPalindrome( "Eva, can I see bees in a cave?" ) ).toBe( true );
  expect( isPalindrome( "A Santa lived as a devil at NASA" ) ).toBe( true );
} );
