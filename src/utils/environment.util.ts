import { NodeEnvTypes } from '@/core/infrastructure/settings/enum/node-env-types.enum';
import { ENVIRONMENT } from '@/core/infrastructure/settings/envs';

export const isEnvironment = (environmentType: NodeEnvTypes): boolean =>
  ENVIRONMENT === environmentType;

export const isStagingOrProd = (): boolean =>
  isEnvironment(NodeEnvTypes.staging) || isEnvironment(NodeEnvTypes.production);
