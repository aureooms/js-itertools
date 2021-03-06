import {list, nrepeat, pick} from '../index.js';

/**
 * Yields all combinations, with repetitions, of each possible choice of
 * <code>r</code> elements of the input iterable.
 *
 * @example
 * // A B C
 * combinationswithrepetition('ABC', 1)
 *
 * @example
 * // 00 01 02 11 12 22
 * combinationswithrepetition(range(3), 2)
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} r - The size of the combinations to generate.
 * @returns {Iterator}
 */

export function* combinationswithrepetition(iterable, r) {
	const pool = list(iterable);
	const length = pool.length;

	if (length === 0 && r > 0) {
		return;
	}

	const indices = list(nrepeat(0, r));

	yield list(pick(pool, indices));

	while (true) {
		let i = r - 1;

		// eslint-disable-next-line no-constant-condition
		while (true) {
			if (i < 0) {
				return;
			}

			if (indices[i] !== length - 1) {
				const pivot = ++indices[i];

				for (++i; i < r; ++i) {
					indices[i] = pivot;
				}

				break;
			}

			--i;
		}

		yield list(pick(pool, indices));
	}
}
