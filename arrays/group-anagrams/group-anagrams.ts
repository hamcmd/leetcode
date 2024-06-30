export function groupAnagrams( strs: string[] ): string[][] {
  const map: Map<string, string[]> = new Map();

  for( const str of strs ) {
    const alphabets = Array( 26 ).fill( 0 );

    for( const char of str ) {
      alphabets[ char.charCodeAt( 0 ) - 97 ]++;
    }

    const key = alphabets.join( "," );
    const value = map.get( key );

    if( value ) {
      value.push( str );
    } else {
      map.set( key, [ str ] );
    }
  }

  return Array.from( map.values() );
}
