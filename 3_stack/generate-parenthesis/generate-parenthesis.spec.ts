import { generateParenthesis } from "./generate-parenthesis";

test( "generate-parenthesis", () => {
  expect( generateParenthesis( 3 ) ).toStrictEqual( [
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()"
  ] );
  expect( generateParenthesis( 1 ) ).toStrictEqual( [ "()" ] );
  expect( generateParenthesis( 2 ) ).toStrictEqual( [ "(())", "()()" ] );
} );
