export function threeSum( nums: number[] ): number[][] {
  nums.sort( ( a, b ) => a - b );
  const solutions: number[][] = [];

  for( let i = 0; i < nums.length - 2; i++ ) {
    let left = i + 1;
    let right = nums.length - 1;

    if( i != 0 && nums[ i - 1 ] === nums[ i ] ) {
      continue;
    }

    while( left < right ) {
      const sum = nums[ right ] + nums[ left ] + nums[ i ];

      if( sum === 0 ) {
        solutions.push( [ nums[ left ], nums[ right ], nums[ i ] ] );

        while( nums[ left ] === nums[ left + 1 ] ) {
          left++;
        }

        while( nums[ right ] === nums[ right - 1 ] ) {
          right--;
        }

        left++;
        right--;
      } else if( sum > 0 ) {
        right--;
      } else {
        left++;
      }
    }
  }

  return solutions;
}
