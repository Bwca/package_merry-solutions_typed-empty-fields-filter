import { Empty } from '../models/empty.model';
import { NoExplicitEmpty } from '../models/no-explicit-empty.model';
import { PotentiallyEmptyFields } from '../models/potentially-empty-fields.model';

export function filterByEmptyFields<
  E extends Empty,
  T extends unknown,
  K extends PotentiallyEmptyFields<T, E> | Array<PotentiallyEmptyFields<T, E>>
>(
  empty: E[],
  arrayOfSomething: T[],
  keysFromArrayItems: K
): Array<
  K extends Array<infer I>
    ? Omit<T, keyof T & I> & NoExplicitEmpty<Required<Pick<T, keyof T & I>>, E>
    : Omit<T, keyof T & K> & NoExplicitEmpty<Required<Pick<T, keyof T & K>>, E>
> {
  const keys: Array<PotentiallyEmptyFields<T, E>> = Array.isArray(keysFromArrayItems)
    ? keysFromArrayItems
    : ([keysFromArrayItems] as Array<PotentiallyEmptyFields<T, E>>);

  return arrayOfSomething.reduce<any>((a, c) => (keys.some((i) => empty.includes(c[i] as any)) ? a : a.concat(c)), []);
}
