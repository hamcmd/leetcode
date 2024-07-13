import { MinStack } from "./min-stack";

test( "min-stack", () => {
  const minStack = new MinStack();

  minStack.push( -2 );
  minStack.push( 0 );
  minStack.push( -3 );
  expect( minStack.getMin() ).toBe( -3 );
  minStack.pop();
  expect( minStack.top() ).toBe( 0 );
  expect( minStack.getMin() ).toBe( -2 );

  minStack.push( -5 );
  minStack.push( -4 );
  minStack.push( -3 );
  expect( minStack.getMin() ).toBe( -5 );
  minStack.pop();
  expect( minStack.top() ).toBe( -4 );
} );
