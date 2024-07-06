export function isAnagram( s: string, t: string ): boolean {
  if( s.length != t.length ) {
    return false;
  }

  const map: Map<string, number> = new Map();

  for( let i = 0; i < s.length; i++ ) {
    const countToStore = ( map.get( s[ i ] ) || 0 ) + 1 ;

    map.set( s[ i ], countToStore );
  }

  for( let i = 0; i < t.length; i++ ) {
    const storedCount = map.get( t[ i ] ) || 0;

    if( ! map.get( t[ i ] ) ) {
      return false;
    }

    map.set( t[ i ], storedCount - 1 );
  }

  return true;
}

