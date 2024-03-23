import { AppModule } from '@/app.module';
import { Application } from '@/application';
import { APP_PORT } from '@/core/infrastructure/settings/envs';

import { INestApplication, INestApplicationContext } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

export class NestApplication extends Application {
  private app!: INestApplication;
  protected containerStorage!: INestApplicationContext;

  public static create(): NestApplication {
    return new NestApplication();
  }

  protected async initializeApp(): Promise<void> {
    await this.app.listen(APP_PORT);
  }

  protected async setupApplicationConfig(): Promise<void> {
    this.app = await NestFactory.create(AppModule, { bufferLogs: true });
    this.containerStorage =
      await NestFactory.createApplicationContext(AppModule);
    this.app.enableShutdownHooks();
  }
}
