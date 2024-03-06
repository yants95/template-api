export abstract class Repository<T> {
  abstract save(model: T): Promise<void>;
  abstract delete(id: string): Promise<void>;
  abstract findOne(id: string): Promise<T | null>;
  abstract find(): Promise<T[]>;
}
