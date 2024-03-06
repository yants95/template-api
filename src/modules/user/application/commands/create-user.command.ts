import { AuthService } from '@/modules/user/domain/services/auth.service';
import { AuthServiceSymbol } from '@/modules/user/infrastructure/dependency-injection/user.di-tokens';

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CreateUserCommand {
  public constructor(
    @Inject(AuthServiceSymbol) private readonly authService: AuthService,
  ) {}

  public async execute(teste: any): Promise<unknown> {
    const user = await this.authService.register(teste);

    return user;
  }
}
