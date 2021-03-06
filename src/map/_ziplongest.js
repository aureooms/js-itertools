import {list, map, iter, _next, repeat, enumerate} from '../index.js';

/**
 * Same as _zip, but continues to yield zipped tuples until the last iterable is
 * exhausted.
 *
 * @example
 * // returns [['A','x'],['B','y'],['C','-'],['D','-']]
 * list( _ziplongest( '-' , [ 'ABCD', 'xy' ] ) ) ;
 *
 * @param fillvalue - The value to yield for iterators that are exhausted.
 * @param {Iterable[]} iterables - The iterables to zip.
 * @returns {Iterator}
 *
 */
export function* _ziplongest(fillvalue, iterables) {
	let counter = iterables.length;

	if (counter === 0) {
		return;
	}

	const filler = repeat(fillvalue);

	const iterators = list(map(iter, iterables));

	while (true) {
		const buffer = [];

		for (const [i, event] of enumerate(map(_next, iterators))) {
			if (event.done) {
				--counter;
				if (counter === 0) {
					return;
				}

				iterators[i] = filler;
				buffer.push(fillvalue);
			} else {
				buffer.push(event.value);
			}
		}

		yield buffer;
	}
}
