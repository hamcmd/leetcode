export function evalRPN( tokens: string[] ): number {
  const stack: number[] = [];

  const signs: Record<string, ( operator: number, operand: number ) => number> = {
    "+": ( oprtr: number, oprnd: number ) => Math.trunc( oprtr + oprnd ),
    "-": ( oprtr: number, oprnd: number ) => Math.trunc( oprtr - oprnd ),
    "*": ( oprtr: number, oprnd: number ) => Math.trunc( oprtr * oprnd ),
    "/": ( oprtr: number, oprnd: number ) => Math.trunc( oprtr / oprnd ),
  };

  for( let i = 0; i < tokens.length; i++ ) {
    if( signs[ tokens[ i ] ] ) {
      const operand = stack.pop()!;
      const operator = stack.pop()!;

      stack.push( signs[ tokens[ i ] ]( operator, operand ) );
    } else {
      stack.push( Number( tokens[ i ] ) );
    }
  }

  return stack.pop()!;
}
