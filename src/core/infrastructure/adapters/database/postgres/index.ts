import { Insertable, Selectable, Updateable } from 'kysely';

declare global {
  interface DB {
    users: UserTable;
  }

  interface UserTable {
    id: string;
    name: string;
    email: string;
    password: string;
    created_at: Date;
    updated_at: Date | null;
  }
}

export type Person = Selectable<UserTable>;
export type NewPerson = Insertable<UserTable>;
export type PersonUpdate = Updateable<UserTable>;
