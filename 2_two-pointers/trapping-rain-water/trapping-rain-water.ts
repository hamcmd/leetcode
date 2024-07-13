export function trap( height: number[] ): number {
  let sum = 0;
  let left = 0;
  let right = height.length - 1;
  let leftMax = height[ left ];
  let rightMax = height[ right ];

  while( left < right ) {
    if( leftMax < rightMax ) {
      left += 1;
      leftMax = Math.max( leftMax, height[ left ] );
      sum += leftMax - height[ left ] ;
    } else {
      right -= 1;
      rightMax = Math.max( rightMax, height[ right ] );
      sum += rightMax - height[ right ];
    }
  }

  return sum;
}
