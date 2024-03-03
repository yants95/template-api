import { Entity } from '@/domain/entity';

export interface Mapper<DomainEntity extends Entity<unknown>, DbModel> {
  toPersistance(entity: DomainEntity): DbModel;
  toDomain(record: DbModel): DomainEntity;
}
