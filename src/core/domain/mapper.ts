import { Entity } from '@/core/domain/entity';
import { Model } from '@/core/infrastructure/adapters/database/postgres/postgres.model';

export interface Mapper<
  DomainEntity extends Entity<unknown>,
  DbModel extends Model,
> {
  toPersist(entity: DomainEntity): DbModel;
  toDomain(record: DbModel): DomainEntity;
}
