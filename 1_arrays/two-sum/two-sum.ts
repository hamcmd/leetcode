export function twoSum( nums: number[], target: number ): number[] {
  const map: Map<number, number> = new Map();

  for( let i = 0; i < nums.length; i++ ) {
    const lookingFor = target - nums[ i ];
    const indexInMap = map.get( lookingFor );

    if( indexInMap != undefined ) {
      return [ indexInMap, i ];
    }

    map.set( nums[ i ], i );
  }

  return [];
}
