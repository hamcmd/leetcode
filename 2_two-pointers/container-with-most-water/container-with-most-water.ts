export function maxArea( height: number[] ): number {
  let left = 0;
  let right = height.length - 1;
  let area = 0;

  while( left < right ) {
    const currArea = Math.min( height[ left ], height[ right ] ) * ( right - left );

    area = Math.max( area, currArea );

    if( height[ left ] < height[ right ] ) {
      left++;
    } else {
      right--;
    }
  }

  return area;
}
