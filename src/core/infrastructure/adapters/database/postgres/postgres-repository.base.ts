import { Entity } from '@/core/domain/entity';
import { Mapper } from '@/core/domain/mapper';
import { Repository } from '@/core/domain/repository';
import { Model } from '@/core/infrastructure/adapters/database/postgres/postgres.model';

import { Repository as DbRepository, FindOptionsWhere } from 'typeorm';

export abstract class PostgresRepository<
  DomainModel extends Entity<unknown>,
  DbModel extends Model,
> implements Repository<DomainModel>
{
  constructor(
    protected readonly model: DbRepository<DbModel>,
    protected readonly mapper: Mapper<DomainModel, DbModel>,
  ) {}

  async save(model: DomainModel): Promise<void> {
    const record = this.mapper.toPersist(model);

    await this.model.save(record);
  }

  async delete(id: string): Promise<void> {
    await this.model.delete(id);
  }

  async find(): Promise<DomainModel[]> {
    const records = await this.model.find();

    return records.map(this.mapper.toDomain);
  }

  async findOne(id: string): Promise<DomainModel | null> {
    const record = await this.model.findOne({
      where: { id } as unknown as FindOptionsWhere<DbModel>,
    });

    if (!record) return null;

    return this.mapper.toDomain(record);
  }
}
