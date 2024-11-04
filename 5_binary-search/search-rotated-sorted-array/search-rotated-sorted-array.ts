export function search( nums: number[], target: number ): number {
  let lo = 0;
  let hi = nums.length - 1;

  do {
    const midpoint = Math.floor( lo + ( hi - lo ) / 2 );
    const midV = nums[ midpoint ];
    const lV = nums[ lo ];
    const hV = nums[ hi ];

    if( midV === target ) {
      return midpoint;
    }

    if( midV >= lV ) {

      if( target > midV || target < lV ) {
        lo = midpoint + 1;
      } else {
        hi = midpoint;
      }

    } else {

      if( target < midV || target > hV ) {
        hi = midpoint;
      } else {
        lo = midpoint + 1;
      }

    }

  } while( lo <= hi );

  return -1;
}
