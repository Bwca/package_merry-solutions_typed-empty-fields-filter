import { filterUndefinedFields } from '../../dist';

import { User } from '../test/user.model';

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
    phone: '495-141-0246',
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
    phone: '475-277-6642',
    hobby: 'evolve interactive vortals',
  },
];

describe('Tests for filtering out objects with undefined fields', () => {
  it('Should filter out objects based on value of a property', () => {
    // Act
    const filteredUsers = filterUndefinedFields(USERS, 'name');
    
    // string
    filteredUsers[0]?.name

    // Assert
    expect(filteredUsers.every((u) => u.name !== undefined)).toBeTruthy();
  });
  it('Should filter out objects based on value of a list of properties', () => {
    // Act
    const filteredUsers = filterUndefinedFields(USERS, ['name', 'middleName', 'hobby']);

    // string
    filteredUsers[0]?.name
    filteredUsers[0]?.middleName
    // string | null
    filteredUsers[0]?.hobby

    // Assert
    expect(
      filteredUsers.every((user) => ['name', 'middleName', 'hobby'].every((key) => user[key as keyof User] !== undefined))
    ).toBeTruthy();
  });
});
