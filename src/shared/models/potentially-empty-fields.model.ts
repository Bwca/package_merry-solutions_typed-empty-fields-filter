import { Empty } from './empty.model';

export type PotentiallyEmptyFields<T, E extends Empty> = {
  [k in keyof T]-?: Extract<T[k], E> extends never ? never : k;
}[keyof T];
