export class Guard {
  // eslint-disable-next-line complexity
  public static isEmpty(value: unknown): value is undefined | null {
    if (this.isNullOrUndefined(value)) {
      return true;
    }

    if (this.isString(value) || this.isArray(value)) {
      return value.length === 0;
    }

    if (this.isObject(value)) {
      return Object.keys(value).length === 0;
    }

    return false;
  }

  // eslint-disable-next-line complexity
  public static isBetween(
    value: number | string | unknown[],
    min: number,
    max: number,
  ): boolean {
    if (min > max)
      throw new Error(`Max ${max} should be greater than min ${min}.`);

    if (Guard.isEmpty(value)) {
      throw new Error(
        'Cannot check length of a value. Provided value is empty',
      );
    }

    const valueLength = this.isNumber(value) ? value : String(value).length;

    return valueLength >= min && valueLength <= max;
  }

  private static isNumber(value: unknown): value is number {
    return typeof value === 'number';
  }

  private static isNullOrUndefined(value: unknown): value is undefined | null {
    return value === null || value === undefined;
  }

  private static isString(value: unknown): value is string {
    return typeof value === 'string';
  }

  private static isArray(value: unknown): value is unknown[] {
    return Array.isArray(value);
  }

  private static isObject(value: unknown): value is object {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
  }
}
