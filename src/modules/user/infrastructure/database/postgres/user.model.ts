import { Model } from '@/core/infrastructure/adapters/database/postgres/postgres.model';

import { Column, Entity } from 'typeorm';

@Entity({ name: 'users' })
export class UserModel extends Model {
  @Column({ type: 'varchar' })
  public name!: string;

  @Column({ type: 'varchar' })
  public email!: string;
}
