test( "slice", t => {

	import { list , range , slice } from 'aureooms-es-itertools' ;

	const x = ( start, stop, step ) => {

		const iterable = range( 0, stop, 1 );

		t.same(
			list( slice( iterable, start, stop, step ) ),
			list( range( start, stop, step ) )
		);

	};

	x( 0, 0, 1 );
	x( 0, 100, 1 );
	x( 0, 100, 2 );
	x( 0, 100, 3 );
	x( 50, 100, 1 );
	x( 50, 100, 2 );
	x( 50, 100, 3 );

});

