import { Empty } from './empty.model';

export type NoExplicitEmpty<T, E extends Empty> = {
  [k in keyof T]-?: Exclude<T[k], E>;
};
