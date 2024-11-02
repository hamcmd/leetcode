export function searchMatrix( matrix: number[][], target: number ): boolean {
  const r = matrix.length;
  const c = matrix[ 0 ].length;

  let lo = 0;
  let hi = ( r * c );

  do {
    const midpoint = Math.floor( lo + ( hi - lo ) / 2 );
    const rowIndex = Math.floor( midpoint / c );
    const colIndex = midpoint % c;
    const v = matrix[ rowIndex ][ colIndex ];

    if( v === target ) {
      return true;
    } else if( v > target ) {
      hi = midpoint;
    } else {
      lo = midpoint + 1;
    }

  } while( lo < hi );

  return false;
}
