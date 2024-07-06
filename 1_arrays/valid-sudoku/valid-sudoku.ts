export function isValidSudoku( board: string[][] ): boolean {
  const rows: Array<Set<string>> = Array.from( { length: board.length }, () => new Set() );
  const cols: Array<Set<string>> = Array.from( { length: board[ 0 ].length }, () => new Set() );
  const grids: Array<Set<string>> = Array.from( { length: board.length }, () => new Set() );

  for( let row = 0; row < rows.length; row++ ) {
    for( let col = 0; col < cols.length; col++ ) {
      if( board[ row ][ col ] === "." ) {
        continue;
      }

      const rowInGrid = Number( Math.floor( row / 3 ) ) * 3;
      const colInGrid = Number( Math.floor( col / 3 ) );
      const gridNumber = rowInGrid + colInGrid;

      if(
        rows[ row ].has( board[ row ][ col ] )
        || cols[ col ].has( board[ row ][ col ] )
        || grids[ gridNumber ].has( board[ row ][ col ] )
      ) {
        return false;
      }

      rows[ row ].add( board[ row ][ col ] );
      cols[ col ].add( board[ row ][ col ] );
      grids[ gridNumber ].add( board[ row ][ col ] );
    }
  }

  return true;
}
