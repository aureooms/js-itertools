
import { list , range , head , pick } from '..' ;

/**
 * @example permutations('ABCD', 2) // AB AC AD BA BC BD CA CB CD DA DB DC
 * @example permutations(range(3), 3) // 012 021 102 120 201 210
 */

export function* permutations ( iterable , r ) {

	let pool = list( iterable ) ;

	let len = pool.length ;

	if ( r > len ) return ;

	let indices = list( range( 0 , len , 1 ) ) ;
	let cycles = list( range( len , len - r , -1 ) ) ;

	yield list( pick( pool , head( indices , r ) ) ) ;

	if ( r === 0 || len === 0 ) return ;

	while ( true ) {

		let i = r ;

		while ( i-- ) {

			--cycles[i] ;

			if ( cycles[i] === 0 ) {

				// use deque
				indices.push( indices.splice( i , 1 )[0] ) ;

				cycles[i] = len - i ;

			}

			else {

				let j = cycles[i] ;

				[ indices[i] , indices[len - j] ] = [ indices[len - j] , indices[i] ] ;

				yield list( pick( pool , head( indices , r ) ) ) ;
				break ;

			}

		}

		if ( i === -1 ) return ;

	}

}