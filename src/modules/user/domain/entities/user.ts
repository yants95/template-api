import { randomUUID } from 'node:crypto';

import { Entity } from '@/core/domain/entity';
import { UserId } from '@/modules/user/domain/value-objects/user-id';

export interface UserProps {
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date | null;
}

export interface CreateUserProps {
  name: string;
  email: string;
}

export class User extends Entity<UserProps> {
  public get id(): UserId {
    return this.entityId;
  }

  public static create(props: CreateUserProps): User {
    return new User({
      id: new UserId(randomUUID()),
      props: {
        ...props,
        created_at: new Date(),
        updated_at: null,
      },
    });
  }
  public validate(): void {}
}
