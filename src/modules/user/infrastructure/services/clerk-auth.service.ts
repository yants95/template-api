import { CLERK_SECRET_KEY } from '@/core/infrastructure/settings/envs';
import {
  AuthService,
  RegisterDTO,
} from '@/modules/user/domain/services/auth.service';

import { Clerk } from '@clerk/clerk-sdk-node';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClerkAuthProvider implements AuthService {
  public async register(register: RegisterDTO): Promise<unknown> {
    try {
      const newUser = await this.clerk.users.createUser({
        emailAddress: [register.email],
        password: register.password,
      });

      return newUser;
    } catch (error) {
      console.error(error);
    }
  }

  private get clerk() {
    return Clerk({ secretKey: CLERK_SECRET_KEY });
  }
}
