import { filterByEmptyFields } from '../filter-by-empty-fields/filter-by-empty-fields.function';
import { Empty } from '../models/empty.model';
import { NoExplicitEmpty } from '../models/no-explicit-empty.model';
import { PotentiallyEmptyFields } from '../models/potentially-empty-fields.model';

export function filterFactory<E extends Empty>(empty: E[]) {
  return function <T extends unknown, K extends PotentiallyEmptyFields<T, E> | Array<PotentiallyEmptyFields<T, E>>>(
    arrayOfSomething: T[],
    keysFromArrayItems: K
  ): Array<
    K extends Array<infer I>
      ? Omit<T, keyof T & I> & NoExplicitEmpty<Required<Pick<T, keyof T & I>>, E>
      : Omit<T, keyof T & K> & NoExplicitEmpty<Required<Pick<T, keyof T & K>>, E>
  > {
    return filterByEmptyFields(empty, arrayOfSomething, keysFromArrayItems);
  };
}
