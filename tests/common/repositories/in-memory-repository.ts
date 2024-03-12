import { Entity } from '@/core/domain/entity';
import { Repository } from '@/core/domain/repository';

export abstract class InMemoryRepository<DomainModel extends Entity<unknown>>
  implements Repository<DomainModel>
{
  public constructor(private readonly models: DomainModel[] = []) {}

  async save(payload: DomainModel): Promise<void> {
    this.models.push(payload);
  }

  async delete(id: string): Promise<void> {
    this.models.splice(Number(id), 1);
  }

  async findOne(id: string): Promise<DomainModel | null> {
    const record = this.models.find(
      (model) => model.id.toString() === id.toString(),
    );

    return record ?? null;
  }

  async find(): Promise<DomainModel[]> {
    return this.models;
  }
}
