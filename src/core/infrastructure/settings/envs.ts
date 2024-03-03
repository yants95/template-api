import assert from 'node:assert';

import { NodeEnvTypes } from '@/core/infrastructure/settings/enum/node-env-types.enum';
import { EnvLoader } from '@/core/infrastructure/settings/env-loader';
import { Guard } from '@/libs/guard';

EnvLoader.load();

function validateEnumEnvironment<T extends object>(
  value: string,
  enumParameter: T,
): void {
  const enumAsArray = Object.values(enumParameter);
  const isValid = enumAsArray.includes(value);
  assert(
    isValid,
    `Invalid environment variable ${value}, does not belong to enum group. Valid values: ${enumAsArray.join(',')}`,
  );
}

export function getEnvOrThrow<T extends object>(
  envName: string,
  enumParameter?: T,
): string {
  const env = process.env[envName];
  assert(env, `Missing environment variable ${envName}`);

  if (!Guard.isEmpty(enumParameter)) {
    validateEnumEnvironment(env, enumParameter);
  }

  return env;
}

export function getEnvOrDefault<T extends object>(
  envName: string,
  defaultValue: string,
  enumParameter?: T,
): string {
  const env = process.env[envName] ?? defaultValue;

  if (!Guard.isEmpty(enumParameter)) {
    validateEnumEnvironment(env, enumParameter);
  }

  return env;
}

// App
export const APP_PORT = getEnvOrDefault('APP_PORT', '3003');
export const APP_HOST = getEnvOrDefault('APP_HOST', 'http://localhost');

// App types
export const ENVIRONMENT = getEnvOrDefault(
  'NODE_ENV',
  NodeEnvTypes.development,
  NodeEnvTypes,
) as NodeEnvTypes;

export const isStaging = ENVIRONMENT === NodeEnvTypes.staging;
export const isProduction = ENVIRONMENT === NodeEnvTypes.production;

export const isProdOrStaging = (): boolean => isProduction || isStaging;

// Database
export const DATABASE_URI = getEnvOrThrow('DATABASE_URI');
