import { DATABASE_URI } from '@/domain/infrastructure/settings/envs';
import { isStagingOrProd } from '@/utils/environment.util';
import { DrizzlePGModule } from '@knaadh/nestjs-drizzle-pg';
import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

export const postgresModule = DrizzlePGModule.register({
  tag: 'DB_PROD',
  pg: {
    connection: 'client',
    config: {
      connectionString: DATABASE_URI,
    },
  },
});

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: isStagingOrProd(),
      cache: true,
    }),
    postgresModule,
  ],
  providers: [],
  exports: [],
})
export class CoreModule {}
