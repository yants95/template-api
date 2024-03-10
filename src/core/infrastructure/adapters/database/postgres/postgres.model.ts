import { BaseEntity, UpdateDateColumn, Column, PrimaryColumn } from 'typeorm';

export abstract class Model extends BaseEntity {
  @PrimaryColumn({ type: 'varchar' })
  id!: string;

  @Column({ type: 'timestamp', name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable: true })
  updatedAt!: Date | null;
}
