# typed-empty-fields-filter

## What is it?

A simple package for filtering arrays of objects, leaving out items based on `null` or `undefined` in given fields, while at the same time providing propert typing for the resulted items.

The package includes 3 functions

* **filterNullFields** for filtering fields with `null` values;
* **filterUndefinedFields** for filtering fields with `undefined` values;
* **filterEmptyFields** for filtering both `null` and `undefined` values at the same time.

### For example

Provided you have an interface with a field or fields which can be `undefined`

```typescript
interface Point {
    x?: number;
    y?: number;
}
```

Given an array of such items, you can filter them out and have the proper typing for a returned items in the new array:

```typescript
const points: Array<Point> = [{x: 2}, { y: 2 }, {x: 1, y: 1}];

// result array type will be Array<{x?: number; y: number}>
const filteredWithYRequired = filterEmptyFields(points, 'y');

// resulting interface has y as 'number', not 'number | undefined' union as before
filteredWithYRequired[0]?.y;
```

or filter based on a set of fields:



```typescript
const points: Array<Point> = [{x: 2}, { y: 2 }, {x: 1, y: 1}];

// result array type will be Array<{x: number; y: number}>
const filteredWithYRequired = filterEmptyFields(points, ['x', 'y']);
```

## Installation

```bash
npm i --save @merry-solutions/typed-empty-fields-filter
```

## Import

```typescript
import {filterEmptyFields, filterNullFields, filterUndefinedFields} from '@merry-solutions/typed-empty-fields-filter';
```

## Usage

Pick one of the three function and pass an array and a filed/list of fields for filtering. Intellisense will help you out.

```typescript

import {filterEmptyFields, filterNullFields, filterUndefinedFields} from '@merry-solutions/typed-empty-fields-filter';

export interface User {
  id: number;
  surname: string;
  name?: string;
  middleName: string | undefined;
  phone?: string | null;
  hobby?: string | null;
}

const USERS: Array<User> = [
  {
    id: 1,
    surname: 'Tann',
    middleName: 'XtraCare Wet Wipes',
    phone: '750-476-2058',
    hobby: 'transform one-to-one vortals',
  },
  {
    id: 2,
    name: 'Emylee',
    surname: 'Langelaan',
    middleName: undefined,
    phone: null,
  },
  {
    id: 3,
    name: 'Silvanus',
    surname: 'Bewsy',
    middleName: 'daytime cold and flu',
    phone: '999-831-0154',
    hobby: null,
  },
  {
    id: 4,
    name: 'Leroi',
    surname: 'Dragge',
    middleName: 'Monistat 7 Combination Pack',
    phone: null,
    hobby: 'evolve interactive vortals',
  },
];

// only users with non-null and non-undefined hobbies, hobby is 'string'
const u1 = filterEmptyFields(USERS, 'hobby');

// only users with non-null and non-undefined name, middleName, phone, hobby
const u2 = filterEmptyFields(USERS, ['name', 'middleName', 'phone', 'hobby']);


// only users with non-null phone, phone is 'undefined | string'
const u3 = filterNullFields(USERS, 'phone');

// same as above, array example
const u4 = filterNullFields(USERS, ['phone']);

// only users with non-undefined phone, phone is 'null | string'
const u5 = filterUndefinedFields(USERS, 'phone');

// same as above, array example
const u6 = filterUndefinedFields(USERS, ['phone']);
```

That's all.