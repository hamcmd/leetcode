export function maxProfit( prices: number[] ): number {
  let left = 0;
  let right = 1;
  let max = 0;

  while( right < prices.length ) {
    const diff = prices[ right ] - prices[ left ];

    if( diff < 0 ) {
      left = right;
      right++;
      continue;
    }

    if( diff > max ) {
      max = diff;
    }

    right++;
  }

  return max;
}
