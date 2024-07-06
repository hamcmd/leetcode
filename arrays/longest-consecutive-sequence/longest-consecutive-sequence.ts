export function longestConsecutive( nums: number[] ) {
  const set = new Set( nums );

  let longestStreak = 0;

  for( let i = 0; i < nums.length; i++ ) {
    let currentNumber = nums[ i ];

    if( set.has( currentNumber + 1 ) ) {
      continue;
    }

    let currStreak = 1;

    while( set.has( --currentNumber ) ) {
      currStreak++;
    }

    longestStreak = Math.max( longestStreak, currStreak );
  }

  return longestStreak;
}
