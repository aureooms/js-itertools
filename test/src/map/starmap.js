

test( "starmap", function () {

	import { list , starmap } from 'aureooms-es-itertools' ;
	import { mul } from 'aureooms-js-operator' ;

	const x = ( callable, iterable, out ) => {
		t.same( list( starmap( callable , iterable ) ) , out ) ;
	};

	x( mul, [], [] );
	x( mul, [[1,1]], [1] );
	x( mul, [[1,1], [2,2], [3,3]], [1, 4, 9] );
	x( mul, [[1,1], [2,2], [3,3], [4,4], [5,5], [6,6]], [1, 4, 9, 16, 25, 36] );
	x( mul, [[1,1], [2,2], [3,3], [4,4], [5,5], [6,6], [7,7], [8,8], [9,9]], [1, 4, 9, 16, 25, 36, 49, 64, 81] );

});
