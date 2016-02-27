
import { iter } from '..' ;

export function* group ( key , iterable ) {

	let iterator = iter( iterable ) ;

	let first = iterator.next() ;

	if ( first.done ) return ;

	let item = first.value ;
	let nextkey = key( item ) ;

	let currkey , buffer ;

	grouping : while ( true ) {

		currkey = nextkey ;
		buffer = [ item ] ;

		while ( true ) {

			let current = iterator.next() ;

			if ( current.done ) break grouping ;

			item = current.value ;

			nextkey = key( item ) ;

			if ( nextkey !== currkey ) {

				yield [ currkey , buffer ] ;
				continue grouping ;

			}

			buffer.push( item ) ;

		}

		break grouping ;

	}

	yield [ currkey , buffer ] ;

}

export const groupby = group ;
