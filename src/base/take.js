import { iter } from './iter' ;
import { trunc } from './trunc' ;

export function* take ( iterable , n ) {

	if ( n < 0 ) {
		yield* trunc( iterable , -n ) ;
		return ;
	}

	const iterator = iter( iterable ) ;

	while ( n --> 0 ) {

		const current = iterator.next() ;

		if ( current.done ) return ;

		yield current.value ;

	}

}
