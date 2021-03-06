import {iter} from './iter.js';
import {consume} from './consume.js';
import {tail} from './tail.js';

/**
 * Drops the first <code>n</code> values of the input iterable.
 * If <code>n</code> is negative, behaves like <code>{@link tail}( iterable,
 * -n)</code>.
 *
 * @example
 * // returns [ 3 , 4 ]
 * list( drop( range( 5 ) , 3 ) ) ;
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} n - The number of values to drop.
 * @returns {Iterator} - The remaining values of the input iterable.
 */
export function* drop(iterable, n) {
	if (n < 0) {
		yield* tail(iterable, -n);
		return;
	}

	const iterator = iter(iterable);
	consume(iterator, n);
	yield* iterator;
}
