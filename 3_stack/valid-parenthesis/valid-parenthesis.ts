export function isValid( s: string ): boolean {
  const stack: string[] = [];
  const parenthesesSets: Record<string, string> = {
    "(": ")",
    "[": "]",
    "{": "}"
  };

  for( let i = 0; i < s.length; i++ ) {
    if( stack.length === 0 && ! parenthesesSets[ s[ i ] ] ) {
      return false;
    }

    // If the current character is an opening parenthesis, push it to the stack
    if( parenthesesSets[ s[ i ] ] ) {
      stack.push( s[ i ] );
    } else {
      // If the current character is a closing parenthesis, pop the last element from the stack
      // and check if the closing parenthesis matches the opening parenthesis
      if( s[ i ] !== parenthesesSets[ stack.pop()! ] ) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
