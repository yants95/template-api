import { CoreModule } from '@/core/infrastructure/dependency-injection/core.module';
import { CreateUserCommand } from '@/modules/user/application/commands/create-user.command';
import { CreateUserController } from '@/modules/user/infrastructure/controllers/create-user.controller';
import { userProviders } from '@/modules/user/infrastructure/dependency-injection/user.provider';

import { Module } from '@nestjs/common';

@Module({
  imports: [CoreModule],
  controllers: [CreateUserController],
  providers: [...userProviders, CreateUserCommand],
  exports: [...userProviders],
})
export class UserModule {}
