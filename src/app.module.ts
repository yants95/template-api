import './module.alias';
import { CoreModule } from '@/core/infrastructure/dependency-injection/modules/core.module';

import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
