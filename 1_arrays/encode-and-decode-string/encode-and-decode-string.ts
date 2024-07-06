export class Solution {
  encode( strs: string[] ) {
    if( strs.length === 0 ) {
      return "";
    }

    let encodedStr = "";

    for( let i = 0; i < strs.length; i++ ) {
      encodedStr = encodedStr += `${ strs[ i ].length };${ strs[ i ] }` ;
    }

    return encodedStr;
  }

  decode( str: string ) {
    if( str === "" ) {
      return [];
    }

    const strs = [];

    for( let i = 0; i < str.length; ) {
      let j = i;

      let countStr = str[ i ];

      while( str[ j + 1 ] != ";" ) {
        j += 1;
        countStr += str[ j ];
      }

      const delimiterCountCheck = Number( countStr );

      if( ! isNaN( delimiterCountCheck ) && str.slice( j + 1, j + 2 ) === ";" ) {
        const delimiterEndingIdx = j + 2 + delimiterCountCheck;

        strs.push( str.slice( j + 2, delimiterEndingIdx ) );
        i = delimiterEndingIdx;
      } else {
        i++;
      }
    }

    return strs;
  }
}
