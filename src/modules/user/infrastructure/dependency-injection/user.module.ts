import { CoreModule } from '@/core/infrastructure/dependency-injection/core.module';
import { CreateUserCommand } from '@/modules/user/application/commands/create-user.command';
import { CreateUserController } from '@/modules/user/infrastructure/controllers/create-user.controller';
import { UserModel } from '@/modules/user/infrastructure/database/postgres/user.model';
import { userProviders } from '@/modules/user/infrastructure/dependency-injection/user.provider';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [CoreModule, TypeOrmModule.forFeature([UserModel])],
  controllers: [CreateUserController],
  providers: [...userProviders, CreateUserCommand],
  exports: [...userProviders],
})
export class UserModule {}
