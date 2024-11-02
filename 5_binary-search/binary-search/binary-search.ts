export function search( nums: number[], target: number ): number {
  let lo = 0;
  let hi = nums.length;

  do {
    const midpoint = Math.floor( lo + ( hi - lo ) / 2 );
    const v = nums[ midpoint ];

    if( v === target ) {
      return midpoint;
    } else if( v > target ) {
      hi = midpoint;
    } else {
      lo = midpoint + 1;
    }

  } while( lo < hi );

  return -1;
}
