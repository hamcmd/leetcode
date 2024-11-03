export function findMin( nums: number[] ): number {
  let lo = 0;
  let hi = nums.length;
  let res = nums[ hi - 1 ];

  do {
    const midpoint = Math.floor( lo + ( hi - lo ) / 2 );
    const v = nums[ midpoint ];

    if( v <= res ) {
      res = Math.min( res, v );
      hi = midpoint;
    } else {
      lo = midpoint + 1;
    }

  } while( lo < hi );

  return res;
}
