import { CreateUserCommand } from '@/modules/user/application/commands/create-user.command';
import { CreateUserRequest } from '@/modules/user/infrastructure/controllers/create-user.request';

import { Body, Controller, Inject, Post } from '@nestjs/common';

@Controller()
export class CreateUserController {
  public constructor(
    @Inject(CreateUserCommand) private readonly command: CreateUserCommand,
  ) {}

  @Post('/users')
  public async execute(@Body() request: CreateUserRequest): Promise<unknown> {
    const result = await this.command.execute(request);

    return result;
  }
}
