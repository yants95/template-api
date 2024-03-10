import { NodeEnvTypes } from '@/core/infrastructure/settings/enum/node-env-types.enum';
import { DATABASE_URI } from '@/core/infrastructure/settings/envs';
import { isStagingOrProd } from '@/utils/environment.util';

import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

const dir = process.env.NODE_ENV === NodeEnvTypes.development ? 'src' : 'dist';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: isStagingOrProd(),
      envFilePath: '.env',
      cache: false,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: DATABASE_URI,
      synchronize: false,
      entities: [
        `./${dir}/modules/**/infrastructure/database/postgres/*.model.{js,ts}`,
      ],
    }),
  ],
  providers: [],
  exports: [],
})
export class CoreModule {}
