import { EMPTY } from '../shared/empty.const';
import { filterFactory } from '../shared/filter-factory/filter-factory.function';

export const filterEmptyFields = filterFactory([EMPTY.UNDEFINED, EMPTY.NULL]);
