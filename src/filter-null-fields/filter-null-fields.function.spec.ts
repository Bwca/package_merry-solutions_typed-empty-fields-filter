import { filterNullFields } from '../filter-null-fields/filter-null-fields.function';
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
    phone: null,
    hobby: 'evolve interactive vortals',
  },
];

describe('Tests for filtering out objects with null fields', () => {
  it('Should filter out objects based on value of a property', () => {
    // Act
    const filteredUsers = filterNullFields(USERS, 'phone');

    // string
    filteredUsers[0]?.phone

    // Assert
    expect(filteredUsers.every((u) => u.name !== null)).toBeTruthy();
  });
  it('Should filter out objects based on value of a list of properties', () => {
    // Act
    const filteredUsers = filterNullFields(USERS, ['phone', 'hobby']);

    // string
    filteredUsers[0]?.phone
    filteredUsers[0]?.hobby

    // Assert
    expect(filteredUsers.every((user) => ['phone', 'hobby'].every((key) => user[key as keyof User] !== null))).toBeTruthy();
  });
});
