import { Mapper } from '@/core/domain/mapper';
import { PostgresRepository } from '@/core/infrastructure/adapters/database/postgres/postgres-repository.base';
import { User } from '@/modules/user/application/entities/user';
import { UserModel } from '@/modules/user/infrastructure/database/postgres/user.model';
import { UserMapperSymbol } from '@/modules/user/infrastructure/dependency-injection/user.di-tokens';

import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository as DbRepository } from 'typeorm';

@Injectable()
export class PostgresUserRepository extends PostgresRepository<
  User,
  UserModel
> {
  public constructor(
    @InjectRepository(UserModel)
    protected readonly userModel: DbRepository<UserModel>,
    @Inject(UserMapperSymbol)
    protected readonly mapper: Mapper<User, UserModel>,
  ) {
    super(userModel, mapper);
  }
}
