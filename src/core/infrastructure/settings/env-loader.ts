import { NodeEnvTypes } from '@/core/infrastructure/settings/enum/node-env-types.enum';
import { ENVIRONMENT } from '@/core/infrastructure/settings/envs';

import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

export class EnvLoader {
  private static readonly envPath = [__dirname, '..', '..', '..', '..'];

  private static readonly envFileName = '.env';

  private static readonly testEnvFileName =
    EnvLoader.envFileName.concat('.test');

  public static load(): void {
    if (this.isEnvironment(NodeEnvTypes.staging, NodeEnvTypes.production))
      return;

    this.validate();
    const envPath = this.isEnvironment(NodeEnvTypes.test)
      ? path.join(...this.envPath, this.testEnvFileName)
      : path.join(...this.envPath, this.envFileName);

    dotenv.config({ path: envPath });
  }

  private static validate(): void {
    if (!this.isValidEnv()) {
      return this.throwMissingFileError(this.envFileName);
    }

    if (this.isValidTestEnv()) {
      return this.throwMissingFileError(this.testEnvFileName);
    }
  }

  private static isValidEnv(): boolean {
    return (
      !this.isEnvironment(NodeEnvTypes.test) &&
      this.isFileExistent(this.envFileName)
    );
  }

  private static isValidTestEnv(): boolean {
    return (
      this.isEnvironment(NodeEnvTypes.test) &&
      this.isFileExistent(this.testEnvFileName)
    );
  }

  private static throwMissingFileError(fileName: string): void {
    throw new Error(
      `The ${fileName} file is missing with the variables and their values`,
    );
  }

  private static isFileExistent(fileName: string): boolean {
    return fs.existsSync(path.join(...this.envPath, fileName));
  }

  private static isEnvironment(...environments: NodeEnvTypes[]): boolean {
    return environments.includes(ENVIRONMENT);
  }
}
