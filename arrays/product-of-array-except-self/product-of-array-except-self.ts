export function productExceptSelf( nums: number[] ): number[] {
  const outputArray = [];

  let prefix = 1;
  let postfix = 1;

  for( let i = 0; i < nums.length; i++ ) {
    outputArray[ i ] = prefix;
    prefix *= nums[ i ];
  }


  for( let i = nums.length; i > 0; i-- ) {
    outputArray[ i - 1 ] = postfix * outputArray[ i - 1 ];
    postfix *= ( nums[ i - 1 ] ?? 1 );
  }

  return outputArray;
}
