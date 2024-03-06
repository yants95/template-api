import { AuthServiceSymbol } from '@/modules/user/infrastructure/dependency-injection/user.di-tokens';
import { ClerkAuthProvider } from '@/modules/user/infrastructure/services/clerk-auth.service';

import { Provider } from '@nestjs/common';

export const ClerkServiceProvider: Provider = {
  provide: AuthServiceSymbol,
  useClass: ClerkAuthProvider,
};

export const userProviders: Provider[] = [ClerkServiceProvider];
