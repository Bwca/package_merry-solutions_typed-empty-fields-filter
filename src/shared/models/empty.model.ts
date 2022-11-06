import { EMPTY } from '../empty.const';

export type Empty = typeof EMPTY[keyof typeof EMPTY];
