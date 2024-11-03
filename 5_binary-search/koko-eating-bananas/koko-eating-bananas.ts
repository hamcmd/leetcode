export function minEatingSpeed( piles: number[], h: number ): number {

  const max = Math.max( ...piles );

  let lo = 0;
  let hi = max;
  let res = hi;

  do {

    const k = Math.floor( lo + ( hi - lo ) / 2 );

    let sum = 0;

    for( let i = 0; i < piles.length; i++ ) {
      sum += Math.ceil( Number( piles[ i ] ) / k );
    }

    if( sum <= h ) {
      res = Math.min( res, k );
      hi = k;
    } else {
      lo = k + 1;
    }


  } while( lo < hi );

  return res;
}
