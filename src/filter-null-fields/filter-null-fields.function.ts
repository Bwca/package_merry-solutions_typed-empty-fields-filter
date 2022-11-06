import { EMPTY } from '../shared/empty.const';
import { filterFactory } from '../shared/filter-factory/filter-factory.function';

export const filterNullFields = filterFactory([EMPTY.NULL]);
