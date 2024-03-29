export abstract class Repository<T> {
  abstract save(payload: T): Promise<void>;
  abstract delete(id: string): Promise<void>;
  abstract findOne(id: string): Promise<T | null>;
  abstract find(): Promise<T[]>;
}
