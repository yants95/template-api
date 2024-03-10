import { PostgresUserRepository } from '@/modules/user/infrastructure/database/postgres/postgres-user.repository';
import { UserMapper } from '@/modules/user/infrastructure/database/postgres/user.mapper';
import {
  AuthServiceSymbol,
  UserMapperSymbol,
  UserRepositorySymbol,
} from '@/modules/user/infrastructure/dependency-injection/user.di-tokens';
import { ClerkAuthProvider } from '@/modules/user/infrastructure/services/clerk-auth.service';

import { Provider } from '@nestjs/common';

export const ClerkServiceProvider: Provider = {
  provide: AuthServiceSymbol,
  useClass: ClerkAuthProvider,
};

export const UserRepositoryProvider: Provider = {
  provide: UserRepositorySymbol,
  useClass: PostgresUserRepository,
};

export const UserMapperProvider: Provider = {
  provide: UserMapperSymbol,
  useClass: UserMapper,
};

export const userProviders: Provider[] = [
  ClerkServiceProvider,
  UserRepositoryProvider,
  UserMapperProvider,
];
