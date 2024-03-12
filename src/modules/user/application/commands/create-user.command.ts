import { User } from '@/modules/user/domain/entities/user';
import { UserRepository } from '@/modules/user/domain/repositories/user.repository';
import { UserRepositorySymbol } from '@/modules/user/infrastructure/dependency-injection/user.di-tokens';

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CreateUserCommand {
  public constructor(
    @Inject(UserRepositorySymbol)
    private readonly usersRepository: UserRepository,
  ) {}

  public async execute(dto: any): Promise<void> {
    const user = User.create({ name: 'yan', ...dto });
    await this.usersRepository.save(user);
  }
}
