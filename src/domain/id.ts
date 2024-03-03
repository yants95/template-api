export abstract class Id<T> {
  public abstract equals(id: T): boolean;

  public abstract toString(): string;
}
