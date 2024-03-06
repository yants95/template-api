import './module.alias';

import { CoreModule } from '@/core/infrastructure/dependency-injection/core.module';
import { UserModule } from '@/modules/user/infrastructure/dependency-injection/user.module';

import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CoreModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
