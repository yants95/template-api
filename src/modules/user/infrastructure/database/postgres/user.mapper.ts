import { EntityId } from '@/core/domain/entity-id';
import { Mapper } from '@/core/domain/mapper';
import { User } from '@/modules/user/domain/entities/user';
import { UserModel } from '@/modules/user/infrastructure/database/postgres/user.model';

import { Injectable } from '@nestjs/common';

@Injectable()
export class UserMapper implements Mapper<User, UserModel> {
  public toPersist(model: User): UserModel {
    const props = model.getPropsCopy();

    const data = new UserModel();
    data.id = model.id.toString();
    data.name = props.name;
    data.email = props.email;
    data.createdAt = props.created_at;
    data.updatedAt = props.updated_at;

    return data;
  }

  public toDomain(record: UserModel): User {
    const userProps = {
      id: new EntityId(record.id),
      props: {
        name: record.name,
        email: record.email,
        created_at: record.createdAt,
        updated_at: record.updatedAt,
      },
    };

    return new User(userProps);
  }
}
