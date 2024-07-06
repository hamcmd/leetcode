export function isPalindrome( s: string ): boolean {
  const lowerStr = toLowerCase( s );

  let left = 0;
  let right = lowerStr.length - 1;

  while( left <= right ) {
    if( lowerStr[ right ] != lowerStr[ left ] ) {
      return false;
    }

    left++;
    right--;
  }


  return true;
}

function toLowerCase( s: string ) {
  let str = "";

  for( let i = 0; i < s.length; i++ ) {
    const asciiCode = s[ i ].charCodeAt( 0 );

    if( asciiCode <= 57 && asciiCode >= 48 ) {
      str += s[ i ];
      continue;
    }

    if( asciiCode <= 122 && asciiCode >= 97 ) {
      str += s[ i ];
      continue;
    }

    if( asciiCode <= 90 && asciiCode >= 65 ) {
      str += String.fromCharCode( asciiCode + 32 );
      continue;
    }
  }

  return str;
}
