export function topKFrequent( nums: number[], k: number ): number[] {
  const map: Map<number, number> = new Map();

  for( const num of nums ) {
    let val = map.get( num );

    if( val ) {
      map.set( num, val += 1 );
    } else {
      map.set( num, 1 );
    }
  }

  const bucket: number[][] = new Array( nums.length + 1 ).fill( [] );

  for( const key of map.keys() ) {
    const val = map.get( key );

    if( val ) {
      if( bucket[ val ].length === 0 ) {
        bucket[ val ] = [ key ];
      } else {
        bucket[ val ].push( key );
      }
    }
  }

  const frequentVals: number[] = [];

  let kTracker = 0;

  for( let i = bucket.length - 1; i >= 0; i-- ) {

    const bucketVal = bucket[ i ];

    if( bucketVal.length != 0 ) {
      frequentVals.push( ...bucket[ i ] );
      // if more than one numbers are in the array, the count should be updated accordingly. a simple increment wont work
      kTracker += bucket[ i ].length;
    }

    if( kTracker === k ) {
      break;
    }
  }

  return frequentVals;
}
