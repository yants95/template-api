import { NodeEnvTypes } from '@/domain/infrastructure/settings/enum/node-env-types.enum';
import { DATABASE_URI } from '@/domain/infrastructure/settings/envs';
import { isEnvironment, isStagingOrProd } from '@/utils/environment.util';
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
      envFilePath: isEnvironment(NodeEnvTypes.test) ? '.env.test' : '.env',
      cache: true,
    }),
    postgresModule,
  ],
  providers: [],
  exports: [],
})
export class CoreModule {}
